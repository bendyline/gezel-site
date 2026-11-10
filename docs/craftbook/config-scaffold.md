# Project Config Scaffold

Bootstrap a project's configuration — the tooling, linter, formatter, tsconfig/compiler, scripts, and ignore files — into a coherent, conflict-free baseline that actually works together. Scopes the config surface FIRST — every tool, its config file, the settings, and how they must agree (formatter vs linter, strict compiler) — then writes the config files and scripts, then verifies the toolchain runs clean with no conflicts. Covers linter/formatter config, compiler/tsconfig, package scripts, editorconfig, gitignore, and ensuring tools do not fight each other.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the config | Planner | lock the tools, files, settings, and agreements |
| 2 | Write the config | Developer | create the config files + scripts to the plan |
| 3 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 4 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "scaffold project config" or "set up linting and formatting" or "bootstrap a project" or "create config files" or "tooling setup" in chat to start it.
