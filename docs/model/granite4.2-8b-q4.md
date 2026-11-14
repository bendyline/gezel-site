# Granite 4.2 (8B, Q4)

IBM's dense Granite 4.2 reasoning model at 8B parameters. Text-only, with native thinking, agentic coding, native tool calling, multilingual support, and a 128K context window. Q4 builds are suited to machines with 16GB+ usable memory.

| At a glance | |
| --- | --- |
| Made by | IBM Granite |
| Download size | 5.3 GB |
| Parameters | 8B |
| Quantization | Q4_K_M |
| Context window | 131K tokens |
| Uses tools | Yes |
| Best for | Reasoning |
| Runs on | llama.cpp, MLX |
| License | Apache 2.0 |
| Added to the catalog | 2026-08-25 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Not measured yet. No [scorecard](https://gezel.com/docs/model-scorecard/) round has run this model or another build of it, which is not a verdict either way. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what a round measures, and you can run the same tests on your own machine:

```sh
gezel bench --model granite4.2-8b-q4
```

## Docbench

How well this build does DocBlocks’ document work, judged from 0 to 100 in the [docbench](https://gezel.com/docs/docbench/) round of 2026-11-11 on llama.cpp: **66** (95% range 63–68, band 4). DocBlocks could use 96% of its answers.

| Group | Score | 95% range |
| --- | --- | --- |
| Review and feedback | 38 | 30–45 |
| Writing new content | 82 | 79–86 |
| Diagrams and illustrations | 69 | 62–75 |
| Presentations | 82 | 78–87 |
| Study aids | 67 | 64–71 |
| Narration cleanup | 76 | 73–79 |

In general review it found, per document, 2.7 small fixes, 1.3 moderate changes and 0.0 substantial ones, and added 1.3 trivial and 0.0 wrong suggestions.

[The model’s own page](https://huggingface.co/ibm-granite/granite-4.2-8b) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
