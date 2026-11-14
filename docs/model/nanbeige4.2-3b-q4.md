# Nanbeige 4.2 (3B, Q4)

Nanbeige LLM Lab's compact agentic reasoning model. Its 3B label counts non-embedding parameters; total parameters are about 4B. The 22 transformer layers run twice over shared weights, with separate context caches. The Q4 download is 2.5 GiB, but one chat's FP16 context cache alone needs 5.5 GiB at 32K tokens or 11 GiB at 64K, plus model weights and engine overhead. Allow roughly 10 GiB of free GPU memory for a 32K, single-chat FP16 setup; longer context or more simultaneous chats needs substantially more headroom. Text-only, with native thinking, XML tool calling, English + Chinese, and support for up to 256K context when memory permits.

| At a glance | |
| --- | --- |
| Made by | Nanbeige LLM Lab |
| Download size | 2.7 GB |
| Parameters | 3B |
| Quantization | Q4_K_M |
| Context window | 262K tokens |
| Uses tools | Yes |
| Best for | Reasoning |
| Runs on | llama.cpp |
| License | Apache 2.0 |
| Added to the catalog | 2026-08-31 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Not measured yet. No [scorecard](https://gezel.com/docs/model-scorecard/) round has run this model or another build of it, which is not a verdict either way. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what a round measures, and you can run the same tests on your own machine:

```sh
gezel bench --model nanbeige4.2-3b-q4
```

## Docbench

How well this build does DocBlocks’ document work, judged from 0 to 100 in the [docbench](https://gezel.com/docs/docbench/) focused re-run of 2026-11-12 on llama.cpp: **71** (95% range 69–73, band 3). DocBlocks could use 97% of its answers.

| Group | Score | 95% range |
| --- | --- | --- |
| Review and feedback | 53 | 46–59 |
| Writing new content | 83 | 80–86 |
| Diagrams and illustrations | 71 | 65–77 |
| Presentations | 83 | 80–87 |
| Study aids | 69 | 67–72 |
| Narration cleanup | 79 | 74–83 |

In general review it found, per document, 1.8 small fixes, 0.5 moderate changes and 0.3 substantial ones, and added 1.5 trivial and 0.3 wrong suggestions.

Earlier results for this build, measured before the one above under their own round’s tests, reviewer and Gezel version:

- 2026-11-11, pack 0.2.1: 61

[The model’s own page](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
