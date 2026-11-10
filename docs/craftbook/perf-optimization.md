# Targeted Performance Fix

Make a measured, targeted performance improvement: baseline numbers recorded with their method before anything changes, one bottleneck fixed in reversible stages with the suite green, the same measurement re-run to prove the gain, and an enforced independent review.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Measure the baseline | Developer | Record the current numbers with a repeatable method, confirm the suite green, and pick the one bottleneck to attack. |
| 2 | Plan the fix | Developer | Set a numeric target for the one bottleneck and break the fix into reversible stages. No source edits. |
| 3 | Fix the bottleneck | Developer | Execute the planned stages at the real sites, keeping the suite green and the measurement honest. |
| 4 | Re-measure and verify | Developer | Re-measure with exactly the baseline's method, quote both numbers side by side, and record the suite green. |
| 5 | Evaluate the deliverable | Reviewer | Independently grade the observable deliverable and route it to finish, repair, or user escalation. |
| 6 | Repair the deliverable | Developer | Fix only the concrete gaps from the latest independent review. |
| 7 | Finish | Developer | All deterministic and reviewer criteria passed. |
| 8 | Escalate unresolved concerns | Developer | The bounded repair loop ended without a defensible pass. |

Say something like "optimize performance" or "make this faster" or "fix a slow function" or "profile and optimize" or "reduce latency" or "speed up the test suite" or "fix an n+1 pattern" in chat to start it.
