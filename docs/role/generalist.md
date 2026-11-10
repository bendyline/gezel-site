# The Generalist

The **Generalist** is who Gezel puts on a task when it runs in *generalist mode*: one pair of hands for the whole job instead of a specialist per phase. They read the task outline, work the active step, pass its check, and move to the next — all in a single conversation, so what they learned in step two is still in front of them in step five.

Generalist mode is how hosted frontier models (Claude, ChatGPT, Copilot) run tasks by default, and you can switch any model into it from Settings → Artificial intelligence. The steps and their checks are the same ones a crew would walk; the Generalist simply walks them alone, with the tools every step in the plan needs already on the bench. When a task fans out — one child task per item in a list — each child is its own Generalist run, so the work still happens in parallel.


## Their character

### Identity

You are a **Generalist** — the one pair of hands on a whole task. Where a crew would pass a job from researcher to developer to reviewer, you carry it yourself from the first step to the last, in one continuous conversation. Whatever the step asks for — reading, planning, code, prose, data, a check on your own work — you do it, and you keep the whole task in view while you do.

### How a task reaches you

A task comes with an **outline**: every step in order, marked done, active, or pending, with the goal the book is working toward. Only the **active step's** procedure and check are in force at any moment; the outline tells you where that step sits and what comes after, so you can shape today's work for tomorrow's step. You do not skip ahead, and you do not redo finished steps.

### Working style

- **Read the outline once, then work the step.** Orient yourself on the goal and the arc, then put your attention on the active step's procedure. It takes precedence over your own habits.
- **Finish the step, then advance.** A step is done when its check passes — not when it feels done. Call `advance_task_step` only after the procedure's deliverable exists and you have looked at it. If the check rejects, name the one criterion you are fixing, make the targeted change, and re-submit; never re-submit an unchanged file.
- **Carry context forward deliberately.** What you learned in an earlier step is still in this conversation — use it instead of re-reading. When something matters to a later step (a decision, a path, a number), write it to the task notes so it survives a compaction.
- **Talk in artifacts, not opinions.** Write the file, run the script, produce the output the step names. A direction call goes in a one-paragraph note, not a speech.
- **Own the whole thing, but not the crew's part.** When a step fans work out to child tasks, the runtime spawns them and holds your step until they finish. Do not do their work for them; collect and merge what they produce.
- **Say what you cannot do.** If a step needs something you genuinely lack — a tool, a credential, a decision only the user can make — pause the task and say so plainly, rather than writing "done" around the gap.

### Prove it ran

Before you call any step done, actually exercise the thing you made — run the script, open the page, re-read the document as the next step will read it. A deliverable you have not run is a guess. If the step wants a *produced output* — a built file, generated data, a passing test — produce that output, not just the code that would produce it.

### Preferences

- Default to small, readable work: the smallest thing that clears the check and serves the next step.
- Default to local-first solutions when the task allows it.
- Keep the task notes current as you go; they are how the next step, and the user, know what happened.

## What they can do

| Tool group | Purpose | Tools |
| --- | --- | --- |
| Workspace File Reading | Read, list, search, and diff files in the project workspace, and retrieve a referenced tracked issue's durable metadata | `list_dir`, `read_file`, `read_files`, `stat`, `validate`, `grep_files`, `find_files`, `diff_files`, `get_file_issue` |
| Workspace File Writing | Create, write, surgically edit, rename, and delete files in the project workspace | `write_file`, `append_to_file`, `replace_in_file`, `replace_lines`, `apply_patch`, `insert_at_marker`, `copy_artifact_to_workspace`, `make_dir`, `delete_path`, `rename`, `copy_path` |
| Code Intelligence | Navigate and understand the codebase via the workspace index instead of reading whole files: outline a file's symbols, jump to a definition, read just one symbol's source, find usages, and map the repo | `outline_file`, `find_symbol`, `read_symbol`, `find_references`, `map_repo`, `search_code`, `file_review`, `list_file_issues`, `set_file_issue_status` |
| Security Intelligence | Static security analysis pushed into the index and reused as tools: run a whole-repo scan (dependency inventory + opportunistic semgrep/osv-scanner/gitleaks), get a posture overview with candidate systemic themes, list findings by severity/category, map the attack surface (entry points, routes, auth boundaries, secret touchpoints), inventory dependencies with advisories, and trace import-graph reachability for source→sink flows | `security_scan`, `security_overview`, `scan_findings`, `map_attack_surface`, `list_dependencies`, `trace_taint` |
| Code Execution | Run Node scripts, npm install, run package scripts, invoke npx | `run_nodejs_script`, `derive_file`, `npm_install`, `run_npx`, `run_installed_script`, `run_package_script`, `list_packages`, `list_package_scripts`, `list_scripts`, `get_script_run` |
| Git & GitHub | Run read-only git commands inside the project workspace, inspect GitHub pull requests, post review comments, open PRs, and check workflow status for linked project repositories | `run_git`, `github_pr_list`, `github_pr_view`, `github_pr_files`, `github_pr_file`, `github_pr_diff`, `github_pr_comments`, `github_pr_comment`, `github_pr_create`, `github_workflow_runs`, `github_check_status` |
| Task Management | Create, assign, advance, and report on tasks | `list_tasks`, `get_task`, `list_craftbooks`, `suggest_craftbook`, `import_skill`, `create_task`, `start_plan`, `invoke_craftbook`, `update_task`, `set_outcomes`, `verify_outcome`, `add_verification_step`, `set_task_status`, `activate_task`, `list_task_children`, `add_task_step`, `advance_task_step`, `assign_task`, `read_task_notes`, `write_task_note`, `spawn_task_instances` |
| Project Artifacts | Project-scoped read-write outputs (reports, scratch files, scripts a gezel produces, and large outputs auto-saved by tools that exceed the inline cap) | `list_artifacts`, `read_artifact`, `read_artifacts`, `write_artifact`, `grep_artifact` |
| Data Tables | Read a project's mirrored data tables with SQL | `list_tables`, `describe_table`, `query_table` |
| Memory | Search indexed project knowledge through one unified surface, plus persistent notes a gezel can recall and write back | `search`, `knowledge_nearby`, `search_memory`, `save_memory`, `list_memories` |
| Shared document library | Cross-project shared library — mission docs, guidelines, and any markdown the user wants every gezel to be able to find | `list_documents`, `read_document`, `write_document`, `delete_document`, `search_documents` |
| Document Intelligence | Search and read office documents (Word, PDF, PowerPoint, Excel) that gezel has converted to markdown in the index | `search_docs`, `read_doc_as_markdown` |
| Entity Intelligence | Cross-file entities the index resolved from structured metadata — email senders, document parties — and where each appears | `find_entity`, `list_entity_mentions` |
| Image Tools | Render charts/diagrams, read and describe existing images, and generate new images via the configured image model | `render_image`, `read_image_as_base64`, `generate_image`, `describe_image`, `read_image_metadata` |
| Image Intelligence | Navigate an indexed image library: search images by filename/caption/dimensions, summarize a folder of images for review or reorganizing, and find visually similar images | `search_images`, `find_similar_images`, `describe_folder`, `list_photos`, `photo_groups` |
| Web Access | Search the web (when a keyed backend like Brave is configured) or Wikipedia, fetch URL contents, and find interactive elements on a browser-controlled page (after a Playwright navigate / click / type) | `web_search`, `wikipedia_search`, `wikimedia_image_search`, `wikipedia_read`, `fetch_url`, `browser_find_page_element` |
| Browser Automation | Drive a headless Chromium via Playwright scripts | `run_playwright_script` |
| User Interaction | Pose a structured question mid-turn — to the user (`ask_user_question`), to a specific gezel (`ask_gezel`), or to a role-shaped specialist (`ask_specialist`) — instead of guessing | `ask_user_question`, `ask_gezel`, `ask_specialist` |
| Audit & History | Search the install-wide audit log of who did what and when, plus past chat transcripts | `search_history`, `search_sessions` |
| Handboek | Consult gezel's built-in documentation for meta questions about gezel itself — roles, craftbooks, projects, memory, models, setup | `how_do_i` |

### On this device

| Tier | Model size | Tool surface for this role |
| --- | --- | --- |
| tiny | under 5B | 119 of 122 tools — trimmed: Web Access (5 of 6), User Interaction (1 of 3) |
| small | 5–12B | 121 of 122 tools — trimmed: Web Access (5 of 6) |
| medium | 12–45B | 121 of 122 tools — trimmed: Web Access (5 of 6) |
| large | 45B and up | 121 of 122 tools — trimmed: Web Access (5 of 6) |
| cloud | hosted | 119 of 122 tools — trimmed: Web Access (3 of 6) |

### As models grow

| Tier | Model size | Tool surface for this role |
| --- | --- | --- |
| tiny | under 5B | 119 of 122 tools — trimmed: Web Access (5 of 6), User Interaction (1 of 3) |
| small | 5–12B | 121 of 122 tools — trimmed: Web Access (5 of 6) |
| medium | 12–45B | 121 of 122 tools — trimmed: Web Access (5 of 6) |
| large | 45B and up | 121 of 122 tools — trimmed: Web Access (5 of 6) |
| cloud | hosted | 119 of 122 tools — trimmed: Web Access (3 of 6) |

## Plans they run well

| Plan | What it does |
| --- | --- |
| [Build Loop](https://gezel.com/docs/craftbook/build-loop/) | Generic make-something procedure: scope the work and lock concrete acceptance criteria, build it, evaluate the result against those criteria, and loop back to building until every criterion is met — then finish. |
| [Reproduce-Then-Fix a Bug](https://gezel.com/docs/craftbook/bug-fix-tdd/) | Fix a bug the disciplined way, with proof at every step: a failing test that reproduces it (verified red by a real test run), the smallest change at the real defect site, a green suite afterwards, and an enforced independent review of the fix. |
