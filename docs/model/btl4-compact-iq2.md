# BTL-4 Compact (35B-A3B, IQ2_XXS)

Bad Theory Labs' agentic build of Ornith 1.0 35B, tuned for tool-heavy coding and long stretches of unattended work. Native reasoning, native tool calling, and a 256K context window that stays light on memory even when it's full. Optimized for low-memory machines — the whole model fits in under 10GB, so it runs on a 16GB laptop, trading some accuracy against the full-size BTL-4 build.

| At a glance | |
| --- | --- |
| Made by | Bad Theory Labs |
| Download size | 10.0 GB |
| Parameters | 35B |
| Quantization | IQ2_XXS |
| Context window | 262K tokens |
| Uses tools | Yes |
| Best for | Coding |
| Runs on | llama.cpp |
| License | Apache 2.0 |
| Added to the catalog | 2026-08-15 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Every [scorecard](https://gezel.com/docs/model-scorecard/) round that ran this model or another build of it, newest first. Each round is one machine, one day, one version of Gezel and one version of the tests, so **rounds are not comparable with each other**: a change to any of those can move a score without the model changing. Where a task ran fewer than three times, the result is a count rather than a percentage. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what each set contains.

| Round | Build | Task set | Passed | Output speed | Prefill speed |
| --- | --- | --- | --- | --- | --- |
| [2026-08-22 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-22-mac-apple-m4-max/) | btl4-compact-iq2 · llama.cpp | General capability | 29/33 (88%) | 80.4 tok/s | 1120.0 tok/s |
| [2026-08-22 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-22-mac-apple-m4-max/) | btl4-compact-iq2 · llama.cpp | Office and knowledge work | 27/39 (69%) | 80.4 tok/s | 1120.0 tok/s |

[The model’s own page](https://huggingface.co/badtheorylabs/BTL-4-Compact) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
