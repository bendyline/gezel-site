# Upgrade a Dependency

Upgrade dependencies in reviewable stages with proof at every step: a green suite before any bump, smallest-risk-first ordering, call-site adaptations at their real locations, a real suite run between stages, and an honest revert for anything that cannot go green.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Survey the dependency state | Developer | Read the real dependency state and each candidate's locally-readable breaking-change surface, record the green baseline, and stage the work smallest-risk-first. |
| 2 | Execute the stages | Developer | Apply each stage at its real location, adapt the call sites it breaks, and run the suite between stages; revert and record any stage that cannot go green. |
| 3 | Verify and record the rollback | Developer | Re-run the whole suite on the final tree, spot-check the adaptations, and record a concrete rollback path. |
| 4 | Evaluate the deliverable | Reviewer | Independently grade the observable deliverable and route it to finish, repair, or user escalation. |
| 5 | Repair the deliverable | Developer | Fix only the concrete gaps from the latest independent review. |
| 6 | Finish | Developer | All deterministic and reviewer criteria passed. |
| 7 | Escalate unresolved concerns | Developer | The bounded repair loop ended without a defensible pass. |

Say something like "upgrade the dependencies" or "bump the deps" or "update this package" or "dependency upgrade" in chat to start it.
