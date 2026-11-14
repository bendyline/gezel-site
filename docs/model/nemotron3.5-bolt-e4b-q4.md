# Nemotron 3.5 Bolt (E4B, Q4)

NVIDIA's conversational model built on Gemma 4 E4B, with native tool calling, optional reasoning, and a 64K context window. Text only. The official Q4_K_M download is about 6.2GB; working memory depends on context and hardware.

| At a glance | |
| --- | --- |
| Made by | NVIDIA |
| Download size | 6.2 GB |
| Parameters | 8B |
| Quantization | Q4_K_M |
| Context window | 66K tokens |
| Uses tools | Yes |
| Best for | Everyday work |
| Runs on | llama.cpp |
| License | OpenMDW 1.1 |
| Added to the catalog | 2026-11-07 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Every [scorecard](https://gezel.com/docs/model-scorecard/) round that ran this model or another build of it, newest first. Each round is one machine, one day, one version of Gezel and one version of the tests, so **rounds are not comparable with each other**: a change to any of those can move a score without the model changing. Where a task ran fewer than three times, the result is a count rather than a percentage. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what each set contains.

| Round | Build | Task set | Passed | Output speed | Prefill speed |
| --- | --- | --- | --- | --- | --- |
| [2026-10-25 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-10-25-m5max-bolt-five/) | nemotron3.5-bolt-e4b-q4 · llama.cpp | General capability | 26/33 (79%) | 72.0 tok/s | 2514.0 tok/s |

## Docbench

How well this build does DocBlocks’ document work, judged from 0 to 100 in the [docbench](https://gezel.com/docs/docbench/) round of 2026-11-11 on llama.cpp: **69** (95% range 67–72, band 3). DocBlocks could use 99% of its answers.

| Group | Score | 95% range |
| --- | --- | --- |
| Review and feedback | 50 | 45–54 |
| Writing new content | 85 | 82–88 |
| Diagrams and illustrations | 66 | 56–76 |
| Presentations | 82 | 78–87 |
| Study aids | 68 | 66–69 |
| Narration cleanup | 83 | 77–89 |

In general review it found, per document, 1.8 small fixes, 0.3 moderate changes and 0.0 substantial ones, and added 0.5 trivial and 1.0 wrong suggestions.

[The model’s own page](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
