# Talkie 1930 (13B, Q4)

A 13B instruct model trained solely on pre-1931 English-language text — it writes and converses in an authentic period voice, free of modern anachronisms. Best for creative writing, correspondence, and in-character chat rather than tool use or current-events questions. Runs a community GGUF that rescales talkie's out-of-range layer-14 ffn_down channel so K-quantization stays coherent. 2K context. Apache-2.0.

| At a glance | |
| --- | --- |
| Made by | talkie-lm |
| Download size | 8.6 GB |
| Parameters | 13B |
| Quantization | Q4_K_M |
| Context window | 2K tokens |
| Uses tools | No |
| Best for | Everyday work |
| Runs on | llama.cpp |
| License | Apache 2.0 |
| Added to the catalog | 2026-08-15 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Not measured yet. No [scorecard](https://gezel.com/docs/model-scorecard/) round has run this model or another build of it, which is not a verdict either way. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what a round measures, and you can run the same tests on your own machine:

```sh
gezel bench --model talkie-1930-13b-q4
```

[The model’s own page](https://huggingface.co/talkie-lm/talkie-1930-13b-it) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
