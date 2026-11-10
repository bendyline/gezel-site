# Diagnose + Add Database Indexes

Diagnose slow database queries and add the right indexes — driven by the query plan, not by hunches — then prove the speedup without harming writes. Analyzes FIRST with EXPLAIN/query plans to find the actual full scans and missing indexes, then adds the targeted indexes (right columns, right order, covering where it helps), then a reviewer confirms the plans now use the index and queries are faster. Covers EXPLAIN/query plans, full-table-scan detection, composite index column order, covering indexes, selectivity, and the write-amplification tradeoff.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Analyze the queries | Researcher | use query plans to find scans and missing indexes |
| 2 | Add the indexes | Developer | write the index migration to the analysis |
| 3 | Verify the plans | Reviewer | confirm plans use the index and queries are faster |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "add database indexes" or "speed up slow queries" or "tune database performance" or "fix a slow query" or "explain plan and index" in chat to start it.
