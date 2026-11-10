# Audit Recurring Subscriptions

Audit a set of transactions or a vendor list to find every recurring subscription, normalize each to a monthly cost, surface duplicates, price hikes, and zombie/unused services, and produce a prioritized cancel/keep recommendation report. Locks the recurrence-detection rule, the normalization (to monthly), and the recommendation criteria FIRST, then detects and analyzes the recurring charges, then writes a clear report whose every recommendation is backed by the evidence in the data. Defining what counts as 'recurring' and how to rank cancel candidates before analyzing is what makes the audit actionable rather than a list of guesses.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the audit | Researcher | recurrence rule, monthly normalization, recommendation criteria |
| 2 | Detect and analyze | Researcher | find recurring charges, normalize, flag, rank |
| 3 | Write the report | Copywriter | evidence-backed cancel/keep recommendation report |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "audit my subscriptions" or "find recurring charges" or "cancel unused subscriptions" or "subscription spend report" or "where is my money going" in chat to start it.
