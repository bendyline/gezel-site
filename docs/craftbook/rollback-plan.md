# Rollback Plan

Author a concrete, tested rollback plan for a release so that when a deploy goes wrong the team can revert FAST and safely without improvising under pressure — covering the trigger conditions that mean 'roll back', the exact reversal steps (redeploy previous artifact, down-migrations, flag flips, cache/CDN invalidation), data-safety and forward/backward-compatibility considerations, the recovery-time estimate, and a post-rollback verification. A planner scopes the failure modes and triggers, a developer writes the precise step-by-step runbook with real commands, and a reviewer dry-runs it for correctness and irreversible-data hazards. Use this alongside any risky deploy, migration, or feature launch where 'how do we undo this' must be answered before, not during, an incident.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope failure modes and triggers | Planner | define what 'roll back' means and when to pull the trigger |
| 2 | Write the rollback runbook | Developer | produce precise, ordered reversal steps with real commands |
| 3 | Dry-run and review | Reviewer | trace the steps for correctness and data hazards |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "write a rollback plan" or "how do we roll back this release" or "revert plan for deploy" or "rollback runbook" or "undo the deploy safely" in chat to start it.
