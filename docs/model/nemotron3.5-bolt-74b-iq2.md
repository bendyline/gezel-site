# Nemotron 3.5 Bolt (74B-A9B, 2-bit)

NVIDIA's Nemotron 3.5 Bolt: Super VL distilled down to 74B parameters with 9B active, quantization-aware trained to fit in about 24GB. Native reasoning, tool calling, image understanding, and a 256K context window, with a small LiLiCorr drafter that speeds up replies. Needs an NVIDIA or Vulkan GPU with about 26GB of memory; not offered on Macs.

| At a glance | |
| --- | --- |
| Made by | NVIDIA |
| Download size | 22.0 GB |
| Parameters | 74B |
| Quantization | IQ2_XXS |
| Context window | 262K tokens |
| Uses tools | Yes |
| Best for | Reasoning |
| Runs on | llama.cpp |
| License | OpenMDW 1.1 |
| Added to the catalog | 2026-11-07 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Not measured yet. No [scorecard](https://gezel.com/docs/model-scorecard/) round has run this model or another build of it, which is not a verdict either way. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what a round measures, and you can run the same tests on your own machine:

```sh
gezel bench --model nemotron3.5-bolt-74b-iq2
```

[The model’s own page](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
