# CI Pipeline from Scratch

Author a CI pipeline grounded in what the repo actually has: inventory the real package scripts, write the workflow at the conventional location with caching and merge-gating on green, and verify every command it invokes against the manifests — honest that CI itself cannot run locally. Adds a publish-on-tag release job only when the repo shows one.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Inventory the repo | Developer | Read the real scripts and layout, then plan stages, caching, and triggers — never a command that does not exist. |
| 2 | Author the workflow | Developer | Write the real workflow file(s) at the conventional location — minimal, cached, pinned, gating merges on green. |
| 3 | Verify against the manifests | Developer | Read the workflow back and match every invoked command to the manifest line that provides it; honest about what only a live run proves. |
| 4 | Evaluate the deliverable | Reviewer | Independently grade the observable deliverable and route it to finish, repair, or user escalation. |
| 5 | Repair the deliverable | Developer | Fix only the concrete gaps from the latest independent review. |
| 6 | Finish | Developer | All deterministic and reviewer criteria passed. |
| 7 | Escalate unresolved concerns | Developer | The bounded repair loop ended without a defensible pass. |

Say something like "set up ci" or "create a ci pipeline" or "github actions workflow" or "build a ci/cd pipeline" or "add automated testing on push" or "set up a release pipeline" or "ci/cd for releases" or "publish on tag workflow" or "github actions release" or "automate the release" in chat to start it.
