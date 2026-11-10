# Ornith 1.5 (35B-A3B, Q4)

Ornith AI's Ornith 1.5 at 35B total parameters with roughly 3B active per token — a self-improving, agentic-coding model trained for software engineering, tool use, and reasoning. The 4-bit build is the practical pick at this size, keeping fast MoE decode in a much smaller footprint than Q8, with native tool calling and a 256K context window. MIT licensed; best suited to machines with 32GB+ usable memory.

| At a glance | |
| --- | --- |
| Made by | Ornith AI |
| Download size | 21.7 GB |
| Parameters | 35B |
| Quantization | Q4_K_M |
| Context window | 262K tokens |
| Uses tools | Yes |
| Best for | Coding |
| Runs on | llama.cpp, MLX |
| License | MIT |
| Added to the catalog | 2026-08-27 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Every [scorecard](https://gezel.com/docs/model-scorecard/) round that ran this model or another build of it, newest first. Each round is one machine, one day, one version of Gezel and one version of the tests, so **rounds are not comparable with each other**: a change to any of those can move a score without the model changing. Where a task ran fewer than three times, the result is a count rather than a percentage. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what each set contains.

| Round | Build | Task set | Passed | Output speed | Prefill speed |
| --- | --- | --- | --- | --- | --- |
| [2026-10-21 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-10-21-m5max-ornith-observed-subset/) (partial) | ornith1.5-35b-a3b-q4 · llama.cpp | General capability | 21/22 (some tasks run 2× — count not rate) | 190.6 tok/s | 2619.0 tok/s |
| [2026-10-21 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-10-21-m5max-ornith-observed-subset/) (partial) | ornith1.5-35b-a3b-q4 · llama.cpp | Office and knowledge work | 23/26 (some tasks run 2× — count not rate) | 190.6 tok/s | 2619.0 tok/s |
| [2026-10-21 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-10-21-m5max-ornith-observed-subset/) (partial) | ornith1.5-35b-a3b-q4 · llama.cpp | Engineering work | 18/20 (some tasks run 2× — count not rate) | 190.6 tok/s | 2619.0 tok/s |
| [2026-08-31 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-08-31-dwarfstar-vs-dense/) | ornith1.5-35b-a3b-q8 · llama.cpp | General capability | 29/33 (88%) | 42.8 tok/s | 1248.0 tok/s |
| [2026-08-31 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-08-31-dwarfstar-vs-dense/) | ornith1.5-35b-a3b-q8 · llama.cpp | Office and knowledge work | 36/39 (92%) | 42.8 tok/s | 1248.0 tok/s |
| [2026-08-31 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-08-31-dwarfstar-vs-dense/) | ornith1.5-35b-a3b-q8 · llama.cpp | Engineering work | 19/30 (63%) | 42.8 tok/s | 1248.0 tok/s |
| [2026-08-31 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-08-31-dwarfstar-vs-dense/) | ornith1.5-35b-a3b-q8 · llama.cpp | Complex workflows | 12/26 (46%) | 42.8 tok/s | 1248.0 tok/s |

A partial round reran only some of a set’s tasks, usually to check a fix. It is not a score for the whole set.

[The model’s own page](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
