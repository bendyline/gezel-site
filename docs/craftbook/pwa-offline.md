# Installable Offline PWA

Build an installable Progressive Web App that works offline — an HTML app shell, a web app manifest, and a service worker that caches the shell so it loads with no network. Scopes the app's one job and the offline strategy first, designs the app shell, then implements the manifest, registration, and a cache-first service worker. PWAs fail at installability and the service-worker caching contract, so the scope phase locks the cached asset list and the offline behavior before coding, keeping a small model from shipping a manifest that fails the install criteria or a service worker that never caches.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope | Planner | the app's job + offline strategy + cached assets |
| 2 | App shell design | Designer | shell layout, theme colors, offline indicator |
| 3 | Build | Developer | index.html + manifest + service worker |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "pwa" or "progressive web app" or "offline web app" or "installable app" or "service worker app" or "add to home screen app" in chat to start it.
