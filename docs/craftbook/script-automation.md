# One-Off Automation Script

Write a one-off automation script that reliably does a repetitive task — process files, call an API, transform data — with arguments, a dry-run, idempotency, and clear logging so it is safe to run. Scopes the task FIRST — inputs/outputs, side-effects, the dry-run, idempotency, and failure handling — then implements the runnable script with args and a dry-run mode, then a reviewer confirms it does the job, is safe to re-run, and fails loudly. Covers argument handling, dry-run/preview mode, idempotent side-effects, progress logging, error handling, and safe-to-rerun automation.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the task | Planner | lock inputs/outputs, side-effects, dry-run, safety |
| 2 | Build the script | Developer | implement the runnable script with dry-run |
| 3 | Verify the script | Reviewer | confirm it works, is rerun-safe, fails loudly |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "write an automation script" or "automate a task" or "one-off script" or "script to process files" or "batch automation" in chat to start it.
