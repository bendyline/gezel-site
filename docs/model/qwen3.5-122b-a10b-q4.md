# Qwen 3.5 (122B-A10B, Q4)

Alibaba's Qwen 3.5 flagship open-weight model: 122B total parameters with 10B active per token, sparse MoE/Gated DeltaNet architecture, multimodal text + image + video support, native tool calling, and 262K native context extensible to roughly 1M tokens. Workstation-tier on-device option via Q4 GGUF or MLX 4-bit; expect around 90GB of usable memory before large KV-cache workloads.

| At a glance | |
| --- | --- |
| Made by | Alibaba |
| Download size | 78.3 GB |
| Parameters | 122B |
| Quantization | UD-Q4_K_M |
| Context window | 262K tokens |
| Uses tools | Yes |
| Best for | Everyday work |
| Runs on | llama.cpp, MLX |
| License | Apache 2.0 |
| Added to the catalog | 2026-08-15 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Not measured yet. No [scorecard](https://gezel.com/docs/model-scorecard/) round has run this model or another build of it, which is not a verdict either way. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what a round measures, and you can run the same tests on your own machine:

```sh
gezel bench --model qwen3.5-122b-a10b-q4
```

[The model’s own page](https://huggingface.co/Qwen/Qwen3.5-122B-A10B) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
