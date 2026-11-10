# Qwen 3.6 (27B, Q8)

Alibaba's Qwen 3.6 at 27B parameters, 8-bit quantization for higher fidelity than the Q4 build (at roughly double the memory footprint). Multimodal (text + image + video), 256K native context, explicit native tool-calling support. For machines with ~40GB+ memory.

| At a glance | |
| --- | --- |
| Made by | Alibaba |
| Download size | 29.0 GB |
| Parameters | 27B |
| Quantization | Q8_0 |
| Context window | 262K tokens |
| Uses tools | Yes |
| Best for | Everyday work |
| Runs on | llama.cpp, MLX |
| License | Apache 2.0 |
| Added to the catalog | 2026-08-29 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Every [scorecard](https://gezel.com/docs/model-scorecard/) round that ran this model or another build of it, newest first. Each round is one machine, one day, one version of Gezel and one version of the tests, so **rounds are not comparable with each other**: a change to any of those can move a score without the model changing. Where a task ran fewer than three times, the result is a count rather than a percentage. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what each set contains.

| Round | Build | Task set | Passed | Output speed | Prefill speed |
| --- | --- | --- | --- | --- | --- |
| [2026-08-20 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-08-19-gb10-spark/) | qwen3.6-27b-q8 · llama.cpp | General capability | 30/31 (97%) | 7.8 tok/s | 725.0 tok/s |
| [2026-08-20 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-08-19-gb10-spark/) | qwen3.6-27b-q8 · llama.cpp | Office and knowledge work | 32/39 (82%) | 7.8 tok/s | 725.0 tok/s |
| [2026-08-14 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-14-m4max-llamacpp/) | qwen3.6-27b-q4 · llama.cpp | General capability | 32/33 (97%) | 22.9 tok/s | 230.0 tok/s |
| [2026-08-11 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-11-m4max-llamacpp/) | qwen3.6-27b-q4 · llama.cpp | General capability | 33/33 (100%) | 18.5 tok/s | 198.0 tok/s |
| [2026-08-11 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-11-m4max-llamacpp/) | qwen3.6-27b-q4 · llama.cpp | Office and knowledge work | 29/39 (74%) | 18.5 tok/s | 198.0 tok/s |

[The model’s own page](https://ollama.com/library/qwen3.6) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
