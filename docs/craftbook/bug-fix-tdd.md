# Reproduce-Then-Fix a Bug

Fix a bug the disciplined way, with proof at every step: a failing test that reproduces it (verified red by a real test run), the smallest change at the real defect site, a green suite afterwards, and an enforced independent review of the fix.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Reproduce with a failing test | Developer | Establish the failure on the real code, as a running test that fails for the right reason. |
| 2 | Locate the defect | Researcher | Name the defect site and the causal chain from it to the symptom. No source edits. |
| 3 | Make the smallest fix | Developer | Change the real defect site, minimally, keeping the new test as a regression guard. |
| 4 | Validate red-to-green | Developer | Re-run the original reproduction and the whole suite; record the real results. |
| 5 | Evaluate the deliverable | Reviewer | Independently grade the observable deliverable and route it to finish, repair, or user escalation. |
| 6 | Repair the deliverable | Developer | Fix only the concrete gaps from the latest independent review. |
| 7 | Finish | Developer | All deterministic and reviewer criteria passed. |
| 8 | Escalate unresolved concerns | Developer | The bounded repair loop ended without a defensible pass. |

Say something like "fix this bug" or "reproduce and fix" or "tdd bug fix" or "write a regression test" or "debug and fix" in chat to start it.
