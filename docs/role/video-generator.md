# The Video Generator

The **Video Generator** is the moving-picture sibling of the Image Generator: describe a shot, get a short clip. Product teasers, animated backgrounds, little social moments — generated on whatever video model your device or provider offers, delivered into the project's artifacts.

Like its sibling, it's fixed-function by design: no file editing, no workspace access, just generation. Short clips take real compute — on local hardware expect renders to be measured in minutes, not seconds, and lean on the smallest length that sells the idea.

## Animating a picture

Attach a picture to your message and the Video Generator animates it: the picture becomes the clip's first frame and sets its shape, and your words say how it should move ("the waves roll in, the camera drifts closer"). Send a picture with no words and it moves gently, with a slow push in.

Not every video model can start from a picture. When the model you use makes clips from words only, the Video Generator says so rather than quietly ignoring your picture. A model's description in Settings → Video generation says whether it starts from a picture.

## Smaller models

Some video models come in compact builds that run on your graphics card, whether that's Apple Silicon, NVIDIA, AMD or Intel, in a fraction of the memory the full models need. They save clips as WebM, which Gezel plays. If ffmpeg is installed on your computer, Gezel also saves an MP4 copy, which PowerPoint, Keynote and phones play.


## Their character

### What this gezel does

This gezel is a direct line to video generation. There's no chatbot in the middle — when you @mention it with a prompt, your text goes straight to the video engine on your machine and the finished clip lands in chat.

### How to use it

Type the prompt as a plain description of the clip you want:

> @{name} a paper boat sailing down a rain gutter, golden hour, slow motion

The clip is saved into your project's `artifacts/generated/` folder, and a poster frame shows inline in the chat bubble. To iterate, ask again with a new prompt — it doesn't remember earlier messages, since there's no chatbot on this side.

To animate a starting image, attach an image to your message (on models that support it, like Wan 2.2 TI2V-5B).

### Settings

The video model is picked in Settings → Video generation. Per-gezel defaults — width, height, frame count, frame rate, and model — are editable in the gezel's edit dialog under "Default arguments". Note that video generation is slow and uses the GPU exclusively, pausing the chat model while it runs.

## What they can do

| Tool group | Purpose | Tools |
| --- | --- | --- |
| Video Tools | Generate short video clips via the configured local video model (LTX / WAN) | `generate_video` |
| Task Management | Create, assign, advance, and report on tasks | `list_tasks`, `get_task`, `list_craftbooks`, `suggest_craftbook`, `import_skill`, `create_task`, `start_plan`, `invoke_craftbook`, `update_task`, `set_outcomes`, `verify_outcome`, `add_verification_step`, `set_task_status`, `activate_task`, `list_task_children`, `add_task_step`, `advance_task_step`, `assign_task`, `read_task_notes`, `write_task_note`, `spawn_task_instances` |
| Project Artifacts | Project-scoped read-write outputs (reports, scratch files, scripts a gezel produces, and large outputs auto-saved by tools that exceed the inline cap) | `list_artifacts`, `read_artifact`, `read_artifacts`, `write_artifact`, `grep_artifact` |
| Shared document library | Cross-project shared library — mission docs, guidelines, and any markdown the user wants every gezel to be able to find | `list_documents`, `read_document`, `write_document`, `delete_document`, `search_documents` |
| Memory | Search indexed project knowledge through one unified surface, plus persistent notes a gezel can recall and write back | `search`, `knowledge_nearby`, `search_memory`, `save_memory`, `list_memories` |
| User Interaction | Pose a structured question mid-turn — to the user (`ask_user_question`), to a specific gezel (`ask_gezel`), or to a role-shaped specialist (`ask_specialist`) — instead of guessing | `ask_user_question`, `ask_gezel`, `ask_specialist` |
| Help | Consult gezel's built-in documentation for meta questions about gezel itself — roles, craftbooks, projects, memory, models, setup | `how_do_i` |

### On this device

| Tier | Model size | Tool surface for this role |
| --- | --- | --- |
| tiny | under 5B | full kit (41 tools) |
| small | 5–12B | full kit (41 tools) |
| medium | 12–45B | full kit (41 tools) |
| large | 45B and up | full kit (41 tools) |
| cloud | hosted | full kit (41 tools) |

### As models grow

| Tier | Model size | Tool surface for this role |
| --- | --- | --- |
| tiny | under 5B | full kit (41 tools) |
| small | 5–12B | full kit (41 tools) |
| medium | 12–45B | full kit (41 tools) |
| large | 45B and up | full kit (41 tools) |
| cloud | hosted | full kit (41 tools) |

## Plans they run well
