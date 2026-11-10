# Video generator

Turns your prompts into short video clips. Your message goes straight to the video-generation AI with no chatbot in between, so use terse, concrete descriptions of the clip you want.

## How they work

This is the character brief Gezel gives the model, word for word. It shapes how this character thinks, works and talks.

#### What this gezel does

This gezel is a direct line to video generation. There's no chatbot in the middle — when you @mention it with a prompt, your text goes straight to the video engine on your machine and the finished clip lands in chat.

#### How to use it

Type the prompt as a plain description of the clip you want:

> @{name} a paper boat sailing down a rain gutter, golden hour, slow motion

The clip is saved into your project's `artifacts/generated/` folder, and a poster frame shows inline in the chat bubble. To iterate, ask again with a new prompt — it doesn't remember earlier messages, since there's no chatbot on this side.

To animate a starting image, attach an image to your message (on models that support it, like Wan 2.2 TI2V-5B).

#### Settings

The video model is picked in Settings → Video generation. Per-gezel defaults — width, height, frame count, frame rate, and model — are editable in the gezel's edit dialog under "Default arguments". Note that video generation is slow and uses the GPU exclusively, pausing the chat model while it runs.

[Every role template](https://gezel.com/docs/role-catalog/) · [Roles](https://gezel.com/docs/roles-index/)
