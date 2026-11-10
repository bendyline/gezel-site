# Command-Line Tool

Build a command-line tool with subcommands, flags, arguments, help text, and proper exit codes. Designs the CLI UX FIRST — the command surface, flags with defaults, positional args, help/usage output, and exit-code conventions — because a CLI's contract is its interface, then implements argument parsing and command logic, then writes tests for parsing, help, happy paths, and error exits. Covers argv parsing, subcommands, --flags and -short forms, --help, stdin/stdout/stderr conventions, and non-zero exit codes on error.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | CLI UX scope | Planner | lock the command surface, flags, args, exit codes |
| 2 | Build the CLI | Developer | implement parsing + command logic |
| 3 | Write CLI tests | Developer | test parsing, help, happy paths, error exits |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "build a cli tool" or "command line tool" or "make a terminal command" or "cli with subcommands" or "argv parser" in chat to start it.
