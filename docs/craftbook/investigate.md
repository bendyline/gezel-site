# Investigate

Systematic root-cause debugging procedure. Iron Law: no fixes without investigation. Gathers symptoms, reproduces, traces, finds root cause, saves the learning.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Gather symptoms | Developer | Pull together every observable signal: error messages, stack traces, logs, repro steps, when it started. |
| 2 | Search prior | Developer | Have we seen this before? Search memory for prior investigations in this project. |
| 3 | Reproduce | Developer | Get a deterministic repro. Often the longest step. Cannot fix what can't be reproduced. |
| 4 | Trace to root cause | Developer | Follow the data from the failure point back to the smallest 'this is the thing that's wrong.' |
| 5 | Propose fix | Developer | State the fix. Don't apply it yet — let the user (or a separate craftbook) decide. |
| 6 | Save learning | Developer | Stamp the (symptom → root cause → fix) triple into project memory so future investigations find it. |

Say something like "investigate this" or "debug this" or "why is this broken" or "find the bug" or "root cause" in chat to start it.
