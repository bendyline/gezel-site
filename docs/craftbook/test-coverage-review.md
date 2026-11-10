# Test Coverage Review

Review a codebase or module's test suite for real coverage and quality, then produce a gap report and a prioritized backlog of tests to add. First scopes the units under review and locks a coverage standard distinguishing line coverage from behavioral coverage (critical paths, branches, edge cases, error handling, and regression protection), then audits the existing tests for what they actually assert and which behaviors and branches are untested or weakly tested, then writes a report ranking the highest-value missing or low-quality tests with a concrete description of each. Use this for a test coverage review, finding test gaps, auditing test quality, deciding what to test next, or assessing whether a module is well-tested — it distinguishes meaningful behavioral coverage from a green coverage number and returns a prioritized testing backlog rather than 'add more tests'.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the coverage standard | Reviewer | lock units in scope + a behavioral coverage bar |
| 2 | Audit the test suite | Reviewer | find untested behavior + weak assertions |
| 3 | Write the coverage report | Reviewer | prioritized test backlog + quality findings |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "test coverage review" or "where are the test gaps" or "is this well tested" or "what should I test next" or "audit the test suite" or "test quality review" in chat to start it.
