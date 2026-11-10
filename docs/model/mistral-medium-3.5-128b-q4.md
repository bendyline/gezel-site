# Mistral Medium 3.5 (128B, Q4)

Mistral AI's frontier dense 128B model with configurable reasoning (instant or chain-of-thought via `reasoning_effort`). Native function-calling, 256K context. Workstation-tier on-device — needs ~80GB of usable memory for Q4_K_M; an MLX 4-bit build is available for Apple Silicon Mac Studio-class hardware. License is a Modified MIT with a revenue carve-out — free for commercial and non-commercial use unless the licensee company exceeds Mistral's revenue threshold.

| At a glance | |
| --- | --- |
| Made by | Mistral AI |
| Download size | 74.9 GB |
| Parameters | 128B |
| Quantization | Q4_K_M |
| Context window | 262K tokens |
| Uses tools | Yes |
| Best for | Reasoning |
| Runs on | llama.cpp, MLX |
| License | MIT-Modified |
| Added to the catalog | 2026-08-15 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Not measured yet. No [scorecard](https://gezel.com/docs/model-scorecard/) round has run this model or another build of it, which is not a verdict either way. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what a round measures, and you can run the same tests on your own machine:

```sh
gezel bench --model mistral-medium-3.5-128b-q4
```

[The model’s own page](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
