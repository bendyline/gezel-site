# Artifact Integrity & Ship Review

Perform an isolated ship-readiness review of the actual built artifacts of a project—sites, npm packages, archives, CLIs, binaries, installers, checksums, signatures, and release bundles—rather than trusting source or CI status. Inventories expected versus present assets, stages immutable copies, inspects archive contents and metadata, runs safe sandboxed smoke checks where possible, and leaves per-artifact GO/NO-GO verdicts plus a release-wide decision. Can review locally staged assets or public-release evidence supplied to the project. Use before shipping a release or as a recurring artifact-integrity night-shift audit.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Inventory and stage the release | Reviewer | lock the expected matrix and immutable evidence set before inspecting it |
| 2 | Inspect each artifact | Developer | verify identity, contents, installability, safety, and cross-artifact consistency |
| 3 | Write the artifact ship report | Reviewer | per-artifact verdicts and a release-wide ship decision |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "artifact integrity review" or "review the built artifacts" or "test the release assets" or "are these installers ready to ship" or "audit a public github release" or "nightly artifact review" in chat to start it.

Needs toolsets: `builtin.archives`, `builtin.code-execution`, `builtin.web`.
