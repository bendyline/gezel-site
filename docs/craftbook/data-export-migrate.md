# Migrate Data Between Tools

Migrate records from a source tool/format to a destination tool/format — CRM to CRM, spreadsheet to app, JSON export to a new API — with a field mapping, value transforms, and a reconciliation that proves nothing was lost or corrupted. Locks the source→destination field map, the transform/normalization rules, and the reconciliation criteria FIRST, then builds the extract-transform-load with a dry-run preview, then verifies record counts match, key fields round-trip, and a diff report flags any mismatch. Mapping-and-reconciliation-before-load is the discipline that makes a migration trustworthy rather than a one-shot leap of faith.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the migration | Planner | field map, transforms, reconciliation criteria |
| 2 | Build the migration | Developer | extract, transform, dry-run, load, reconcile |
| 3 | Verify the migration | Reviewer | counts reconcile, fields round-trip, diff clean |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "migrate data between tools" or "move my CRM data" or "import an export into another app" or "convert and load records" or "migrate a spreadsheet to an app" in chat to start it.
