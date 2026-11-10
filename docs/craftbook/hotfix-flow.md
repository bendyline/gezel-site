# Hotfix Flow

Stop a live failure with the smallest change that fixes it at the real site: reproduce with the least machinery that demonstrates the failure, patch minimally with the proper repair recorded as follow-up, validate with a rollback path, and pass an enforced review of the blast radius.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Reproduce with the least machinery | Developer | Establish the failure cheaply and concretely: a command, a probe, or a focused test — whatever demonstrates it fastest. |
| 2 | Smallest change that stops the bleeding | Developer | Fix the cause at the real defect site with the minimum blast radius; defer the proper repair into Follow-up. |
| 3 | Re-run the reproduction and record rollback | Developer | Prove the failure is gone, be explicit about what was and was not verified, and write the escape route. |
| 4 | Evaluate the deliverable | Reviewer | Independently grade the observable deliverable and route it to finish, repair, or user escalation. |
| 5 | Repair the deliverable | Developer | Fix only the concrete gaps from the latest independent review. |
| 6 | Finish | Developer | All deterministic and reviewer criteria passed. |
| 7 | Escalate unresolved concerns | Developer | The bounded repair loop ended without a defensible pass. |

Say something like "hotfix this bug" or "urgent production fix" or "expedited patch" or "fix the live defect" or "out-of-band fix" or "emergency fix" or "stop the bleeding" in chat to start it.
