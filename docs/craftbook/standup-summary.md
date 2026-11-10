# Standup / Team Update Summary

Condense a pile of raw team updates (standup messages, async check-ins, channel dumps) into one clean summary grouped by person or workstream, surfacing blockers and decisions. Scopes the grouping axis and summary shape FIRST (by-person vs by-project, what counts as a blocker, the yesterday/today/blockers frame), then a copywriter compresses every raw update into that frame without dropping anyone. The scope-first step prevents a 4B model from rambling and guarantees blockers get their own callout section instead of being buried. Use for daily standup summaries, async update rollups, team check-in digests, and turning Slack threads into a readable recap.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the summary | Planner | lock the grouping axis, frame, and blocker definition |
| 2 | Summarize | Copywriter | compress every update into the locked frame |
| 3 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 4 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "summarize standup" or "team update summary" or "async check-in rollup" or "standup recap" or "summarize these updates" in chat to start it.
