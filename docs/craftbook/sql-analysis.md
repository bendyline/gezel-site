# Answer a Question with SQL

Answer a specific business question against a database or table set with a correct, readable SQL query and a short written answer. Scopes the question, the tables/columns, and the grain FIRST (so the query measures the right thing at the right level), then writes and runs the query as a data-analyst, then verifies the result with a sanity check and an explanation. Use this for SQL analysis, querying a database, writing a report query, computing a metric in SQL, or answering 'how many / what's the trend' from tables.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the question | Planner | lock the question, tables, grain, and filters |
| 2 | Write and run the query | Researcher | author a correct, readable query and capture the result |
| 3 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 4 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "answer this with sql" or "write a sql query" or "query the database" or "compute a metric in sql" or "sql analysis" in chat to start it.
