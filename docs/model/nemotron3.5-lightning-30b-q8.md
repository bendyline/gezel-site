# Nemotron 3.5 Lightning (30B-A3B, Q8)

NVIDIA's Nemotron 3.5 Lightning at 30B parameters — text-only, with native reasoning, native tool calling, and a 256K context window. 8-bit quantization for higher fidelity than the Q4 build, at roughly a third more memory (about 35GB, or 34GB on Apple Silicon).

| At a glance | |
| --- | --- |
| Made by | NVIDIA |
| Download size | 35.0 GB |
| Parameters | 30B |
| Quantization | Q8_0 |
| Context window | 262K tokens |
| Uses tools | Yes |
| Best for | Reasoning |
| Runs on | llama.cpp, MLX |
| License | OpenMDW 1.1 |
| Added to the catalog | 2026-08-15 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Every [scorecard](https://gezel.com/docs/model-scorecard/) round that ran this model or another build of it, newest first. Each round is one machine, one day, one version of Gezel and one version of the tests, so **rounds are not comparable with each other**: a change to any of those can move a score without the model changing. Where a task ran fewer than three times, the result is a count rather than a percentage. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what each set contains.

| Round | Build | Task set | Passed | Output speed | Prefill speed |
| --- | --- | --- | --- | --- | --- |
| [2026-09-08 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-09-07-dgx-spark-class/) | nemotron3.5-lightning-30b-q4 · llama.cpp | General capability | 22/33 (67%) | 103.2 tok/s | 1705.0 tok/s |
| [2026-09-08 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-09-07-dgx-spark-class/) | nemotron3.5-lightning-30b-q4 · llama.cpp | Office and knowledge work | 19/39 (49%) | 103.2 tok/s | 1705.0 tok/s |
| [2026-09-08 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-09-07-dgx-spark-class/) | nemotron3.5-lightning-30b-q4 · llama.cpp | Engineering work | 13/30 (43%) | 103.2 tok/s | 1705.0 tok/s |
| [2026-09-08 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-09-07-dgx-spark-class/) | nemotron3.5-lightning-30b-q4 · llama.cpp | Complex workflows | 7/27 (26%) | 103.2 tok/s | 1705.0 tok/s |
| [2026-08-13 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-13-m4max-llamacpp/) | nemotron3.5-lightning-30b-q4 · llama.cpp | General capability | 26/33 (79%) | 93.2 tok/s | 1030.0 tok/s |
| [2026-08-13 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-13-m4max-llamacpp/) | nemotron3.5-lightning-30b-q4 · llama.cpp | Office and knowledge work | 23/39 (59%) | 93.2 tok/s | 1030.0 tok/s |

[The model’s own page](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
