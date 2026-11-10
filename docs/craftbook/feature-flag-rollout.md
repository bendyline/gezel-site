# Flagged Feature Rollout

Add a new feature behind a feature flag so it can ship dark, be toggled per-environment/user, and roll back instantly without a deploy. Plans the flag contract FIRST — the flag name/default, the toggle points, the on/off behavior, the targeting (env/percentage/user), and the cleanup plan — then implements the flagged code with both paths working, then a reviewer verifies both states behave and the off-state default is safe. Covers feature flags, toggle points, percentage/targeted rollout, default-off safety, dark launches, and flag-cleanup discipline.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Plan the flag | Planner | lock flag name, default, toggle points, targeting |
| 2 | Build the flagged feature | Developer | implement both paths behind the flag |
| 3 | Verify both states | Reviewer | confirm off=original, on=new, safe default |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "add a feature flag" or "ship behind a flag" or "feature toggle" or "gradual rollout" or "dark launch a feature" or "feature flag rollout plan" or "canary release plan" or "percentage ramp" or "dark launch behind a flag" in chat to start it.
