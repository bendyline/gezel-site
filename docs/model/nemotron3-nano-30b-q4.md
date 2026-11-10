# Nemotron-3 Nano (30B, MoE Reasoning, Q4)

NVIDIA's Nemotron-3 Nano Omni at 30B parameters, tuned for reasoning. Multimodal (text + image + audio + video), 128K context, native tool calling. Capable-tier on-device option for machines with 32GB+ memory.

| At a glance | |
| --- | --- |
| Made by | NVIDIA |
| Download size | 24.5 GB |
| Parameters | 30B |
| Quantization | Q4_K_M |
| Context window | 131K tokens |
| Uses tools | Yes |
| Best for | Reasoning |
| Runs on | llama.cpp, MLX |
| License | NVIDIA Open Model |
| Added to the catalog | 2026-08-15 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Not measured yet. No [scorecard](https://gezel.com/docs/model-scorecard/) round has run this model or another build of it, which is not a verdict either way. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what a round measures, and you can run the same tests on your own machine:

```sh
gezel bench --model nemotron3-nano-30b-q4
```

[The model’s own page](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
