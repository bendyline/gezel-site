# Human-Readable Changelog

Turn raw commit/PR history into a human-readable changelog that users actually understand: a developer first gathers and triages the merged changes since the last release into user-facing buckets (Added, Changed, Fixed, Deprecated, Removed, Security), filtering out noise like internal refactors, then a copywriter rewrites each entry in plain, benefit-oriented language with breaking changes called out. Covers changelog, release notes, what's new, version notes, and Keep a Changelog format. Gathering and triaging before writing is the point: a small model that first separates user-facing changes from internal churn avoids the changelog that lists 'bump deps' next to a breaking API change with equal weight.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Gather & triage changes | Developer | collect merged changes and bucket the user-facing ones |
| 2 | Write the changelog | Copywriter | rewrite entries in plain, user-facing language |
| 3 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 4 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "write a changelog" or "generate release notes" or "whats new writeup" or "changelog from commits" or "version notes" in chat to start it.
