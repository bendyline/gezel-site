# Spark-X2.6 (4B, Q4)

XHToken's compact on-device agent model, tuned for tool use, coding and multi-step tasks. Three of every four layers use a 512-token sliding window, so its context cache is small: about 2.4 GB at 64K tokens in FP16, half that at Gezel's default cache setting. The Q4 download is 3.5 GB. Text-only, with adjustable thinking, native tool calling, and English + Chinese.

| At a glance | |
| --- | --- |
| Made by | XHToken |
| Download size | 3.5 GB |
| Parameters | 4B |
| Quantization | Q4_K_M |
| Context window | 262K tokens |
| Uses tools | Yes |
| Best for | Everyday work |
| Runs on | llama.cpp |
| License | Apache 2.0 |
| Added to the catalog | 2026-11-19 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Not measured yet. No [scorecard](https://gezel.com/docs/model-scorecard/) round has run this model or another build of it, which is not a verdict either way. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what a round measures, and you can run the same tests on your own machine:

```sh
gezel bench --model spark-x2.6-4b-q4
```

[The model’s own page](https://huggingface.co/XHToken/Spark-X2.6-4B) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
