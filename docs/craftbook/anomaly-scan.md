# Anomaly / Outlier Scan

Scan a dataset for anomalies and outliers and report what is genuinely unusual versus expected noise. Defines the detection criteria and thresholds FIRST (statistical and rule-based, with an explicit definition of 'anomalous') so findings are reproducible, then runs the scan to flag and rank suspect records, then writes a prioritized report a human can triage. Use this for outlier detection, anomaly scanning, finding bad records, fraud/error spotting, or surfacing data points that don't fit.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Define detection criteria | Researcher | lock what counts as anomalous and the thresholds |
| 2 | Run the scan | Developer | apply the criteria and emit ranked flagged records |
| 3 | Report the findings | Copywriter | write a prioritized, triage-ready anomaly report |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "find anomalies" or "detect outliers" or "scan for bad records" or "spot unusual data" or "outlier detection" in chat to start it.
