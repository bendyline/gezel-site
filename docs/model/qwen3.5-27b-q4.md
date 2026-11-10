# Qwen 3.5 (27B, Q4)

Alibaba's dense Qwen 3.5 model at 27B parameters. Multimodal (text + image + video), native tool calling, and 262K native context. A capable on-device option for machines with a 24GB+ inference budget.

| At a glance | |
| --- | --- |
| Made by | Alibaba |
| Download size | 17.1 GB |
| Parameters | 27B |
| Quantization | Q4_K_M |
| Context window | 262K tokens |
| Uses tools | Yes |
| Best for | Everyday work |
| Runs on | llama.cpp, MLX, Ollama |
| License | Apache 2.0 |
| Added to the catalog | 2026-09-04 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Every [scorecard](https://gezel.com/docs/model-scorecard/) round that ran this model or another build of it, newest first. Each round is one machine, one day, one version of Gezel and one version of the tests, so **rounds are not comparable with each other**: a change to any of those can move a score without the model changing. Where a task ran fewer than three times, the result is a count rather than a percentage. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what each set contains.

| Round | Build | Task set | Passed | Output speed | Prefill speed |
| --- | --- | --- | --- | --- | --- |
| [2026-09-04 · win32 · AMD Ryzen 9 7950X3D 16-Core Processor](https://gezel.com/docs/model-scorecard/2026-09-04-win32-amd-ryzen-9-7950x3d-16-core-proces/) | qwen3.5-27b-q4 · llama.cpp | General capability | 30/33 (91%) | 55.9 tok/s | 656.0 tok/s |
| [2026-09-04 · win32 · AMD Ryzen 9 7950X3D 16-Core Processor](https://gezel.com/docs/model-scorecard/2026-09-04-win32-amd-ryzen-9-7950x3d-16-core-proces/) | qwen3.5-27b-q4 · llama.cpp | Office and knowledge work | 36/39 (92%) | 55.9 tok/s | 656.0 tok/s |

[The model’s own page](https://huggingface.co/Qwen/Qwen3.5-27B) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
