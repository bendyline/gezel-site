# Underdog Saluki 1.0 (27B, IQ2 mix)

Conway Research's compact edition of Qwen 3.8 27B, with mixed 2-bit quantization tuned for tool calling. A 7.9 GB download for local chat, coding, and optional reasoning, with a 262K native context window. This entry supports text and tools; memory use grows with conversation length.

| At a glance | |
| --- | --- |
| Made by | Alibaba |
| Download size | 7.9 GB |
| Parameters | 27B |
| Quantization | IQ2-mix |
| Context window | 262K tokens |
| Uses tools | Yes |
| Best for | Everyday work |
| Runs on | llama.cpp |
| License | Apache 2.0 |
| Added to the catalog | 2026-10-09 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Every [scorecard](https://gezel.com/docs/model-scorecard/) round that ran this model or another build of it, newest first. Each round is one machine, one day, one version of Gezel and one version of the tests, so **rounds are not comparable with each other**: a change to any of those can move a score without the model changing. Where a task ran fewer than three times, the result is a count rather than a percentage. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what each set contains.

| Round | Build | Task set | Passed | Output speed | Prefill speed |
| --- | --- | --- | --- | --- | --- |
| [2026-11-09 · Windows x64 · RTX 5070 Ti Laptop (12 GB)](https://gezel.com/docs/model-scorecard/2026-11-09-windows-saluki-native-0-1-57-round3/) (partial) | underdog-saluki-27b-iq2-mix · llama.cpp | General capability | 11/11 (some tasks run once — count not rate) | 8.6 tok/s | 494.6 tok/s |
| [2026-11-09 · Windows x64 · RTX 5070 Ti Laptop (12 GB)](https://gezel.com/docs/model-scorecard/2026-11-09-windows-saluki-native-0-1-57-round3/) (partial) | underdog-saluki-27b-iq2-mix · llama.cpp | Office and knowledge work | 8/13 (some tasks run once — count not rate) | 2.8 tok/s | 162.2 tok/s |
| [2026-11-09 · Windows x64 · RTX 5070 Ti Laptop (12 GB)](https://gezel.com/docs/model-scorecard/2026-11-09-windows-saluki-native-0-1-57-round3/) (partial) | underdog-saluki-27b-iq2-mix · llama.cpp | Engineering work | 3/10 (some tasks run once — count not rate) | 2.8 tok/s | 158.4 tok/s |
| [2026-11-04 · Windows x64 · RTX 5070 Ti Laptop (12 GB)](https://gezel.com/docs/model-scorecard/2026-11-03-windows-saluki-native-0-1-57-original/) | underdog-saluki-27b-iq2-mix · llama.cpp | General capability | 19/22 (some tasks run 2× — count not rate) | 8.4 tok/s | 383.1 tok/s |
| [2026-11-04 · Windows x64 · RTX 5070 Ti Laptop (12 GB)](https://gezel.com/docs/model-scorecard/2026-11-03-windows-saluki-native-0-1-57-original/) | underdog-saluki-27b-iq2-mix · llama.cpp | Office and knowledge work | 20/26 (some tasks run 2× — count not rate) | 8.2 tok/s | 361.5 tok/s |
| [2026-11-04 · Windows x64 · RTX 5070 Ti Laptop (12 GB)](https://gezel.com/docs/model-scorecard/2026-11-03-windows-saluki-native-0-1-57-original/) | underdog-saluki-27b-iq2-mix · llama.cpp | Engineering work | 19/20 (some tasks run 2× — count not rate) | 8.7 tok/s | 402.7 tok/s |
| [2026-11-04 · Windows x64 · RTX 5070 Ti Laptop (12 GB)](https://gezel.com/docs/model-scorecard/2026-11-03-windows-saluki-native-0-1-57-original/) | underdog-saluki-27b-iq2-mix · llama.cpp | Complex workflows | 13/16 (some tasks run once — count not rate) | 8.3 tok/s | 360.9 tok/s |
| [2026-10-20 · rtx5070ti-core-continuation-64k](https://gezel.com/docs/model-scorecard/2026-10-20-rtx5070ti-core-continuation-64k/) | underdog-saluki-27b-iq2-mix · llama.cpp | General capability | 23/26 (some tasks run 2× — count not rate) | 12.6 tok/s | 657.3 tok/s |
| [2026-10-20 · rtx5070ti-core-original-64k](https://gezel.com/docs/model-scorecard/2026-10-20-rtx5070ti-core-original-64k/) (partial) | underdog-saluki-27b-iq2-mix · llama.cpp | General capability | 6/7 (some tasks run once — count not rate) | 12.9 tok/s | 669.4 tok/s |

A partial round reran only some of a set’s tasks, usually to check a fix. It is not a score for the whole set.

[The model’s own page](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
