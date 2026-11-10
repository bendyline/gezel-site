# Ornith 1.0 (35B, Q8)

DeepReinforce's Ornith 1.0 at 35B parameters — an agentic-coding model built for hands-on software work: reading a codebase, running tools, and seeing a change through. Native reasoning, native tool calling, 256K context. 8-bit quantization for higher fidelity than the Q4 build, at roughly double the memory footprint (~37GB). MIT licensed.

| At a glance | |
| --- | --- |
| Made by | DeepReinforce |
| Download size | 37.0 GB |
| Parameters | 35B |
| Quantization | Q8_0 |
| Context window | 262K tokens |
| Uses tools | Yes |
| Best for | Coding |
| Runs on | llama.cpp, MLX |
| License | MIT |
| Added to the catalog | 2026-08-15 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Not measured yet. No [scorecard](https://gezel.com/docs/model-scorecard/) round has run this model or another build of it, which is not a verdict either way. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what a round measures, and you can run the same tests on your own machine:

```sh
gezel bench --model ornith-35b-q8
```

[The model’s own page](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
