# DeepSeek V4 Flash (MXFP4)

antirez's MXFP4 community GGUF of DeepSeek V4 Flash 0731 — the July 2026 re-post-trained 284B-parameter Mixture-of-Experts (~13B active per token) with 1M-token context and Compressed Sparse Attention. Routed experts use the MXFP4 micro-scaled 4-bit block format while attention projections, shared experts, router, embeddings, and output head stay at Q8_0 / F16, landing at ~156 GB — close to the native FP4 build's footprint and the highest-fidelity single-file ds4 variant. Needs a workstation or Mac Studio-class machine with ~200 GB of usable memory. Produced for antirez's `ds4` inference engine.

| At a glance | |
| --- | --- |
| Made by | DeepSeek |
| Download size | 156.0 GB |
| Parameters | 284B |
| Quantization | MXFP4 |
| Context window | 1000K tokens |
| Uses tools | Yes |
| Best for | Reasoning |
| Runs on | llama.cpp, DwarfStar |
| License | MIT |
| Added to the catalog | 2026-08-01 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Every [scorecard](https://gezel.com/docs/model-scorecard/) round that ran this model or another build of it, newest first. Each round is one machine, one day, one version of Gezel and one version of the tests, so **rounds are not comparable with each other**: a change to any of those can move a score without the model changing. Where a task ran fewer than three times, the result is a count rather than a percentage. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what each set contains.

| Round | Build | Task set | Passed | Output speed | Prefill speed |
| --- | --- | --- | --- | --- | --- |
| [2026-08-31 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-08-31-dwarfstar-vs-dense/) | deepseek-v4-flash-284b-q2 · DwarfStar | General capability | 33/33 (100%) | 17.1 tok/s | 456.0 tok/s |
| [2026-08-31 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-08-31-dwarfstar-vs-dense/) | deepseek-v4-flash-284b-q2 · DwarfStar | Office and knowledge work | 36/39 (92%) | 17.1 tok/s | 456.0 tok/s |
| [2026-08-20 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-08-19-gb10-spark/) | deepseek-v4-flash-284b-q2 · DwarfStar | General capability | 33/33 (100%) | 16.9 tok/s | 680.0 tok/s |
| [2026-08-20 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-08-19-gb10-spark/) | deepseek-v4-flash-284b-q2 · DwarfStar | Office and knowledge work | 34/39 (87%) | 16.9 tok/s | 680.0 tok/s |

[The model’s own page](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
