# Laguna S 2.1 (118B-A8B, Q4)

Poolside's Laguna S 2.1, a 118B-parameter Mixture-of-Experts model with about 8B active parameters per token, built for agentic coding and long-horizon software work. It supports native tool calling and interleaved reasoning between tool calls. Choose the official imatrix Q4_K_M GGUF (about 75GB) for llama.cpp, or the calibrated oQ4e MLX build (about 64GB) for native Apple Silicon inference on a 96GB-or-larger Mac. Gezel defaults to Poolside's quality-recommended 256K context window; the underlying checkpoint can be extended to 1M context with explicit YaRN overrides.

| At a glance | |
| --- | --- |
| Made by | Poolside |
| Download size | 96.0 GB |
| Parameters | 118B |
| Quantization | Q4_K_M |
| Context window | 262K tokens |
| Uses tools | Yes |
| Best for | Coding |
| Runs on | llama.cpp, MLX |
| License | OpenMDW 1.1 |
| Added to the catalog | 2026-08-15 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Not measured yet. No [scorecard](https://gezel.com/docs/model-scorecard/) round has run this model or another build of it, which is not a verdict either way. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what a round measures, and you can run the same tests on your own machine:

```sh
gezel bench --model laguna-s-2.1-118b-q4
```

[The model’s own page](https://huggingface.co/poolside/Laguna-S-2.1) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
