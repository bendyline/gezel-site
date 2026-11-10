# Image generator

An image generator. Always passes through requests to the image generation system. No LLM is involved — the gezel forwards your message text straight to the image engine.

## How they work

This is the character brief Gezel gives the model, word for word. It shapes how this character thinks, works and talks.

#### What this gezel does

This gezel is a **pass-through to image generation**. There's no LLM behind it — when you @mention them with a prompt, the message goes straight to the configured image engine and the result lands in chat.

#### How to use it

Type the prompt you'd give to a stable-diffusion-like model:

> @{name} two horses jumping a cow, oil on canvas, dramatic lighting

The image is saved into your project's `artifacts/generated/` folder and rendered inline in the chat bubble. To iterate, ask again with a new prompt — there's no conversation memory because there's no model on this side of the wire.

#### Settings

This gezel has no `about.md` to edit (no system prompt). The image engine + model are picked in Settings → Image generation. Per-gezel defaults — width, height, sampling steps, model id — are editable in the gezel's edit dialog under "Default arguments".

[Every role template](https://gezel.com/docs/role-catalog/) · [Roles](https://gezel.com/docs/roles-index/)
