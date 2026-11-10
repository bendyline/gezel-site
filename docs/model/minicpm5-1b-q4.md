# MiniCPM5 (1B, Q4)

OpenBMB's MiniCPM5 at 1B parameters: a dense Llama-architecture model post-trained with RL and on-policy distillation for tool use and coding, with switchable thinking and a 128K context window. Sized for phones and e-readers.

| At a glance | |
| --- | --- |
| Made by | OpenBMB |
| Download size | 0.7 GB |
| Parameters | 1B |
| Quantization | Q4_K_M |
| Context window | 131K tokens |
| Uses tools | Yes |
| Best for | Everyday work |
| Runs on | llama.cpp, MLX |
| License | Apache-2.0 |
| Added to the catalog | 2026-09-27 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Not measured yet. No [scorecard](https://gezel.com/docs/model-scorecard/) round has run this model or another build of it, which is not a verdict either way. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what a round measures, and you can run the same tests on your own machine:

```sh
gezel bench --model minicpm5-1b-q4
```

[The model’s own page](https://huggingface.co/openbmb/MiniCPM5-1B) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
