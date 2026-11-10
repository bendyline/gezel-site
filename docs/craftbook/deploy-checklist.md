# Deploy Checklist

Author and then actually execute a pre-deploy verification checklist for shipping a release to production — the concrete gates that must be green before the deploy button is pressed: tests passing, build clean, migrations reviewed, config/secrets present, feature flags set, rollback path confirmed, and observability/alerts ready. A planner scopes the checklist tailored to this service and risk level, a developer runs each item and records real evidence (command output, links, screenshots) for pass or fail, and a reviewer signs off go/no-go. Use this before a production deploy, a release cut-over, or any 'are we ready to ship?' gate where skipping a step causes outages.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the checklist | Planner | define the go/no-go gates for THIS service and release |
| 2 | Verify each gate | Developer | execute every checklist item and record real evidence |
| 3 | Sign off go/no-go | Reviewer | audit the evidence and confirm the go/no-go decision |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "pre-deploy checklist" or "are we ready to deploy" or "go/no-go for release" or "production deploy checklist" or "ship readiness check" in chat to start it.
