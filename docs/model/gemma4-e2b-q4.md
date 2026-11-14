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

## Docbench

How well this build does DocBlocks’ document work, judged from 0 to 100 in the [docbench](https://gezel.com/docs/docbench/) round of 2026-11-11 on llama.cpp: **64** (95% range 61–66, band 4). DocBlocks could use 97% of its answers.

| Group | Score | 95% range |
| --- | --- | --- |
| Review and feedback | 40 | 35–45 |
| Writing new content | 74 | 69–80 |
| Diagrams and illustrations | 69 | 62–75 |
| Presentations | 80 | 75–85 |
| Study aids | 65 | 62–67 |
| Narration cleanup | 72 | 64–77 |

In general review it found, per document, 1.3 small fixes, 0.8 moderate changes and 0.0 substantial ones, and added 1.3 trivial and 1.5 wrong suggestions.

[The model’s own page](https://huggingface.co/google/gemma-4-E2B-it) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
