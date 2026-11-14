# Qwen 3.5 (0.8B, Q4)

Alibaba's Qwen 3.5 at 0.8B parameters, the smallest of the family, with native tool calling and a 256K context window. Sized for phones and e-readers with 3-4 GB of memory.

| At a glance | |
| --- | --- |
| Made by | Alibaba |
| Download size | 0.5 GB |
| Parameters | 0.8B |
| Quantization | Q4_K_M |
| Context window | 256K tokens |
| Uses tools | Yes |
| Best for | Everyday work |
| Runs on | llama.cpp, MLX, Ollama |
| License | Apache-2.0 |
| Added to the catalog | 2026-09-27 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Not measured yet. No [scorecard](https://gezel.com/docs/model-scorecard/) round has run this model or another build of it, which is not a verdict either way. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what a round measures, and you can run the same tests on your own machine:

```sh
gezel bench --model qwen3.5-0.8b-q4
```

## Docbench

How well this build does DocBlocks’ document work, judged from 0 to 100 in the [docbench](https://gezel.com/docs/docbench/) round of 2026-11-11 on llama.cpp: **43** (95% range 40–45, band 7). DocBlocks could use 88% of its answers.

| Group | Score | 95% range |
| --- | --- | --- |
| Review and feedback | 20 | 16–25 |
| Writing new content | 56 | 52–60 |
| Diagrams and illustrations | 32 | 24–39 |
| Presentations | 70 | 65–75 |
| Study aids | 46 | 42–51 |
| Narration cleanup | 67 | 61–71 |

In general review it found, per document, 0.7 small fixes, 0.0 moderate changes and 0.0 substantial ones, and added 3.3 trivial and 0.3 wrong suggestions.

[The model’s own page](https://ollama.com/library/qwen3.5) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
