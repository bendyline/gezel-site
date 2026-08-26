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
`--hb-measure`); the file documents the hooks and carries commented
`@font-face` blocks for self-hosting PT Serif and Hanken Grotesk.

Every article also has a `watch.html` beside it — the same content as an
auto-playing captioned slideshow, rendered by the squisq player.

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

## Notes

- `.nojekyll` disables Jekyll processing, so files and folders starting with `_`
  are served normally.
- `package.json` and `serve.mjs` are preview-only and get uploaded with the
  site. They are inert as static files — the Pages workflow has no build step.
- To use a custom domain, add a `CNAME` file containing the domain (e.g.
  `gezel.com`) to the repo root and configure it under Settings → Pages.
