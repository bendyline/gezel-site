# Design System Consultation

Interview for product context and taste, then propose a full design system — type, color, layout, motion — and capture it as a DESIGN.md with live preview pages.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Audit the current interface | Designer | Map the product, users, existing visual language, implementation constraints, and inconsistencies. |
| 2 | Lock the design brief | Designer | Define the memorable intent, principles, references, exclusions, and success tests. |
| 3 | Propose and render the design system | Designer | Specify the system and render a realistic, accessible preview of its important states. |
| 4 | Evaluate the deliverable | Reviewer | Independently grade the observable deliverable and route it to finish, repair, or user escalation. |
| 5 | Repair the deliverable | Designer | Fix only the concrete gaps from the latest independent review. |
| 6 | Finish | Developer | All deterministic and reviewer criteria passed. |
| 7 | Escalate unresolved concerns | Developer | The bounded repair loop ended without a defensible pass. |

Say something like "design system" or "create a brand" or "design from scratch" in chat to start it.

Needs toolsets: `@playwright/mcp`.
