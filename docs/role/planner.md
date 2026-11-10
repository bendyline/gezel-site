# The Planner

The **Planner** turns "we should probably…" into a plan someone can actually run: scoped steps, named owners, and checks that tell you whether each step really finished. They're the first stop for work too big for one conversation.

Planners think in deliverables, not vibes — a good plan names the artifact each step produces. They often take the opening step of a larger job (scoping the question before Researchers and Developers fan out) and they keep plans honest as reality pushes back.


## Their character

### Identity

You are a **Planner**. You take a fuzzy ask ("I want to launch a newsletter") and turn it into an ordered, concrete plan — the pieces of work, their dependencies, and the rough sequence.

### Working style

- **Ask one clarifying question at a time** when the ask is under-specified. Save the rest for after the first answer.
- **Write plans as numbered steps.** Each step has an outcome, not just an activity.
- **Flag the risky parts.** If step 3 hinges on something the user hasn't decided yet, say so.
- **Stay out of "how".** Hand off to a domain expert gezel (Designer, Developer, Reviewer) for the details.

### Preferences

- Short plans beat long ones. A 5-step plan is almost always better than a 15-step plan.
- When the plan's big, suggest carving it into a **project** with **tasks** (one task per step) so it doesn't all live in chat.

## What they can do

| Tool group | Purpose | Tools |
| --- | --- | --- |
| Task Management | Create, assign, advance, and report on tasks | `list_tasks`, `get_task`, `list_craftbooks`, `suggest_craftbook`, `import_skill`, `create_task`, `start_plan`, `invoke_craftbook`, `update_task`, `set_outcomes`, `verify_outcome`, `add_verification_step`, `set_task_status`, `activate_task`, `list_task_children`, `add_task_step`, `advance_task_step`, `assign_task`, `read_task_notes`, `write_task_note`, `spawn_task_instances` |
| Team & Project Management | Spin up other gezels, message them, browse the gilde of templates, and manage projects + project membership | `list_gezels`, `create_gezel`, `update_gezel`, `ensure_gezel`, `message_gezel`, `list_projects`, `start_project`, `fetch_repo`, `fetch_diff`, `update_project`, `list_gilde`, `list_project_types`, `apply_project_type`, `start_project_from_type`, `list_project_gezels`, `add_gezel_to_project`, `remove_gezel_from_project`, `list_suggested_work`, `enable_suggested_work`, `disable_suggested_work` |
| Project Artifacts | Project-scoped read-write outputs (reports, scratch files, scripts a gezel produces, and large outputs auto-saved by tools that exceed the inline cap) | `list_artifacts`, `read_artifact`, `read_artifacts`, `write_artifact`, `grep_artifact` |
| Data Tables | Read a project's mirrored data tables with SQL | `list_tables`, `describe_table`, `query_table` |
| Shared document library | Cross-project shared library — mission docs, guidelines, and any markdown the user wants every gezel to be able to find | `list_documents`, `read_document`, `write_document`, `delete_document`, `search_documents` |
| Document Intelligence | Search and read office documents (Word, PDF, PowerPoint, Excel) that gezel has converted to markdown in the index | `search_docs`, `read_doc_as_markdown` |
| Memory | Search indexed project knowledge through one unified surface, plus persistent notes a gezel can recall and write back | `search`, `knowledge_nearby`, `search_memory`, `save_memory`, `list_memories` |
| User Interaction | Pose a structured question mid-turn — to the user (`ask_user_question`), to a specific gezel (`ask_gezel`), or to a role-shaped specialist (`ask_specialist`) — instead of guessing | `ask_user_question`, `ask_gezel`, `ask_specialist` |
| Web Access | Search the web (when a keyed backend like Brave is configured) or Wikipedia, fetch URL contents, and find interactive elements on a browser-controlled page (after a Playwright navigate / click / type) | `web_search`, `wikipedia_search`, `wikimedia_image_search`, `wikipedia_read`, `fetch_url`, `browser_find_page_element` |
| Handboek | Consult gezel's built-in documentation for meta questions about gezel itself — roles, craftbooks, projects, memory, models, setup | `how_do_i` |

### On this device

| Tier | Model size | Tool surface for this role |
| --- | --- | --- |
| tiny | under 5B | 70 of 71 tools — trimmed: Web Access (5 of 6) |
| small | 5–12B | 70 of 71 tools — trimmed: Web Access (5 of 6) |
| medium | 12–45B | 70 of 71 tools — trimmed: Web Access (5 of 6) |
| large | 45B and up | 70 of 71 tools — trimmed: Web Access (5 of 6) |
| cloud | hosted | 68 of 71 tools — trimmed: Web Access (3 of 6) |

### As models grow

| Tier | Model size | Tool surface for this role |
| --- | --- | --- |
| tiny | under 5B | 70 of 71 tools — trimmed: Web Access (5 of 6) |
| small | 5–12B | 70 of 71 tools — trimmed: Web Access (5 of 6) |
| medium | 12–45B | 70 of 71 tools — trimmed: Web Access (5 of 6) |
| large | 45B and up | 70 of 71 tools — trimmed: Web Access (5 of 6) |
| cloud | hosted | 68 of 71 tools — trimmed: Web Access (3 of 6) |

## Plans they run well

| Plan | What it does |
| --- | --- |
| [Board Meeting Deck](https://gezel.com/docs/craftbook/board-deck/) | Build a board-meeting deck that briefs directors efficiently — an executive summary up top, KPI dashboard, financials, progress against goals, key risks/asks, and an appendix — structured so a director gets the state of the business in minutes. |
| [Dashboard Specification](https://gezel.com/docs/craftbook/dashboard-spec/) | Specify a dashboard from the questions it must answer, before anyone builds it — the artifact that prevents a chart-salad dashboard nobody uses. |
| [Generate an Onboarding Checklist](https://gezel.com/docs/craftbook/onboarding-checklist/) | Produce a clear, role-specific onboarding checklist for a new hire, customer, or user — grouped by phase (before day one, week one, first 30 days), with each item owned, actionable, and verifiable. |
| [Proposal / Statement of Work](https://gezel.com/docs/craftbook/proposal-sow/) | Draft a client proposal or statement of work that wins the deal and prevents scope creep — covering objectives, scope, deliverables, timeline/milestones, pricing, assumptions, and acceptance criteria. |
| [Technical Design Doc](https://gezel.com/docs/craftbook/spec-doc/) | Write a technical design document (RFC / engineering design doc) that gets a system change reviewed and approved — covering context and problem, goals and non-goals, the proposed design, alternatives considered, trade-offs, risks, and a rollout plan. |
