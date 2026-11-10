# Release Readiness Review

Run a go/no-go release readiness review against a structured pre-launch checklist and produce a sign-off report with a clear ship decision. First scopes the release and locks a readiness checklist (acceptance criteria met, tests and CI green, no open blockers, migrations and rollback ready, monitoring and alerts in place, docs and changelog updated, feature flags and config set, and on-call/comms prepared), then verifies each item by inspecting the actual state rather than assuming, then writes a go/no-go report listing every blocker that must clear before ship and the residual risks. Use this for a release readiness review, a go/no-go decision, a pre-launch checklist, a ship-readiness gate, a launch review, or deciding if a change is safe to deploy — it produces an evidence-backed ship decision rather than a gut-feel 'looks good'.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the readiness checklist | Reviewer | lock the release scope + a go/no-go checklist |
| 2 | Verify readiness | Developer | check each item against the real state |
| 3 | Write the go/no-go report | Reviewer | ship decision + blockers + residual risk |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "release readiness review" or "are we ready to ship" or "go no go decision" or "pre-launch checklist" or "is this safe to deploy" or "ship readiness review" in chat to start it.
