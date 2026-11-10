# Pull Request Review

Staff-engineer-style PR review over a complete local PR corpus. Defaults to the open pull request for the project's checked-out branch when one exists, accepts an explicit PR number from any branch, reviews changed files in bounded batches with mechanical coverage accounting, verifies cross-file claims against the checkout, and produces a structured local verdict. Requires a GitHub-connected project.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Map the pull request corpus | Reviewer | Read the launch-time PR overview and compact runtime scope evidence, capture CI/check status, and let the gate verify complete fanout batches mechanically. |
| 2 | Fan the batches out to the review crew | Reviewer | Spawn one child reviewer per published batch. The runtime performs the fanout with no model turn; the crew is the work. |
| 3 | Merge the batch ledgers | Reviewer | Wait for the crew while the runtime deterministically rebuilds the run-wide ledger from exact per-batch coverage shards, then prove both corpus completeness and shard provenance. |
| 4 | Synthesize the review | Reviewer | Synthesize every batch's observations into a cited report, re-verifying cross-file claims and keeping CI status distinct from code-review judgment. |
| 5 | Deliver the verdict | Reviewer | The complete-coverage report passed its gates. Summarize the verdict and point the user to the local evidence files. |

Say something like "review this pr" or "review the current pr" or "review this pull request" or "pr review" or "review the github pull request" in chat to start it.

Needs toolsets: `github`.
