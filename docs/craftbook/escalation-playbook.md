# On-Call Escalation Playbook

Author an on-call escalation playbook: the severity ladder, who-to-page-when escalation tiers with timeouts, communication cadence to stakeholders, and the step-by-step actions for each severity. Scopes the severity definitions and escalation policy FIRST (SEV levels with concrete examples, tier timeouts, roles, comms channels and cadence), then a copywriter writes the playbook in clear, do-this-now imperative steps, then a reviewer validates it for completeness and that no severity dead-ends without an escalation path. Scoping the SEV ladder and timeouts before writing prose is what makes the playbook unambiguous at 3am. Use for on-call runbooks, incident escalation policy, paging tiers, severity ladders, and SRE escalation procedures.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the policy | Planner | lock SEV levels, escalation tiers, timeouts, and comms |
| 2 | Write the playbook | Copywriter | write do-this-now steps for each severity |
| 3 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 4 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "escalation playbook" or "on-call escalation" or "paging tiers" or "severity ladder" or "incident escalation policy" in chat to start it.
