# LFM3 (1.7B, Q4)

Liquid AI's LFM3 at 1.7B parameters. A tri-hybrid convolution-attention design built for local agents — about a gigabyte of memory, quick even on modest hardware, with integrated reasoning, native tool calling, and a 256K context window.

| At a glance | |
| --- | --- |
| Made by | Liquid AI |
| Download size | 1.0 GB |
| Parameters | 1.7B |
| Quantization | Q4_0 |
| Context window | 262K tokens |
| Uses tools | Yes |
| Best for | Everyday work |
| Runs on | llama.cpp |
| License | LFM Open 1.0 |
| Added to the catalog | 2026-11-07 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Not measured yet. No [scorecard](https://gezel.com/docs/model-scorecard/) round has run this model or another build of it, which is not a verdict either way. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what a round measures, and you can run the same tests on your own machine:

```sh
gezel bench --model lfm3-1.7b-q4
```

## Docbench

How well this build does DocBlocks’ document work, judged from 0 to 100 in the [docbench](https://gezel.com/docs/docbench/) round of 2026-11-11 on llama.cpp: **55** (95% range 52–58, band 5). DocBlocks could use 92% of its answers.

| Group | Score | 95% range |
| --- | --- | --- |
| Review and feedback | 30 | 23–37 |
| Writing new content | 68 | 64–71 |
| Diagrams and illustrations | 70 | 62–76 |
| Presentations | 76 | 71–79 |
| Study aids | 57 | 54–61 |
| Narration cleanup | 13 | 0–38 |

In general review it found, per document, 3.0 small fixes, 0.3 moderate changes and 0.0 substantial ones, and added 4.0 trivial and 3.3 wrong suggestions.

[The model’s own page](https://huggingface.co/LiquidAI/LFM3-1.7B) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
