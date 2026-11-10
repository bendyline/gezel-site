# Receipts to Expense Ledger

Turn a folder of receipt photos/PDFs into a clean expense ledger: OCR each receipt, extract vendor, date, line items, tax, and total, assign an expense category, and reconcile that each extracted total matches its line items. Locks the per-receipt field schema, the category set, and the math/reconciliation rules FIRST, then OCRs and extracts each receipt into rows, then verifies every receipt was processed, totals reconcile, currencies/dates are normalized, and low-confidence reads are flagged for review. Defining the schema and the total-equals-line-items check before extraction is what keeps an expense ledger trustworthy for reimbursement or tax.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the ledger | Planner | per-receipt schema, categories, reconciliation rules |
| 2 | OCR and extract | Developer | read each receipt, extract fields, categorize, reconcile |
| 3 | Verify the ledger | Reviewer | coverage, reconciliation, normalization, review flags |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "scan my receipts" or "receipts to a spreadsheet" or "extract receipt totals" or "expense report from receipts" or "OCR receipts into a ledger" in chat to start it.
