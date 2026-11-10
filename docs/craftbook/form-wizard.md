# Multi-Step Form Wizard

Build a single-file multi-step form wizard — a signup, checkout, survey, or onboarding form split across steps with a progress indicator, per-step validation, back/next navigation, and a final review-and-submit. Designs the step flow, fields per step, and validation rules first, then implements stateful navigation that preserves entered data across steps. Wizards break when going back loses data or a step advances with invalid input, so the flow-design phase locks the field-per-step map and validation before any markup.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Flow design | Designer | steps, fields per step, validation, progress |
| 2 | Build | Developer | implement index.html with stateful step navigation |
| 3 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 4 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "multi step form" or "form wizard" or "checkout flow" or "survey form" or "step by step form" or "onboarding form" in chat to start it.
