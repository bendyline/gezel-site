# Dependency Audit

Audit a project's dependencies for security, staleness, license, and maintenance risk, then produce a prioritized remediation report. First scans the manifest and lockfile to inventory every dependency with its installed vs latest version, known CVEs, license, and maintenance signals, then assesses each into a risk tier weighing severity, exploitability, breaking-change cost, and removability, then writes a report with a concrete upgrade/replace/remove action and order for each risky dependency. Use this for a dependency audit, supply-chain review, checking for vulnerable or outdated packages, license compliance, npm/pip audit triage, or reducing dependency risk — it turns a raw audit dump into a prioritized, justified action plan rather than a wall of warnings.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scan the dependency tree | Developer | inventory deps with versions, CVEs, licenses |
| 2 | Assess risk | Reviewer | tier each dep by risk and remediation cost |
| 3 | Write the audit report | Reviewer | prioritized upgrade/replace/remove plan |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "dependency audit" or "are my dependencies safe" or "check for outdated packages" or "supply chain review" or "npm audit triage" or "license compliance check" in chat to start it.
