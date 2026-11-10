# Image Palette Extraction

Extract a usable color palette from an image or a set of images — the dominant and accent colors as hex/RGB with proportions — and emit it as design tokens (CSS variables / JSON) plus a swatch preview, so a brand or theme can be built from a reference photo. Lock FIRST how many colors, the color space and clustering method, and accessibility constraints (e.g. text/background pairs must meet a contrast ratio) because a raw dominant-color dump is rarely directly usable as a theme; then extract, name, and present the palette. Covers color extraction, palette generation, design tokens, theme-from-image, dominant colors, and brand color sampling.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the palette | Planner | lock count, method, token format, and contrast rules |
| 2 | Build the palette | Developer | extract, name, token-ize, and preview the palette |
| 3 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 4 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "extract colors from an image" or "make a palette from a photo" or "get dominant colors" or "generate a color theme from an image" or "image to design tokens" in chat to start it.
