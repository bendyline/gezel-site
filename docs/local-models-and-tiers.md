# Models, tiers, and what runs on this device

Gezel doesn't come with its own AI — it puts *your* choice of AI to work. That can be a cloud provider (OpenAI, Anthropic, GitHub Copilot) or a model running locally on your own machine. With a local model, your data never leaves the room.

## Tiers: matching the model to the job

Models come in sizes, and size matters for what a model can be trusted to do alone. Gezel groups them into **tiers**:

| Tier | Size (in billions of parameters) | Good at |
| --- | --- | --- |
| tiny | under 5B | quick drafts, simple lookups |
| small | 5–12B | everyday chat, focused single tasks |
| medium | 12–45B | multi-step work with tools |
| large | 45B and up, local | most roles, unsupervised steps |
| cloud | hosted frontier models | everything |

Every role declares a **model floor** — the minimum tier it needs to work unsupervised. A reviewer gating your deliverables needs more headroom than someone drafting a shopping list, and gezel enforces that automatically.

A tier says what a size class *should* manage. For what individual models actually did — measured, on a real machine — see the **[Model scorecard](https://gezel.com/docs/model-scorecard/)**. It is the fastest way to pick a local model you can trust with a given job, and [How we test models](https://gezel.com/docs/how-we-test-models/) explains what the numbers do and do not tell you.

## On this device

Gezel classifies each device as tiny, small, medium, or large from the memory available to local models.

### Installed local models

Gezel runs local models (llama.cpp, MLX, Ollama and friends) alongside cloud providers — the Models catalog in the app shows what fits your machine.

## Choosing

You don't have to get this right up front. Set a default provider in Settings, and override it for one crew member only when they need something different — a big cloud model for your reviewer, a fast local one for day-to-day chat. Gezel checks each new model's fitness on your hardware before recommending it.

[Every model](https://gezel.com/docs/model-catalog/) on gezel.com lists the local chat, image, and video models Gezel knows about, including their download size, context window, license, and the engines they run on. Once you have a shortlist that fits, the [Model scorecard](https://gezel.com/docs/model-scorecard/) shows how those models actually performed.
