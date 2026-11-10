# Invoice Generator

Generate a clean, professional, print-ready invoice from billing details — sender/recipient, line items with quantity and rate, subtotal, tax, total, invoice number, dates, and payment instructions. Scopes the required fields and the tax/total math FIRST (a wrong total is the one unforgivable invoice bug), then builds a polished single-file HTML invoice with an itemized table and correctly computed totals. Use for freelancer/contractor billing, one-off invoices, and invoice templates.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the invoice | Planner | required fields, line items, and the tax/total math rules |
| 2 | Build the invoice | Developer | render invoice.html with an itemized table and correct totals |
| 3 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 4 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "generate an invoice" or "make an invoice" or "create a bill" or "freelance invoice" or "invoice template" or "billing document" in chat to start it.
