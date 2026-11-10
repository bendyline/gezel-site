# Behavior-Preserving Refactor

Restructure code without changing what it does, with proof at every stage: a green suite recorded before anything moves (characterization tests pinned first when coverage is thin), small reversible stages that keep the tests green, a re-measured structure target, and an enforced independent review.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Capture the baseline | Developer | Record the current truth before changing anything: suite green, structural measurements, and the guardrail — with characterization tests added first where coverage is thin. |
| 2 | Plan reversible stages | Developer | Design the target structure and an ordered sequence of small stages, each individually reversible and each leaving the tree working. No source edits. |
| 3 | Restructure stage by stage | Developer | Execute the planned stages at the real sites, keeping the suite green between stages. |
| 4 | Re-measure and verify | Developer | Re-measure with the same method as the baseline, quote both figures, and record the suite green. |
| 5 | Evaluate the deliverable | Reviewer | Independently grade the observable deliverable and route it to finish, repair, or user escalation. |
| 6 | Repair the deliverable | Developer | Fix only the concrete gaps from the latest independent review. |
| 7 | Finish | Developer | All deterministic and reviewer criteria passed. |
| 8 | Escalate unresolved concerns | Developer | The bounded repair loop ended without a defensible pass. |

Say something like "refactor this module" or "clean up the code" or "improve code structure" or "behavior-preserving refactor" or "reduce duplication" in chat to start it.
