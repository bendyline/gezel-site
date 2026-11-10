# Product Onboarding Tour

Build a single-file product onboarding tour or coachmark walkthrough that guides a new user through key features with sequential tooltips, a highlighted target, next/back/skip controls, and a finish state. Designs the step sequence, what each step points at, and the copy strategy first, writes the step copy, then implements the spotlight overlay and step navigation. Tours break when a step points at the wrong element or skip/finish does not dismiss, so the flow-design phase locks the step-to-target map before any code.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Flow design | Designer | step sequence, targets, spotlight, controls |
| 2 | Copywriting | Copywriter | per-step tooltip copy + button labels |
| 3 | Build | Developer | implement index.html with spotlight + step nav |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "onboarding tour" or "product tour" or "walkthrough" or "feature tour" or "coachmarks" or "guided tour" in chat to start it.
