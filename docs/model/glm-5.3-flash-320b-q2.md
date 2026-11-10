# GLM 5.3 Flash (320B-A18B, IQ2_XXS)

antirez's routed 2-bit GGUF of Z.ai's GLM 5.3 Flash — a natively multimodal 320B-parameter Mixture-of-Experts with 18B active parameters, a 1M-token context, recurrent KDA layers, sparse DSA attention, hyper-connections, and a built-in MTP draft block. The Q2 file is about 90 GiB and targets a 128 GB Mac or DGX Spark with a modest initial context. Its separately packaged vision encoder adds image understanding to the same text model when Gezel launches ds4 with `--vision`.

| At a glance | |
| --- | --- |
| Made by | Z.ai |
| Download size | 97.6 GB |
| Parameters | 320B |
| Quantization | IQ2_XXS/Q2_K |
| Context window | 1049K tokens |
| Uses tools | Yes |
| Best for | Reasoning |
| Runs on | DwarfStar |
| License | MIT |
| Added to the catalog | 2026-10-20 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Not measured yet. No [scorecard](https://gezel.com/docs/model-scorecard/) round has run this model or another build of it, which is not a verdict either way. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what a round measures, and you can run the same tests on your own machine:

```sh
gezel bench --model glm-5.3-flash-320b-q2
```

[The model’s own page](https://huggingface.co/zai-org/GLM-5.3-Flash) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
