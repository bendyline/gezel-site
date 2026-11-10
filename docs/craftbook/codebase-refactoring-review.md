# Codebase Refactoring Review

Review an entire codebase for the least cogent, highest-leverage refactoring opportunities without changing source. Uses the repository map and per-file AI health index to rank weak areas, then verifies each lead in the real code and leaves a file-and-line-cited morning report with sequenced refactor plans, risk, effort, and tests that must protect behavior. Use for a weekly code-health sweep, refactoring review, technical-debt triage, finding code smells, or deciding which files should be refactored first.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Rank weak areas | Reviewer | use the repo map and per-file health index to build a coverage-aware candidate list |
| 2 | Verify refactoring candidates | Reviewer | inspect candidate symbols, responsibilities, callers, and tests in real source |
| 3 | Write the refactoring report | Reviewer | prioritized code-health report with safe, sequenced refactor plans |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "codebase refactoring review" or "what should we refactor" or "find the least cogent code" or "weekly code health review" or "technical debt sweep" or "nightly refactoring review" in chat to start it.

Needs toolsets: `builtin.code-intel`, `builtin.git`.
