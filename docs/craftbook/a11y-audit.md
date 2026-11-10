# Accessibility Audit

Audit a web page or UI for accessibility against WCAG 2.1 AA and produce a prioritized remediation report. First scopes the components and flows in play and locks a WCAG checklist (semantic structure, keyboard operability, focus management, color contrast, alt text, form labels, ARIA correctness, motion/reflow), then audits each criterion by inspecting the markup, simulating keyboard and screen-reader use, and measuring contrast, then writes a findings report citing the failing WCAG success criterion, the affected element, and the fix. Use this for an accessibility audit, a11y review, WCAG compliance check, screen-reader or keyboard-navigation testing, or making a page accessible — it ties each defect to a numbered WCAG criterion with a concrete code remedy rather than vague 'improve accessibility' notes.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the audit | Reviewer | enumerate components + lock a WCAG AA checklist |
| 2 | Audit each criterion | Reviewer | inspect markup, keyboard, contrast, ARIA per SC |
| 3 | Write the a11y report | Reviewer | findings keyed to WCAG SCs with fixes |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "accessibility audit" or "a11y review" or "check WCAG compliance" or "is this accessible" or "screen reader test" or "keyboard navigation audit" in chat to start it.
