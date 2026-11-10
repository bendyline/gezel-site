# Apply Review Findings

Take an existing review's findings and close them for real: triage each one against the current code, fix the real ones at their actual sites with the smallest correct change, verify per finding, and account for every finding end to end under an enforced review.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Triage the findings against current code | Reviewer | Read every finding, judge it against the code as it stands now, and sort real work from ghosts. |
| 2 | Fix cluster by cluster at the real sites | Developer | The smallest correct change per finding, at the actual cited site, with a per-finding disposition ledger. |
| 3 | Verify each finding the way its report suggested | Developer | Re-check every addressed finding at its site, run what is runnable, and restate the deferrals. |
| 4 | Evaluate the deliverable | Developer | Independently grade the observable deliverable and route it to finish, repair, or user escalation. |
| 5 | Repair the deliverable | Developer | Fix only the concrete gaps from the latest independent review. |
| 6 | Finish | Developer | All deterministic and reviewer criteria passed. |
| 7 | Escalate unresolved concerns | Developer | The bounded repair loop ended without a defensible pass. |

Say something like "apply the review findings" or "fix the findings" or "address the review" or "fix these issues" in chat to start it.
