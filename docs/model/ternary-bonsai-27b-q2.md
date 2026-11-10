# Ternary Bonsai 27B (2-bit)

PrismML's ternary 2-bit adaptation of Qwen 3.6 27B. Multimodal (text + image + video), 262K native context, thinking and tool-calling support, packaged for Apple Silicon in roughly 8.5GB. A promising 27B-class on-device option for Macs with 16GB+ unified memory; 24GB+ is recommended for useful context headroom.

| At a glance | |
| --- | --- |
| Made by | PrismML |
| Download size | 8.5 GB |
| Parameters | 27B |
| Quantization | 2bit |
| Context window | 262K tokens |
| Uses tools | Yes |
| Best for | Everyday work |
| Runs on | MLX |
| License | Apache 2.0 |
| Added to the catalog | 2026-08-15 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Not measured yet. No [scorecard](https://gezel.com/docs/model-scorecard/) round has run this model or another build of it, which is not a verdict either way. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what a round measures, and you can run the same tests on your own machine:

```sh
gezel bench --model ternary-bonsai-27b-q2
```

[The model’s own page](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-mlx-2bit) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
