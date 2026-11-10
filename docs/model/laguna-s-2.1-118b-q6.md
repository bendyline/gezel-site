# Laguna S 2.1 (118B-A8B, Q6 MLX)

Poolside's Laguna S 2.1 in a calibrated oQ6e MLX quantization for native Apple Silicon inference. The model has 118B total parameters with about 8B active per token and is built for agentic coding, long-horizon software work, native tool calling, and interleaved reasoning. This MLX-only build is about 92GB on disk, measured about 90GB peak at 64K context, and targets 128GB Macs. Gezel defaults to Poolside's quality-recommended 256K context window; the underlying checkpoint can be extended to 1M context with explicit YaRN overrides.

| At a glance | |
| --- | --- |
| Made by | Poolside |
| Download size | 92.0 GB |
| Parameters | 118B |
| Quantization | oQ6e |
| Context window | 262K tokens |
| Uses tools | Yes |
| Best for | Coding |
| Runs on | MLX |
| License | OpenMDW 1.1 |
| Added to the catalog | 2026-08-15 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Not measured yet. No [scorecard](https://gezel.com/docs/model-scorecard/) round has run this model or another build of it, which is not a verdict either way. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what a round measures, and you can run the same tests on your own machine:

```sh
gezel bench --model laguna-s-2.1-118b-q6
```

[The model’s own page](https://huggingface.co/poolside/Laguna-S-2.1) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
