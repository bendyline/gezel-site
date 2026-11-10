# Test Suite Backfill

Add tests that actually bite to untested code: rank the untested behavior by breakage cost, write tests in the project's real layout that a wrong implementation would fail, and prove the suite green with real run receipts — under an enforced independent review.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Map the risk | Developer | Read the target modules and rank untested behavior by breakage cost; choose concrete targets. No test writing yet. |
| 2 | Write tests that can fail | Developer | Add the tests in the project's real layout and style, asserting actual behavior — never tautologies. |
| 3 | Verify the suite green | Developer | Run the whole suite and record the real result, with a per-test statement of the regression it guards. |
| 4 | Evaluate the deliverable | Reviewer | Independently grade the observable deliverable and route it to finish, repair, or user escalation. |
| 5 | Repair the deliverable | Developer | Fix only the concrete gaps from the latest independent review. |
| 6 | Finish | Developer | All deterministic and reviewer criteria passed. |
| 7 | Escalate unresolved concerns | Developer | The bounded repair loop ended without a defensible pass. |

Say something like "add tests to this code" or "backfill tests" or "increase test coverage" or "write tests for an untested module" or "test this function" in chat to start it.
