# Track Prices Over Time

Build a price tracker that records the price of one or more products/SKUs each time it runs, appending a timestamped history so you can see trends, drops, and the lowest price seen. Scopes the SKUs, the price-extraction rule, and the history-file schema FIRST, then builds the fetch-and-append routine that is idempotent per day and computes drop-from-previous and all-time-low. Schema-before-build keeps the history a clean append-only time series instead of a pile of inconsistent snapshots — the foundation any later chart or alert reads from.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the tracker | Planner | SKUs, price-extraction rule, and history schema |
| 2 | Build the tracker | Developer | fetch each SKU, append a row, compute drop + low |
| 3 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 4 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "track a price" or "price history tracker" or "watch product prices" or "log prices over time" or "price drop history" in chat to start it.
