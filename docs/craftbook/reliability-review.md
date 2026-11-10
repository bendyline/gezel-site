# Reliability & Resilience Review

Review a codebase for production reliability and resilience risks across asynchronous work, external dependencies, state transitions, resource lifecycles, and recovery paths. Uses the repository and per-file indexes to map failure domains, verifies likely issues in source and tests, and leaves a prioritized morning report covering timeouts, retries, idempotency, cancellation, concurrency, backpressure, cleanup, graceful shutdown, observability, and disaster recovery. Use for a weekly reliability sweep, resilience review, failure-mode audit, or pre-production hardening review.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Map failure domains | Reviewer | inventory stateful and asynchronous boundaries plus their reliability contract |
| 2 | Verify failure handling | Reviewer | trace representative failures through source and tests |
| 3 | Write the reliability report | Reviewer | ranked failure-mode report with concrete hardening work |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "reliability review" or "resilience audit" or "review failure modes" or "weekly production hardening" or "find reliability risks" or "nightly reliability sweep" in chat to start it.

Needs toolsets: `builtin.code-intel`, `builtin.code-execution`.
