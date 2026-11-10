# DeepSeek V4.1 Flash (IQ2_XXS)

antirez's 2-bit GGUF of DeepSeek V4.1 Flash 1017, the October 2026 update to V4.1 Flash with large gains in reasoning, coding and agentic work. It is a 552B-parameter Mixture-of-Experts (8B active per token while reading a prompt, 16B while writing) with a 1M-token context and 196B parameters of Engram memory looked up from disk. The file is 341 GiB: 152 GiB of model weights plus 189 GiB of Engram tables that are never loaded into memory, so it needs a fast local SSD with room to spare. On a 128 GB Mac or DGX Spark the routed experts stream from the SSD, which makes it slower than models that fit in memory. Text only in Gezel for now. Produced for antirez's `ds4` inference engine.

| At a glance | |
| --- | --- |
| Made by | DeepSeek |
| Download size | 365.7 GB |
| Parameters | 552B |
| Quantization | IQ2_XXS/Q2_K |
| Context window | 1049K tokens |
| Uses tools | Yes |
| Best for | Reasoning |
| Runs on | DwarfStar |
| License | MIT |
| Added to the catalog | 2026-10-19 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Not measured yet. No [scorecard](https://gezel.com/docs/model-scorecard/) round has run this model or another build of it, which is not a verdict either way. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what a round measures, and you can run the same tests on your own machine:

```sh
gezel bench --model deepseek-v4.1-flash-552b-q2
```

[The model’s own page](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
