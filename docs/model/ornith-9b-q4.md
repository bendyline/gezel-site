# Ornith 1.0 (9B, Q4)

DeepReinforce's Ornith 1.0 at 9B parameters — an agentic-coding model built for hands-on software work. Native reasoning, native tool calling, 256K context. The small-tier pick for tool-heavy work on a 12GB+ inference budget. MIT licensed.

| At a glance | |
| --- | --- |
| Made by | DeepReinforce |
| Download size | 5.6 GB |
| Parameters | 9B |
| Quantization | Q4_K_M |
| Context window | 262K tokens |
| Uses tools | Yes |
| Best for | Coding |
| Runs on | llama.cpp, MLX |
| License | MIT |
| Added to the catalog | 2026-08-15 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Every [scorecard](https://gezel.com/docs/model-scorecard/) round that ran this model or another build of it, newest first. Each round is one machine, one day, one version of Gezel and one version of the tests, so **rounds are not comparable with each other**: a change to any of those can move a score without the model changing. Where a task ran fewer than three times, the result is a count rather than a percentage. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what each set contains.

| Round | Build | Task set | Passed | Output speed | Prefill speed |
| --- | --- | --- | --- | --- | --- |
| [2026-08-09 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-09-m4max-llamacpp/) | ornith-9b-q4 · llama.cpp | General capability | 24/33 (73%) | 64.9 tok/s | 657.0 tok/s |
| [2026-08-09 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-09-m4max-llamacpp/) | ornith-9b-q4 · llama.cpp | Office and knowledge work | 34/39 (87%) | 64.9 tok/s | 657.0 tok/s |

[The model’s own page](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
