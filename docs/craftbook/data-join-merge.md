# Join / Merge Two Datasets

Combine two datasets into one reconciled table on a shared key, correctly handling the join type, key mismatches, and duplicate fan-out. Profiles both sources and locks the join key, join type, and conflict rules FIRST (so the merge doesn't silently drop or duplicate rows), then builds the joined output, then verifies the match rate and that no row count exploded. Use this for joining two tables, merging datasets, a VLOOKUP-style match, enriching one file from another, or reconciling records across two sources.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the join | Planner | lock the join key, join type, and conflict rules |
| 2 | Build the merge | Developer | normalize keys, join, and emit the reconciled table |
| 3 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 4 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "join two datasets" or "merge these tables" or "vlookup match" or "enrich one file from another" or "reconcile two data sources" in chat to start it.
