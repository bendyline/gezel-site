# Watch a Page or API and Alert

Build a watcher that polls a web page or API endpoint on a schedule, detects a meaningful change or threshold breach, and fires an alert (and only alerts on real changes, not noise). Scopes the watched target, the exact change/threshold condition, and the dedup/cooldown policy FIRST, then builds the poll-diff-notify loop with persisted state, then tests it against simulated change and no-change inputs so it neither misses a real change nor spams on every poll. Condition-and-cooldown-before-build is the wisdom that separates a useful monitor from an alert-fatigue generator.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the monitor | Planner | target, change condition, dedup + cooldown policy |
| 2 | Build the watcher | Developer | poll, extract, diff vs state, alert on real change |
| 3 | Test the watcher | Developer | assert it alerts on change, stays silent otherwise |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "watch a page for changes" or "alert me when this changes" or "monitor an API" or "notify on a price drop" or "uptime watcher" in chat to start it.
