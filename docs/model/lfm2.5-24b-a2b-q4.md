# LFM2.5 (24B-A2B, Q4)

Liquid AI's largest LFM2.5, a mixture-of-experts model that holds 24B parameters but uses only about 2B for each word it writes, so it stays quick for its size. Built for agent work: it always thinks before it answers, calls tools natively, and has a 128K context window. Pair it with search or your documents for fact-heavy questions.

| At a glance | |
| --- | --- |
| Made by | Liquid AI |
| Download size | 13.6 GB |
| Parameters | 24B |
| Quantization | Q4_0 |
| Context window | 128K tokens |
| Uses tools | Yes |
| Best for | Everyday work |
| Runs on | llama.cpp |
| License | LFM Open 1.0 |
| Added to the catalog | 2026-10-14 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Every [scorecard](https://gezel.com/docs/model-scorecard/) round that ran this model or another build of it, newest first. Each round is one machine, one day, one version of Gezel and one version of the tests, so **rounds are not comparable with each other**: a change to any of those can move a score without the model changing. Where a task ran fewer than three times, the result is a count rather than a percentage. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what each set contains.

| Round | Build | Task set | Passed | Output speed | Prefill speed |
| --- | --- | --- | --- | --- | --- |
| [2026-10-16 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-10-16-m5max-local-seven-completed-arms/) | lfm2.5-24b-a2b-q4 · llama.cpp | General capability | 24/32 (75%) | 182.6 tok/s | 4711.0 tok/s |
| [2026-10-16 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-10-16-m5max-local-seven-completed-arms/) | lfm2.5-24b-a2b-q4 · llama.cpp | Office and knowledge work | 28/39 (72%) | 182.6 tok/s | 4711.0 tok/s |
| [2026-10-16 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-10-16-m5max-local-seven-completed-arms/) | lfm2.5-24b-a2b-q4 · llama.cpp | Engineering work | 18/30 (60%) | 182.6 tok/s | 4711.0 tok/s |
| [2026-10-16 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-10-16-m5max-local-seven-completed-arms/) | lfm2.5-24b-a2b-q4 · llama.cpp | Complex workflows | 7/27 (26%) | 182.6 tok/s | 4711.0 tok/s |

[The model’s own page](https://huggingface.co/LiquidAI/LFM2.5-24B-A2B) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
