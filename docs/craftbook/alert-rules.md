# Monitoring Alert Rules

Author a set of monitoring/alerting rules as a deployable config (Prometheus alerting rules, Grafana/Alertmanager YAML, or a CloudWatch-style spec): the right signals, thresholds, severities, for-durations, and routing labels. Scopes the SLOs and alert philosophy FIRST (what to alert on, symptom-vs-cause, thresholds and burn windows, severity ladder, noise budget), then a developer writes the rules config to that spec, then a reviewer validates for completeness, dedupe, and anti-flapping. Scoping thresholds and severities before writing YAML is what produces actionable, low-noise alerts instead of a wall of CPU-over-80% pages. Use for alerting rules, Prometheus alerts, SLO monitoring, on-call paging rules, and reducing alert fatigue.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the alerts | Planner | lock signals, thresholds, severities, and routing |
| 2 | Build the rules | Developer | write the alerting-rules config to the locked spec |
| 3 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 4 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "write alert rules" or "prometheus alerts" or "monitoring rules" or "set up alerting" or "SLO alerts" in chat to start it.
