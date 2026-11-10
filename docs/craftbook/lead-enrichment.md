# Enrich a Leads List

Take a raw leads or contacts list and enrich each row with derived and looked-up attributes — company domain, industry, size band, role seniority, normalized location, and a quality/score flag — into a clean CRM-ready file. Scopes the enrichment fields, their sources, and the dedup/normalization rules FIRST, then enriches each lead row-by-row, then verifies coverage, that nothing was fabricated when a source had no data, and that duplicates are merged. Defining 'what each field means and where it comes from' before enriching is what stops a small model from inventing plausible-but-false company data.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the enrichment | Planner | fields, sources, dedup + normalization rules |
| 2 | Enrich each lead | Developer | derive, look up, normalize, and flag each row |
| 3 | Verify the enrichment | Reviewer | coverage, allowed values, no fabrication, dedup |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "enrich my leads" or "clean up a contacts list" or "add company info to leads" or "enrich a CRM export" or "fill in missing lead fields" in chat to start it.
