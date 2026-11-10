# Model a Flow as a State Machine

Model a stateful flow (checkout, order lifecycle, connection, wizard) as an explicit finite state machine with named states, guarded transitions, and rejected illegal moves — making impossible states impossible. Models the machine FIRST — the full state set, the events, the legal transition table, guards, and entry/exit effects — then implements a transition function that rejects illegal events, then tests every legal path and that illegal transitions are refused. Covers states/events/transitions, transition tables, guards, side-effects on entry, illegal-transition rejection, and exhaustive path testing.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Model the machine | Planner | lock states, events, transition table, guards |
| 2 | Build the machine | Developer | implement a guarded transition function |
| 3 | Test every path | Developer | test legal paths and illegal-transition rejection |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "model a state machine" or "build a finite state machine" or "order lifecycle states" or "implement a workflow as states" or "state transitions" in chat to start it.
