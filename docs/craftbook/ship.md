# Ship

End-to-end release procedure: run tests, run a review pass, commit/push, open the PR, wait for CI to come back green, hand off for merge. Requires a GitHub-connected project on a feature branch.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Preflight | Developer | Confirm the working tree is shippable: the checked-out branch matches the requested branch, has an upstream, is clean, and contains the intended commits. |
| 2 | Run tests | Developer | Run the project's test command. Branches on failure to a triage step; on success advances to the review pass. |
| 3 | Self-review pass | Reviewer | Walk your own diff before opening the PR. Last chance to catch obvious mistakes. |
| 4 | Open PR | Developer | Open a pull request for the already-published branch. |
| 5 | Wait for CI | Developer | Poll workflow runs / check status until the gate is green or fails. |
| 6 | Summary | Developer | Stamp a final summary. PR opened, CI green, ready to merge. |
| 7 | Halted | Developer | Something blocked the ship — tests, CI, or push. Report DONE_WITH_CONCERNS. |

Say something like "ship this" or "ship it" or "open a pr" or "open the pr" or "release this" in chat to start it.
