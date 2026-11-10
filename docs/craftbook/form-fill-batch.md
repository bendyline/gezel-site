# Batch-Fill Forms from a Dataset

Automate filling a web or PDF form once per row of an input dataset — registrations, applications, data-entry portals, mail-merge into a form. Scopes the field-to-column mapping and a per-row success signal FIRST, then builds a loop that loads each record, maps it onto the form fields, submits, and records the outcome, then verifies every row was attempted, each submission was confirmed, and failures are logged with the reason. Mapping-before-build is the wisdom: lock the column→field map and the 'submitted OK' signal so the run is idempotent, resumable, and auditable rather than a blind click-through.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the fill job | Planner | map dataset columns to form fields + success signal |
| 2 | Build the fill automation | Developer | loop records, fill, submit, log each outcome |
| 3 | Verify the run | Reviewer | coverage, confirmations, and failure logging |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "fill out forms automatically" or "batch form submission" or "mail merge into a form" or "auto-fill a portal" or "submit a form for each row" in chat to start it.
