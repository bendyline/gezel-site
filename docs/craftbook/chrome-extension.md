# Browser Extension

Build a Manifest V3 browser extension scaffold — a popup, a content script, and the manifest — that does one concrete thing on the current page (highlight, count, extract, or toggle). Scopes the single capability and the required permissions first, designs the popup UI, then builds a valid manifest.json plus popup and content-script files wired by messaging. Extensions fail at the manifest and the popup↔content messaging boundary, so the scope phase pins the exact MV3 permissions and message contract before any code, keeping a small model from producing a manifest the browser rejects.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope | Planner | the one capability + MV3 permissions + message contract |
| 2 | Popup UI design | Designer | popup layout, button, result display |
| 3 | Build | Developer | manifest.json + popup + content script |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "chrome extension" or "browser extension" or "build an extension" or "manifest v3 extension" or "firefox extension" or "browser plugin" in chat to start it.
