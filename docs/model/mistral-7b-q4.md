# Mistral 7B Instruct (Q4)

Mistral AI's retired 7B Instruct v0.3 model, retained for compatibility with existing installs. Prefer a current small model for new work.

| At a glance | |
| --- | --- |
| Made by | Mistral AI |
| Download size | 4.4 GB |
| Parameters | 7B |
| Quantization | Q4_K_M |
| Context window | 33K tokens |
| Uses tools | Yes |
| Best for | Everyday work |
| Runs on | llama.cpp, MLX, Ollama |
| License | Apache 2.0 |
| Added to the catalog | 2026-08-15 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Every [scorecard](https://gezel.com/docs/model-scorecard/) round that ran this model or another build of it, newest first. Each round is one machine, one day, one version of Gezel and one version of the tests, so **rounds are not comparable with each other**: a change to any of those can move a score without the model changing. Where a task ran fewer than three times, the result is a count rather than a percentage. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what each set contains.

| Round | Build | Task set | Passed | Output speed | Prefill speed |
| --- | --- | --- | --- | --- | --- |
| [2026-08-22 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-22-mac-apple-m4-max/) | mistral-7b-q4 · llama.cpp | General capability | 4/33 (12%) | 76.0 tok/s | 762.0 tok/s |
| [2026-08-22 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-22-mac-apple-m4-max/) | mistral-7b-q4 · llama.cpp | Office and knowledge work | 0/39 (0%) | 76.0 tok/s | 762.0 tok/s |

[The model’s own page](https://ollama.com/library/mistral) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
