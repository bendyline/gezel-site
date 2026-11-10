# Notification Router

Build an event-to-channel notification router: a small module that takes incoming events and routes each to the right destination (Slack channel, email, PagerDuty, webhook) based on type, severity, and quiet-hours rules — with dedupe, throttling, and a fallback channel. Scopes the routing matrix and policy FIRST (event taxonomy, channel map, severity→destination rules, dedupe key, rate limits, fallback), then a developer implements the router module to that matrix, then writes tests covering each routing branch. Scoping the matrix before coding is what guarantees every event type has a defined destination and that critical events can never be silently dropped. Use for notification routing, alert fan-out, event dispatch, webhook routing, and on-call/Slack notification systems.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the router | Planner | lock the routing matrix, dedupe, throttle, and fallback |
| 2 | Build the router | Developer | implement the router module to the matrix |
| 3 | Test the router | Developer | cover every routing branch with assertions |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "notification router" or "route events to channels" or "alert fan-out" or "event dispatch" or "send notifications to slack" in chat to start it.
