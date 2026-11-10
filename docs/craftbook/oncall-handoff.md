# On-Call Shift Handoff

Produce a clean end-of-shift on-call handoff: open incidents and their state, watch-items and known-flapping alerts, deferred actions, and anything the next on-call must do in the first hour. Scopes the handoff template and the carry-over rule FIRST (sections, what counts as an open item, the must-not-drop list), then a developer gathers the shift's signals (active incidents, recent pages, deferred follow-ups) and assembles the handoff so the incoming engineer can pick up cold. Scoping the template and carry-over rule before assembling is what guarantees no live incident or hot watch-item is dropped at the shift boundary. Use for on-call handoffs, shift handover notes, pager handoff, SRE shift change, and end-of-shift summaries.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the handoff | Planner | lock the template and the no-drop carry-over rule |
| 2 | Assemble the handoff | Developer | gather shift signals and build the handoff doc |
| 3 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 4 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "on-call handoff" or "shift handover" or "pager handoff" or "end of shift summary" or "oncall handover notes" in chat to start it.
