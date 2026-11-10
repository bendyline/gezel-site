(function () {
  if (/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)) return;
  var wrappers = document.querySelectorAll('[data-gezel-open]');
  Array.prototype.forEach.call(wrappers, function (wrapper) {
    var link = wrapper.querySelector('a');
    var note = wrapper.querySelector('span');
    if (!link || !note) return;
    wrapper.hidden = false;
    link.addEventListener('click', function () {
      var timer = setTimeout(function () {
        if (document.hasFocus() && document.visibilityState === 'visible') note.hidden = false;
      }, 2500);
      var left = function () { clearTimeout(timer); };
      window.addEventListener('blur', left, { once: true });
      document.addEventListener('visibilitychange', left, { once: true });
    });
  });
})();
