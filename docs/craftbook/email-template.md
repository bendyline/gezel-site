# Responsive HTML Email

Build a responsive HTML email template that renders across email clients — Outlook, Gmail, Apple Mail — using table-based layout, inline styles, and bulletproof buttons, for a newsletter, transactional, or promo send. Designs the visual structure and the client-safe constraints first, writes the copy, then builds the table-based HTML with all CSS inlined. Email is not the web: external CSS, flexbox, and modern selectors break, so the design phase locks the table layout and inline-only rule before any markup, the ordering that keeps a small model from producing a div-and-class email that renders broken in Outlook.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Email design | Designer | table layout, palette, client-safe constraints |
| 2 | Copywriting | Copywriter | subject, preheader, body copy, CTA label |
| 3 | Build | Developer | implement email.html with table layout + inline CSS |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "html email" or "email template" or "newsletter email" or "responsive email" or "marketing email" or "build an email" in chat to start it.
