# gezel-site

The website for Gezel, published with GitHub Pages.

## How it works

This is a plain static site — no build step, no dependencies. Files in the repo
root are served as-is. Push to `main` and
[.github/workflows/pages.yml](.github/workflows/pages.yml) uploads the repo and
deploys it.

## One-time setup

In the repo on GitHub: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
After that, every push to `main` publishes automatically.

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
