# Data Dictionary

Document a dataset's schema as a clear, complete data dictionary so others can use it without guessing. Inspects the data FIRST to derive each column's real type, value domain, null rate, units, and relationships from the actual values (not assumptions), then writes a readable dictionary with one entry per column plus dataset-level context. Use this for documenting a schema, building a data dictionary, a column glossary, a table reference, or onboarding docs for a dataset.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Inspect the schema | Researcher | derive each column's real type, domain, and relationships from values |
| 2 | Write the dictionary | Copywriter | produce a readable per-column dictionary with dataset context |
| 3 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 4 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "document a dataset" or "build a data dictionary" or "describe the columns" or "schema documentation" or "column glossary" in chat to start it.
