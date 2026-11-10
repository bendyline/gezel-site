# The Web Developer

The **Web Developer** is a Developer who ships things you can click. Beyond the code tools, they drive a real browser: load the page they just changed, see what rendered, and fix what didn't — the look-then-fix loop that frontend work actually needs.

Use them for sites, dashboards, and web apps; pair them with a Designer for the visual direction and a Reviewer before anything user-facing goes out.


## Their character


## What they can do

| Tool group | Purpose | Tools |
| --- | --- | --- |
| Workspace File Reading | Read, list, search, and diff files in the project workspace, and retrieve a referenced tracked issue's durable metadata | `list_dir`, `read_file`, `read_files`, `stat`, `validate`, `grep_files`, `find_files`, `diff_files`, `get_file_issue` |
| Workspace File Writing | Create, write, surgically edit, rename, and delete files in the project workspace | `write_file`, `append_to_file`, `replace_in_file`, `replace_lines`, `apply_patch`, `insert_at_marker`, `copy_artifact_to_workspace`, `make_dir`, `delete_path`, `rename`, `copy_path` |
| Code Intelligence | Navigate and understand the codebase via the workspace index instead of reading whole files: outline a file's symbols, jump to a definition, read just one symbol's source, find usages, and map the repo | `outline_file`, `find_symbol`, `read_symbol`, `find_references`, `map_repo`, `search_code`, `file_review`, `list_file_issues`, `set_file_issue_status` |
| Code Execution | Run Node scripts, npm install, run package scripts, invoke npx | `run_nodejs_script`, `derive_file`, `npm_install`, `run_npx`, `run_installed_script`, `run_package_script`, `list_packages`, `list_package_scripts`, `list_scripts`, `get_script_run` |
| Git & GitHub | Run read-only git commands inside the project workspace, inspect GitHub pull requests, post review comments, open PRs, and check workflow status for linked project repositories | `run_git`, `github_pr_list`, `github_pr_view`, `github_pr_files`, `github_pr_file`, `github_pr_diff`, `github_pr_comments`, `github_pr_comment`, `github_pr_create`, `github_workflow_runs`, `github_check_status` |
| Task Management | Create, assign, advance, and report on tasks | `list_tasks`, `get_task`, `list_craftbooks`, `suggest_craftbook`, `import_skill`, `create_task`, `start_plan`, `invoke_craftbook`, `update_task`, `set_outcomes`, `verify_outcome`, `add_verification_step`, `set_task_status`, `activate_task`, `list_task_children`, `add_task_step`, `advance_task_step`, `assign_task`, `read_task_notes`, `write_task_note`, `spawn_task_instances` |
| Project Artifacts | Project-scoped read-write outputs (reports, scratch files, scripts a gezel produces, and large outputs auto-saved by tools that exceed the inline cap) | `list_artifacts`, `read_artifact`, `read_artifacts`, `write_artifact`, `grep_artifact` |
| Data Tables | Read a project's mirrored data tables with SQL | `list_tables`, `describe_table`, `query_table` |
| Memory | Search indexed project knowledge through one unified surface, plus persistent notes a gezel can recall and write back | `search`, `knowledge_nearby`, `search_memory`, `save_memory`, `list_memories` |
| User Interaction | Pose a structured question mid-turn — to the user (`ask_user_question`), to a specific gezel (`ask_gezel`), or to a role-shaped specialist (`ask_specialist`) — instead of guessing | `ask_user_question`, `ask_gezel`, `ask_specialist` |
| Web Access | Search the web (when a keyed backend like Brave is configured) or Wikipedia, fetch URL contents, and find interactive elements on a browser-controlled page (after a Playwright navigate / click / type) | `web_search`, `wikipedia_search`, `wikimedia_image_search`, `wikipedia_read`, `fetch_url`, `browser_find_page_element` |
| Handboek | Consult gezel's built-in documentation for meta questions about gezel itself — roles, craftbooks, projects, memory, models, setup | `how_do_i` |

### On this device

| Tier | Model size | Tool surface for this role |
| --- | --- | --- |
| tiny | under 5B | 91 of 94 tools — trimmed: User Interaction (1 of 3), Web Access (5 of 6) |
| small | 5–12B | 93 of 94 tools — trimmed: Web Access (5 of 6) |
| medium | 12–45B | 93 of 94 tools — trimmed: Web Access (5 of 6) |
| large | 45B and up | 93 of 94 tools — trimmed: Web Access (5 of 6) |
| cloud | hosted | 91 of 94 tools — trimmed: Web Access (3 of 6) |

### As models grow

| Tier | Model size | Tool surface for this role |
| --- | --- | --- |
| tiny | under 5B | 91 of 94 tools — trimmed: User Interaction (1 of 3), Web Access (5 of 6) |
| small | 5–12B | 93 of 94 tools — trimmed: Web Access (5 of 6) |
| medium | 12–45B | 93 of 94 tools — trimmed: Web Access (5 of 6) |
| large | 45B and up | 93 of 94 tools — trimmed: Web Access (5 of 6) |
| cloud | hosted | 91 of 94 tools — trimmed: Web Access (3 of 6) |

## Plans they run well

| Plan | What it does |
| --- | --- |
| [CRUD Web App](https://gezel.com/docs/craftbook/web-app-crud/) | Build a small single-file CRUD web app — a todo list, notes, contacts, or inventory manager — with create, read, update, and delete plus localStorage persistence so data survives a reload. |
| [Installable Offline PWA](https://gezel.com/docs/craftbook/pwa-offline/) | Build an installable Progressive Web App that works offline — an HTML app shell, a web app manifest, and a service worker that caches the shell so it loads with no network. |
| [Landing Page](https://gezel.com/docs/craftbook/landing-page/) | Build a single high-conversion landing page for one offer — a product, signup, waitlist, or download — with a focused hero, benefits, social proof, and one primary call to action above and below the fold. |
| [Metrics / Admin Dashboard](https://gezel.com/docs/craftbook/spa-dashboard/) | Build a single-page metrics or admin dashboard with KPI summary cards, at least one chart, and a data table, rendered from sample or provided data. |
| [Portfolio Site](https://gezel.com/docs/craftbook/portfolio-site/) | Build a personal or professional portfolio site that showcases projects, an about/bio, and contact links in a single polished page. |
