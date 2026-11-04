# gezel-site

The website for Gezel, published with GitHub Pages.

## How it works

This is a plain static site — no build step, no dependencies. Files in the repo
root are served as-is by
[.github/workflows/pages.yml](.github/workflows/pages.yml).

## Publishing

Deploys are **manual** — pushing to `main` does not publish. To publish:

**Actions → Deploy to GitHub Pages → Run workflow**, and pick the branch to
deploy from.

Or from the CLI:

```sh
gh workflow run pages.yml
```

## One-time setup

In the repo on GitHub: **Settings → Pages → Build and deployment → Source → GitHub Actions**.

## Local preview

```sh
npm run preview        # landing page, opens a browser
npm run preview:docs   # jumps straight to the Handboek at /docs/
npm start              # serve only, no browser
```

`serve.mjs` is a dependency-free Node static server rooted at the repo, so paths
resolve the way GitHub Pages resolves them. Override the port with `PORT=9000`
or a positional argument. Any other static server works too — e.g.
`python3 -m http.server 8000`.

## Platform page (`platform/`)

[`platform/index.html`](platform/index.html) is the developer page at
`/platform/`: the gezel command line, `gezel-app-sdk`, and AI Apps, each with a
sample and the details behind it. It took over the landing page's old "Use
Gezel as a platform" row, and the masthead links it beside Docs.

It is hand-written, not generated, and self-contained like `index.html`. Its
tokens, fonts, masthead, card, band and footer rules are copied from
`index.html`, so retune them in both. Its claims follow the Handboek's
developer articles (`cli-reference`, `building-connected-apps-with-gezel-app-sdk`,
`building-ai-apps-inside-gezel`, `npm-packages`, `security-model`). Check it
when those change, and check the samples against `gezel --help`.

## Documentation (`docs/`)

`docs/` is **generated** — it is the Gezel Handboek rendered to static HTML, not
hand-edited. Regenerate it from a [gezel](https://github.com/bendyline/gezel)
checkout beside this one:

```sh
cd ../gezel && pnpm docs:site
```

That builds the CLI and runs `gezel handboek export --out ../gezel-site/docs
--css ../handboek.css`.

**`docs/` is wiped on every run** so articles deleted upstream don't linger on
the published site. A `.handboek-export.json` marker records that the directory
is generator-owned. Do not keep hand-authored files in there — they will not
survive the next regeneration.

### Styling

Each generated page links two stylesheets, in order:

1. `docs/assets/handboek.css` — the baseline shipped by the export. Implements
   the Gezel design guidelines (parchment canvas, warm ink, sage masthead,
   terracotta accent, mostly-square corners) and is regenerated each run.
2. [`handboek.css`](handboek.css) — this repo's override layer. Linked second,
   so it wins. It lives at the site root rather than in `docs/` precisely so
   regeneration cannot wipe it.

Restyle the Handboek by editing the root `handboek.css`, not the generated
baseline. Most adjustments are token overrides (`--hb-canvas`, `--hb-accent`,
`--hb-measure`); the file documents the hooks and loads the brand fonts.

Every article also has a `watch.html` beside it — the same content as an
auto-playing captioned slideshow, rendered by the squisq player.

### All scorecard results (`docs/assets/scorecards/all-results.csv`)

Every model scorecard result as one CSV, a row per round × task set × model,
led by `run_id` with each round's rows together: pass rate, judge score,
decode and prefill speed, and the device and build behind each. It is plain
ASCII so Excel opens it without mangling separators. Like the rest of `docs/`
it is generated: gezel commits it at
`docs/handboek/assets/scorecards/all-results.csv` and refreshes it whenever
results are added (`pnpm scorecard:barrel` runs `pnpm scorecard:csv`; CI fails
if it falls behind).

The [model scorecard](docs/model-scorecard/index.html) page shows it under the
scorecard's pickers as "Every result in one table". The squisq player draws
the table once and `assets/data-table.js` takes it over: grouped by round,
sortable by any column, filterable per column, and narrowed by the pickers.

Close the CSV in Excel before regenerating the docs: Excel locks open files,
and the export cannot clear `docs/` around a locked one. If an export stops
partway, rerun it with `--force` (`node scripts/export-handboek-site.mjs
--force` in gezel), since the half-cleared folder has lost the marker that
lets the export wipe it.

### Catalog counts

The export also writes `docs/catalog-counts.json`: how many craftbooks,
models, characters, project types (and browser demos) and connectors the docs
publish. The landing page reads it to fill in the numbers in "Ready-made for
your crew" and "Why Gezel", so they follow the catalog instead of being edited
by hand. The numbers written into `index.html` are the fallback if the file is
missing; refresh them when you notice they lag.

## Fonts (`assets/fonts/`)

PT Serif and Hanken Grotesk are served from this site, for both the landing
page and the Handboek, so neither makes a request to a font CDN. They are the
same files the Gezel app ships (`packages/ui/src/assets/fonts/` in gezel),
under the SIL Open Font License; the license texts sit beside them and
[`NOTICE.md`](NOTICE.md) lists them. Hanken Grotesk is one variable file
covering every weight.

## Apps library (`apps/`)

`apps/` is gezel.com/apps, the library of Gezel apps. It is **generated** by
the same `pnpm docs:site` run (`gezel handboek export --apps-out`) from the
catalog the docs read: an index of every project type, filterable by
category, and one page per app with its page running on sample data, a
scripted companion conversation beside it, and what is inside (crew,
craftbooks, actions, files). Each demo lives at `apps/<id>/demo/`, sharing the
content-hashed bootstrap in `apps/_gezel-demo/`; `apps/<id>/logo.webp` is the
app's catalog mark.

Like `docs/`, it is wiped on every run and carries its own marker,
`.apps-export.json`. Never hand-edit it. Its styles (`apps/apps.css`) copy
the landing page's tokens, masthead and footer, so retune them in gezel's
`packages/cli/src/apps-site.ts` alongside `index.html`. The demos follow the
catalog the export reads: run with `GEZEL_GILDE_DATA_DIR` pointing at a gilde
checkout to preview apps that are not released yet.

## Social preview cards (`og/`)

`og/` holds one 1200×630 Open Graph card per documentation page, plus a
`manifest.json`. Both are **generated** by the same `pnpm docs:site` run, and
every page under `docs/` points at its card with `og:image`. Before this
existed, all ~355 doc pages unfurled as bare text when shared; the root
[`og-image.png`](og-image.png) remains the landing page's card and the fallback
for anything without one of its own.

Like `handboek.css` and `releases.json` it lives at the site root rather than in
`docs/` — but here that placement is load-bearing rather than merely convenient.
**The card set is its own cache.** `manifest.json` records the text each card
was rendered from, and a card is re-rendered only when that text changes. A card
costs about a second of headless Chromium, so a cold pass is minutes while an
ordinary docs publish is seconds. Putting `og/` inside the wiped `docs/`
directory would mean re-rendering all of them every single time.

Cards for deleted articles are swept automatically. Skip the whole pass with
`--no-og` upstream. Rendering needs the managed Chromium the desktop app
downloads on first launch; on a machine that has never run it, the export says
so and skips the cards rather than failing the publish.

Headlines come from `docs/handboek/og-headlines.json` in the gezel repo — a
committed lockfile, so a docs publish never needs a model provider to be
reachable. Refresh it there with `pnpm docs:og-headlines`.

## Downloads (`releases.json`)

`releases.json` at the repo root is **generated** too, by the same
`pnpm docs:site` run. It lists the latest published desktop release and its
installers, and the download section of [index.html](index.html) reads it with a
single same-origin request.

It replaced a walk over the GitHub releases API from the visitor's browser. That
walk had to page past ~90 npm-package releases sharing the `bendyline/gezel`
repository before it reached the desktop build — several round trips before the
download button went live, and nothing at all once a shared IP exhausted the
anonymous rate limit.

Which release counts is decided upstream by
`scripts/latest-app-release.mjs`, using the same rule as the desktop updater:
the greatest **stable** tag matching `v<semver>` exactly. Draft releases,
`native-v*` engine releases, and npm-package releases can never appear.

The listing also carries `notesPath` — the Handboek "What's new" article for
that exact release (`docs/whats-new/<major>.<minor>/`), which is what the
**Release notes** link in the download section points at. The generator writes
it only after checking the page exists on disk, because not every build gets its
own article; when it doesn't, the field is `null` and the link falls back to the
what's-new index. That check is why a full `pnpm docs:site` renders the docs
first and refreshes the listing second.

Refresh it without regenerating the docs:

```sh
cd ../gezel && pnpm docs:releases
```

Like `handboek.css`, it lives at the site root rather than in `docs/` so
regenerating the Handboek cannot wipe it — a docs publish on a day GitHub is
unreachable keeps the previous listing rather than leaving the page with no
downloads. If the file is missing entirely, the button still works; it just
links the releases page instead of an installer.

## Landing-page artwork (`assets/marks/`)

The tiles on [index.html](index.html) use the same cut-paper marks as the app:
a transparent subject, with the colored paper behind it painted by CSS from
the image's `data-ground` attribute. The colors are copied from the app's
`--gezel-ground-*` tokens in gezel's `packages/ui/src/styles/foundation.css`,
so retune them there first.

Most files are named after a craftbook and copied byte for byte from the
pinned `@bendyline/gilde` release (0.3.1). They live here, not under `docs/`,
so regenerating the Handboek cannot change the landing page. Use the
craftbook's own ground (`catalogGroundFor` in gezel core) when adding one.

The `integrations-*.webp` and `platform-*.webp` marks are not catalog items.
They were drawn for the landing page's "Bring Gezel to your apps" and "Use
Gezel as a platform" rows (the platform marks now live on
[`platform/index.html`](platform/index.html)) with gilde's `workshop-mark-cutout-v3` sheet prompt
(`docs/catalog-artwork.md` in gilde), through the Codex CLI's image tool, and
cut out with the steps that document gives. Check a new subject against every
gilde `art.json` first: jigsaw pieces, a plug and socket, a toy brick, a
typewriter, a rubber stamp and binders were all taken.

| File | Subject | Ground |
| --- | --- | --- |
| `integrations-coding-tools.webp` | two meshing gears, one cream and one dull brass | teal |
| `integrations-ai-tools.webp` | a cream canvas tool belt with a pencil, a brass wrench and a folding ruler in its pockets | plum |
| `integrations-office.webp` | a cream desk stapler, slightly open | rose |
| `platform-cli.webp` | a short row of five cream dominoes toppling one into the next | forest |
| `platform-app-sdk.webp` | a compact cream motor block with a large brass flywheel and a charcoal drive belt | slate |
| `platform-ai-apps.webp` | a dovetail joint, one board cream and one sage | terracotta |
| `platform-scripts.webp` | a small picket garden gate standing slightly ajar, with a brass latch | indigo |
| `platform-knowledge.webp` | a brass hurricane lantern with a clear glass chimney and a small warm flame | teal |
| `platform-mcp.webp` | a wooden pegboard panel with a hammer, an open-end wrench and a screwdriver hanging on brass pegs | plum |
| `platform-endpoints.webp` | a classic candlestick telephone with its earpiece resting on the hook | rose |
| `platform-client.webp` | a wooden ship's steering wheel with a brass hub | slate |
| `platform-service.webp` | a woven straw beehive skep with a small arched entrance and two tiny bees beside it | forest |

The last six are the "More building blocks" cards on the platform page. They
came from one eight-subject sheet (the other two, a speaking tube and a ship in
a bottle, were not used: the tube read as a megaphone, which gilde already has).
Image 1 was `wikipedia-astronomy`'s mark and Image 2 `data-dictionary`'s on its
slate ground, as the prompt expects. Gilde has no committed cutout script, so
its four documented steps were applied with a one-off script: the alpha remap,
splitting into cells, an 88% fill, and the baked shadow, encoded at WebP q82 /
m6 / alpha 90.

The video poster (`assets/video-poster.webp`) and the three "How it works"
pictures (`assets/how/`) are collages of real screenshots from one run on a
local model, made for the "Gezel Overview" video: a fresh install's Meester,
the Lisbon trip request underway, and the trip board it produced. The step
pictures are transparent around their frames, so the page's `--surface` color
shows behind them in light and dark mode.

## Notes

- `.nojekyll` disables Jekyll processing, so files and folders starting with `_`
  are served normally.
- `package.json` and `serve.mjs` are preview-only and get uploaded with the
  site. They are inert as static files — the Pages workflow has no build step.
- To use a custom domain, add a `CNAME` file containing the domain (e.g.
  `gezel.com`) to the repo root and configure it under Settings → Pages.

Third-party components and their licenses are listed in
[`NOTICE.md`](NOTICE.md).
