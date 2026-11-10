# Data Quality Audit

Audit a dataset against explicit data-quality rules and produce a scorecard of where it passes and fails across completeness, validity, consistency, uniqueness, and timeliness. Defines the quality rules and dimensions FIRST (so 'quality' is measurable, not a vibe), then runs the audit to measure each rule with pass rates and failing examples, then writes a prioritized report with an overall score and remediation steps. Use this for a data quality audit, data health check, validation report, data-quality scorecard, or assessing whether a dataset is trustworthy.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Define quality rules | Researcher | lock the dimensions, rules, and thresholds for 'good' |
| 2 | Run the audit | Developer | measure every rule and emit pass rates with failing examples |
| 3 | Report the audit | Copywriter | write a prioritized scorecard with remediation steps |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "audit data quality" or "data health check" or "is this data trustworthy" or "data quality scorecard" or "validate a dataset" in chat to start it.
