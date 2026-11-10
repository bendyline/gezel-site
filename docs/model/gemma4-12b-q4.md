# Gemma 4 (12B, Q4)

Google's Gemma 4 at 12B parameters — an encoder-free unified multimodal model (text + image + audio + video) with native tool calling, configurable thinking, and a 256K context window. Apache-2.0 licensed.

| At a glance | |
| --- | --- |
| Made by | Google |
| Download size | 6.7 GB |
| Parameters | 12B |
| Quantization | UD-Q4_K_XL |
| Context window | 256K tokens |
| Uses tools | Yes |
| Best for | Everyday work |
| Runs on | llama.cpp, MLX |
| License | Apache 2.0 |
| Added to the catalog | 2026-11-03 |

Gezel downloads this model the first time it is needed, checks the file against its published hash, and applies tuned settings for it.

## Measured results

Every [scorecard](https://gezel.com/docs/model-scorecard/) round that ran this model or another build of it, newest first. Each round is one machine, one day, one version of Gezel and one version of the tests, so **rounds are not comparable with each other**: a change to any of those can move a score without the model changing. Where a task ran fewer than three times, the result is a count rather than a percentage. [How we test models](https://gezel.com/docs/how-we-test-models/) explains what each set contains.

| Round | Build | Task set | Passed | Output speed | Prefill speed |
| --- | --- | --- | --- | --- | --- |
| [2026-11-03 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-11-03-m5max-fixed-paired/) (partial) | gemma4-12b-q4 · MLX | General capability | 9/11 (some tasks run once — count not rate) | 63.0 tok/s | 1341.5 tok/s (observed) |
| [2026-11-03 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-11-03-m5max-fixed-paired/) (partial) | gemma4-12b-q4 · llama.cpp | General capability | 11/11 (some tasks run once — count not rate) | 81.7 tok/s | 1101.5 tok/s |
| [2026-11-03 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-11-03-m5max-fixed-paired/) (partial) | gemma4-12b-q4 · MLX | Office and knowledge work | 7/7 (some tasks run once — count not rate) | 57.0 tok/s | 1222.0 tok/s (observed) |
| [2026-11-03 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-11-03-m5max-fixed-paired/) (partial) | gemma4-12b-q4 · llama.cpp | Office and knowledge work | 7/7 (some tasks run once — count not rate) | 85.0 tok/s | 1101.8 tok/s |
| [2026-10-30 · Windows · Ryzen 9 7950X3D · Radeon AI PRO R9700](https://gezel.com/docs/model-scorecard/2026-10-30-r9700-docblocks-activation/) (partial) | gemma4-12b-q4 · llama.cpp | Office and knowledge work | 0/3 (0%) | 118.9 tok/s | 1199.9 tok/s |
| [2026-10-29 · Windows ARM64 · NVIDIA RTX Spark N1X](https://gezel.com/docs/model-scorecard/2026-10-29-spark-native-0-1-54-continuation/) (partial) | gemma4-12b-q4 · llama.cpp | General capability | 10/11 (some tasks run once — count not rate) | 70.6 tok/s | 1332.1 tok/s |
| [2026-10-29 · Windows ARM64 · NVIDIA RTX Spark N1X](https://gezel.com/docs/model-scorecard/2026-10-29-spark-native-0-1-54-continuation/) (partial) | gemma4-12b-q4 · llama.cpp | Office and knowledge work | 11/13 (some tasks run once — count not rate) | 69.0 tok/s | 1313.9 tok/s |
| [2026-10-29 · Windows ARM64 · NVIDIA RTX Spark N1X](https://gezel.com/docs/model-scorecard/2026-10-29-spark-native-0-1-54-continuation/) (partial) | gemma4-12b-q4 · llama.cpp | Engineering work | 4/10 (some tasks run once — count not rate) | 76.1 tok/s | 1292.1 tok/s |
| [2026-10-28 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-10-28-dgx-spark-class/) | gemma4-12b-q4 · llama.cpp | General capability | 32/33 (97%) | 79.5 tok/s | 1610.3 tok/s |
| [2026-10-28 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-10-28-dgx-spark-class/) | gemma4-12b-q4 · llama.cpp | Office and knowledge work | 32/39 (82%) | 76.9 tok/s | 1578.3 tok/s |
| [2026-10-28 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-10-28-dgx-spark-class/) | gemma4-12b-q4 · llama.cpp | Engineering work | 14/30 (47%) | 78.3 tok/s | 1488.7 tok/s |
| [2026-10-28 · DGX Spark Class](https://gezel.com/docs/model-scorecard/2026-10-28-dgx-spark-class/) | gemma4-12b-q4 · llama.cpp | Complex workflows | 12/26 (46%) | 69.8 tok/s | 1488.3 tok/s |
| [2026-10-28 · win32 · AMD Ryzen AI 9 HX 370 w/ Radeon 890M](https://gezel.com/docs/model-scorecard/2026-10-27-windows-gemma4-12b-native-0-1-54/) | gemma4-12b-q4 · llama.cpp | General capability | 29/33 (88%) | 126.2 tok/s | 1927.3 tok/s |
| [2026-10-28 · win32 · AMD Ryzen AI 9 HX 370 w/ Radeon 890M](https://gezel.com/docs/model-scorecard/2026-10-27-windows-gemma4-12b-native-0-1-54/) | gemma4-12b-q4 · llama.cpp | Complex workflows | 10/26 (38%) | 108.4 tok/s | 1731.4 tok/s |
| [2026-10-28 · Windows · Ryzen 9 7950X3D · Radeon AI PRO R9700](https://gezel.com/docs/model-scorecard/2026-10-28-r9700-native-0-1-54/) | gemma4-12b-q4 · llama.cpp | General capability | 27/33 (82%) | 136.6 tok/s | 1437.5 tok/s |
| [2026-10-28 · Windows · Ryzen 9 7950X3D · Radeon AI PRO R9700](https://gezel.com/docs/model-scorecard/2026-10-28-r9700-native-0-1-54/) | gemma4-12b-q4 · llama.cpp | Office and knowledge work | 35/39 (90%) | 132.9 tok/s | 1319.4 tok/s |
| [2026-10-28 · Windows · Ryzen 9 7950X3D · Radeon AI PRO R9700](https://gezel.com/docs/model-scorecard/2026-10-28-r9700-native-0-1-54/) | gemma4-12b-q4 · llama.cpp | Engineering work | 12/30 (40%) | 124.6 tok/s | 1041.5 tok/s |
| [2026-10-28 · Windows · Ryzen 9 7950X3D · Radeon AI PRO R9700](https://gezel.com/docs/model-scorecard/2026-10-28-r9700-native-0-1-54/) | gemma4-12b-q4 · llama.cpp | Complex workflows | 7/25 (28%) | 112.7 tok/s | 1031.9 tok/s |
| [2026-10-28 · Windows ARM64 · NVIDIA RTX Spark N1X](https://gezel.com/docs/model-scorecard/2026-10-28-spark-native-0-1-54-original/) | gemma4-12b-q4 · llama.cpp | General capability | 17/22 (some tasks run 2× — count not rate) | 69.7 tok/s | 1317.7 tok/s |
| [2026-10-28 · Windows ARM64 · NVIDIA RTX Spark N1X](https://gezel.com/docs/model-scorecard/2026-10-28-spark-native-0-1-54-original/) | gemma4-12b-q4 · llama.cpp | Office and knowledge work | 22/26 (some tasks run 2× — count not rate) | 66.2 tok/s | 1295.4 tok/s |
| [2026-10-28 · Windows ARM64 · NVIDIA RTX Spark N1X](https://gezel.com/docs/model-scorecard/2026-10-28-spark-native-0-1-54-original/) | gemma4-12b-q4 · llama.cpp | Engineering work | 8/20 (some tasks run 2× — count not rate) | 66.9 tok/s | 1202.9 tok/s |
| [2026-10-28 · Windows ARM64 · NVIDIA RTX Spark N1X](https://gezel.com/docs/model-scorecard/2026-10-28-spark-native-0-1-54-original/) | gemma4-12b-q4 · llama.cpp | Complex workflows | 5/16 (some tasks run once — count not rate) | 56.9 tok/s | 1153.8 tok/s |
| [2026-10-28 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-10-27-m5max-native-0-1-54/) | gemma4-12b-q4 · MLX | General capability | 22/33 (67%) | 37.0 tok/s | 1146.0 tok/s (observed) |
| [2026-10-28 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-10-27-m5max-native-0-1-54/) | gemma4-12b-q4 · llama.cpp | General capability | 32/33 (97%) | 78.5 tok/s | 999.8 tok/s |
| [2026-10-28 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-10-27-m5max-native-0-1-54/) | gemma4-12b-q4 · MLX | Office and knowledge work | 27/39 (69%) | 36.0 tok/s | 1146.0 tok/s (observed) |
| [2026-10-28 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-10-27-m5max-native-0-1-54/) | gemma4-12b-q4 · llama.cpp | Office and knowledge work | 33/39 (85%) | 75.5 tok/s | 1040.0 tok/s |
| [2026-10-28 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-10-27-m5max-native-0-1-54/) | gemma4-12b-q4 · MLX | Engineering work | 12/30 (40%) | 37.5 tok/s | 1052.5 tok/s (observed) |
| [2026-10-28 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-10-27-m5max-native-0-1-54/) | gemma4-12b-q4 · llama.cpp | Engineering work | 12/30 (40%) | 64.2 tok/s | 873.8 tok/s |
| [2026-10-28 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-10-27-m5max-native-0-1-54/) | gemma4-12b-q4 · MLX | Complex workflows | 6/27 (22%) | 36.0 tok/s | 712.0 tok/s (observed) |
| [2026-10-28 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-10-27-m5max-native-0-1-54/) | gemma4-12b-q4 · llama.cpp | Complex workflows | 9/26 (35%) | 59.4 tok/s | 923.6 tok/s |
| [2026-10-25 · Mac · Apple M5 Max](https://gezel.com/docs/model-scorecard/2026-10-25-m5max-bolt-five/) | gemma4-12b-q4 · MLX | General capability | 23/33 (70%) | 38.0 tok/s | — |
| [2026-10-20 · rtx5070ti-core-continuation-64k](https://gezel.com/docs/model-scorecard/2026-10-20-rtx5070ti-core-continuation-64k/) | gemma4-12b-q4 · llama.cpp | General capability | 21/26 (some tasks run 2× — count not rate) | 120.7 tok/s | 1830.8 tok/s |
| [2026-10-20 · rtx5070ti-core-original-64k](https://gezel.com/docs/model-scorecard/2026-10-20-rtx5070ti-core-original-64k/) (partial) | gemma4-12b-q4 · llama.cpp | General capability | 6/7 (some tasks run once — count not rate) | 122.2 tok/s | 1911.4 tok/s |
| [2026-09-03 · Mac · Apple M2](https://gezel.com/docs/model-scorecard/2026-09-03-mac-apple-m2/) | gemma4-12b-q4 · llama.cpp | General capability | 10/11 (some tasks run once — count not rate) | 13.7 tok/s | 100.0 tok/s |
| [2026-09-03 · Mac · Apple M2](https://gezel.com/docs/model-scorecard/2026-09-03-mac-apple-m2/) | gemma4-12b-q4 · llama.cpp | Office and knowledge work | 10/13 (some tasks run once — count not rate) | 13.7 tok/s | 100.0 tok/s |
| [2026-09-02 · Ryzen AI HX 370 + RTX 5070 Ti Laptop](https://gezel.com/docs/model-scorecard/2026-09-02-ryzen-ai-hx-370-core-productivity/) | gemma4-12b-q4 · llama.cpp | General capability | 10/11 (some tasks run once — count not rate) | 24.6 tok/s | 1495.0 tok/s |
| [2026-09-02 · Ryzen AI HX 370 + RTX 5070 Ti Laptop](https://gezel.com/docs/model-scorecard/2026-09-02-ryzen-ai-hx-370-core-productivity/) | gemma4-12b-q4 · llama.cpp | Office and knowledge work | 11/13 (some tasks run once — count not rate) | 24.6 tok/s | 1495.0 tok/s |
| [2026-08-22 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-22-mac-apple-m4-max/) | gemma4-12b-q4 · MLX | General capability | 31/33 (94%) | 48.2 tok/s | 508.0 tok/s |
| [2026-08-22 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-22-mac-apple-m4-max/) | gemma4-12b-q8 · MLX | General capability | 30/33 (91%) | 30.3 tok/s | 506.0 tok/s |
| [2026-08-22 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-22-mac-apple-m4-max/) | gemma4-12b-q4 · MLX | Office and knowledge work | 34/39 (87%) | 48.2 tok/s | 508.0 tok/s |
| [2026-08-22 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-22-mac-apple-m4-max/) | gemma4-12b-q8 · MLX | Office and knowledge work | 35/39 (90%) | 30.3 tok/s | 506.0 tok/s |
| [2026-08-09 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-09-m4max-llamacpp/) | gemma4-12b-q4 · llama.cpp | General capability | 28/33 (85%) | 50.9 tok/s | 543.0 tok/s |
| [2026-08-09 · Mac · Apple M4 Max](https://gezel.com/docs/model-scorecard/2026-08-09-m4max-llamacpp/) | gemma4-12b-q4 · llama.cpp | Office and knowledge work | 29/39 (74%) | 50.9 tok/s | 543.0 tok/s |

A partial round reran only some of a set’s tasks, usually to check a fix. It is not a score for the whole set.

Observed prefill summarizes partial chat-event rates within each trial. It is not the aggregate throughput of every request or a measurement of pure prefill time; see the round for coverage and method.

[The model’s own page](https://huggingface.co/google/gemma-4-12B-it) · [Every model](https://gezel.com/docs/model-catalog/) · [Model scorecard](https://gezel.com/docs/model-scorecard/)
