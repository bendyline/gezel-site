# Performance Audit

Audit an application or page for performance problems with measurements, then produce a report of the highest-impact optimizations. First scopes the workloads and locks a performance budget and checklist (load time and Core Web Vitals, bundle/asset weight, render and main-thread cost, network waterfall and request count, server/query latency, memory and re-render churn), then MEASURES each against a baseline using real profiling rather than guessing, then writes a report that ranks bottlenecks by impact-vs-effort with a specific fix and the expected gain for each. Use this for a performance audit, speed optimization, finding bottlenecks, a Lighthouse-style review, reducing load time, or profiling slowness — it grounds every recommendation in a measured number and an estimated payoff, not 'it feels slow'.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the perf budget | Reviewer | lock workloads, a budget, and a metrics checklist |
| 2 | Measure the baseline | Developer | profile each workload, locate the real bottlenecks |
| 3 | Write the perf report | Reviewer | rank optimizations by impact vs effort |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "performance audit" or "why is this slow" or "find the bottleneck" or "optimize load time" or "speed this up" or "profile the app" in chat to start it.
