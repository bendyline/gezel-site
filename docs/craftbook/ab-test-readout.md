# A/B Test Readout

Analyze a controlled experiment and produce a decision-ready readout: does the variant beat control, by how much, and is it real? States the hypothesis, the primary metric, and the decision rule FIRST (to avoid p-hacking and metric-shopping), then computes lift, statistical significance, and confidence intervals as a data-analyst, then writes a plain-language ship/no-ship recommendation. Use this for an experiment analysis, A/B test results, significance testing, conversion-lift readout, or an experiment decision memo.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the hypothesis | Researcher | lock the hypothesis, primary metric, and decision rule before looking |
| 2 | Analyze the experiment | Researcher | compute lift, significance, and confidence intervals |
| 3 | Write the readout | Copywriter | produce a plain-language ship/no-ship recommendation |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "analyze an ab test" or "experiment readout" or "is this result significant" or "ab test results" or "ship or no ship from a test" in chat to start it.
