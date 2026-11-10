# LFM2.5 (2.6B, Q4)

Liquid AI's LFM2.5 at 2.6B parameters. A hybrid convolution-attention design built for on-device speed — light on memory, quick even on modest hardware, with integrated reasoning, native tool calling, and a 128K context window.

| At a glance | |
| --- | --- |
| Made by | Liquid AI |
| Download size | 1.7 GB |
| Parameters | 2.6B |
| Quantization | Q4_K_M |
| Context window | 128K tokens |
| Uses tools | Yes |
| Best for | Everyday work |
| Runs on | llama.cpp, MLX |
| License | LFM Open 1.0 |
| Added to the catalog | 2026-08-15 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Every [scorecard](https://gezel.com/docs/model-scorecard/) round that ran this model or another build of it, newest first. Each round is one machine, one day, one version of Gezel and one version of the tests, so **rounds are not comparable with each other**: a change to any of those can move a score without the model changing. Where a task ran fewer than three times, the result is a count rather than a percentage. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what each set contains.

| Round | Build | Task set | Passed | Output speed | Prefill speed |
| --- | --- | --- | --- | --- | --- |
| [2026-08-22 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-22-mac-apple-m4-max/) | lfm2.5-2.6b-q4 · llama.cpp | General capability | 13/33 (39%) | 168.4 tok/s | 2125.0 tok/s |
| [2026-08-22 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-22-mac-apple-m4-max/) | lfm2.5-2.6b-q4 · llama.cpp | Office and knowledge work | 13/39 (33%) | 168.4 tok/s | 2125.0 tok/s |

[The model’s own page](https://huggingface.co/LiquidAI/LFM2.5-2.6B) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
