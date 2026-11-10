# Schema / Type Migration

Migrate a schema or data shape with the expand/contract discipline: reads accept both shapes while the data moves, the old shape is dropped only after every record is transformed, and real suite runs between stages prove no record was ever stranded.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Plan the expand/contract migration | Planner | Document the current and target shapes from the real files and stage the work as expand, migrate, contract - with per-stage data safety and rollback. |
| 2 | Execute the stages | Developer | Apply expand, migrate, contract at the real sites with the suite run between stages; reads accept both shapes until the plan retires the dual-read. |
| 3 | Prove no record was stranded | Developer | Check every record is in the target shape with values intact, the old shape is gone where contract says, and the whole suite is green. |
| 4 | Evaluate the deliverable | Reviewer | Independently grade the observable deliverable and route it to finish, repair, or user escalation. |
| 5 | Repair the deliverable | Developer | Fix only the concrete gaps from the latest independent review. |
| 6 | Finish | Developer | All deterministic and reviewer criteria passed. |
| 7 | Escalate unresolved concerns | Developer | The bounded repair loop ended without a defensible pass. |

Say something like "migrate a schema" or "change a type everywhere" or "multi-file migration" or "rename a model across the codebase" or "type migration" in chat to start it.
