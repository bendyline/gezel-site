# Tools and toolsets

Tools are Gezel's hands: without them, an AI model can only talk. Gezel's tools are bundled into named **groups**, and each role carries the groups that fit its trade — a reviewer gets file reading, a developer gets file writing and code execution, a coordinator gets team management. You can add or remove groups for each crew member, and third-party toolsets from the catalog extend the set further.

[Add-on toolsets and connectors](https://gezel.com/docs/toolset-catalog/) on gezel.com lists what you can add beyond the built-in groups, and [every project type](https://gezel.com/docs/project-types-index/) shows the ready-made project setups.

Calls through Gezel's built-in tool groups are mediated by its policy, consent, and audit layers. Provider-native tools, approved package commands, and third-party MCP servers have different boundaries; the [security model](https://gezel.com/docs/security-model/) explains those exceptions.

## Custom MCP toolsets

In any Toolsets panel, choose **Add toolset → Custom MCP** to import a local JSON file or paste its contents. Gezel understands both common configuration envelopes:

- VS Code workspace format: a top-level `servers` object.
- Claude/Cursor format: a top-level `mcpServers` object.

Both local `stdio` servers and remote Streamable HTTP/SSE servers are supported. Imported environment values and HTTP headers go into Gezel's secret store rather than the ordinary installed-toolsets JSON. Every provider loads both kinds, except Codex CLI, which reaches a hosted server only over Streamable HTTP and leaves SSE entries out of its sessions. A Claude CLI session gets only the servers Gezel gives it, never your own Claude settings or claude.ai connectors.

For third-party options, the toolset browser also lists thousands of community MCP servers, marked **Community**. Review a community server before adding it; these entries are outside Gezel's first-party toolsets.

A project can also declare its approved MCP toolsets as files in its working folder. Gezel discovers `.gezel/mcp.json`, `.vscode/mcp.json`, and the common root `.mcp.json` automatically. When names overlap, the Gezel-specific file wins, then VS Code, then the root file. Changing one of these files rebuilds that project's MCP bridges, so the new set applies on the next turn.

Project-file discovery is project consent, not a way around the install-wide security posture: unconfined third-party MCP servers remain available only when non-builtin toolsets are enabled by **Settings → Security & compliance**. VS Code `${input:…}` prompt variables are not imported because they need an interactive value; use an environment variable or literal value instead.

## The built-in groups

### Memory

Search indexed project knowledge through one unified surface, plus persistent notes a gezel can recall and write back. The generic search spans workspace content, artifacts, project/gezel memory, and shared documents.

Tools: `search`, `knowledge_nearby`, `search_memory`, `save_memory`, `list_memories`

### Workspace File Reading

Read, list, search, and diff files in the project workspace, and retrieve a referenced tracked issue's durable metadata. Mirrors Node's `fs` reads plus content/glob search. Diagnose-only — pair with `workspace-fs-write` to actually mutate.

Tools: `list_dir`, `read_file`, `read_files`, `stat`, `validate`, `grep_files`, `find_files`, `diff_files`, `get_file_issue`

### Code Intelligence

Navigate and understand the codebase via the workspace index instead of reading whole files: outline a file's symbols, jump to a definition, read just one symbol's source, find usages, and map the repo. Every result carries line ranges so the model reads only the span it needs — a big context saver for small/medium local models.

Tools: `outline_file`, `find_symbol`, `read_symbol`, `find_references`, `map_repo`, `search_code`, `file_review`, `list_file_issues`, `set_file_issue_status`

### Security Intelligence

Static security analysis pushed into the index and reused as tools: run a whole-repo scan (dependency inventory + opportunistic semgrep/osv-scanner/gitleaks), get a posture overview with candidate systemic themes, list findings by severity/category, map the attack surface (entry points, routes, auth boundaries, secret touchpoints), inventory dependencies with advisories, and trace import-graph reachability for source→sink flows. The substrate for a deep, systemic security review.

Tools: `security_scan`, `security_overview`, `scan_findings`, `map_attack_surface`, `list_dependencies`, `trace_taint`

### Document Intelligence

Search and read office documents (Word, PDF, PowerPoint, Excel) that gezel has converted to markdown in the index. Keyword-search across a document corpus and read any document as scannable markdown on demand — no need to wrestle with binary files.

Tools: `search_docs`, `read_doc_as_markdown`

### Image Intelligence

Navigate an indexed image library: search images by filename/caption/dimensions, summarize a folder of images for review or reorganizing, and find visually similar images. Built for folder-operations over large image collections.

Tools: `search_images`, `find_similar_images`, `describe_folder`, `list_photos`, `photo_groups`

### Entity Intelligence

Cross-file entities the index resolved from structured metadata — email senders, document parties — and where each appears. Ask "every email from X" or "every contract naming Y" and get a dated, cross-file view.

Tools: `find_entity`, `list_entity_mentions`

### Workspace File Writing

Create, write, surgically edit, rename, and delete files in the project workspace. Always paired with `workspace-fs-read` for the roles that build (developer, designer, reviewer); split out so coordinator roles (crew lead) can investigate without being tempted to do the building themselves.

Tools: `write_file`, `append_to_file`, `replace_in_file`, `replace_lines`, `apply_patch`, `insert_at_marker`, `copy_artifact_to_workspace`, `make_dir`, `delete_path`, `rename`, `copy_path`

### Archive Tools

List and extract zip / tar archives in the workspace.

Tools: `list_archive`, `extract_archive`

### Reference Reading

Read and search shared documents and knowledge sources without changing the library.

Tools: `list_documents`, `read_document`, `search_documents`

### Shared document library

Cross-project shared library — mission docs, guidelines, and any markdown the user wants every gezel to be able to find.

Tools: `list_documents`, `read_document`, `write_document`, `delete_document`, `search_documents`

### Project Artifacts

Project-scoped read-write outputs (reports, scratch files, scripts a gezel produces, and large outputs auto-saved by tools that exceed the inline cap).

Tools: `list_artifacts`, `read_artifact`, `read_artifacts`, `write_artifact`, `grep_artifact`

### Cameras and Lookouts

See what a project camera sees right now, list the person's lookouts, and propose a new lookout for them to approve. What a camera recorded earlier is in its event records, read as files.

Tools: `look_at_camera`, `list_lookouts`, `propose_lookout`

### Data Tables

Read a project's mirrored data tables with SQL. `list_tables` shows what is there, `describe_table` explains a table's columns and units, and `query_table` runs one read-only query and returns the answer — never the underlying rows, which is what lets a table be far larger than the context window.

Tools: `list_tables`, `describe_table`, `query_table`

### Task Management

Create, assign, advance, and report on tasks. The full task surface including notes, steps, and child instance spawning.

Tools: `list_tasks`, `get_task`, `list_craftbooks`, `suggest_craftbook`, `import_skill`, `create_task`, `start_plan`, `invoke_craftbook`, `update_task`, `set_outcomes`, `verify_outcome`, `add_verification_step`, `set_task_status`, `activate_task`, `list_task_children`, `add_task_step`, `advance_task_step`, `assign_task`, `read_task_notes`, `write_task_note`, `spawn_task_instances`

### Plan Authoring

Read and write a whole craftbook, add/remove/reorder steps, set the entry step, and attach focused deliverable gates. `craftbook_write` is the atomic create/replace path; the large surgical update schema is loaded only inside an explicit craftbook-editing session. The unified surface targets either a task's embedded craftbook or a standalone local template.

Tools: `craftbook_read`, `craftbook_write`, `craftbook_add_step`, `set_step_deliverable`, `craftbook_remove_step`, `craftbook_reorder_steps`, `craftbook_set_entry`, `craftbook_update`, `export_task_craftbook`

### Task Visibility

Read-only task surface for delegation roles — list tasks, inspect a specific task, read its notes. The "ping projects to see status" subset, without any of the mutation tools (create, update, assign, status, advance) that belong to the assignee or crew lead. Pair with `team-management` for a complete delegation surface.

Tools: `list_tasks`, `get_task`, `list_craftbooks`, `suggest_craftbook`, `read_task_notes`

### Task Oversight

Coordinator controls for running work: pause, resume or cancel a task, reassign it, and leave it a note. Deliberately excludes authoring, advancing and completing — those stay with the assignee and its step gates.

Tools: `manage_task`, `assign_task`, `write_task_note`

### Plan Launcher

Procedure-first task launch surface for coordinators: rank applicable craftbooks and invoke a selected recipe after its required setup is ready.

Tools: `list_craftbooks`, `suggest_craftbook`, `invoke_craftbook`

### Work Routing

One ranked list of every way to handle a request — a craftbook, a typed or new project, a task here, recurring work, or a verdict to answer or ask — and one call that starts the option chosen. Replaces the craftbook launcher and the project macros for a coordinator; gated by the `tools.work-routing` behavior, so no role kit lists it.

Tools: `suggest_work`, `start_work`

### Team & Project Management

Spin up other gezels, message them, browse the gilde of templates, and manage projects + project membership. The Meester surface.

Tools: `list_gezels`, `create_gezel`, `update_gezel`, `ensure_gezel`, `message_gezel`, `list_projects`, `start_project`, `fetch_repo`, `fetch_diff`, `update_project`, `list_gilde`, `list_project_types`, `apply_project_type`, `start_project_from_type`, `list_project_gezels`, `add_gezel_to_project`, `remove_gezel_from_project`, `list_suggested_work`, `enable_suggested_work`, `disable_suggested_work`

### AI Apps

Package a configured project into a shareable .gezapp bundle and install one back. Deliberately in no role default: this is a distribution chore the user drives from Settings or the `gezel app` CLI, not something a gezel reaches for mid-conversation. Install it on a gezel whose actual job is publishing app bundles.

Tools: `export_ai_app`, `import_ai_app`

### Audio

Speech-to-text (`transcribe_audio`) and text-to-speech (`synthesize_speech`). Heavy — only useful for gezels that do voice work.

Tools: `transcribe_audio`, `synthesize_speech`

### Code Execution

Run Node scripts, npm install, run package scripts, invoke npx. Sandboxed to the project workspace.

Tools: `run_nodejs_script`, `derive_file`, `npm_install`, `run_npx`, `run_installed_script`, `run_package_script`, `list_packages`, `list_package_scripts`, `list_scripts`, `get_script_run`

### Browser Automation

Drive a headless Chromium via Playwright scripts. Heavy — only useful for gezels that genuinely need browser work.

Tools: `run_playwright_script`

### Git & GitHub

Run read-only git commands inside the project workspace, inspect GitHub pull requests, post review comments, open PRs, and check workflow status for linked project repositories.

Tools: `run_git`, `github_pr_list`, `github_pr_view`, `github_pr_files`, `github_pr_file`, `github_pr_diff`, `github_pr_comments`, `github_pr_comment`, `github_pr_create`, `github_workflow_runs`, `github_check_status`

### Web Access

Search the web (when a keyed backend like Brave is configured) or Wikipedia, fetch URL contents, and find interactive elements on a browser-controlled page (after a Playwright navigate / click / type). `web_search` only registers when a real keyed backend is configured; `wikipedia_search` / `wikipedia_read` only register for non-cloud models (cloud models already have Wikipedia in training). Wikipedia search results arrive with article lead text already included, so reading a result does not need a follow-up fetch.

Tools: `web_search`, `wikipedia_search`, `wikimedia_image_search`, `wikipedia_read`, `fetch_url`, `browser_find_page_element`

### Image Tools

Render charts/diagrams, read and describe existing images, and generate new images via the configured image model.

Tools: `render_image`, `read_image_as_base64`, `generate_image`, `describe_image`, `read_image_metadata`

### Video Tools

Generate short video clips via the configured local video model (LTX / WAN).

Tools: `generate_video`

### Audit & History

Search the install-wide audit log of who did what and when, plus past chat transcripts.

Tools: `search_history`, `search_sessions`

### Help

Consult gezel's built-in documentation for meta questions about gezel itself — roles, craftbooks, projects, memory, models, setup. In every role's kit so a gezel answers 'how does gezel work?' from the real docs instead of guessing.

Tools: `how_do_i`

### Advisers

Ask an existing gezel or a specialist for advice to bring back into the conversation.

Tools: `list_gezels`, `ask_gezel`, `ask_specialist`

### User Interaction

Pose a structured question mid-turn — to the user (`ask_user_question`), to a specific gezel (`ask_gezel`), or to a role-shaped specialist (`ask_specialist`) — instead of guessing.

Tools: `ask_user_question`, `ask_gezel`, `ask_specialist`

### Role Delegation (downward)

Hand work to a teammate by ROLE instead of by name: `delegate_<role>` (async hand-off) and `consult_<role>` (sync question) for each doer role — developer, designer, reviewer, planner, researcher, builder, writer, image-generator. The target lives in the tool identity (no free-text `gezel`/`role` argument), which small/medium local models route far more reliably. Each resolves to the project gezel of that role, creating one on demand. Orchestrator (Meester/crew lead) surface; gated by the `tools.gezels-as-roles` behavior.

Tools: `delegate_developer`, `consult_developer`, `delegate_designer`, `consult_designer`, `delegate_reviewer`, `consult_reviewer`, `delegate_planner`, `consult_planner`, `delegate_researcher`, `consult_researcher`, `delegate_builder`, `consult_builder`, `delegate_writer`, `consult_writer`, `delegate_image_generator`, `consult_image_generator`

### Role Delegation (escalation)

Reach a coordination role by ROLE: `delegate_voorman` / `consult_voorman` (the crew lead) and `delegate_meester` / `consult_meester`. The escalation counterpart to `role-delegation` — lets a specialist hand work or questions UP to their crew lead or the Meester. Gated by the `tools.gezels-as-roles` behavior.

Tools: `delegate_voorman`, `consult_voorman`, `delegate_meester`, `consult_meester`
