# Technical Design Doc

Write a technical design document (RFC / engineering design doc) that gets a system change reviewed and approved — covering context and problem, goals and non-goals, the proposed design, alternatives considered, trade-offs, risks, and a rollout plan. Scopes the problem, goals, and explicit non-goals FIRST (non-goals prevent reviewer scope-creep), writes the detailed design with diagrams and alternatives, then has a reviewer check it for completeness and unjustified decisions. Use for RFCs, architecture proposals, and pre-implementation design reviews.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the design | Planner | problem, goals, explicit non-goals, constraints, success metrics |
| 2 | Write the design | Developer | detailed proposed design, alternatives, trade-offs, rollout plan |
| 3 | Review the design | Reviewer | check completeness, justified decisions, and risk coverage |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "technical design doc" or "write an rfc" or "engineering design document" or "architecture proposal" or "system design doc" or "design spec" in chat to start it.
