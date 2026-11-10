# Security Architecture Review

A structured security architecture review: walk the stack for secrets, dependencies, auth, and common vulnerability classes, then report findings ranked by severity and confidence.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Map assets and trust boundaries | Developer | Establish the system, sensitive assets, actors, data flows, controls, and review limits. |
| 2 | Audit controls and prove findings | Developer | Walk the attack surface systematically and maintain an evidence-backed findings register. |
| 3 | Write the security architecture review | Reviewer | Deliver prioritized findings, strengths, remediation, and retest instructions for owners. |
| 4 | Evaluate the deliverable | Reviewer | Independently grade the observable deliverable and route it to finish, repair, or user escalation. |
| 5 | Repair the deliverable | Developer | Fix only the concrete gaps from the latest independent review. |
| 6 | Finish | Developer | All deterministic and reviewer criteria passed. |
| 7 | Escalate unresolved concerns | Developer | The bounded repair loop ended without a defensible pass. |

Say something like "security audit" or "check for vulnerabilities" or "owasp review" in chat to start it.
