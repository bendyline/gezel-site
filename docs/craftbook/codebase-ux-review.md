# Codebase UX Review

Review the user experience implemented across a codebase and, when runnable, exercise the key flows in a real browser. Starts from the indexed UI surface rather than one screenshot, traces primary journeys and state transitions, then leaves a prioritized morning report covering information architecture, comprehension, feedback, recovery, consistency, responsive behavior, and user impact with source or runtime evidence. Use for a weekly UX sweep, product usability review, interaction review, or finding the highest-impact friction in an application.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Map the experience | Reviewer | inventory surfaces, actors, journeys, states, and review coverage from the index |
| 2 | Exercise and inspect journeys | Reviewer | walk key flows and verify indexed leads in source or a browser |
| 3 | Write the UX report | Reviewer | prioritized, journey-centered usability report for morning triage |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "codebase ux review" or "weekly ux review" or "review the product experience" or "find usability problems" or "nightly ux sweep" or "review the user journeys" in chat to start it.

Needs toolsets: `builtin.code-intel`, `builtin.browser-automation`.
