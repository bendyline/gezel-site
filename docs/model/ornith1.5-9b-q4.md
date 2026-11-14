# Ornith 1.5 (9B, Q4)

Ornith AI's dense 9B Ornith 1.5 model — a compact self-improving agentic coder trained for software engineering, tool use, and reasoning. The 4-bit build offers the practical small-tier balance of quality and memory use, with native tool calling and a 256K context window. MIT licensed; best suited to machines with 12GB+ usable memory.

| At a glance | |
| --- | --- |
| Made by | Ornith AI |
| Download size | 5.6 GB |
| Parameters | 9B |
| Quantization | Q4_K_M |
| Context window | 262K tokens |
| Uses tools | Yes |
| Best for | Coding |
| Runs on | llama.cpp, MLX |
| License | MIT |
| Added to the catalog | 2026-08-29 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Every [scorecard](https://gezel.com/docs/model-scorecard/) round that ran this model or another build of it, newest first. Each round is one machine, one day, one version of Gezel and one version of the tests, so **rounds are not comparable with each other**: a change to any of those can move a score without the model changing. Where a task ran fewer than three times, the result is a count rather than a percentage. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what each set contains.

| Round | Build | Task set | Passed | Output speed | Prefill speed |
| --- | --- | --- | --- | --- | --- |
| [2026-10-20 · rtx5070ti-core-continuation-64k](https://gezel.com/docs/model-scorecard/2026-10-20-rtx5070ti-core-continuation-64k/) | ornith1.5-9b-q4 · llama.cpp | General capability | 16/26 (some tasks run 2× — count not rate) | 56.6 tok/s | 2618.6 tok/s |
| [2026-10-20 · rtx5070ti-core-original-64k](https://gezel.com/docs/model-scorecard/2026-10-20-rtx5070ti-core-original-64k/) (partial) | ornith1.5-9b-q4 · llama.cpp | General capability | 5/7 (some tasks run once — count not rate) | 57.2 tok/s | 2664.8 tok/s |
| [2026-09-03 · Mac · Apple M2](https://gezel.com/docs/model-scorecard/2026-09-03-mac-apple-m2/) | ornith1.5-9b-q4 · llama.cpp | General capability | 10/11 (some tasks run once — count not rate) | 9.8 tok/s | 154.0 tok/s |
| [2026-09-03 · Mac · Apple M2](https://gezel.com/docs/model-scorecard/2026-09-03-mac-apple-m2/) | ornith1.5-9b-q4 · llama.cpp | Office and knowledge work | 12/13 (some tasks run once — count not rate) | 9.8 tok/s | 154.0 tok/s |
| [2026-09-02 · Ryzen AI HX 370 + RTX 5070 Ti Laptop](https://gezel.com/docs/model-scorecard/2026-09-02-ryzen-ai-hx-370-core-productivity/) | ornith1.5-9b-q4 · llama.cpp | General capability | 9/11 (some tasks run once — count not rate) | 57.7 tok/s | 2230.0 tok/s |
| [2026-09-02 · Ryzen AI HX 370 + RTX 5070 Ti Laptop](https://gezel.com/docs/model-scorecard/2026-09-02-ryzen-ai-hx-370-core-productivity/) | ornith1.5-9b-q4 · llama.cpp | Office and knowledge work | 11/13 (some tasks run once — count not rate) | 57.7 tok/s | 2230.0 tok/s |
| [2026-08-30 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-08-30-dgx-spark-class/) | ornith1.5-9b-q8 · llama.cpp | General capability | 28/32 (88%) | 25.6 tok/s | 2117.0 tok/s |
| [2026-08-30 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-08-30-dgx-spark-class/) | ornith1.5-9b-q8 · llama.cpp | Office and knowledge work | 32/39 (82%) | 25.6 tok/s | 2117.0 tok/s |
| [2026-08-22 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-22-mac-apple-m4-max/) | ornith1.5-9b-q8 · llama.cpp | General capability | 28/33 (85%) | 47.0 tok/s | 823.0 tok/s |
| [2026-08-22 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-22-mac-apple-m4-max/) | ornith1.5-9b-q8 · llama.cpp | Office and knowledge work | 34/39 (87%) | 47.0 tok/s | 823.0 tok/s |

A partial round reran only some of a set’s tasks, usually to check a fix. It is not a score for the whole set.

## Docbench

How well this build does DocBlocks’ document work, judged from 0 to 100 in the [docbench](https://gezel.com/docs/docbench/) round of 2026-11-11 on llama.cpp: **73** (95% range 71–75, band 2). DocBlocks could use 96% of its answers.

| Group | Score | 95% range |
| --- | --- | --- |
| Review and feedback | 50 | 44–57 |
| Writing new content | 87 | 84–89 |
| Diagrams and illustrations | 78 | 72–83 |
| Presentations | 86 | 81–90 |
| Study aids | 73 | 71–75 |
| Narration cleanup | 77 | 74–80 |

In general review it found, per document, 2.5 small fixes, 0.8 moderate changes and 0.3 substantial ones, and added 2.0 trivial and 1.0 wrong suggestions.

[The model’s own page](https://huggingface.co/ornith-ai/Ornith-1.5-9B) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
