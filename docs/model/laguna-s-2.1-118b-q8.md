# Laguna S 2.1 (118B-A8B, Q8)

Poolside's Laguna S 2.1, a 118B-parameter Mixture-of-Experts model with about 8B active parameters per token, built for agentic coding and long-horizon software work. It supports native tool calling and interleaved reasoning between tool calls. The official Q8_0 GGUF is about 128GB on disk, while the community MLX 8-bit conversion is about 125GB and runs natively on Apple Silicon. Both target larger-memory workstations; Q6 is the practical Laguna tier for a 128GB Mac. Gezel defaults to Poolside's quality-recommended 256K context window; the underlying checkpoint can be extended to 1M context with explicit YaRN overrides.

| At a glance | |
| --- | --- |
| Made by | Poolside |
| Download size | 128.8 GB |
| Parameters | 118B |
| Quantization | Q8_0 |
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
gezel bench --model laguna-s-2.1-118b-q8
```

[The model’s own page](https://huggingface.co/poolside/Laguna-S-2.1) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
