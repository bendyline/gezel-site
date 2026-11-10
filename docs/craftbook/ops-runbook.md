# Execute an Ops Runbook

Execute a written operational procedure step by step with verification and a stop-on-anomaly rule. Inventories the runbook and its preconditions FIRST, then executes each step in order — act, verify the step's own check, record verbatim evidence in a run log — halting immediately when observed state does not match what the procedure expects, then writes an outcome report (clean completion, or a halt report naming the failing step, expected vs. observed, and the steps deliberately not executed). Recording verbatim evidence and refusing to run past an anomaly is the wisdom that separates a trustworthy operator from one who papers over broken state.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Inventory the runbook | Researcher | read the procedure end-to-end, list steps and checks, confirm preconditions |
| 2 | Execute and record | Researcher | per step: act, verify, record verbatim evidence; STOP at the first anomaly |
| 3 | Report the outcome | Researcher | COMPLETED summary or HALTED report with expected vs. observed |

Say something like "run the runbook" or "execute this procedure" or "follow the maintenance procedure" or "run this checklist" or "execute the runbook steps" in chat to start it.
