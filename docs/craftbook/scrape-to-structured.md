# Scrape a Site to Structured Data

Turn one or more web pages into a clean, structured dataset (JSON or CSV) with a fixed schema — product listings, directory entries, articles, tables, or job posts. Scopes the exact fields and a sample-row target FIRST so extraction is verifiable, then crawls and parses each page into rows, then validates that every row matches the schema, types are coerced, required fields are non-empty, and there are no duplicates. The scope-before-scrape ordering is the point: a small model that locks the field list and one hand-written sample row extracts consistently instead of inventing keys per page.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the extraction | Planner | lock target URLs, the field schema, and a sample row |
| 2 | Scrape and parse | Developer | fetch each page and extract rows to the schema |
| 3 | Validate the dataset | Reviewer | schema, types, completeness, and dedup checks |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "scrape a website" or "extract data from a site" or "turn a page into JSON" or "crawl and structure" or "pull a table from the web" in chat to start it.
