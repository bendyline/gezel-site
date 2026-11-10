# Gemma 4 (26B, MoE, Q4)

Google's Gemma 4 mixture-of-experts model — 25.2B total parameters with 3.8B active per token. Multimodal with long-context agentic workflows. The full 26B has to fit in memory but only ~4B parameters fire per token, so on capable hardware it runs noticeably faster than the dense 31B at a similar memory cost — the recommended high-end on-device default.

| At a glance | |
| --- | --- |
| Made by | Google |
| Download size | 14.2 GB |
| Parameters | 25.2B |
| Quantization | UD-Q4_K_XL |
| Context window | 256K tokens |
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
| [2026-08-27 · win32 · AMD Ryzen 9 7950X3D 16-Core Processor](https://gezel.com/docs/model-scorecard/2026-08-27-win32-amd-ryzen-9-7950x3d-16-core-proces/) | gemma4-26b-q4 · llama.cpp | General capability | 28/33 (85%) | 131.2 tok/s | 1820.0 tok/s |
| [2026-08-27 · win32 · AMD Ryzen 9 7950X3D 16-Core Processor](https://gezel.com/docs/model-scorecard/2026-08-27-win32-amd-ryzen-9-7950x3d-16-core-proces/) | gemma4-26b-q4 · llama.cpp | Office and knowledge work | 26/39 (67%) | 131.2 tok/s | 1820.0 tok/s |
| [2026-08-13 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-13-m4max-llamacpp/) | gemma4-26b-q4 · llama.cpp | General capability | 33/33 (100%) | 107.5 tok/s | 1264.0 tok/s |
| [2026-08-13 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-13-m4max-llamacpp/) | gemma4-26b-q4 · llama.cpp | Office and knowledge work | 28/39 (72%) | 107.5 tok/s | 1264.0 tok/s |
| [2026-08-11 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-11-m4max-llamacpp/) | gemma4-26b-q4 · llama.cpp | General capability | 33/33 (100%) | 89.6 tok/s | 1093.0 tok/s |
| [2026-08-11 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-11-m4max-llamacpp/) | gemma4-26b-q4 · llama.cpp | Office and knowledge work | 30/39 (77%) | 89.6 tok/s | 1093.0 tok/s |

[The model’s own page](https://huggingface.co/google/gemma-4-26B-A4B-it) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
