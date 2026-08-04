# Landing Page Download Section — Structure Report

**File:** `index.html` (landing page root)

## Download section layout (lines 283–292)

```html
<section class="download" id="download">
  <h2>Download Gezel</h2>
  <p>Early preview — work in progress. Pick your platform, then grab the build.</p>
  <div class="tray" role="group" aria-label="Platform selection">
    <button class="tray-key" data-platform="macOS" aria-pressed="false">macOS</button>
    <button class="tray-key" data-platform="Windows" aria-pressed="false">Windows</button>
    <button class="tray-key" data-platform="Linux" aria-pressed="false">Linux</button>
  </div>
  <a class="download-btn" id="downloadBtn" href="https://github.com/bendyline/gezel/releases">Download Gezel</a>
</section>
```

## What exists today

| Element | Purpose |
|---|---|
| `<section class="download">` | Container for the whole download area |
| `<h2>` | "Download Gezel" heading |
| `<p>` | Descriptive subtext |
| `.tray` with three `.tray-key` buttons | Platform selector (macOS / Windows / Linux) — segmented control style |
| `.download-btn` (anchor, id=`downloadBtn`) | Single download link that updates based on platform selection |

## JavaScript behavior (lines 315–381)

The inline script already fetches the **latest GitHub release** from `api.github.com/repos/bendyline/gezel/releases/latest`, matches assets by platform regex, and updates the button `href` and text content to `"Download for {platform}"`. If the API call fails or no asset matches, it falls back to the releases page.

## What's missing (for the metadata request)

There is **no version label, file size, or build date** displayed anywhere in the section. The script *does* have access to that data from the existing GitHub API response:

- `data.tag_name` → version
- `data.published_at` → build/release date
- `asset.size` → file size (in bytes)

Adding metadata would mean:

1. Extracting those fields from the existing API response
2. Inserting a small metadata element (e.g., a `<span>` or `<p>`) between the `.tray` and `.download-btn`
3. Adding corresponding CSS rules to the `<style>` block (lines 11–252)