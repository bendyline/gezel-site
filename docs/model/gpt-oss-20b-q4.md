# GPT-OSS (20B, MoE, Q4)

OpenAI's open-weight 20B-parameter Mixture-of-Experts model (~3.6B active per token). Configurable reasoning effort (low/medium/high), full chain-of-thought access, and native function-calling. Lower-latency frontier-class on-device option for machines with 16GB+ memory.

| At a glance | |
| --- | --- |
| Made by | OpenAI |
| Download size | 12.0 GB |
| Parameters | 20B |
| Quantization | Q4_K_M |
| Context window | 131K tokens |
| Uses tools | Yes |
| Best for | Reasoning |
| Runs on | llama.cpp, MLX, Ollama |
| License | Apache 2.0 |
| Added to the catalog | 2026-08-15 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Not measured yet. No [scorecard](https://gezel.com/docs/model-scorecard/) round has run this model or another build of it, which is not a verdict either way. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what a round measures, and you can run the same tests on your own machine:

```sh
gezel bench --model gpt-oss-20b-q4
```

## Docbench

How well this build does DocBlocks’ document work, judged from 0 to 100 in the [docbench](https://gezel.com/docs/docbench/) focused re-run of 2026-11-12 on llama.cpp: **67** (95% range 64–69, band 3). DocBlocks could use 97% of its answers.

| Group | Score | 95% range |
| --- | --- | --- |
| Review and feedback | 40 | 35–46 |
| Writing new content | 83 | 79–86 |
| Diagrams and illustrations | 73 | 63–81 |
| Presentations | 79 | 72–84 |
| Study aids | 67 | 64–71 |
| Narration cleanup | 75 | 73–77 |

In general review it found, per document, 2.8 small fixes, 0.5 moderate changes and 0.3 substantial ones, and added 3.3 trivial and 1.3 wrong suggestions.

Earlier results for this build, measured before the one above under their own round’s tests, reviewer and Gezel version:

- 2026-11-11, pack 0.2.1: 58

[The model’s own page](https://ollama.com/library/gpt-oss) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
