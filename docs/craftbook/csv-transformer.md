# CSV / Tabular Transformer

Reshape and convert tabular data from one schema to another: rename and reorder columns, split or merge fields, derive new columns, pivot/unpivot, change format (CSV<->JSON<->TSV), and filter rows. Locks the input and target schema and the field-by-field mapping FIRST (so the transform is a contract, not guesswork), then builds the transform and emits the output, then verifies row counts and a sample mapping. Use this for reshaping a CSV, converting data formats, remapping columns, flattening JSON to a table, or reformatting an export for another tool.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the schema mapping | Planner | lock the input schema, target schema, and field-by-field mapping |
| 2 | Build the transform | Developer | apply the mapping and emit the target file |
| 3 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 4 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "reshape a csv" or "convert csv to json" or "remap columns" or "transform tabular data" or "reformat a data export" in chat to start it.
