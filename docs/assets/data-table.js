(function () {
  'use strict';

  var ATTR = "data-hb-data-table";
  var FOLLOW = "data-hb-data-table-follow";
  var SCORECARD_ROOT = "data-hb-scorecard";
  var SCORECARD_CONTROLS = "data-hb-scorecard-controls";
  var VIEW_EVENT = "hb-scorecard-view";
  var TABLE_EVENT = "hb-scorecard-table";
  var HINT = 'Type to match text anywhere. Start with > < >= or <= to compare numbers, = or != for an exact value (alone: empty cells), !~ to leave a word out.';

  var OPERATOR = /^(>=|<=|!=|!~|\^~|\$~|>|<|=|~)\s*([\s\S]*)$/;

  function numeric(text) {
    var value = String(text).trim();
    return /^-?(?:\d+\.?\d*|\.\d+)$/.test(value) ? parseFloat(value) : null;
  }

  function parseFilter(text) {
    var raw = String(text || '').trim();
    if (!raw) return null;
    var match = OPERATOR.exec(raw);
    var value = (match ? match[2] : raw).trim();
    return { op: match ? match[1] : '~', value: value.toLowerCase(), num: numeric(value) };
  }

  function cellMatches(cell, filter) {
    var text = String(cell).trim().toLowerCase();
    var num = numeric(text);
    var value = filter.value;
    var both = num !== null && filter.num !== null;
    switch (filter.op) {
      case '>': return both && num > filter.num;
      case '<': return both && num < filter.num;
      case '>=': return both && num >= filter.num;
      case '<=': return both && num <= filter.num;
      case '=': return value === '' ? text === '' : both ? num === filter.num : text === value;
      case '!=': return value === '' ? text !== '' : !(both ? num === filter.num : text === value);
      case '!~': return text.indexOf(value) === -1;
      case '^~': return text.slice(0, value.length) === value;
      case '$~': return value === '' || text.slice(-value.length) === value;
      default: return text.indexOf(value) !== -1;
    }
  }

  function rowMatches(cells, filters) {
    for (var i = 0; i < filters.length; i++) {
      if (filters[i] && !cellMatches(cells[i] === undefined ? '' : cells[i], filters[i])) return false;
    }
    return true;
  }

  /* rows: [{ cells, index }]; dir: 1 ascending, -1 descending. */
  function sortRows(rows, col, dir) {
    return rows.slice().sort(function (a, b) {
      var x = String(a.cells[col] === undefined ? '' : a.cells[col]).trim();
      var y = String(b.cells[col] === undefined ? '' : b.cells[col]).trim();
      if (x === '' || y === '') {
        return x === y ? a.index - b.index : x === '' ? 1 : -1;
      }
      var nx = numeric(x);
      var ny = numeric(y);
      var order = nx !== null && ny !== null
        ? nx - ny
        : x.localeCompare(y, undefined, { numeric: true, sensitivity: 'base' });
      return dir * order || a.index - b.index;
    });
  }

  /* A following table's section moves under its scorecard's pickers. */
  function place(host) {
    var section = host.closest ? host.closest('[' + FOLLOW + ']') : null;
    var root = section ? document.querySelector('[' + SCORECARD_ROOT + ']') : null;
    var controls = root ? root.querySelector('[' + SCORECARD_CONTROLS + ']') : null;
    if (!controls) return null;
    controls.parentNode.insertBefore(section, controls.nextSibling);
    return root;
  }

  function whenTable(stage, done) {
    var found = stage.querySelector('table');
    if (found) return done(found);
    var finished = false;
    function finish(table) {
      if (finished) return;
      finished = true;
      observer.disconnect();
      done(table);
    }
    var observer = new MutationObserver(function () {
      var table = stage.querySelector('table');
      if (table) finish(table);
    });
    observer.observe(stage, { childList: true, subtree: true });
    setTimeout(function () {
      finish(stage.querySelector('table'));
    }, 10000);
  }

  function setup(host) {
    var json = host.querySelector('script[type="application/json"]');
    if (!json || host.getAttribute(ATTR + '-ready') || typeof SquisqPlayer === 'undefined') return;
    host.setAttribute(ATTR + '-ready', '1');
    var payload = JSON.parse(json.textContent);
    var root = place(host);
    var stage = document.createElement('div');
    stage.className = 'hb-data-table-stage';
    host.appendChild(stage);
    SquisqPlayer.mount(stage, payload.doc, {
      mode: 'static',
      autoPlay: false,
      showCodeCopyButton: false
    });
    whenTable(stage, function (table) {
      if (!table) {
        // Never drawn in time: let whatever the player shows stand.
        stage.className = '';
        return;
      }
      var owned = table.cloneNode(true);
      SquisqPlayer.unmount(stage);
      host.removeChild(stage);
      enhance(host, owned, payload, root);
    });
  }

  function enhance(host, table, payload, root) {
    var body = table.tBodies[0];
    var heads = table.tHead ? table.tHead.rows[0].cells : [];
    var facets = payload.facets || null;
    var groups = payload.groups || null;
    var rows = [];
    for (var r = 0; body && r < body.rows.length; r++) {
      var tr = body.rows[r];
      var cells = [];
      for (var c = 0; c < tr.cells.length; c++) cells.push(tr.cells[c].textContent);
      rows.push({
        el: tr,
        cells: cells,
        index: r,
        facets: facets ? facets[r] : null,
        group: groups ? groups[r] : null
      });
    }
    var headings = {};
    var state = { col: -1, dir: 1, filters: [], view: root ? root.hbScorecardView || null : null };

    var bar = document.createElement('div');
    bar.className = 'hb-data-table-bar';
    var status = document.createElement('p');
    status.className = 'hb-data-table-status';
    status.setAttribute('role', 'status');
    var clear = document.createElement('button');
    clear.type = 'button';
    clear.className = 'hb-data-table-clear';
    clear.textContent = 'Clear column filters';
    bar.appendChild(status);
    bar.appendChild(clear);
    var scroll = document.createElement('div');
    scroll.className = 'hb-data-table-scroll';
    scroll.appendChild(table);
    host.appendChild(bar);
    host.appendChild(scroll);

    var inputs = [];
    for (var h = 0; h < heads.length; h++) header(h, heads[h]);

    function header(col, th) {
      var name = th.textContent;
      th.textContent = '';
      var sort = document.createElement('button');
      sort.type = 'button';
      sort.className = 'hb-data-table-sort';
      sort.textContent = name;
      sort.title = 'Sort by ' + name;
      var input = document.createElement('input');
      input.type = 'search';
      input.className = 'hb-data-table-filter';
      input.placeholder = 'Filter';
      input.title = HINT;
      input.setAttribute('aria-label', 'Filter ' + name);
      input.setAttribute('autocomplete', 'off');
      input.spellcheck = false;
      th.appendChild(sort);
      th.appendChild(input);
      inputs.push(input);
      sort.addEventListener('click', function () {
        if (state.col !== col) {
          state.col = col;
          state.dir = 1;
        } else if (state.dir === 1) {
          state.dir = -1;
        } else {
          state.col = -1;
        }
        render();
      });
      input.addEventListener('input', function () {
        state.filters[col] = parseFilter(input.value);
        render();
      });
    }

    clear.addEventListener('click', function () {
      for (var i = 0; i < inputs.length; i++) inputs[i].value = '';
      state.filters = [];
      render();
    });
    if (root) {
      root.addEventListener(VIEW_EVENT, function (event) {
        state.view = event.detail;
        render();
      });
    }

    function inView(row) {
      var view = state.view;
      var f = row.facets;
      if (!view || !f) return true;
      return (
        view.rounds.indexOf(f[0]) !== -1 &&
        (!view.hardware || f[1] === view.hardware) &&
        (!view.model || f[2] === view.model) &&
        (!view.modelClass || f[3] === view.modelClass)
      );
    }

    /* One heading row per group, made the first time the group shows. */
    function heading(group) {
      if (!headings[group]) {
        var tr = document.createElement('tr');
        tr.className = 'hb-data-table-group';
        var th = document.createElement('th');
        th.scope = 'rowgroup';
        th.colSpan = heads.length || 1;
        var label = document.createElement('span');
        label.className = 'hb-data-table-group-label';
        th.appendChild(label);
        tr.appendChild(th);
        headings[group] = { el: tr, label: label };
      }
      return headings[group];
    }

    function render() {
      var order = state.col < 0 ? rows : sortRows(rows, state.col, state.dir);
      var grouped = !!groups && state.col < 0;
      var counts = {};
      var picked = 0;
      var shown = 0;
      for (var i = 0; i < order.length; i++) {
        var row = order[i];
        row.keep = inView(row);
        if (row.keep) picked++;
        row.keep = row.keep && rowMatches(row.cells, state.filters);
        if (row.keep) {
          shown++;
          counts[row.group] = (counts[row.group] || 0) + 1;
        }
      }
      for (var key in headings) {
        if (headings[key].el.parentNode) body.removeChild(headings[key].el);
      }
      var current = null;
      for (var j = 0; j < order.length; j++) {
        var next = order[j];
        if (grouped && next.keep && next.group !== current) {
          current = next.group;
          var head = heading(current);
          head.label.textContent = current + ' \u00b7 ' + counts[current] +
            (counts[current] === 1 ? ' result' : ' results');
          body.appendChild(head.el);
        }
        next.el.hidden = !next.keep;
        body.appendChild(next.el);
      }
      for (var h = 0; h < heads.length; h++) {
        if (h === state.col) heads[h].setAttribute('aria-sort', state.dir === 1 ? 'ascending' : 'descending');
        else heads[h].removeAttribute('aria-sort');
      }
      var filtering = false;
      for (var f = 0; f < state.filters.length; f++) if (state.filters[f]) filtering = true;
      clear.hidden = !filtering;
      status.textContent = shown === 0
        ? 'No results match these filters.'
        : 'Showing ' + shown + ' of ' + picked + (picked === 1 ? ' result' : ' results') +
          (picked < rows.length ? ' in the rounds picked above (' + rows.length + ' in all).' : '.');

      // Tell the scorecard which rounds the visible rows belong to, so its
      // round list names exactly the rounds behind what is on screen.
      if (root) {
        var seen = {};
        var reached = [];
        for (var v = 0; v < rows.length; v++) {
          var round = rows[v].facets ? rows[v].facets[0] : rows[v].group;
          if (rows[v].keep && round && !seen[round]) {
            seen[round] = true;
            reached.push(round);
          }
        }
        root.dispatchEvent(new CustomEvent(TABLE_EVENT, {
          detail: { rounds: reached, filtering: filtering }
        }));
      }
    }

    render();
  }

  function start() {
    var hosts = document.querySelectorAll('[' + ATTR + ']');
    for (var i = 0; i < hosts.length; i++) setup(hosts[i]);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
