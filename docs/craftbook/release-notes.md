# Release Notes

Turn a raw set of merged commits, pull requests, and ticket IDs into polished, human-readable release notes for a versioned release — grouped by theme (Features, Improvements, Bug Fixes, Breaking Changes), written for users rather than engineers, with upgrade/migration callouts surfaced first. The ordering is deliberate: a developer gathers and de-noises the change inventory before any prose is written, a copywriter turns that inventory into benefit-led notes in a consistent voice, and a reviewer verifies every shipped change is represented and nothing internal-only or unreleased leaked in. Use this for GitHub Releases, product announcement posts, or the user-facing notes that ship alongside a tagged version.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Gather the change inventory | Developer | collect and de-noise every shipped change since the last tag |
| 2 | Write the notes | Copywriter | turn the inventory into benefit-led, user-facing notes |
| 3 | Review for completeness and tone | Reviewer | verify coverage, accuracy, and that nothing internal leaked |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "write release notes" or "release notes for v2" or "what changed this release" or "draft release announcement" or "notes for the new version" or "cut a changelog" or "update CHANGELOG.md" or "roll unreleased into a version" or "stamp the changelog for v1.4" or "keep a changelog release" or "write a changelog" or "generate release notes" or "whats new writeup" or "changelog from commits" or "version notes" in chat to start it.
