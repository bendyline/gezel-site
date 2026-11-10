# Spec Authoring

Turn a rough intent into a backlog-ready spec: interrogate scope and requirements against the real code, then file a well-formed, unambiguous issue.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Inspect the current system | Developer | Map present behavior, relevant code, conventions, dependencies, tests, and constraints. |
| 2 | Resolve scope and design decisions | Developer | Close consequential ambiguities and record alternatives, rationale, and boundaries. |
| 3 | Write the implementation specification | Copywriter | Produce a backlog-ready spec with concrete interfaces, sequencing, tests, and rollback. |
| 4 | Evaluate the deliverable | Reviewer | Independently grade the observable deliverable and route it to finish, repair, or user escalation. |
| 5 | Repair the deliverable | Copywriter | Fix only the concrete gaps from the latest independent review. |
| 6 | Finish | Developer | All deterministic and reviewer criteria passed. |
| 7 | Escalate unresolved concerns | Developer | The bounded repair loop ended without a defensible pass. |

Say something like "spec this out" or "file an issue" or "write up a ticket" or "turn this into an issue" or "make this a github issue" or "turn this into a backlog item" in chat to start it.
