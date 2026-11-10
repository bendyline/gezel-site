# Embeddable Feedback Widget

Build a single-file embeddable feedback, contact, or rating widget — a floating button that opens a small panel with a rating, a message field, and validation, then shows a thank-you state and persists submissions to localStorage. Scopes the fields, validation, and submission behavior first, designs the floating launcher and panel, then implements an accessible, self-contained widget that drops into any page. Feedback widgets fail when submit does nothing, validation is missing, or the panel cannot be closed, so the scope phase locks the field set and the submit-and-thank-you flow before any markup.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope | Planner | fields, validation, submit + thank-you behavior |
| 2 | Design | Designer | launcher button, panel layout, states |
| 3 | Build | Developer | implement the widget in index.html |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "feedback widget" or "contact widget" or "rating widget" or "feedback form" or "embeddable form" or "support widget" in chat to start it.
