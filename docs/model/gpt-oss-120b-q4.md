# GPT-OSS (120B, MoE, Q4)

OpenAI's open-weight 117B-parameter Mixture-of-Experts model (~5.1B active per token). Configurable reasoning effort (low/medium/high), full chain-of-thought access, and native function-calling. Frontier-class on-device reasoning for workstations and Mac Studio-class hardware — needs ~80GB of usable memory.

| At a glance | |
| --- | --- |
| Made by | OpenAI |
| Download size | 65.0 GB |
| Parameters | 117B |
| Quantization | Q4_K_M |
| Context window | 131K tokens |
| Uses tools | Yes |
| Best for | Reasoning |
| Runs on | llama.cpp, MLX, Ollama |
| License | Apache 2.0 |
| Added to the catalog | 2026-05-17 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Not measured yet. No [scorecard](https://gezel.com/docs/model-scorecard/) round has run this model or another build of it, which is not a verdict either way. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what a round measures, and you can run the same tests on your own machine:

```sh
gezel bench --model gpt-oss-120b-q4
```

[The model’s own page](https://huggingface.co/openai/gpt-oss-120b) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
