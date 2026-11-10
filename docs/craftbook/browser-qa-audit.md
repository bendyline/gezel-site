# Browser QA Audit

Exercise a running app in a real browser, triage what breaks, and produce a report-only QA findings list with a health score — no code changes.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Plan observable coverage | Researcher | Confirm the target and turn user intent into bounded journeys, states, and evidence requirements. |
| 2 | Exercise the application | Developer | Run the planned journeys in a real browser and capture reproducible, redacted evidence. |
| 3 | Write the QA report | Developer | Triage observed defects, compute the health score, and provide owners with exact reproduction evidence. |
| 4 | Evaluate the deliverable | Reviewer | Independently grade the observable deliverable and route it to finish, repair, or user escalation. |
| 5 | Repair the deliverable | Developer | Fix only the concrete gaps from the latest independent review. |
| 6 | Finish | Developer | All deterministic and reviewer criteria passed. |
| 7 | Escalate unresolved concerns | Developer | The bounded repair loop ended without a defensible pass. |

Say something like "qa report only" or "just report bugs" or "test but dont fix" or "qa this" or "run a qa pass" or "test this in the browser" or "smoke test the app" or "click through the app" or "manual test the feature" or "test the ui" or "check the site" or "qa the app" in chat to start it.

Needs toolsets: `@playwright/mcp`.
