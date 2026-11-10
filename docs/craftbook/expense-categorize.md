# Categorize Transactions

Classify a list of bank/card transactions into a fixed chart-of-accounts category set, with confidence and a review queue for the uncertain ones, producing a clean categorized ledger ready for bookkeeping or tax. Locks the category taxonomy and the matching rules (merchant patterns, amount/sign heuristics) FIRST, then categorizes every transaction deterministically-first then by inference, then reviews that the taxonomy is closed, low-confidence rows are queued not force-fit, and totals reconcile to the input. Rules-before-categorize is the wisdom: a defined taxonomy plus rule precedence makes results auditable and repeatable, not a one-off guess.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the rules | Planner | category taxonomy + matching rules + precedence |
| 2 | Categorize transactions | Developer | apply rules, assign category + confidence, queue doubts |
| 3 | Review the ledger | Reviewer | closed taxonomy, reconciliation, review queue |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "categorize my transactions" or "sort expenses by category" or "clean up bank transactions" or "bookkeeping categorization" or "tag spending" in chat to start it.
