# BTL-4 (35B-A3B, Q4)

Bad Theory Labs' agentic build of Ornith 1.0 35B, tuned for tool-heavy coding and long stretches of unattended work. Native reasoning, native tool calling, and a 256K context window that stays light on memory even when it's full. Capable-tier on-device option for machines with 32GB+ memory — see BTL-4 Compact for a smaller build.

| At a glance | |
| --- | --- |
| Made by | Bad Theory Labs |
| Download size | 21.4 GB |
| Parameters | 35B |
| Quantization | Q4_K_M |
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
| [2026-10-16 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-10-16-m5max-local-seven-completed-arms/) | btl4-35b-q4 · llama.cpp | General capability | 28/33 (85%) | 119.4 tok/s | 2828.0 tok/s |
| [2026-10-16 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-10-16-m5max-local-seven-completed-arms/) | btl4-35b-q4 · llama.cpp | Office and knowledge work | 31/39 (79%) | 119.4 tok/s | 2828.0 tok/s |
| [2026-10-16 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-10-16-m5max-local-seven-completed-arms/) | btl4-35b-q4 · llama.cpp | Engineering work | 25/30 (83%) | 119.4 tok/s | 2828.0 tok/s |
| [2026-10-16 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-10-16-m5max-local-seven-completed-arms/) | btl4-35b-q4 · llama.cpp | Complex workflows | 14/26 (54%) | 119.4 tok/s | 2828.0 tok/s |
| [2026-08-20 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-08-19-gb10-spark/) | btl4-35b-q4 · llama.cpp | General capability | 27/31 (87%) | 73.2 tok/s | 1608.0 tok/s |
| [2026-08-20 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-08-19-gb10-spark/) | btl4-35b-q4 · llama.cpp | Office and knowledge work | 31/39 (79%) | 73.2 tok/s | 1608.0 tok/s |

[The model’s own page](https://huggingface.co/badtheorylabs/BTL-4) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
