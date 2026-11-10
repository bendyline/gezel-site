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

[The model’s own page](https://huggingface.co/LiquidAI/LFM3-1.7B) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
