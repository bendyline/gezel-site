# Clean a Dataset

Profile, clean, and validate a messy CSV/TSV/JSON dataset into an analysis-ready table. Profiles the raw data FIRST (row/column counts, types, null rates, duplicates, outliers, encoding) so cleaning decisions are evidence-based, then applies deterministic transforms (dedup, type coercion, null handling, whitespace/case normalization, value standardization), then validates the cleaned output against the same profile so nothing was silently dropped or corrupted. Use this for data wrangling, tidying, deduplication, normalizing dirty spreadsheets, and prepping raw exports for charts or modeling.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Profile the raw data | Researcher | measure the data's shape, types, and defects before touching it |
| 2 | Clean the data | Developer | apply the planned deterministic transforms and emit the cleaned file |
| 3 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 4 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "clean this dataset" or "tidy a csv" or "deduplicate data" or "fix dirty data" or "prep data for analysis" in chat to start it.
