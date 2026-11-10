# Classify and Route Incoming Documents

Build a document-intake pipeline that classifies each incoming file (invoice, contract, resume, receipt, ID, support ticket, other) into a fixed type set, extracts a few key fields per type, and routes it to the right destination folder with a normalized filename. Locks the document-type taxonomy, per-type extraction fields, and the routing/naming rules FIRST, then builds the classify-extract-route loop, then verifies every input file was handled, classifications are in-set with an 'other' fallback, and routing is deterministic. Taxonomy-and-routing-before-build prevents files from silently vanishing or piling into a misc bucket.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the pipeline | Planner | doc-type taxonomy, per-type fields, routing rules |
| 2 | Build the pipeline | Developer | classify, extract key fields, route + rename, log |
| 3 | Verify the pipeline | Reviewer | coverage, in-set types, deterministic routing |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "sort incoming documents" or "classify and file documents" or "auto-route a folder of files" or "document intake pipeline" or "organize a dump of files" in chat to start it.
