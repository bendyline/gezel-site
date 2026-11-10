# Option Comparison Matrix

Compare a set of options against weighted criteria and ship an interactive HTML comparison matrix with a recommendation: a planner locks the options, the criteria, and their weights, a researcher fills every cell with an evidence-backed value, and a developer builds a single-file HTML page with a sortable/filterable comparison table and a scored recommendation. The ordering matters because criteria and weights chosen after seeing the data bias the winner, and a static table buries the decision; locking weighted criteria first makes the comparison fair and lets the build compute a transparent score. Use this for option/tool/vendor comparisons, decision matrices, buying guides, 'help me choose between X, Y, Z', and weighted pros/cons tables.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Criteria scope | Planner | lock options, weighted criteria, and the scoring rule |
| 2 | Fill the cells | Researcher | evidence-backed value + rating for every option x criterion |
| 3 | Build the matrix page | Developer | single-file HTML sortable comparison + scored recommendation |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "comparison matrix" or "help me choose between" or "compare these options" or "decision matrix" or "buying guide table" in chat to start it.
