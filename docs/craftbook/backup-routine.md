# Scheduled Backup or Export

Build a scheduled, idempotent backup/export routine that snapshots data (files, a database, or an app export) to a timestamped, optionally compressed destination, prunes old backups by a retention policy, and verifies each backup is restorable. Locks what to back up, the destination layout, the retention policy, and the integrity check FIRST, then builds the snapshot-write-verify-prune routine, then verifies a fresh backup is created, integrity-checked, and that retention deletes only what it should. Defining retention and an integrity check up front is the wisdom that turns backups from a false sense of safety into a tested recovery path.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the backup | Planner | sources, destination layout, retention, integrity check |
| 2 | Build the routine | Developer | snapshot, write, integrity-check, prune, log |
| 3 | Verify the routine | Reviewer | fresh backup, integrity, safe retention, idempotency |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "set up a backup" or "scheduled export" or "automate backups" or "backup my database" or "nightly backup routine" in chat to start it.
