# Build + Test a Tricky Regex

Build a regular expression that matches exactly the right strings and rejects the wrong ones — specified with concrete should-match and should-NOT-match cases before a single character is written. Specs the cases FIRST — the positive examples, the tricky negative examples, edge cases, and the anchoring/flags — then builds the regex incrementally against those cases, then tests the full matrix including catastrophic-backtracking safety. Covers character classes, quantifiers, anchors, groups/captures, lookahead/behind, escaping, flags, and ReDoS-safe patterns validated by a should-match / should-not-match table.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Spec the cases | Planner | lock should-match / should-NOT-match examples |
| 2 | Build the regex | Developer | construct the pattern against the cases |
| 3 | Test the matrix | Developer | test every match/no-match case + ReDoS safety |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "build a regex" or "write a regular expression" or "match a pattern" or "validate with regex" or "tricky regex" in chat to start it.
