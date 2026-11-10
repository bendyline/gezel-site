# Favicon & App-Icon Set

Generate the complete favicon and app-icon set a modern site needs — the multi-size favicon, Apple touch icon, Android/maskable icons, and the web app manifest plus the exact HTML link/meta tags — from a single source mark, ensuring the icon stays legible at 16px and the maskable variant survives platform cropping. Lock FIRST the source mark, the exact size matrix, and the safe-area/padding rules (maskable icons need extra padding or platforms clip them) because favicon sets fail when the icon is illegible tiny or gets cropped on Android; then generate every size and emit the manifest + install snippet. Covers favicons, app icons, PWA icons, touch icons, maskable icons, and the web app manifest.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the icon set | Planner | lock source mark, size matrix, and maskable safe-area |
| 2 | Generate the icons | Image Generator | render every size, including a safe-area maskable |
| 3 | Manifest & install snippet | Developer | emit manifest.json and the HTML head snippet |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "generate a favicon set" or "make app icons" or "pwa icons and manifest" or "apple touch icon" or "favicon from my logo" in chat to start it.
