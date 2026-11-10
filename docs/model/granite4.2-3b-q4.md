# Granite 4.2 (3B, Q4)

IBM's compact dense Granite 4.2 reasoning model at 3B parameters. Text-only, with native thinking, native tool calling, multilingual support, and a 128K context window. Q4 builds are a lightweight option for machines with 8GB+ usable memory.

| At a glance | |
| --- | --- |
| Made by | IBM Granite |
| Download size | 2.2 GB |
| Parameters | 3B |
| Quantization | Q4_K_M |
| Context window | 131K tokens |
| Uses tools | Yes |
| Best for | Reasoning |
| Runs on | llama.cpp, MLX |
| License | Apache 2.0 |
| Added to the catalog | 2026-08-25 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Not measured yet. No [scorecard](https://gezel.com/docs/model-scorecard/) round has run this model or another build of it, which is not a verdict either way. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what a round measures, and you can run the same tests on your own machine:

```sh
gezel bench --model granite4.2-3b-q4
```

[The model’s own page](https://huggingface.co/ibm-granite/granite-4.2-3b) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
