# Llama 3.2 (3B, Q4)

Meta's 3B chat model. Small enough to run on modest hardware, sharp enough to be a useful default.

| At a glance | |
| --- | --- |
| Made by | Meta |
| Download size | 2.0 GB |
| Parameters | 3B |
| Quantization | Q4_K_M |
| Context window | 128K tokens |
| Uses tools | Yes |
| Best for | Everyday work |
| Runs on | llama.cpp, MLX, Ollama |
| License | Llama 3.2 Community |
| Added to the catalog | 2026-08-15 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Not measured yet. No [scorecard](https://gezel.com/docs/model-scorecard/) round has run this model or another build of it, which is not a verdict either way. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what a round measures, and you can run the same tests on your own machine:

```sh
gezel bench --model llama3.2-3b-q4
```

## Docbench

How well this build does DocBlocks’ document work, judged from 0 to 100 in the [docbench](https://gezel.com/docs/docbench/) round of 2026-11-11 on llama.cpp: **54** (95% range 51–56, band 6). DocBlocks could use 94% of its answers.

| Group | Score | 95% range |
| --- | --- | --- |
| Review and feedback | 32 | 28–37 |
| Writing new content | 66 | 62–71 |
| Diagrams and illustrations | 56 | 48–63 |
| Presentations | 64 | 57–70 |
| Study aids | 53 | 48–57 |
| Narration cleanup | 68 | 64–72 |

In general review it found, per document, 0.8 small fixes, 1.0 moderate changes and 0.3 substantial ones, and added 1.5 trivial and 1.0 wrong suggestions.

[The model’s own page](https://ollama.com/library/llama3.2) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
