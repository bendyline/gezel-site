# Qwen 3.5 (9B, Q4)

Alibaba's Qwen 3.5 at 9B parameters. Multimodal (text + images), native tool calling, 256K context. Strong reasoning + tool use for devices with a 12GB+ inference budget — the small-tier sweet spot for tool-heavy work.

| At a glance | |
| --- | --- |
| Made by | Alibaba |
| Download size | 5.9 GB |
| Parameters | 9B |
| Quantization | Q4_K_M |
| Context window | 262K tokens |
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
| [2026-10-25 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-10-25-m5max-bolt-five/) | qwen3.5-9b-q4 · MLX | General capability | 21/33 (64%) | 63.5 tok/s | — |
| [2026-10-20 · rtx5070ti-core-continuation-64k](https://gezel.com/docs/model-scorecard/2026-10-20-rtx5070ti-core-continuation-64k/) | qwen3.5-9b-q4 · llama.cpp | General capability | 20/26 (some tasks run 2× — count not rate) | 77.3 tok/s | 2468.4 tok/s |
| [2026-10-20 · rtx5070ti-core-original-64k](https://gezel.com/docs/model-scorecard/2026-10-20-rtx5070ti-core-original-64k/) (partial) | qwen3.5-9b-q4 · llama.cpp | General capability | 4/7 (some tasks run once — count not rate) | 83.9 tok/s | 2428.4 tok/s |
| [2026-09-04 · win32 · AMD Ryzen 9 7950X3D 16-Core Processor](https://gezel.com/docs/model-scorecard/2026-09-04-win32-amd-ryzen-9-7950x3d-16-core-proces/) | qwen3.5-9b-q4 · llama.cpp | General capability | 26/33 (79%) | 122.9 tok/s | 2143.0 tok/s |
| [2026-09-04 · win32 · AMD Ryzen 9 7950X3D 16-Core Processor](https://gezel.com/docs/model-scorecard/2026-09-04-win32-amd-ryzen-9-7950x3d-16-core-proces/) | qwen3.5-9b-q4 · llama.cpp | Office and knowledge work | 32/39 (82%) | 122.9 tok/s | 2143.0 tok/s |
| [2026-09-03 · Mac · Apple M2](https://gezel.com/docs/model-scorecard/2026-09-03-mac-apple-m2/) | qwen3.5-9b-q4 · llama.cpp | General capability | 9/11 (some tasks run once — count not rate) | 9.2 tok/s | 121.0 tok/s |
| [2026-09-03 · Mac · Apple M2](https://gezel.com/docs/model-scorecard/2026-09-03-mac-apple-m2/) | qwen3.5-9b-q4 · llama.cpp | Office and knowledge work | 11/13 (some tasks run once — count not rate) | 9.2 tok/s | 121.0 tok/s |
| [2026-09-02 · Ryzen AI HX 370 + RTX 5070 Ti Laptop](https://gezel.com/docs/model-scorecard/2026-09-02-ryzen-ai-hx-370-core-productivity/) | qwen3.5-9b-q4 · llama.cpp | General capability | 9/11 (some tasks run once — count not rate) | 29.9 tok/s | 329.0 tok/s |
| [2026-09-02 · Ryzen AI HX 370 + RTX 5070 Ti Laptop](https://gezel.com/docs/model-scorecard/2026-09-02-ryzen-ai-hx-370-core-productivity/) | qwen3.5-9b-q4 · llama.cpp | Office and knowledge work | 12/13 (some tasks run once — count not rate) | 29.9 tok/s | 329.0 tok/s |
| [2026-08-22 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-22-mac-apple-m4-max/) | qwen3.5-9b-q4 · MLX | General capability | 28/33 (85%) | 62.9 tok/s | 787.0 tok/s |
| [2026-08-22 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-22-mac-apple-m4-max/) | qwen3.5-9b-q4 · MLX | Office and knowledge work | 31/39 (79%) | 62.9 tok/s | 787.0 tok/s |

A partial round reran only some of a set’s tasks, usually to check a fix. It is not a score for the whole set.

## Docbench

How well this build does DocBlocks’ document work, judged from 0 to 100 in the [docbench](https://gezel.com/docs/docbench/) round of 2026-11-11 on llama.cpp: **72** (95% range 70–74, band 2). DocBlocks could use 99% of its answers.

| Group | Score | 95% range |
| --- | --- | --- |
| Review and feedback | 52 | 47–57 |
| Writing new content | 87 | 83–90 |
| Diagrams and illustrations | 72 | 66–78 |
| Presentations | 84 | 79–89 |
| Study aids | 71 | 69–73 |
| Narration cleanup | 82 | 78–85 |

In general review it found, per document, 1.8 small fixes, 1.0 moderate changes and 0.8 substantial ones, and added 0.5 trivial and 0.5 wrong suggestions.

[The model’s own page](https://ollama.com/library/qwen3.5) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
