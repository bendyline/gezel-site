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

## Notes

- `.nojekyll` disables Jekyll processing, so files and folders starting with `_`
  are served normally.
- `package.json` and `serve.mjs` are preview-only and get uploaded with the
  site. They are inert as static files — the Pages workflow has no build step.
- To use a custom domain, add a `CNAME` file containing the domain (e.g.
  `gezel.com`) to the repo root and configure it under Settings → Pages.
