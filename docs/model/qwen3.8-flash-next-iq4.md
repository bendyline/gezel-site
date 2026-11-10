# Qwen 3.8 Flash Next (180B-A6B, 4-bit)

Qwen's experimental preview of the architecture behind Qwen4: a 125B-parameter MoE with 6B active per token, plus a 51B n-gram embedding table. Gezel offers the 94 GB Unsloth UD-IQ4_XS split GGUF for llama.cpp and the verified 112 GB native MLX Community group-32 conversion for Apple silicon. With mlx-vlm 0.7.1, Gezel memory-maps the MLX build's 29.80 GiB PLE table instead of wiring it into Metal; the measured fixed working set is about 75.2 GiB after the first live batch, and a 128 GB Mac is recommended.

| At a glance | |
| --- | --- |
| Made by | Qwen |
| Download size | 93.7 GB |
| Parameters | 180B |
| Quantization | UD-IQ4_XS |
| Context window | 262K tokens |
| Uses tools | Yes |
| Best for | Everyday work |
| Runs on | llama.cpp, MLX |
| License | Qwen Community 1.0 |
| Added to the catalog | 2026-09-17 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Every [scorecard](https://gezel.com/docs/model-scorecard/) round that ran this model or another build of it, newest first. Each round is one machine, one day, one version of Gezel and one version of the tests, so **rounds are not comparable with each other**: a change to any of those can move a score without the model changing. Where a task ran fewer than three times, the result is a count rather than a percentage. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what each set contains.

| Round | Build | Task set | Passed | Output speed | Prefill speed |
| --- | --- | --- | --- | --- | --- |
| [2026-09-18 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-09-18-dgx-spark-class/) | qwen3.8-flash-next-iq4 · llama.cpp | General capability | 31/33 (94%) | 25.8 tok/s | 480.0 tok/s |
| [2026-09-18 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-09-18-dgx-spark-class/) | qwen3.8-flash-next-q2 · DwarfStar | General capability | 32/33 (97%) | 27.1 tok/s | 433.0 tok/s |
| [2026-09-08 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-09-07-dgx-spark-class/) | qwen3.8-flash-next-iq4 · llama.cpp | General capability | 33/33 (100%) | 24.5 tok/s | 380.0 tok/s |
| [2026-09-08 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-09-07-dgx-spark-class/) | qwen3.8-flash-next-iq4 · llama.cpp | Office and knowledge work | 35/39 (90%) | 24.5 tok/s | 380.0 tok/s |
| [2026-09-08 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-09-07-dgx-spark-class/) | qwen3.8-flash-next-iq4 · llama.cpp | Engineering work | 15/26 (58%) | 24.3 tok/s | 420.0 tok/s |
| [2026-09-08 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-09-07-dgx-spark-class/) | qwen3.8-flash-next-iq4 · llama.cpp | Complex workflows | 16/27 (59%) | 24.3 tok/s | 416.0 tok/s |

[The model’s own page](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
