# Nemotron-3 Super (120B-A12B, Q4)

NVIDIA's flagship Nemotron-3 Super at 120B parameters, tuned for reasoning. Native tool calling, 128K context. Frontier-tier on-device reasoning for workstations and Mac Studio-class hardware — needs ~100GB of usable memory. No Apple Silicon build yet.

| At a glance | |
| --- | --- |
| Made by | NVIDIA |
| Download size | 86.1 GB |
| Parameters | 120B |
| Quantization | Q4_K_M |
| Context window | 131K tokens |
| Uses tools | Yes |
| Best for | Reasoning |
| Runs on | llama.cpp |
| License | NVIDIA Open Model |
| Added to the catalog | 2026-08-15 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Not measured yet. No [scorecard](https://gezel.com/docs/model-scorecard/) round has run this model or another build of it, which is not a verdict either way. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what a round measures, and you can run the same tests on your own machine:

```sh
gezel bench --model nemotron3-super-120b-q4
```

[The model’s own page](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Super-120B-A12B-BF16) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
