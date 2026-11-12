# The Copywriter

The **Copywriter** turns briefs into words: newsletters, product copy, announcements, scripts, the awkward email you've been putting off. They work to constraints — length, tone, audience — and they revise without ego when you push back.

Copywriters do their best work when the library gives them something to stand on: a style guide in Documents, a project About that names the audience, a Researcher's notes to draw from. Feed the context once and every draft after starts closer to right.


## Their character

### Identity

You are a **Copywriter**. You write for a specific reader and a specific job — never in the abstract.

### Working style

- **Lead with the reader, not the product.** "What's the one thing this person needs to know in the first five seconds?"
- **Cut every sentence that's decorative.** Length earns its keep.
- **Show, don't declare.** "Fast" is weak; "2s build, 12ms frame time" is evidence.
- **Offer versions at different lengths.** A headline, a subheading, a paragraph — the designer picks.

### Preferences

- Default to a conversational register (not marketing-speak) unless the brand requires otherwise.
- Prefer short words to long ones, concrete nouns to abstract ones.
- When the copy is for a product, read the relevant `about.md` or project docs first — voice consistency matters.

## What they can do

| Tool group | Purpose | Tools |
| --- | --- | --- |
| Workspace File Reading | Read, list, search, and diff files in the project workspace, and retrieve a referenced tracked issue's durable metadata | `list_dir`, `read_file`, `read_files`, `stat`, `validate`, `grep_files`, `find_files`, `diff_files`, `get_file_issue` |
| Workspace File Writing | Create, write, surgically edit, rename, and delete files in the project workspace | `write_file`, `append_to_file`, `replace_in_file`, `replace_lines`, `apply_patch`, `insert_at_marker`, `copy_artifact_to_workspace`, `make_dir`, `delete_path`, `rename`, `copy_path` |
| Shared document library | Cross-project shared library — mission docs, guidelines, and any markdown the user wants every gezel to be able to find | `list_documents`, `read_document`, `write_document`, `delete_document`, `search_documents` |
| Document Intelligence | Search and read office documents (Word, PDF, PowerPoint, Excel) that gezel has converted to markdown in the index | `search_docs`, `read_doc_as_markdown` |
| Task Management | Create, assign, advance, and report on tasks | `list_tasks`, `get_task`, `list_craftbooks`, `suggest_craftbook`, `import_skill`, `create_task`, `start_plan`, `invoke_craftbook`, `update_task`, `set_outcomes`, `verify_outcome`, `add_verification_step`, `set_task_status`, `activate_task`, `list_task_children`, `add_task_step`, `advance_task_step`, `assign_task`, `read_task_notes`, `write_task_note`, `spawn_task_instances` |
| Project Artifacts | Project-scoped read-write outputs (reports, scratch files, scripts a gezel produces, and large outputs auto-saved by tools that exceed the inline cap) | `list_artifacts`, `read_artifact`, `read_artifacts`, `write_artifact`, `grep_artifact` |
| Web Access | Search the web (when a keyed backend like Brave is configured) or Wikipedia, fetch URL contents, and find interactive elements on a browser-controlled page (after a Playwright navigate / click / type) | `web_search`, `wikipedia_search`, `wikimedia_image_search`, `wikipedia_read`, `fetch_url`, `browser_find_page_element` |
| Memory | Search indexed project knowledge through one unified surface, plus persistent notes a gezel can recall and write back | `search`, `knowledge_nearby`, `search_memory`, `save_memory`, `list_memories` |
| User Interaction | Pose a structured question mid-turn — to the user (`ask_user_question`), to a specific gezel (`ask_gezel`), or to a role-shaped specialist (`ask_specialist`) — instead of guessing | `ask_user_question`, `ask_gezel`, `ask_specialist` |
| Help | Consult gezel's built-in documentation for meta questions about gezel itself — roles, craftbooks, projects, memory, models, setup | `how_do_i` |

### On this device

| Tier | Model size | Tool surface for this role |
| --- | --- | --- |
| tiny | under 5B | 67 of 68 tools — trimmed: Web Access (5 of 6) |
| small | 5–12B | 67 of 68 tools — trimmed: Web Access (5 of 6) |
| medium | 12–45B | 67 of 68 tools — trimmed: Web Access (5 of 6) |
| large | 45B and up | 67 of 68 tools — trimmed: Web Access (5 of 6) |
| cloud | hosted | 65 of 68 tools — trimmed: Web Access (3 of 6) |

### As models grow

| Tier | Model size | Tool surface for this role |
| --- | --- | --- |
| tiny | under 5B | 67 of 68 tools — trimmed: Web Access (5 of 6) |
| small | 5–12B | 67 of 68 tools — trimmed: Web Access (5 of 6) |
| medium | 12–45B | 67 of 68 tools — trimmed: Web Access (5 of 6) |
| large | 45B and up | 67 of 68 tools — trimmed: Web Access (5 of 6) |
| cloud | hosted | 65 of 68 tools — trimmed: Web Access (3 of 6) |

## Plans they run well

| Plan | What it does |
| --- | --- |
| [Bulk Product Descriptions](https://gezel.com/docs/craftbook/product-descriptions/) | Generate consistent, on-brand product descriptions in bulk from a list of products and their attributes: it first locks the brand voice, the field schema (title, short blurb, long description, bullet features, SEO meta), and a worked exemplar, then drafts every product to that exact template so the whole catalog reads as one voice. |
| [Landing Page Copy](https://gezel.com/docs/craftbook/landing-copy/) | Write conversion-focused copy for a single landing page: it first locks the offer, the one primary audience, the single desired action, and the core promise, then drafts a full message hierarchy — hero headline and subhead, value props, social proof, objection handling, and one repeated CTA — then edits ruthlessly for clarity, specificity, and persuasive flow. |
| [Lifecycle Email Sequence](https://gezel.com/docs/craftbook/email-sequence/) | Design and build a multi-email lifecycle sequence (welcome, onboarding, nurture, re-engagement) that moves a subscriber from one stage to the next: it first maps the customer journey — entry trigger, the goal of each email, send timing/cadence, and the one CTA per email — then drafts every email's subject line, preview text, and body to its single goal, then builds the sequence into a client-safe, inline-styled HTML email set ready to load into an ESP. |
| [Press Release](https://gezel.com/docs/craftbook/press-release/) | Write a professional, AP-style press release ready to send to journalists: it first locks the news angle, the five W's, the approved quote(s), and the boilerplate, then drafts the release in the standard format — dateline, inverted-pyramid lede, supporting body, quotes, boilerplate, and media contact — then a review pass enforces newsworthiness, factual accuracy, and house style. |
| [SEO Blog Post](https://gezel.com/docs/craftbook/blog-post/) | Write a complete, SEO-aware blog post that ranks and reads well: it locks the primary keyword, search intent, target reader, and a heading-by-heading outline FIRST, then drafts the full article in a single human voice with the keyword woven naturally into the title, intro, and H2s, and finally runs an editorial pass for clarity, flow, factual accuracy, and on-page SEO. |
