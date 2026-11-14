# Qwen 3.5 (4B, Q4)

Alibaba's Qwen 3.5 at 4B parameters. Multimodal (text + images) with native tool calling and a 256K context window. A balanced compact default for modern laptops.

| At a glance | |
| --- | --- |
| Made by | Alibaba |
| Download size | 2.8 GB |
| Parameters | 4B |
| Quantization | Q4_K_M |
| Context window | 256K tokens |
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
| [2026-10-20 · rtx5070ti-core-continuation-64k](https://gezel.com/docs/model-scorecard/2026-10-20-rtx5070ti-core-continuation-64k/) | qwen3.5-4b-q4 · llama.cpp | General capability | 15/26 (some tasks run 2× — count not rate) | 113.1 tok/s | 3745.8 tok/s |
| [2026-10-20 · rtx5070ti-core-original-64k](https://gezel.com/docs/model-scorecard/2026-10-20-rtx5070ti-core-original-64k/) (partial) | qwen3.5-4b-q4 · llama.cpp | General capability | 3/7 (some tasks run once — count not rate) | 126.2 tok/s | 3645.0 tok/s |
| [2026-09-04 · win32 · AMD Ryzen 9 7950X3D 16-Core Processor](https://gezel.com/docs/model-scorecard/2026-09-04-win32-amd-ryzen-9-7950x3d-16-core-proces/) | qwen3.5-4b-q4 · llama.cpp | General capability | 16/33 (48%) | 153.0 tok/s | 3349.0 tok/s |
| [2026-09-04 · win32 · AMD Ryzen 9 7950X3D 16-Core Processor](https://gezel.com/docs/model-scorecard/2026-09-04-win32-amd-ryzen-9-7950x3d-16-core-proces/) | qwen3.5-4b-q4 · llama.cpp | Office and knowledge work | 28/39 (72%) | 157.0 tok/s | 3429.0 tok/s |
| [2026-08-22 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-22-mac-apple-m4-max/) | qwen3.5-4b-q4 · MLX | General capability | 22/33 (67%) | 89.3 tok/s | 1336.0 tok/s |
| [2026-08-22 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-22-mac-apple-m4-max/) | qwen3.5-4b-q4 · MLX | Office and knowledge work | 30/39 (77%) | 89.3 tok/s | 1336.0 tok/s |

A partial round reran only some of a set’s tasks, usually to check a fix. It is not a score for the whole set.

## Docbench

How well this build does DocBlocks’ document work, judged from 0 to 100 in the [docbench](https://gezel.com/docs/docbench/) round of 2026-11-11 on llama.cpp: **71** (95% range 69–72, band 3). DocBlocks could use 100% of its answers.

| Group | Score | 95% range |
| --- | --- | --- |
| Review and feedback | 47 | 42–51 |
| Writing new content | 85 | 81–89 |
| Diagrams and illustrations | 77 | 73–81 |
| Presentations | 86 | 83–89 |
| Study aids | 67 | 65–69 |
| Narration cleanup | 79 | 75–83 |

In general review it found, per document, 1.0 small fixes, 0.3 moderate changes and 0.3 substantial ones, and added 0.8 trivial and 0.8 wrong suggestions.

[The model’s own page](https://ollama.com/library/qwen3.5) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
