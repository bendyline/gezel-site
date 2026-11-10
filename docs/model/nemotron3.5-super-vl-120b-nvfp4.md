# Nemotron 3.5 Super VL (120B-A12B, NVFP4)

NVIDIA's flagship Nemotron 3.5 Super VL at 120B parameters with 12B active, in NVIDIA's quantization-aware NVFP4. Native reasoning, tool calling, image understanding, and a 256K context window, with its own multi-token-prediction head for faster replies. Workstation-tier: needs about 90GB of usable memory, and runs best on NVIDIA Blackwell GPUs such as DGX Spark; not offered on Macs.

| At a glance | |
| --- | --- |
| Made by | NVIDIA |
| Download size | 76.9 GB |
| Parameters | 120B |
| Quantization | NVFP4 |
| Context window | 262K tokens |
| Uses tools | Yes |
| Best for | Reasoning |
| Runs on | llama.cpp |
| License | OpenMDW 1.1 |
| Added to the catalog | 2026-10-17 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Not measured yet. No [scorecard](https://gezel.com/docs/model-scorecard/) round has run this model or another build of it, which is not a verdict either way. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what a round measures, and you can run the same tests on your own machine:

```sh
gezel bench --model nemotron3.5-super-vl-120b-nvfp4
```

[The model’s own page](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
