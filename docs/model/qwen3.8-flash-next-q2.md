# Qwen 3.8 Flash Next (180B-A6B, IQ2_XXS/Q2_K, DS4)

An experimental preview of the architecture behind Qwen4: a 125B-parameter MoE with 6B active per token, plus a 51B n-gram embedding table. This antirez DS4 Q2 build is a single 137.10 GiB GGUF with 41.73 GiB of resident main/MTP weights; its original 95.37 GiB BF16 n-gram table remains on a fast local SSD and is read row-by-row without being mapped or preloaded. It is the practical DS4 variant for Apple-silicon Macs: about 47 GiB fully loaded at 128K context on 96 GiB+ machines. On Macs with less memory, DS4 streams its routed experts from SSD with an 8 GiB expert cache, about 22 GiB in all at 64K context, at a lower speed.

| At a glance | |
| --- | --- |
| Made by | Qwen |
| Download size | 147.8 GB |
| Parameters | 180B |
| Quantization | IQ2_XXS/Q2_K |
| Context window | 262K tokens |
| Uses tools | Yes |
| Best for | Everyday work |
| Runs on | DwarfStar |
| License | Qwen Community 1.0 |
| Added to the catalog | 2026-11-07 |

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
