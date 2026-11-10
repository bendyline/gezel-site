# KPI Scorecard Page

Build a single-page KPI scorecard that rolls a dataset up into the handful of numbers a team tracks, each shown with its current value, target, and period-over-period change. Defines the KPIs and their exact formulas and targets FIRST (so a number is never ambiguous), then computes the rollups, then builds a clean self-contained HTML scorecard with KPI tiles, deltas, and a tiny trend sparkline each. Use this for a KPI dashboard, a metrics scorecard, an executive summary page, a North Star metrics view, or rolling raw data into headline numbers.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the KPIs | Planner | lock each KPI's formula, target, and comparison period |
| 2 | Compute the rollups | Researcher | compute each KPI's value, delta, and trend series |
| 3 | Build the scorecard | Developer | render a self-contained KPI scorecard page |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "build a kpi scorecard" or "metrics dashboard page" or "executive metrics summary" or "north star metrics" or "roll data into kpis" in chat to start it.
