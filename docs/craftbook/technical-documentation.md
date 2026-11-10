# Technical Documentation

Generate a coherent documentation set from a codebase, organized by the Diataxis model (tutorials, how-to guides, reference, explanation), with cross-links and a coverage pass.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Inventory the documentation surface | Researcher | Map readers, public interfaces, source evidence, existing coverage, and gaps. |
| 2 | Design the documentation set | Developer | Choose the right document type for each reader need and lock verification criteria. |
| 3 | Author, link, and verify the docs | Copywriter | Write the planned pages, validate examples and links, and expose the complete set through one index. |
| 4 | Evaluate the deliverable | Developer | Independently grade the observable deliverable and route it to finish, repair, or user escalation. |
| 5 | Repair the deliverable | Copywriter | Fix only the concrete gaps from the latest independent review. |
| 6 | Finish | Developer | All deterministic and reviewer criteria passed. |
| 7 | Escalate unresolved concerns | Developer | The bounded repair loop ended without a defensible pass. |

Say something like "write docs for this" or "generate documentation" or "document this feature" or "create a tutorial" or "write a how-to" or "explain this module" or "docs for this project" in chat to start it.
