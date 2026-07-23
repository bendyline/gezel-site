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

Any static file server works:

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

## Notes

- `.nojekyll` disables Jekyll processing, so files and folders starting with `_`
  are served normally.
- To use a custom domain, add a `CNAME` file containing the domain (e.g.
  `gezel.com`) to the repo root and configure it under Settings → Pages.
