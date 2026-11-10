# Scheduled Batch Job

Build a scheduled batch job that runs on a cadence, processes a unit of work, is safe to re-run, and reports its outcome. Scopes the job FIRST — trigger cadence, the work it does, batch/chunk size, idempotency, failure/partial-failure handling, and observable output — then implements the runnable job, then tests a clean run, an empty run, a partial-failure run, and re-run safety. Covers cron scheduling semantics, batch processing, idempotent reruns, chunking, structured logging, exit codes, and graceful partial-failure handling.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the job | Planner | lock cadence, work unit, idempotency, failure handling |
| 2 | Build the job | Developer | implement the runnable batch job |
| 3 | Write job tests | Developer | test clean, empty, partial-failure, and re-run |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "build a cron job" or "scheduled batch job" or "nightly job" or "recurring task script" or "batch processor" in chat to start it.
