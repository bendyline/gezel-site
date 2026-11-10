# Automate a Booking or Checkout Flow

Automate a multi-step booking, reservation, or checkout flow end-to-end — select, fill details, choose options, confirm — with a hard dry-run/confirmation guard so it never accidentally commits a real transaction during development. Maps the step-by-step flow, the success/failure signals, and the safety guard FIRST, then builds the resilient step driver with waits and retries, then tests both the happy path and the failure/abort paths against a stub or dry-run. Mapping-the-flow-and-guard-before-build is what makes booking automation safe and reliable instead of a brittle, money-spending click bot.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the flow | Planner | step map, success/failure signals, safety guard |
| 2 | Build the flow driver | Developer | drive each step with waits, retries, and the guard |
| 3 | Test the flow | Developer | assert happy path, failure paths, and the guard |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "automate a booking" or "auto-checkout flow" or "reserve automatically" or "automate a multi-step form" or "complete a booking for me" in chat to start it.
