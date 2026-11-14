# Qwen 3.5 (2B, Q4)

Alibaba's Qwen 3.5 at 2B parameters. Multimodal (text + images) with native tool calling and a 256K context window. A very compact choice for constrained devices.

| At a glance | |
| --- | --- |
| Made by | Alibaba |
| Download size | 1.3 GB |
| Parameters | 2B |
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
| [2026-09-04 · win32 · AMD Ryzen 9 7950X3D 16-Core Processor](https://gezel.com/docs/model-scorecard/2026-09-04-win32-amd-ryzen-9-7950x3d-16-core-proces/) | qwen3.5-2b-q4 · llama.cpp | General capability | 6/33 (18%) | 203.3 tok/s | 7605.0 tok/s |
| [2026-09-04 · win32 · AMD Ryzen 9 7950X3D 16-Core Processor](https://gezel.com/docs/model-scorecard/2026-09-04-win32-amd-ryzen-9-7950x3d-16-core-proces/) | qwen3.5-2b-q4 · llama.cpp | Office and knowledge work | 20/39 (51%) | 203.3 tok/s | 7605.0 tok/s |
| [2026-08-22 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-22-mac-apple-m4-max/) | qwen3.5-2b-q4 · MLX | General capability | 9/33 (27%) | 155.3 tok/s | 3084.0 tok/s |
| [2026-08-22 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-22-mac-apple-m4-max/) | qwen3.5-2b-q4 · MLX | Office and knowledge work | 10/39 (26%) | 155.3 tok/s | 3084.0 tok/s |

## Docbench

How well this build does DocBlocks’ document work, judged from 0 to 100 in the [docbench](https://gezel.com/docs/docbench/) round of 2026-11-11 on llama.cpp: **56** (95% range 53–58, band 5). DocBlocks could use 95% of its answers.

| Group | Score | 95% range |
| --- | --- | --- |
| Review and feedback | 30 | 26–34 |
| Writing new content | 74 | 70–78 |
| Diagrams and illustrations | 51 | 40–61 |
| Presentations | 75 | 71–78 |
| Study aids | 56 | 53–58 |
| Narration cleanup | 71 | 66–77 |

In general review it found, per document, 1.3 small fixes, 0.3 moderate changes and 0.0 substantial ones, and added 1.3 trivial and 0.8 wrong suggestions.

[The model’s own page](https://ollama.com/library/qwen3.5) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
