# Code Review

Snapshot-driven code review. Consumes a staged change-set snapshot (reviews/<reviewId>/manifest.json + changes.diff in the project artifacts drawer) and emits a gated markdown report artifact with severity-ranked, file-cited findings and an approve/request-changes verdict. Shared by commit reviews (uncommitted work vs the last save) and branch reviews (this branch vs the default branch); the Gezel Review panel stages the snapshot and launches this book automatically.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the change set | Reviewer | Read the staged snapshot (manifest + diff) and write a scope note naming the review kind, the changed files, and the themes to check. |
| 2 | Review and write the report | Reviewer | Walk the diff hunk by hunk and write the complete review report artifact. Writing the report IS the advance — the completion gate checks structure, citations, and verdict consistency. |
| 3 | Deliver the verdict | Reviewer | The report passed its gate. Stamp the verdict to task notes and point the user at the report. |

Say something like "review my uncommitted changes" or "review the working tree" or "review this branch against main" or "review the staged change set" in chat to start it.
