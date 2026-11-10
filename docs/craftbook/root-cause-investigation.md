# Root-Cause Investigation

Debug systematically: reproduce the failure and find the true root cause before changing any code, then fix and verify.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Reproduce and bound the failure | Developer | Establish a stable failing case, expected behavior, environment, and blast radius. |
| 2 | Prove the root cause | Researcher | Test competing hypotheses and identify the causal mechanism before modifying code. |
| 3 | Implement the smallest fix and verify it | Developer | Correct the proven mechanism and demonstrate both regression coverage and non-regression. |
| 4 | Evaluate the deliverable | Reviewer | Independently grade the observable deliverable and route it to finish, repair, or user escalation. |
| 5 | Repair the deliverable | Developer | Fix only the concrete gaps from the latest independent review. |
| 6 | Finish | Developer | All deterministic and reviewer criteria passed. |
| 7 | Escalate unresolved concerns | Developer | The bounded repair loop ended without a defensible pass. |

Say something like "debug this" or "fix this bug" or "why is this broken" or "root cause analysis" or "investigate this error" or "investigate this bug" or "root cause this" or "why is this failing" or "figure out why it breaks" or "diagnose this incident" or "investigate this" or "find the bug" or "root cause" in chat to start it.
