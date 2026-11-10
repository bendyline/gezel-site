# Generate and Send Recurring Invoices

Run a recurring billing batch: for each active client/subscription due this period, generate a correctly-numbered, line-itemed invoice with taxes and totals, render it, and send it — once, idempotently, with a sent-log. Locks the invoice template, the numbering scheme, the tax/total math, and the due/idempotency rules FIRST, then builds the generate-render-send batch keyed to a billing-run log, then verifies every due client was invoiced exactly once, totals are arithmetically correct, and numbers are sequential with no gaps or dupes. Locking numbering and math up front is what keeps recurring billing audit-clean instead of producing duplicate or mis-totaled invoices.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the invoice run | Planner | template, numbering, tax/total math, due + idempotency |
| 2 | Build the invoice run | Developer | select due, number, compute, render, send, log |
| 3 | Verify the run | Reviewer | once-per-client, correct math, gap-free numbering |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "generate recurring invoices" or "send monthly invoices" or "automate billing" or "invoice run" or "recurring invoice batch" in chat to start it.
