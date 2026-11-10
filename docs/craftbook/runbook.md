# Ops Runbook

Write an operational runbook or playbook a tired on-call engineer can follow at 3am without thinking — covering when to use it, prerequisites, numbered step-by-step procedures, verification, rollback, and escalation. Scopes the exact scenarios and prerequisites FIRST, writes unambiguous copy-pasteable steps with expected output and verification at each stage, then has a reviewer pressure-test it for gaps and dangerous ambiguity. Use for incident response, deploy/rollback procedures, and recurring ops tasks.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the runbook | Planner | trigger scenarios, prerequisites, success/rollback definition |
| 2 | Write the runbook | Copywriter | numbered, copy-pasteable steps with expected output + verification |
| 3 | Review for gaps | Reviewer | pressure-test the runbook for ambiguity and missing safety rails |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "write a runbook" or "ops playbook" or "incident runbook" or "on call procedure" or "operational procedure doc" or "deploy runbook" in chat to start it.
