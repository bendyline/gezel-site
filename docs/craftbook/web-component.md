# Reusable Web Component

Build a reusable custom element as a standards-based Web Component — a rating widget, toggle, accordion, modal, or color-picker — using the Custom Elements API and Shadow DOM with encapsulated styles, attributes, properties, and custom events. Designs the component's public API (tag name, observed attributes, properties, events, slots) first, then implements the class with a demo page proving it works. Components fail when the API is inconsistent or styles leak, so the api-design phase locks the contract before any code, the ordering that yields a genuinely reusable element rather than a one-off.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | API design | Developer | tag, attributes, properties, events, slots |
| 2 | Build | Developer | implement the element + a demo in index.html |
| 3 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 4 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "web component" or "custom element" or "reusable widget" or "shadow dom component" or "build a component" or "custom html element" in chat to start it.
