# The Image Generator

The **Image Generator** does one thing on purpose: turn descriptions into images. Illustrations, hero images, textures, mockup art — ask, refine, ask again. Results land in the project's artifacts, ready for a Designer or you to place.

This is a deliberately narrow, fixed-function role. It doesn't edit your files or wander the workspace; keeping it single-purpose makes it safe to hand loose creative prompts without side effects. Gezel's install dialog gives these crew members painterly names — Picasso, Vermeer — because a character beats a button.


## Editing a picture

To change a picture rather than make a new one, add an **Image editor** to your crew from the catalog. Attach a picture to your message and say what to change ("remove the people in the background," "turn it into a watercolor"). It changes that and keeps the rest. Send the next change without a picture and it keeps editing the last result, or attach up to three pictures to combine them. A message with no picture to change is turned away, so it never draws something new from words alone.

On this computer, editing needs a model that can do it. **Qwen Image Edit 2511** is made for editing and does nothing else. **FLUX.2 Klein** draws new pictures and edits too. Whenever a picture comes with the request, whether it went to the Image editor or to anyone else, Gezel picks an installed model that can edit it, and the result keeps the picture's shape unless you choose another. Download them in **Settings → Image generation**.

## Styles and fast mode

Models on this computer can take two kinds of add-on, both from **Settings → Image generation → Styles and fast mode**. Each works only with the models it names, so Settings offers only the ones that fit a model you have.

- **Fast mode** draws a picture in a few steps instead of dozens. Once you get it, it is on for that model; switch it off in the model's row. Asking for more steps than fast mode uses leaves it off for that picture.
- **A style** gives a picture a set look, such as pixel art or watercolor. Pick it in the **Style** menu above the message, or ask for it by name. A style that doesn't match leaves the picture without one, and the result names the styles the model has.

A few styles carry their model's license, which restricts commercial use. Their license button says so.

## Using GitHub Copilot

Choose **GitHub Copilot CLI** in **Settings → Image generation → Engine** to use Copilot's experimental image generator. Install or update the Copilot runtime there if needed. Gezel uses your existing Copilot sign-in, or the GitHub token configured in Gezel; no separate image API key is required. Your account's image access, organization policies, and usage limits still apply. Being signed in does not guarantee image generation is available.

Describe the image in chat, or call `generate_image` through MCP. Prompts, reference images, aspect ratio, explicit dimensions, and quality reach the same image provider. Copilot currently accepts square (1024×1024), landscape (1536×1024), and portrait (1024×1536) images; other dimensions use the closest supported shape and the result explains the adjustment. Negative prompts become instructions about what to avoid. Copilot chooses its image model and does not expose a reproducible seed, sampling steps, or edit strength; requests for those controls return an explanatory note.

Image generation follows Gezel's cloud cost-confirmation setting. Other apps using Gezel's MCP tools need **Any image engine** access in **Settings → Integrations** to use Copilot.

## Their character

### What this gezel does

This gezel is a **pass-through to image generation**. There's no LLM behind it — when you @mention them with a prompt, the message goes straight to the configured image engine and the result lands in chat.

### How to use it

Type the prompt you'd give to a stable-diffusion-like model:

> @{name} two horses jumping a cow, oil on canvas, dramatic lighting

The image is saved into your project's `artifacts/generated/` folder and rendered inline in the chat bubble. To iterate, ask again with a new prompt — there's no conversation memory because there's no model on this side of the wire.

### Settings

This gezel has no `about.md` to edit (no system prompt). The image engine + model are picked in Settings → Image generation. Per-gezel defaults — width, height, sampling steps, model id — are editable in the gezel's edit dialog under "Default arguments".

## What they can do

| Tool group | Purpose | Tools |
| --- | --- | --- |
| Image Tools | Render charts/diagrams, read and describe existing images, and generate new images via the configured image model | `render_image`, `read_image_as_base64`, `generate_image`, `describe_image`, `read_image_metadata` |
| Image Intelligence | Navigate an indexed image library: search images by filename/caption/dimensions, summarize a folder of images for review or reorganizing, and find visually similar images | `search_images`, `find_similar_images`, `describe_folder`, `list_photos`, `photo_groups` |
| Workspace File Writing | Create, write, surgically edit, rename, and delete files in the project workspace | `write_file`, `append_to_file`, `replace_in_file`, `replace_lines`, `apply_patch`, `insert_at_marker`, `copy_artifact_to_workspace`, `make_dir`, `delete_path`, `rename`, `copy_path` |
| Task Management | Create, assign, advance, and report on tasks | `list_tasks`, `get_task`, `list_craftbooks`, `suggest_craftbook`, `import_skill`, `create_task`, `start_plan`, `invoke_craftbook`, `update_task`, `set_outcomes`, `verify_outcome`, `add_verification_step`, `set_task_status`, `activate_task`, `list_task_children`, `add_task_step`, `advance_task_step`, `assign_task`, `read_task_notes`, `write_task_note`, `spawn_task_instances` |
| Project Artifacts | Project-scoped read-write outputs (reports, scratch files, scripts a gezel produces, and large outputs auto-saved by tools that exceed the inline cap) | `list_artifacts`, `read_artifact`, `read_artifacts`, `write_artifact`, `grep_artifact` |
| Shared document library | Cross-project shared library — mission docs, guidelines, and any markdown the user wants every gezel to be able to find | `list_documents`, `read_document`, `write_document`, `delete_document`, `search_documents` |
| Memory | Search indexed project knowledge through one unified surface, plus persistent notes a gezel can recall and write back | `search`, `knowledge_nearby`, `search_memory`, `save_memory`, `list_memories` |
| User Interaction | Pose a structured question mid-turn — to the user (`ask_user_question`), to a specific gezel (`ask_gezel`), or to a role-shaped specialist (`ask_specialist`) — instead of guessing | `ask_user_question`, `ask_gezel`, `ask_specialist` |
| Help | Consult gezel's built-in documentation for meta questions about gezel itself — roles, craftbooks, projects, memory, models, setup | `how_do_i` |

### On this device

| Tier | Model size | Tool surface for this role |
| --- | --- | --- |
| tiny | under 5B | full kit (61 tools) |
| small | 5–12B | full kit (61 tools) |
| medium | 12–45B | full kit (61 tools) |
| large | 45B and up | full kit (61 tools) |
| cloud | hosted | full kit (61 tools) |

### As models grow

| Tier | Model size | Tool surface for this role |
| --- | --- | --- |
| tiny | under 5B | full kit (61 tools) |
| small | 5–12B | full kit (61 tools) |
| medium | 12–45B | full kit (61 tools) |
| large | 45B and up | full kit (61 tools) |
| cloud | hosted | full kit (61 tools) |

## Plans they run well

| Plan | What it does |
| --- | --- |
| [Coherent Icon Pack](https://gezel.com/docs/craftbook/icon-pack/) | Produce a coherent set of UI icons that look like they belong to one family — consistent grid, stroke weight, corner radius, optical sizing, and metaphor language — from a named list of concepts. |
| [Logo & Variant Set](https://gezel.com/docs/craftbook/logo-set/) | Generate a coherent logo and the full set of variants a real brand needs — primary mark, horizontal lockup, stacked lockup, icon-only/favicon, plus light-on-dark and monochrome versions — from a written brief. |
| [Marketing Hero Image](https://gezel.com/docs/craftbook/hero-image/) | Create a single high-impact marketing hero image from a brief and place it into a working hero section. |
| [Thumbnail Generator](https://gezel.com/docs/craftbook/thumbnail-generator/) | Derive a consistent set of thumbnails or responsive size-variants from a folder of source images — square crops for grids, srcset widths for the web, smart-cropped to keep the subject centered — and emit them with predictable names. |

### Codex CLI

Choose **OpenAI Codex CLI (cloud, experimental)** in Settings → Image generation. Install or update Codex CLI and sign it in with `codex login`. Gezel uses whatever the CLI is signed in with, under that account's usage limits and terms; it does not need a separate image API key. The CLI runs on the machine hosting your per-user Gezel service. If needed, set its binary path in Settings → OpenAI Codex CLI → Advanced.

Chat, MCP, and direct image requests use the same provider. Prompts, reference images, negative instructions, size, aspect ratio, quality, and edit-strength guidance go into the image request. Codex controls the underlying image model and final render settings: size and quality are requests in the brief, and edit strength is approximate. Seeds and sampling steps are unavailable. Results include actual pixel dimensions and notes about unsupported controls or size differences. Only native image output is accepted; a text response claiming to have saved an image is not a successful render.
