# Accessibility Retrofit

Audit real pages for concrete accessibility violations — alt text, labels, heading order, keyboard and focus, landmarks, contrast — then fix each one at its real site in the markup and verify it, with an enforced independent review that rejects accessibility theater.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Audit the real pages | Reviewer | Exercise the pages the project actually serves and inventory concrete violations, each with its file, issue, and priority. |
| 2 | Fix each violation at its real site | Web Developer | Repair every audited violation in the actual markup, styles, or components — semantic elements over ARIA bolt-ons. |
| 3 | Validate every fix | Reviewer | Re-inspect each fixed item against the current markup and walk the keyboard path, honest about inspected versus exercised. |
| 4 | Evaluate the deliverable | Reviewer | Independently grade the observable deliverable and route it to finish, repair, or user escalation. |
| 5 | Repair the deliverable | Web Developer | Fix only the concrete gaps from the latest independent review. |
| 6 | Finish | Developer | All deterministic and reviewer criteria passed. |
| 7 | Escalate unresolved concerns | Developer | The bounded repair loop ended without a defensible pass. |

Say something like "accessibility fix" or "make it accessible" or "wcag compliance" or "a11y retrofit" or "fix accessibility" or "screen reader friendly" or "add alt text" or "generate alt text for images" or "make images accessible" or "alt text for my site" or "wcag image descriptions" in chat to start it.
