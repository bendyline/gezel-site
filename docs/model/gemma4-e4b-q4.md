# Gemma 4 (E4B, Q4)

Google's edge-optimized Gemma 4 at ~4B effective parameters. Multimodal (text + image + audio), native tool calling. Quantization-aware-trained 4-bit weights — a strong compact default that leaves room to work on a 16GB laptop.

| At a glance | |
| --- | --- |
| Made by | Google |
| Download size | 4.2 GB |
| Parameters | 8B |
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
| [2026-10-25 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-10-25-m5max-bolt-five/) | gemma4-e4b-q4 · MLX | General capability | 26/33 (79%) | 79.0 tok/s | — |
| [2026-10-20 · rtx5070ti-core-continuation-64k](https://gezel.com/docs/model-scorecard/2026-10-20-rtx5070ti-core-continuation-64k/) | gemma4-e4b-q4 · llama.cpp | General capability | 20/26 (some tasks run 2× — count not rate) | 191.4 tok/s | 4483.2 tok/s |
| [2026-10-20 · rtx5070ti-core-original-64k](https://gezel.com/docs/model-scorecard/2026-10-20-rtx5070ti-core-original-64k/) (partial) | gemma4-e4b-q4 · llama.cpp | General capability | 5/7 (some tasks run once — count not rate) | 204.3 tok/s | 4444.4 tok/s |
| [2026-08-22 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-22-mac-apple-m4-max/) | gemma4-e4b-q4 · MLX | General capability | 26/33 (79%) | 96.5 tok/s | 1442.0 tok/s |
| [2026-08-22 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-22-mac-apple-m4-max/) | gemma4-e4b-q4 · MLX | Office and knowledge work | 31/39 (79%) | 96.5 tok/s | 1442.0 tok/s |
| [2026-08-20 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-08-19-gb10-spark/) | gemma4-e4b-q4 · llama.cpp | General capability | 25/33 (76%) | 65.4 tok/s | 4698.0 tok/s |
| [2026-08-20 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-08-19-gb10-spark/) | gemma4-e4b-q4 · llama.cpp | Office and knowledge work | 31/39 (79%) | 65.4 tok/s | 4698.0 tok/s |
| [2026-08-11 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-11-m4max-llamacpp/) | gemma4-e4b-q4 · llama.cpp | General capability | 31/33 (94%) | 94.7 tok/s | 1398.0 tok/s |
| [2026-08-11 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-11-m4max-llamacpp/) | gemma4-e4b-q4 · llama.cpp | Office and knowledge work | 29/39 (74%) | 94.7 tok/s | 1398.0 tok/s |
| [2026-08-09 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-09-m4max-llamacpp/) | gemma4-e4b-q4 · llama.cpp | General capability | 24/33 (73%) | 97.8 tok/s | 1411.0 tok/s |
| [2026-08-09 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-09-m4max-llamacpp/) | gemma4-e4b-q4 · llama.cpp | Office and knowledge work | 28/39 (72%) | 97.8 tok/s | 1411.0 tok/s |

A partial round reran only some of a set’s tasks, usually to check a fix. It is not a score for the whole set.

## Docbench

How well this build does DocBlocks’ document work, judged from 0 to 100 in the [docbench](https://gezel.com/docs/docbench/) round of 2026-11-11 on llama.cpp: **73** (95% range 71–75, band 2). DocBlocks could use 99% of its answers.

| Group | Score | 95% range |
| --- | --- | --- |
| Review and feedback | 52 | 47–58 |
| Writing new content | 86 | 82–89 |
| Diagrams and illustrations | 74 | 69–79 |
| Presentations | 86 | 82–89 |
| Study aids | 69 | 67–72 |
| Narration cleanup | 86 | 80–92 |

In general review it found, per document, 2.3 small fixes, 1.0 moderate changes and 0.0 substantial ones, and added 0.8 trivial and 0.5 wrong suggestions.

[The model’s own page](https://huggingface.co/google/gemma-4-E4B-it) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
