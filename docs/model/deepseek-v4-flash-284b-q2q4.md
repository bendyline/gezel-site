# DeepSeek V4 Flash (mixed 2/4-bit)

antirez's mixed-precision community GGUF of DeepSeek V4 Flash 0731 — the July 2026 re-post-trained 284B-parameter Mixture-of-Experts (~13B active per token) with 1M-token context and Compressed Sparse Attention. Layers 37-42 keep Q4_K routed experts while the remaining expert layers drop to IQ2_XXS gate/up + Q2_K down, landing at ~98 GB. This is the quality/size sweet spot antirez recommends for 128 GB MacBooks: noticeably better than the straight 2-bit build without the ~156 GB footprint of the full Q4_K one. Produced for antirez's `ds4` inference engine; whether it loads on stock llama depends on its DeepSeek-V4 support.

| At a glance | |
| --- | --- |
| Made by | DeepSeek |
| Download size | 97.6 GB |
| Parameters | 284B |
| Quantization | IQ2_XXS/Q4_K |
| Context window | 1000K tokens |
| Uses tools | Yes |
| Best for | Reasoning |
| Runs on | llama.cpp, DwarfStar |
| License | MIT |
| Added to the catalog | 2026-08-01 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Not measured yet. No [scorecard](https://gezel.com/docs/model-scorecard/) round has run this model or another build of it, which is not a verdict either way. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what a round measures, and you can run the same tests on your own machine:

```sh
gezel bench --model deepseek-v4-flash-284b-q2q4
```

[The model’s own page](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
