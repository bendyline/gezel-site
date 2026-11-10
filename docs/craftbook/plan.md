# Plan

Author a PLAN for a piece of work as a reviewable draft task: a strong 'about', a set of outcomes (what should be created or updated at success), an ordered series of build steps each gated on a concrete static deliverable, and a final verification step that checks the outcomes were kept. The user reviews the draft and activates it to run. Invoke via the start_plan tool. Use for 'plan this', 'make a plan', '/plan'.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Frame the goal | Planner | Write a strong 'about' and set the outcomes on the draft plan. |
| 2 | Design the build steps | Planner | Add ordered build steps to the draft, each gated on a concrete static deliverable. |
| 3 | Add the verification step | Planner | Append a terminal verification step that checks the outcomes were kept. |
| 4 | Review the plan | Planner | Sanity-check the whole plan before handing it to the user. |
| 5 | Hand off to the user | Planner | Summarize the plan and tell the user to review and activate it. |

Say something like "plan this" or "make a plan" or "plan for" or "/plan" in chat to start it.
