# Qwen 3.6 (35B-A3B, Q4)

Alibaba's Qwen 3.6 at 35B total parameters with only 3B active per token (Mixture-of-Experts: 256 experts, 8 routed + 1 shared). Multimodal (text + image + video), 256K native context (extensible to ~1M with YaRN), explicit native tool-calling support. MoE sparsity keeps inference light despite the larger total parameter count.

| At a glance | |
| --- | --- |
| Made by | Alibaba |
| Download size | 22.7 GB |
| Parameters | 35B |
| Quantization | UD-Q4_K_M |
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
| [2026-10-16 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-10-16-m5max-local-seven-completed-arms/) | qwen3.6-35b-a3b-q4 · llama.cpp | General capability | 31/33 (94%) | 133.9 tok/s | 1441.0 tok/s |
| [2026-10-16 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-10-16-m5max-local-seven-completed-arms/) | qwen3.6-35b-a3b-q4 · llama.cpp | Office and knowledge work | 35/39 (90%) | 133.9 tok/s | 1441.0 tok/s |
| [2026-10-16 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-10-16-m5max-local-seven-completed-arms/) | qwen3.6-35b-a3b-q4 · llama.cpp | Engineering work | 26/30 (87%) | 133.9 tok/s | 1441.0 tok/s |
| [2026-10-16 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-10-16-m5max-local-seven-completed-arms/) | qwen3.6-35b-a3b-q4 · llama.cpp | Complex workflows | 19/25 (76%) | 133.9 tok/s | 1441.0 tok/s |
| [2026-09-08 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-09-07-dgx-spark-class/) | qwen3.6-35b-a3b-q4 · llama.cpp | General capability | 31/33 (94%) | 87.4 tok/s | 1675.0 tok/s |
| [2026-09-08 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-09-07-dgx-spark-class/) | qwen3.6-35b-a3b-q4 · llama.cpp | Office and knowledge work | 36/39 (92%) | 87.4 tok/s | 1675.0 tok/s |
| [2026-09-08 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-09-07-dgx-spark-class/) | qwen3.6-35b-a3b-q4 · llama.cpp | Engineering work | 17/27 (63%) | 87.4 tok/s | 1675.0 tok/s |
| [2026-09-08 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-09-07-dgx-spark-class/) | qwen3.6-35b-a3b-q4 · llama.cpp | Complex workflows | 15/27 (56%) | 87.4 tok/s | 1675.0 tok/s |
| [2026-09-02 · Ryzen AI HX 370 + RTX 5070 Ti Laptop](https://gezel.com/docs/model-scorecard/2026-09-02-ryzen-ai-hx-370-core-productivity/) | qwen3.6-35b-a3b-q4 · llama.cpp | General capability | 10/11 (some tasks run once — count not rate) | 15.1 tok/s | 80.0 tok/s |
| [2026-09-02 · Ryzen AI HX 370 + RTX 5070 Ti Laptop](https://gezel.com/docs/model-scorecard/2026-09-02-ryzen-ai-hx-370-core-productivity/) | qwen3.6-35b-a3b-q4 · llama.cpp | Office and knowledge work | 12/13 (some tasks run once — count not rate) | 15.1 tok/s | 80.0 tok/s |
| [2026-08-30 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-08-30-dgx-spark-class/) | qwen3.6-35b-a3b-q4 · llama.cpp | General capability | 31/33 (94%) | 82.0 tok/s | 1690.0 tok/s |
| [2026-08-30 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-08-30-dgx-spark-class/) | qwen3.6-35b-a3b-q4 · llama.cpp | Office and knowledge work | 34/39 (87%) | 82.0 tok/s | 1690.0 tok/s |
| [2026-08-27 · win32 · AMD Ryzen 9 7950X3D 16-Core Processor](https://gezel.com/docs/model-scorecard/2026-08-27-win32-amd-ryzen-9-7950x3d-16-core-proces/) | qwen3.6-35b-a3b-q4 · llama.cpp | General capability | 30/33 (91%) | 131.1 tok/s | 2102.0 tok/s |
| [2026-08-27 · win32 · AMD Ryzen 9 7950X3D 16-Core Processor](https://gezel.com/docs/model-scorecard/2026-08-27-win32-amd-ryzen-9-7950x3d-16-core-proces/) | qwen3.6-35b-a3b-q4 · llama.cpp | Office and knowledge work | 35/39 (90%) | 131.1 tok/s | 2102.0 tok/s |
| [2026-08-20 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-20-mac-apple-m4-max/) | qwen3.6-35b-a3b-q4 · MLX | General capability | 31/33 (94%) | 75.6 tok/s | 1156.0 tok/s |
| [2026-08-20 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-20-mac-apple-m4-max/) | qwen3.6-35b-a3b-q4 · MLX | Office and knowledge work | 33/39 (85%) | 75.6 tok/s | 1156.0 tok/s |
| [2026-08-14 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-14-m4max-llamacpp/) | qwen3.6-35b-a3b-q4 · llama.cpp | General capability | 31/33 (94%) | 78.5 tok/s | 1182.0 tok/s |
| [2026-08-14 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-14-m4max-llamacpp/) | qwen3.6-35b-a3b-q4 · llama.cpp | Office and knowledge work | 34/39 (87%) | 78.5 tok/s | 1182.0 tok/s |
| [2026-08-13 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-13-m4max-llamacpp/) | qwen3.6-35b-a3b-q4 · llama.cpp | General capability | 30/33 (91%) | 71.3 tok/s | 1104.0 tok/s |
| [2026-08-13 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-13-m4max-llamacpp/) | qwen3.6-35b-a3b-q4 · llama.cpp | Office and knowledge work | 33/39 (85%) | 71.3 tok/s | 1104.0 tok/s |
| [2026-08-11 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-11-m4max-llamacpp/) | qwen3.6-35b-a3b-q4 · llama.cpp | General capability | 32/33 (97%) | 76.4 tok/s | 1125.0 tok/s |
| [2026-08-11 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-11-m4max-llamacpp/) | qwen3.6-35b-a3b-q4 · llama.cpp | Office and knowledge work | 33/39 (85%) | 76.4 tok/s | 1125.0 tok/s |

## Docbench

How well this build does DocBlocks’ document work, judged from 0 to 100 in the [docbench](https://gezel.com/docs/docbench/) round of 2026-11-11 on llama.cpp: **76** (95% range 73–79, band 2). DocBlocks could use 99% of its answers.

| Group | Score | 95% range |
| --- | --- | --- |
| Review and feedback | 62 | 52–69 |
| Writing new content | 89 | 86–91 |
| Diagrams and illustrations | 73 | 65–81 |
| Presentations | 89 | 85–92 |
| Study aids | 74 | 71–76 |
| Narration cleanup | 86 | 80–92 |

In general review it found, per document, 2.7 small fixes, 1.3 moderate changes and 0.3 substantial ones, and added 0.3 trivial and 0.3 wrong suggestions.

[The model’s own page](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
