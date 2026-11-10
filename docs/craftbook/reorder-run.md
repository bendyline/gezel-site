# Reorder Run

Turn a stock check into purchase orders: every item out or at its reorder point with the quantity that fills it back to par, grouped by supplier with lead times and costs, ready for a person to check and send. Use weekly before ordering, after a stocktake, or when something runs out.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Check the stock | Developer | every item out or at its reorder point, with the quantity to order |
| 2 | Draft the orders | Developer | one purchase order per supplier, for the person to check and send |
| 3 | Finish | Developer | Stamp a short summary and report DONE. |

Say something like "reorder run" or "what should we order" or "draft the purchase orders" or "stock check" or "weekly order" in chat to start it.
