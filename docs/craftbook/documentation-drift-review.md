# Documentation Drift Review

Review project documentation against the code, configuration, commands, API surface, and shipped behavior to find stale or misleading guidance. Uses the indexed docs and source map to verify examples and references instead of proofreading in isolation, then leaves a prioritized morning report with exact doc locations, source-of-truth evidence, corrected text, owners, and a prevention plan. Use for a weekly docs-health sweep, documentation accuracy review, stale README audit, or finding runbook and API-documentation drift.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Inventory documentation contracts | Reviewer | map docs to the source-of-truth surfaces they claim to describe |
| 2 | Verify documented behavior | Reviewer | check commands, examples, links, schemas, defaults, and architecture claims |
| 3 | Write the documentation drift report | Reviewer | prioritized corrections and prevention work for morning triage |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "documentation drift review" or "find stale docs" or "weekly docs review" or "check docs against code" or "audit the readme and runbooks" or "nightly documentation sweep" in chat to start it.

Needs toolsets: `builtin.code-intel`, `builtin.code-execution`.
