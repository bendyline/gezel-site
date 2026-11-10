# ETL / Ingest Pipeline

Build an extract-transform-load pipeline that ingests source data, reshapes it to a target schema, and loads it with validation at every stage. Locks the schemas FIRST — source shape, target shape, the field-by-field transform/mapping, type coercions, and the data-quality rules — then implements extract→transform→load with row-level error capture, then a reviewer validates output conformance, row counts, and reject handling. Covers ETL stages, schema mapping, type coercion, data validation, idempotent loads, dead-letter/reject rows, and reconciliation counts.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Schema scope | Planner | lock source/target schemas, mapping, quality rules |
| 2 | Build the pipeline | Developer | implement extract → transform → load |
| 3 | Validate the output | Reviewer | check conformance, counts, and reject handling |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "build an etl pipeline" or "ingest and transform data" or "data pipeline" or "load data into a target schema" or "etl job" in chat to start it.
