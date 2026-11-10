# Release Artifact Sanity Check

Sanity-check a folder of release artifacts without executing them: inventory every package, verify hashes and signatures against trusted evidence, safely inspect every file inside archives and application bundles, scan for suspicious or secret-bearing content, and produce an evidence-backed ship or no-ship report. Use this for release artifact verification, installer signing checks, package integrity audits, supply-chain inspection, or a pre-publish binary review.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Inventory the release set | Developer | identify every release record, artifact, checksum, signature, and package boundary |
| 2 | Verify integrity and signing | Reviewer | hash every artifact and validate signatures against a trusted identity |
| 3 | Inspect every package member | Developer | safely unpack app packages and scan every contained file |
| 4 | Write the artifact sanity report | Reviewer | state a ship decision with complete evidence and blockers |
| 5 | Evaluate | Reviewer | grade coverage and evidence; pass only when every acceptance criterion is met |
| 6 | Finish | Reviewer | stamp the decision and hand off the evidence-backed report |

Say something like "sanity check release artifacts" or "audit release packages" or "verify installer signatures" or "inspect app bundles" or "check release artifact integrity" or "scan a release folder" in chat to start it.

Needs toolsets: `builtin.security-intel`, `builtin.code-intel`.
