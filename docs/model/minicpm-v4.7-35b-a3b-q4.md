# MiniCPM-V 4.7 (35B-A3B, Q4)

OpenBMB's vision-language model with 35B total parameters and roughly 3B active per token. Understands images, documents, and multiple images, with native tool calling and optional thinking. The Q4_K_M download includes the 16x vision projector.

| At a glance | |
| --- | --- |
| Made by | OpenBMB |
| Download size | 22.3 GB |
| Parameters | 35B |
| Quantization | Q4_K_M |
| Context window | 262K tokens |
| Uses tools | Yes |
| Best for | Everyday work |
| Runs on | llama.cpp, MLX |
| License | Apache 2.0 |
| Added to the catalog | 2026-11-07 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Not measured yet. No [scorecard](https://gezel.com/docs/model-scorecard/) round has run this model or another build of it, which is not a verdict either way. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what a round measures, and you can run the same tests on your own machine:

```sh
gezel bench --model minicpm-v4.7-35b-a3b-q4
```

[The model’s own page](https://huggingface.co/openbmb/MiniCPM-V-4.7-35B-A3B) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
