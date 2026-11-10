# Reusable Library Package

Build a reusable library/SDK with a clean public API surface, sensible defaults, and published documentation. Designs the public API FIRST — exported functions/classes, signatures, types, error contract, and what stays internal — because a library's API is a long-lived promise, then implements it, then writes user-facing docs with installation, quickstart, and a worked example per public function. Covers public-vs-private surface, function signatures, JSDoc/typedoc, README, semantic versioning posture, and usage examples.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Public API design | Planner | lock exports, signatures, types, error contract |
| 2 | Build the library | Developer | implement the public API + internals |
| 3 | Write the docs | Copywriter | README with install, quickstart, per-function examples |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "build a library" or "create an sdk" or "make a reusable package" or "publish a module" or "library with a public api" in chat to start it.
