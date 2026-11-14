# MiniCPM5 (2B, Q4)

OpenBMB's MiniCPM5 at 2B parameters: a dense Llama-architecture deep-thinking model post-trained with RL and on-policy distillation for tool use, coding and long context, with a 128K context window. Sized for phones with 4 GB or more.

| At a glance | |
| --- | --- |
| Made by | OpenBMB |
| Download size | 1.6 GB |
| Parameters | 2B |
| Quantization | Q4_K_M |
| Context window | 131K tokens |
| Uses tools | Yes |
| Best for | Everyday work |
| Runs on | llama.cpp, MLX |
| License | Apache-2.0 |
| Added to the catalog | 2026-09-27 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Not measured yet. No [scorecard](https://gezel.com/docs/model-scorecard/) round has run this model or another build of it, which is not a verdict either way. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what a round measures, and you can run the same tests on your own machine:

```sh
gezel bench --model minicpm5-2b-q4
```

## Docbench

How well this build does DocBlocks’ document work, judged from 0 to 100 in the [docbench](https://gezel.com/docs/docbench/) round of 2026-11-11 on llama.cpp: **59** (95% range 57–62, band 5). DocBlocks could use 97% of its answers.

| Group | Score | 95% range |
| --- | --- | --- |
| Review and feedback | 35 | 28–41 |
| Writing new content | 74 | 68–80 |
| Diagrams and illustrations | 60 | 54–66 |
| Presentations | 75 | 71–79 |
| Study aids | 59 | 56–62 |
| Narration cleanup | 75 | 69–81 |

In general review it found, per document, 1.7 small fixes, 0.3 moderate changes and 0.3 substantial ones, and added 1.3 trivial and 1.3 wrong suggestions.

[The model’s own page](https://huggingface.co/openbmb/MiniCPM5-2B) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
