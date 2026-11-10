# Version Bump

Perform a coordinated, semver-correct version bump across a project — deciding MAJOR/MINOR/PATCH from the actual change set, then updating every place the version is stamped in lockstep (package manifest(s), version constant, lockfile, badges, docs) plus the changelog header, so nothing drifts out of sync. A planner determines the correct semver level and enumerates every file that carries the version, a developer applies the bump everywhere consistently, and a reviewer verifies no location was missed and the new version is internally consistent. Use this when 'bumping the version', preparing a tag, or releasing a new package version where a half-applied bump (manifest says 2.0.0 but the constant says 1.9.0) is a classic ship bug.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the bump | Planner | pick the semver level and enumerate every version-bearing file |
| 2 | Apply the bump | Developer | update every version location in lockstep |
| 3 | Verify consistency | Reviewer | confirm no location drifted and the bump is consistent |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "bump the version" or "release a new version" or "set version to 2.0.0" or "prepare a version tag" or "semver bump" in chat to start it.
