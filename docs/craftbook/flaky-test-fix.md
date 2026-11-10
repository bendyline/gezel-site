# Fix a Flaky Test

Hunt down an intermittently failing test and make it deterministic: reproduce the flake with real recorded runs, isolate the nondeterminism mechanism, remove it at the real site — never by deleting, skipping, or retrying the test — and prove stability with three consecutive green runs.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Reproduce the flake with recorded runs | Developer | Run the suite repeatedly until the intermittent failure is a recorded fact, and characterize when it appears. |
| 2 | Isolate the mechanism | Researcher | Pin the nondeterminism with a targeted experiment and name the defect site. No fixes yet. |
| 3 | Remove the nondeterminism | Developer | Make the outcome deterministic at the real site — isolation, cleanup, awaits, seeding — never masking. |
| 4 | Prove stability | Developer | Three consecutive green suite runs, read from real receipts — one green run means nothing for a flake. |
| 5 | Evaluate the deliverable | Reviewer | Independently grade the observable deliverable and route it to finish, repair, or user escalation. |
| 6 | Repair the deliverable | Developer | Fix only the concrete gaps from the latest independent review. |
| 7 | Finish | Developer | All deterministic and reviewer criteria passed. |
| 8 | Escalate unresolved concerns | Developer | The bounded repair loop ended without a defensible pass. |

Say something like "fix this flaky test" or "deflake" or "test fails intermittently" or "fails in CI but passes locally" or "intermittent test failure" in chat to start it.
