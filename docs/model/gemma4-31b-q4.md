# Gemma 4 (31B, Q4)

Google's flagship Gemma 4 at 30.7B parameters. Multimodal (text + image + video), 256K context, configurable thinking mode, native function-calling, 140+ languages. Frontier-tier instruction-following on device — needs 32GB+ of usable memory.

| At a glance | |
| --- | --- |
| Made by | Google |
| Download size | 17.3 GB |
| Parameters | 30.7B |
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
| [2026-10-12 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-10-12-dgx-spark-class/) | gemma4-31b-q4 · llama.cpp | General capability | 32/33 (97%) | 33.5 tok/s | 754.0 tok/s |
| [2026-10-12 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-10-12-dgx-spark-class/) | gemma4-31b-q4 · llama.cpp | Office and knowledge work | 36/39 (92%) | 33.5 tok/s | 754.0 tok/s |
| [2026-10-12 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-10-12-dgx-spark-class/) | gemma4-31b-q4 · llama.cpp | Engineering work | 26/30 (87%) | 33.5 tok/s | 754.0 tok/s |
| [2026-10-12 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-10-12-dgx-spark-class/) | gemma4-31b-q4 · llama.cpp | Complex workflows | 20/25 (80%) | 34.0 tok/s | 757.0 tok/s |
| [2026-10-11 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-10-11-m5max-six-providers/) | gemma4-31b-q4 · MLX | Office and knowledge work | 11/13 (some tasks run once — count not rate) | — | — |
| [2026-10-11 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-10-11-m5max-six-providers/) | gemma4-31b-q4 · MLX | Engineering work | 7/10 (some tasks run once — count not rate) | — | — |
| [2026-09-08 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-09-07-dgx-spark-class/) | gemma4-31b-q4 · llama.cpp | General capability | 32/33 (97%) | 35.9 tok/s | 484.0 tok/s |
| [2026-09-08 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-09-07-dgx-spark-class/) | gemma4-31b-q4 · llama.cpp | Office and knowledge work | 35/39 (90%) | 35.9 tok/s | 484.0 tok/s |
| [2026-09-08 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-09-07-dgx-spark-class/) | gemma4-31b-q4 · llama.cpp | Engineering work | 20/30 (67%) | 35.9 tok/s | 484.0 tok/s |
| [2026-09-08 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-09-07-dgx-spark-class/) | gemma4-31b-q4 · llama.cpp | Complex workflows | 17/27 (63%) | 35.9 tok/s | 484.0 tok/s |
| [2026-08-27 · win32 · AMD Ryzen 9 7950X3D 16-Core Processor](https://gezel.com/docs/model-scorecard/2026-08-27-win32-amd-ryzen-9-7950x3d-16-core-proces/) | gemma4-31b-q4 · llama.cpp | General capability | 29/33 (88%) | 28.7 tok/s | 407.0 tok/s |
| [2026-08-27 · win32 · AMD Ryzen 9 7950X3D 16-Core Processor](https://gezel.com/docs/model-scorecard/2026-08-27-win32-amd-ryzen-9-7950x3d-16-core-proces/) | gemma4-31b-q4 · llama.cpp | Office and knowledge work | 30/39 (77%) | 28.7 tok/s | 407.0 tok/s |
| [2026-08-20 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-20-mac-apple-m4-max/) | gemma4-31b-q4 · MLX | General capability | 32/33 (97%) | 22.1 tok/s | 196.0 tok/s |
| [2026-08-20 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-20-mac-apple-m4-max/) | gemma4-31b-q4 · MLX | Office and knowledge work | 28/39 (72%) | 22.1 tok/s | 196.0 tok/s |
| [2026-08-11 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-11-m4max-llamacpp/) | gemma4-31b-q4 · llama.cpp | General capability | 31/33 (94%) | 23.3 tok/s | 202.0 tok/s |
| [2026-08-11 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-11-m4max-llamacpp/) | gemma4-31b-q4 · llama.cpp | Office and knowledge work | 28/39 (72%) | 23.3 tok/s | 202.0 tok/s |
| [2026-08-09 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-09-m4max-llamacpp/) | gemma4-31b-q4 · llama.cpp | General capability | 33/33 (100%) | 22.3 tok/s | 195.0 tok/s |
| [2026-08-09 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-09-m4max-llamacpp/) | gemma4-31b-q4 · llama.cpp | Office and knowledge work | 25/39 (64%) | 22.3 tok/s | 195.0 tok/s |

[The model’s own page](https://huggingface.co/google/gemma-4-31B-it) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
