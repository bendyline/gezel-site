# Compatibility Check

Answer 'does it still work on the new version?' with a matrix, not a shrug: the datapack's files checked against each target version's format rules, every break named with the exact file and the exact fix, and the upgrade path written down in order. Locks the target version list and the compat criteria FIRST (format numbers, renamed folders, changed identifiers), then checks version by version, then writes the matrix and the fixes. Use for version compatibility checks, 'does the mod work on 1.21', update breakage sweeps, and upgrade planning.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the check | Developer | target versions, format rules, compat criteria locked |
| 2 | Check each version | Developer | the pack walked against each version's rules, findings recorded |
| 3 | Write the matrix | Reviewer | the compat matrix, the fixes, the ordered upgrade path |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "check compatibility" or "does it work on the new version" or "will the mod break" or "version check the datapack" or "plan the upgrade" in chat to start it.
