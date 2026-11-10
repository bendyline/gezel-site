# Llama 3.2 (3B, Q4)

Meta's 3B chat model. Small enough to run on modest hardware, sharp enough to be a useful default.

| At a glance | |
| --- | --- |
| Made by | Meta |
| Download size | 2.0 GB |
| Parameters | 3B |
| Quantization | Q4_K_M |
| Context window | 128K tokens |
| Uses tools | Yes |
| Best for | Everyday work |
| Runs on | llama.cpp, MLX, Ollama |
| License | Llama 3.2 Community |
| Added to the catalog | 2026-08-15 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Not measured yet. No [scorecard](https://gezel.com/docs/model-scorecard/) round has run this model or another build of it, which is not a verdict either way. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what a round measures, and you can run the same tests on your own machine:

```sh
gezel bench --model llama3.2-3b-q4
```

[The model’s own page](https://ollama.com/library/llama3.2) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
