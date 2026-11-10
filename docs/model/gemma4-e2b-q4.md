# Gemma 4 (E2B, Q4)

Google's edge-optimized Gemma 4 at ~2B effective parameters. Multimodal (text + image + audio), native tool calling. Quantization-aware-trained 4-bit weights — the safe small-model default for any modern laptop.

| At a glance | |
| --- | --- |
| Made by | Google |
| Download size | 2.6 GB |
| Parameters | 2.3B |
| Quantization | UD-Q4_K_XL |
| Context window | 128K tokens |
| Uses tools | Yes |
| Best for | Everyday work |
| Runs on | llama.cpp, MLX, Ollama |
| License | Apache 2.0 |
| Added to the catalog | 2026-08-28 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Every [scorecard](https://gezel.com/docs/model-scorecard/) round that ran this model or another build of it, newest first. Each round is one machine, one day, one version of Gezel and one version of the tests, so **rounds are not comparable with each other**: a change to any of those can move a score without the model changing. Where a task ran fewer than three times, the result is a count rather than a percentage. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what each set contains.

| Round | Build | Task set | Passed | Output speed | Prefill speed |
| --- | --- | --- | --- | --- | --- |
| [2026-10-25 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-10-25-m5max-bolt-five/) | gemma4-e2b-q4 · MLX | General capability | 14/33 (42%) | 115.5 tok/s | — |
| [2026-08-22 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-22-mac-apple-m4-max/) | gemma4-e2b-q4 · MLX | General capability | 17/33 (52%) | 144.1 tok/s | 2574.0 tok/s |
| [2026-08-22 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-22-mac-apple-m4-max/) | gemma4-e2b-q4 · MLX | Office and knowledge work | 16/39 (41%) | 144.1 tok/s | 2574.0 tok/s |

[The model’s own page](https://huggingface.co/google/gemma-4-E2B-it) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
