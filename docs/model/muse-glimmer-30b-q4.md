# Muse Glimmer (30B, Q4)

Meta Superintelligence Labs' Muse Glimmer at 30B parameters, distilled from the larger Muse Spark and built for long-horizon tool use on everyday hardware. Multimodal (text + image), 131K context, native tool calling, and adjustable reasoning effort. Meta's own build, sized for machines with 24GB+ memory.

| At a glance | |
| --- | --- |
| Made by | Meta Superintelligence Labs |
| Download size | 16.8 GB |
| Parameters | 30B |
| Quantization | Q4_K_M |
| Context window | 131K tokens |
| Uses tools | Yes |
| Best for | Everyday work |
| Runs on | llama.cpp |
| License | Apache 2.0 |
| Added to the catalog | 2026-11-07 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Every [scorecard](https://gezel.com/docs/model-scorecard/) round that ran this model or another build of it, newest first. Each round is one machine, one day, one version of Gezel and one version of the tests, so **rounds are not comparable with each other**: a change to any of those can move a score without the model changing. Where a task ran fewer than three times, the result is a count rather than a percentage. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what each set contains.

| Round | Build | Task set | Passed | Output speed | Prefill speed |
| --- | --- | --- | --- | --- | --- |
| [2026-09-08 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-09-07-dgx-spark-class/) | muse-glimmer-30b-q4 · llama.cpp | General capability | 27/33 (82%) | 12.4 tok/s | 932.0 tok/s |
| [2026-09-08 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-09-07-dgx-spark-class/) | muse-glimmer-30b-q4 · llama.cpp | Office and knowledge work | 28/39 (72%) | 12.4 tok/s | 932.0 tok/s |
| [2026-09-08 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-09-07-dgx-spark-class/) | muse-glimmer-30b-q4 · llama.cpp | Engineering work | 13/30 (43%) | 12.3 tok/s | 930.0 tok/s |
| [2026-09-08 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-09-07-dgx-spark-class/) | muse-glimmer-30b-q4 · llama.cpp | Complex workflows | 13/27 (48%) | 12.3 tok/s | 921.0 tok/s |
| [2026-08-13 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-13-m4max-llamacpp/) | muse-glimmer-30b-q4 · llama.cpp | General capability | 30/33 (91%) | 26.0 tok/s | 226.0 tok/s |
| [2026-08-13 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-13-m4max-llamacpp/) | muse-glimmer-30b-q4 · llama.cpp | Office and knowledge work | 25/39 (64%) | 26.0 tok/s | 228.0 tok/s |

[The model’s own page](https://huggingface.co/meta-models/Muse-Glimmer-30B) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
