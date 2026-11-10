# Qwen 3.8 (27B, Q8)

Alibaba's Qwen 3.8 at 27B parameters: a dense, multimodal agentic model with native text, image, and video understanding, 262K context, flexible reasoning effort, MTP, and native tool calling. Q8_0 and 8-bit MLX preserve more fidelity than the Q4 build at roughly double the memory footprint; intended for machines with 40GB+ usable memory.

| At a glance | |
| --- | --- |
| Made by | Alibaba |
| Download size | 29.0 GB |
| Parameters | 27B |
| Quantization | Q8_0 |
| Context window | 262K tokens |
| Uses tools | Yes |
| Best for | Everyday work |
| Runs on | llama.cpp, MLX |
| License | Apache 2.0 |
| Added to the catalog | 2026-11-07 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Every [scorecard](https://gezel.com/docs/model-scorecard/) round that ran this model or another build of it, newest first. Each round is one machine, one day, one version of Gezel and one version of the tests, so **rounds are not comparable with each other**: a change to any of those can move a score without the model changing. Where a task ran fewer than three times, the result is a count rather than a percentage. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what each set contains.

| Round | Build | Task set | Passed | Output speed | Prefill speed |
| --- | --- | --- | --- | --- | --- |
| [2026-11-03 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-11-03-m5max-fixed-paired/) (partial) | qwen3.8-27b-q4 · MLX | General capability | 10/11 (some tasks run once — count not rate) | 34.0 tok/s | 574.0 tok/s (observed) |
| [2026-11-03 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-11-03-m5max-fixed-paired/) (partial) | qwen3.8-27b-q4 · llama.cpp | General capability | 11/11 (some tasks run once — count not rate) | 35.9 tok/s | 449.2 tok/s |
| [2026-11-03 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-11-03-m5max-fixed-paired/) (partial) | qwen3.8-27b-q4 · MLX | Office and knowledge work | 6/7 (some tasks run once — count not rate) | 34.0 tok/s | 743.0 tok/s (observed) |
| [2026-11-03 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-11-03-m5max-fixed-paired/) (partial) | qwen3.8-27b-q4 · llama.cpp | Office and knowledge work | 7/7 (some tasks run once — count not rate) | 33.7 tok/s | 440.6 tok/s |
| [2026-10-30 · Windows ARM64 · NVIDIA RTX Spark N1X](https://gezel.com/docs/model-scorecard/2026-10-30-spark-native-0-1-54-final-six/) (partial) | qwen3.8-27b-q4 · llama.cpp | Complex workflows | 0/3 (some tasks run once — count not rate) | 22.9 tok/s | 518.5 tok/s |
| [2026-10-30 · Windows · Ryzen 9 7950X3D · Radeon AI PRO R9700](https://gezel.com/docs/model-scorecard/2026-10-30-r9700-docblocks-activation/) (partial) | qwen3.8-27b-q4 · llama.cpp | Office and knowledge work | 2/3 (67%) | 55.7 tok/s | 780.5 tok/s |
| [2026-10-29 · Windows ARM64 · NVIDIA RTX Spark N1X](https://gezel.com/docs/model-scorecard/2026-10-29-spark-native-0-1-54-continuation/) (partial) | qwen3.8-27b-q4 · llama.cpp | General capability | 10/11 (some tasks run once — count not rate) | 27.8 tok/s | 573.2 tok/s |
| [2026-10-29 · Windows ARM64 · NVIDIA RTX Spark N1X](https://gezel.com/docs/model-scorecard/2026-10-29-spark-native-0-1-54-continuation/) (partial) | qwen3.8-27b-q4 · llama.cpp | Office and knowledge work | 11/13 (some tasks run once — count not rate) | 30.5 tok/s | 616.0 tok/s |
| [2026-10-29 · Windows ARM64 · NVIDIA RTX Spark N1X](https://gezel.com/docs/model-scorecard/2026-10-29-spark-native-0-1-54-continuation/) (partial) | qwen3.8-27b-q4 · llama.cpp | Engineering work | 6/10 (some tasks run once — count not rate) | 30.6 tok/s | 657.9 tok/s |
| [2026-10-28 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-10-28-dgx-spark-class/) | qwen3.8-27b-q4 · llama.cpp | General capability | 33/33 (100%) | 30.6 tok/s | 781.1 tok/s |
| [2026-10-28 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-10-28-dgx-spark-class/) | qwen3.8-27b-q4 · llama.cpp | Office and knowledge work | 34/39 (87%) | 29.4 tok/s | 790.1 tok/s |
| [2026-10-28 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-10-28-dgx-spark-class/) | qwen3.8-27b-q4 · llama.cpp | Engineering work | 21/30 (70%) | 28.6 tok/s | 769.7 tok/s |
| [2026-10-28 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-10-28-dgx-spark-class/) | qwen3.8-27b-q4 · llama.cpp | Complex workflows | 18/25 (72%) | 24.8 tok/s | 757.2 tok/s |
| [2026-10-28 · Windows · Ryzen 9 7950X3D · Radeon AI PRO R9700](https://gezel.com/docs/model-scorecard/2026-10-28-r9700-native-0-1-54/) | qwen3.8-27b-q4 · llama.cpp | General capability | 32/33 (97%) | 62.9 tok/s | 825.9 tok/s |
| [2026-10-28 · Windows · Ryzen 9 7950X3D · Radeon AI PRO R9700](https://gezel.com/docs/model-scorecard/2026-10-28-r9700-native-0-1-54/) | qwen3.8-27b-q4 · llama.cpp | Office and knowledge work | 33/39 (85%) | 59.2 tok/s | 809.5 tok/s |
| [2026-10-28 · Windows · Ryzen 9 7950X3D · Radeon AI PRO R9700](https://gezel.com/docs/model-scorecard/2026-10-28-r9700-native-0-1-54/) | qwen3.8-27b-q4 · llama.cpp | Engineering work | 19/30 (63%) | 57.2 tok/s | 800.2 tok/s |
| [2026-10-28 · Windows ARM64 · NVIDIA RTX Spark N1X](https://gezel.com/docs/model-scorecard/2026-10-28-spark-native-0-1-54-original/) | qwen3.8-27b-q4 · llama.cpp | General capability | 21/22 (some tasks run 2× — count not rate) | 28.7 tok/s | 591.7 tok/s |
| [2026-10-28 · Windows ARM64 · NVIDIA RTX Spark N1X](https://gezel.com/docs/model-scorecard/2026-10-28-spark-native-0-1-54-original/) | qwen3.8-27b-q4 · llama.cpp | Office and knowledge work | 22/26 (some tasks run 2× — count not rate) | 26.8 tok/s | 584.8 tok/s |
| [2026-10-28 · Windows ARM64 · NVIDIA RTX Spark N1X](https://gezel.com/docs/model-scorecard/2026-10-28-spark-native-0-1-54-original/) | qwen3.8-27b-q4 · llama.cpp | Engineering work | 12/20 (some tasks run 2× — count not rate) | 25.9 tok/s | 557.7 tok/s |
| [2026-10-28 · Windows ARM64 · NVIDIA RTX Spark N1X](https://gezel.com/docs/model-scorecard/2026-10-28-spark-native-0-1-54-original/) | qwen3.8-27b-q4 · llama.cpp | Complex workflows | 10/16 (some tasks run once — count not rate) | 24.8 tok/s | 552.2 tok/s |
| [2026-10-28 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-10-27-m5max-native-0-1-54/) | qwen3.8-27b-q4 · MLX | General capability | 31/33 (94%) | 33.0 tok/s | 564.0 tok/s (observed) |
| [2026-10-28 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-10-27-m5max-native-0-1-54/) | qwen3.8-27b-q4 · llama.cpp | General capability | 33/33 (100%) | 32.1 tok/s | 422.3 tok/s |
| [2026-10-28 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-10-27-m5max-native-0-1-54/) | qwen3.8-27b-q4 · MLX | Office and knowledge work | 29/39 (74%) | 29.0 tok/s | 574.0 tok/s (observed) |
| [2026-10-28 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-10-27-m5max-native-0-1-54/) | qwen3.8-27b-q4 · llama.cpp | Office and knowledge work | 32/39 (82%) | 29.5 tok/s | 406.8 tok/s |
| [2026-10-28 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-10-27-m5max-native-0-1-54/) | qwen3.8-27b-q4 · MLX | Engineering work | 19/30 (63%) | 25.0 tok/s | 512.0 tok/s (observed) |
| [2026-10-28 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-10-27-m5max-native-0-1-54/) | qwen3.8-27b-q4 · llama.cpp | Engineering work | 20/30 (67%) | 27.2 tok/s | 395.6 tok/s |
| [2026-10-28 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-10-27-m5max-native-0-1-54/) | qwen3.8-27b-q4 · MLX | Complex workflows | 13/26 (50%) | 21.0 tok/s | 495.0 tok/s (observed) |
| [2026-10-28 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-10-27-m5max-native-0-1-54/) | qwen3.8-27b-q4 · llama.cpp | Complex workflows | 19/27 (70%) | 23.8 tok/s | 354.6 tok/s |
| [2026-10-20 · rtx5070ti-core-continuation-64k](https://gezel.com/docs/model-scorecard/2026-10-20-rtx5070ti-core-continuation-64k/) | qwen3.8-27b-q2 · llama.cpp | General capability | 21/26 (some tasks run 2× — count not rate) | 5.6 tok/s | 473.0 tok/s |
| [2026-10-20 · rtx5070ti-core-original-64k](https://gezel.com/docs/model-scorecard/2026-10-20-rtx5070ti-core-original-64k/) (partial) | qwen3.8-27b-q2 · llama.cpp | General capability | 5/7 (some tasks run once — count not rate) | 6.3 tok/s | 482.2 tok/s |
| [2026-10-16 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-10-16-m5max-local-seven-completed-arms/) | qwen3.8-27b-q4 · llama.cpp | General capability | 33/33 (100%) | 36.7 tok/s | 501.0 tok/s |
| [2026-10-16 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-10-16-m5max-local-seven-completed-arms/) | qwen3.8-27b-q4 · llama.cpp | Office and knowledge work | 37/39 (95%) | 36.7 tok/s | 501.0 tok/s |
| [2026-10-16 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-10-16-m5max-local-seven-completed-arms/) | qwen3.8-27b-q4 · llama.cpp | Engineering work | 27/30 (90%) | 36.7 tok/s | 501.0 tok/s |
| [2026-10-16 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-10-16-m5max-local-seven-completed-arms/) | qwen3.8-27b-q4 · llama.cpp | Complex workflows | 19/27 (70%) | 36.7 tok/s | 501.0 tok/s |
| [2026-10-12 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-10-12-dgx-spark-class/) | qwen3.8-27b-q4 · llama.cpp | General capability | 33/33 (100%) | 30.1 tok/s | 699.0 tok/s |
| [2026-10-12 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-10-12-dgx-spark-class/) | qwen3.8-27b-q4 · llama.cpp | Office and knowledge work | 37/39 (95%) | 30.1 tok/s | 699.0 tok/s |
| [2026-10-12 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-10-12-dgx-spark-class/) | qwen3.8-27b-q4 · llama.cpp | Engineering work | 29/30 (97%) | 30.1 tok/s | 699.0 tok/s |
| [2026-10-11 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-10-11-m5max-six-providers/) | qwen3.8-27b-q4 · MLX | General capability | 10/11 (some tasks run once — count not rate) | — | — |
| [2026-10-11 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-10-11-m5max-six-providers/) | qwen3.8-27b-q4 · MLX | Office and knowledge work | 11/13 (some tasks run once — count not rate) | — | — |
| [2026-10-11 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-10-11-m5max-six-providers/) | qwen3.8-27b-q4 · MLX | Engineering work | 9/10 (some tasks run once — count not rate) | — | — |
| [2026-09-08 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-09-07-dgx-spark-class/) | qwen3.8-27b-q4 · llama.cpp | General capability | 32/33 (97%) | 28.6 tok/s | 752.0 tok/s |
| [2026-09-08 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-09-07-dgx-spark-class/) | qwen3.8-27b-q4 · llama.cpp | Office and knowledge work | 36/39 (92%) | 28.6 tok/s | 752.0 tok/s |
| [2026-09-08 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-09-07-dgx-spark-class/) | qwen3.8-27b-q4 · llama.cpp | Engineering work | 16/29 (55%) | 28.0 tok/s | 749.0 tok/s |
| [2026-09-08 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-09-07-dgx-spark-class/) | qwen3.8-27b-q4 · llama.cpp | Complex workflows | 14/27 (52%) | 28.5 tok/s | 753.0 tok/s |
| [2026-09-02 · Ryzen AI HX 370 + RTX 5070 Ti Laptop](https://gezel.com/docs/model-scorecard/2026-09-02-ryzen-ai-hx-370-core-productivity/) | qwen3.8-27b-q2 · llama.cpp | General capability | 8/11 (some tasks run once — count not rate) | 7.0 tok/s | 55.0 tok/s |
| [2026-09-02 · Ryzen AI HX 370 + RTX 5070 Ti Laptop](https://gezel.com/docs/model-scorecard/2026-09-02-ryzen-ai-hx-370-core-productivity/) | qwen3.8-27b-q2 · llama.cpp | Office and knowledge work | 10/13 (some tasks run once — count not rate) | 7.0 tok/s | 55.0 tok/s |
| [2026-08-31 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-08-31-dwarfstar-vs-dense/) | qwen3.8-27b-q4 · llama.cpp | General capability | 33/33 (100%) | 31.1 tok/s | 708.0 tok/s |
| [2026-08-31 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-08-31-dwarfstar-vs-dense/) | qwen3.8-27b-q4 · llama.cpp | Office and knowledge work | 36/39 (92%) | 31.1 tok/s | 708.0 tok/s |
| [2026-08-31 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-08-31-dwarfstar-vs-dense/) | qwen3.8-27b-q4 · llama.cpp | Engineering work | 18/30 (60%) | 31.1 tok/s | 708.0 tok/s |
| [2026-08-31 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-08-31-dwarfstar-vs-dense/) | qwen3.8-27b-q4 · llama.cpp | Complex workflows | 15/27 (56%) | 29.1 tok/s | 713.0 tok/s |
| [2026-08-30 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-08-30-dgx-spark-class/) | qwen3.8-27b-q4 · llama.cpp | General capability | 32/33 (97%) | 32.4 tok/s | 777.0 tok/s |
| [2026-08-30 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-08-30-dgx-spark-class/) | qwen3.8-27b-q4 · llama.cpp | Office and knowledge work | 35/39 (90%) | 32.4 tok/s | 777.0 tok/s |
| [2026-08-27 · win32 · AMD Ryzen 9 7950X3D 16-Core Processor](https://gezel.com/docs/model-scorecard/2026-08-27-win32-amd-ryzen-9-7950x3d-16-core-proces/) | qwen3.8-27b-q4 · llama.cpp | General capability | 32/33 (97%) | 31.8 tok/s | 681.0 tok/s |
| [2026-08-27 · win32 · AMD Ryzen 9 7950X3D 16-Core Processor](https://gezel.com/docs/model-scorecard/2026-08-27-win32-amd-ryzen-9-7950x3d-16-core-proces/) | qwen3.8-27b-q4 · llama.cpp | Office and knowledge work | 36/39 (92%) | 31.8 tok/s | 681.0 tok/s |
| [2026-08-26 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-25-mac-apple-m4-max/) | qwen3.8-27b-iq1-s · llama.cpp | General capability | 14/33 (42%) | 11.1 tok/s | 190.0 tok/s |
| [2026-08-26 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-25-mac-apple-m4-max/) | qwen3.8-27b-q2 · llama.cpp | General capability | 32/33 (97%) | 24.1 tok/s | 241.0 tok/s |
| [2026-08-26 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-25-mac-apple-m4-max/) | qwen3.8-27b-q3 · llama.cpp | General capability | 32/33 (97%) | 22.7 tok/s | 239.0 tok/s |
| [2026-08-26 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-25-mac-apple-m4-max/) | qwen3.8-27b-q4 · llama.cpp | General capability | 31/33 (94%) | 21.9 tok/s | 232.0 tok/s |
| [2026-08-26 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-25-mac-apple-m4-max/) | qwen3.8-27b-q4 · MLX | General capability | 31/33 (94%) | 68.4 tok/s | 232.0 tok/s |
| [2026-08-26 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-25-mac-apple-m4-max/) | qwen3.8-27b-iq1-s · llama.cpp | Office and knowledge work | 14/39 (36%) | 11.1 tok/s | 190.0 tok/s |
| [2026-08-26 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-25-mac-apple-m4-max/) | qwen3.8-27b-q2 · llama.cpp | Office and knowledge work | 35/39 (90%) | 24.1 tok/s | 241.0 tok/s |
| [2026-08-26 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-25-mac-apple-m4-max/) | qwen3.8-27b-q3 · llama.cpp | Office and knowledge work | 34/39 (87%) | 22.7 tok/s | 239.0 tok/s |
| [2026-08-26 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-25-mac-apple-m4-max/) | qwen3.8-27b-q4 · llama.cpp | Office and knowledge work | 36/39 (92%) | 21.9 tok/s | 232.0 tok/s |
| [2026-08-26 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-25-mac-apple-m4-max/) | qwen3.8-27b-q4 · MLX | Office and knowledge work | 36/39 (92%) | 68.4 tok/s | 232.0 tok/s |
| [2026-08-20 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-20-mac-apple-m4-max/) | qwen3.8-27b-q3 · llama.cpp | General capability | 33/33 (100%) | 22.9 tok/s | 227.0 tok/s |
| [2026-08-20 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-20-mac-apple-m4-max/) | qwen3.8-27b-q4 · MLX | General capability | 33/33 (100%) | 22.9 tok/s | 227.0 tok/s |
| [2026-08-20 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-20-mac-apple-m4-max/) | qwen3.8-27b-q6 · llama.cpp | General capability | 32/33 (97%) | 18.8 tok/s | 227.0 tok/s |
| [2026-08-20 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-20-mac-apple-m4-max/) | qwen3.8-27b-q8 · llama.cpp | General capability | 32/33 (97%) | 13.4 tok/s | 219.0 tok/s |
| [2026-08-20 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-20-mac-apple-m4-max/) | qwen3.8-27b-q3 · llama.cpp | Office and knowledge work | 35/39 (90%) | 22.9 tok/s | 227.0 tok/s |
| [2026-08-20 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-20-mac-apple-m4-max/) | qwen3.8-27b-q4 · MLX | Office and knowledge work | 35/39 (90%) | 22.9 tok/s | 227.0 tok/s |
| [2026-08-20 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-20-mac-apple-m4-max/) | qwen3.8-27b-q6 · llama.cpp | Office and knowledge work | 35/39 (90%) | 18.8 tok/s | 227.0 tok/s |
| [2026-08-20 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-20-mac-apple-m4-max/) | qwen3.8-27b-q8 · llama.cpp | Office and knowledge work | 33/39 (85%) | 13.4 tok/s | 219.0 tok/s |
| [2026-08-20 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-08-19-gb10-spark/) | qwen3.8-27b-q4 · llama.cpp | General capability | 32/32 (100%) | 12.1 tok/s | 706.0 tok/s |
| [2026-08-20 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-08-19-gb10-spark/) | qwen3.8-27b-q4 · llama.cpp | Office and knowledge work | 35/39 (90%) | 12.1 tok/s | 706.0 tok/s |
| [2026-08-14 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-14-m4max-llamacpp/) | qwen3.8-27b-q4 · llama.cpp | General capability | 33/33 (100%) | 22.4 tok/s | 233.0 tok/s |
| [2026-08-14 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-14-m4max-llamacpp/) | qwen3.8-27b-q4 · llama.cpp | Office and knowledge work | 35/39 (90%) | 22.4 tok/s | 233.0 tok/s |

A partial round reran only some of a set’s tasks, usually to check a fix. It is not a score for the whole set.

Observed prefill summarizes partial chat-event rates within each trial. It is not the aggregate throughput of every request or a measurement of pure prefill time; see the round for coverage and method.

[The model’s own page](https://huggingface.co/Qwen/Qwen3.8-27B) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
