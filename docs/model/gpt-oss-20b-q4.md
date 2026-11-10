# GPT-OSS (20B, MoE, Q4)

OpenAI's open-weight 20B-parameter Mixture-of-Experts model (~3.6B active per token). Configurable reasoning effort (low/medium/high), full chain-of-thought access, and native function-calling. Lower-latency frontier-class on-device option for machines with 16GB+ memory.

| At a glance | |
| --- | --- |
| Made by | OpenAI |
| Download size | 12.0 GB |
| Parameters | 20B |
| Quantization | Q4_K_M |
| Context window | 131K tokens |
| Uses tools | Yes |
| Best for | Reasoning |
| Runs on | llama.cpp, MLX, Ollama |
| License | Apache 2.0 |
| Added to the catalog | 2026-08-15 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Not measured yet. No [scorecard](https://gezel.com/docs/model-scorecard/) round has run this model or another build of it, which is not a verdict either way. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what a round measures, and you can run the same tests on your own machine:

```sh
gezel bench --model gpt-oss-20b-q4
```

[The model’s own page](https://ollama.com/library/gpt-oss) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
