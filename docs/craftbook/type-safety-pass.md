# Type-Safety Pass

Tighten a module against unsafe patterns — loose equality, implicit coercions, swallowed catches, untyped boundaries, any-casts — with counted evidence: an audit that inventories the patterns by a stated method, fixes that never silence a check to move a count, a same-method re-count, and an enforced independent review.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Audit with counts | Developer | Inventory the unsafe patterns in scope with counts by a stated method, pick concrete targets, record the guardrail, and capture the suite green. |
| 2 | Fix pattern by pattern | Developer | Fix the targeted patterns at the real sites, never silencing a check or weakening an assertion to move a count. |
| 3 | Re-count and verify | Developer | Re-count every pattern with exactly the audit's method, quote before/after counts, and record the suite green. |
| 4 | Evaluate the deliverable | Reviewer | Independently grade the observable deliverable and route it to finish, repair, or user escalation. |
| 5 | Repair the deliverable | Developer | Fix only the concrete gaps from the latest independent review. |
| 6 | Finish | Developer | All deterministic and reviewer criteria passed. |
| 7 | Escalate unresolved concerns | Developer | The bounded repair loop ended without a defensible pass. |

Say something like "tighten the types" or "kill any types" or "add type annotations" or "make this type-safe" or "fix type errors" in chat to start it.
