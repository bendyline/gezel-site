# Codemod Sweep

Make a mechanical change everywhere it applies - a rename, an API-call migration, dead-code removal: enumerate every site first, apply the change under stated invariants, then re-scan to prove zero un-excluded sites remain, with counts that reconcile exactly and a green suite as receipts.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Enumerate every site | Researcher | Find every site with real searches before touching one; count them and list explicit exclusions with reasons. No edits in this phase. |
| 2 | Apply the change at every site | Developer | Make the mechanical change at every listed site, holding the stated invariants; leave exclusions untouched and run the suite as you go. |
| 3 | Re-scan and reconcile | Developer | Re-run the exact search to zero un-excluded sites, reconcile the counts across all three documents, and prove the suite green. |
| 4 | Evaluate the deliverable | Reviewer | Independently grade the observable deliverable and route it to finish, repair, or user escalation. |
| 5 | Repair the deliverable | Developer | Fix only the concrete gaps from the latest independent review. |
| 6 | Finish | Developer | All deterministic and reviewer criteria passed. |
| 7 | Escalate unresolved concerns | Developer | The bounded repair loop ended without a defensible pass. |

Say something like "rename across the repo" or "codemod" or "migrate every call" or "remove the dead code" in chat to start it.
