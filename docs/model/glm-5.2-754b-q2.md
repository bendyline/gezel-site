# GLM 5.2 (IQ2_XXS)

antirez's routed 2-bit community GGUF of Z.ai's GLM 5.2 — a 754B-parameter Mixture-of-Experts (256 experts, 8 active per token, ~40B active) with a 1M-token context and DeepSeek-style sparse attention. The routed experts are crushed to IQ2_XXS (block 78 in Q2_K) while attention, the shared expert, embeddings, and the output head stay at Q8-class precision, landing the file at ~197 GB. Only ~20 GB of that is non-routed weight that must stay resident: DwarfStar streams the remaining ~177 GB of experts from SSD, so it runs on a 128 GB machine — but it is a very large download and a slow first turn. Built for antirez's `ds4` engine; these quants do not load on stock llama.cpp.

| At a glance | |
| --- | --- |
| Made by | Z.ai |
| Download size | 211.1 GB |
| Parameters | 754B |
| Quantization | IQ2_XXS |
| Context window | 1049K tokens |
| Uses tools | Yes |
| Best for | Reasoning |
| Runs on | DwarfStar |
| License | MIT |
| Added to the catalog | 2026-07-25 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Not measured yet. No [scorecard](https://gezel.com/docs/model-scorecard/) round has run this model or another build of it, which is not a verdict either way. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what a round measures, and you can run the same tests on your own machine:

```sh
gezel bench --model glm-5.2-754b-q2
```

[The model’s own page](https://huggingface.co/zai-org/GLM-5.2) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
