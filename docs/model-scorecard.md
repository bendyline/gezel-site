# Model scorecard

These are measured task outcomes. Each pass count records attempts that met the automatic checks on a real machine. Artifact reviews can reveal missing requirements or defects that those checks missed.

[How we test models](https://gezel.com/docs/how-we-test-models/) explains what was counted and what these numbers do not tell you. Each round states its repeat count; jobs run fewer than three times show counts rather than percentages. A job passes when its automatic checks pass, and runs lost to machine trouble are set aside rather than blamed on the model.

## Results by test round

Focused reruns are labeled as subsets and retain their own round. They can verify a fix, but do not replace a full-suite comparison. Round notes explain unfinished coverage and documented evaluator failures; those failures remain recorded without being counted as model weaknesses.

Each round has one table for each task set it ran, all measured on the same machine and build. Most rounds ran two sets. **General capability** covers writing a small working program, fixing a bug from its symptoms, following a procedure and stopping at a problem, and turning several documents into one reconciled summary. **Office and knowledge work** covers a customer notice under a hard word limit, a meeting turned into an action register, a cited research brief, an experiment read-out, a spreadsheet model, a slide deck, and a Word document. Some rounds add the two harder sets: **Engineering work**, which is developer work such as reviewing a change and proving a fix with tests, and **Complex workflows**, which asks a model to write and repair reusable recipes of its own.

What is in each set, test by test:

- [General capability](https://gezel.com/docs/how-we-test-models/#core-11-tests) — 11 tests
- [Office and knowledge work](https://gezel.com/docs/how-we-test-models/#productivity-13-tests) — 13 tests
- [Engineering work](https://gezel.com/docs/how-we-test-models/#engineering-10-tests) — 10 tests
- [Complex workflows](https://gezel.com/docs/how-we-test-models/#complex-workflows-9-tests) — 9 tests

### Every result in one table {[dataTable src=../assets/scorecards/all-results.csv previewRows=5000 follow=scorecard group=run_id columns=model,suite,pass_rate_pct,judge_score,decode_tok_s,prefill_tok_s,device,started_at,run_id,successes,attributable_trials,rate_quotable,engine,perf_source,scope]}

Every round laid end to end, one row per round, task set, and model, grouped by round, newest first. [Download every result as CSV](https://gezel.com/docs/assets/scorecards/all-results.csv); the file adds per-rubric judge scores, memory, context, and build details.

<div class="hb-scorecard" data-hb-scorecard="1">
<div class="hb-scorecard-controls" data-hb-scorecard-controls="1"></div>
<h3 class="hb-scorecard-runs-title">Test rounds</h3>
<ul class="hb-scorecard-runs">
<li class="hb-scorecard-round hb-scorecard-run" data-hb-round="2026-11-09-windows-saluki-native-0-1-57-round3" data-hb-round-label="2026-11-09" data-hb-date="2026-11-09" data-hb-hardware="windows" data-hb-hardware-label="Windows" data-hb-models="underdog-saluki-27b-iq2-mix" data-hb-tiers="medium">
<a class="hb-scorecard-run-link" href="../model-scorecard/2026-11-09-windows-saluki-native-0-1-57-round3/">2026-11-09 · Windows x64 · RTX 5070 Ti Laptop (12 GB)</a>
<span class="hb-scorecard-run-meta">Partial round · AMD Ryzen AI 9 HX 370 w/ Radeon 890M · NVIDIA GeForce RTX 5070 Ti Laptop GPU · 31 GB · 1 model · General capability, Office and knowledge work, Engineering work, Complex workflows</span>
</li>
<li class="hb-scorecard-round hb-scorecard-run" data-hb-round="2026-11-06-windows-saluki-native-0-1-57-fanout" data-hb-round-label="2026-11-06" data-hb-date="2026-11-06" data-hb-hardware="windows" data-hb-hardware-label="Windows" data-hb-models="underdog-saluki-27b-iq2-mix" data-hb-tiers="medium">
<a class="hb-scorecard-run-link" href="../model-scorecard/2026-11-06-windows-saluki-native-0-1-57-fanout/">2026-11-06 · Windows x64 · RTX 5070 Ti Laptop (12 GB)</a>
<span class="hb-scorecard-run-meta">Partial round · AMD Ryzen AI 9 HX 370 w/ Radeon 890M · NVIDIA GeForce RTX 5070 Ti Laptop GPU · 31 GB · 1 model · Complex workflows</span>
</li>
<li class="hb-scorecard-round hb-scorecard-run" data-hb-round="2026-11-03-windows-saluki-native-0-1-57-original" data-hb-round-label="2026-11-04" data-hb-date="2026-11-04" data-hb-hardware="windows" data-hb-hardware-label="Windows" data-hb-models="underdog-saluki-27b-iq2-mix" data-hb-tiers="medium" data-hb-latest="1">
<a class="hb-scorecard-run-link" href="../model-scorecard/2026-11-03-windows-saluki-native-0-1-57-original/">2026-11-04 · Windows x64 · RTX 5070 Ti Laptop (12 GB)</a>
<span class="hb-scorecard-run-meta">Latest round · AMD Ryzen AI 9 HX 370 w/ Radeon 890M · NVIDIA GeForce RTX 5070 Ti Laptop GPU · 31 GB · 1 model · General capability, Office and knowledge work, Engineering work, Complex workflows</span>
</li>
<li class="hb-scorecard-round hb-scorecard-run" data-hb-round="2026-11-03-m5max-fixed-paired" data-hb-round-label="2026-11-03" data-hb-date="2026-11-03" data-hb-hardware="mac" data-hb-hardware-label="Mac" data-hb-models="gemma4-12b qwen3.8-27b" data-hb-tiers="medium">
<a class="hb-scorecard-run-link" href="../model-scorecard/2026-11-03-m5max-fixed-paired/">2026-11-03 · Mac · Apple M5 Max</a>
<span class="hb-scorecard-run-meta">Partial round · M5 Max · Apple M5 Max (integrated GPU) · 128 GB · 2 models · General capability, Office and knowledge work</span>
</li>
<li class="hb-scorecard-round hb-scorecard-run" data-hb-round="2026-10-30-spark-native-0-1-54-final-six" data-hb-round-label="2026-10-30 · 2026-10-30-spark-native-0-1-54-final-six" data-hb-date="2026-10-30" data-hb-hardware="windows" data-hb-hardware-label="Windows" data-hb-models="gemma4-12b qwen3.8-27b" data-hb-tiers="medium">
<a class="hb-scorecard-run-link" href="../model-scorecard/2026-10-30-spark-native-0-1-54-final-six/">2026-10-30 · Windows ARM64 · NVIDIA RTX Spark N1X</a>
<span class="hb-scorecard-run-meta">Partial round · NVIDIA RTX Spark N1X (6144-core GPU, 20-core CPU) · NVIDIA RTX Spark N1X (6144-core Blackwell RTX GPU) · 23 GB · 2 models · Complex workflows</span>
</li>
<li class="hb-scorecard-round hb-scorecard-run" data-hb-round="2026-10-30-r9700-docblocks-activation" data-hb-round-label="2026-10-30 · 2026-10-30-r9700-docblocks-activation" data-hb-date="2026-10-30" data-hb-hardware="windows" data-hb-hardware-label="Windows" data-hb-models="gemma4-12b qwen3.8-27b" data-hb-tiers="medium">
<a class="hb-scorecard-run-link" href="../model-scorecard/2026-10-30-r9700-docblocks-activation/">2026-10-30 · Windows · Ryzen 9 7950X3D · Radeon AI PRO R9700</a>
<span class="hb-scorecard-run-meta">Partial round · AMD Ryzen 9 7950X3D 16-Core Processor · AMD Radeon AI PRO R9700 · 64 GB · 2 models · Office and knowledge work</span>
</li>
<li class="hb-scorecard-round hb-scorecard-run" data-hb-round="2026-10-29-spark-native-0-1-54-continuation" data-hb-round-label="2026-10-29" data-hb-date="2026-10-29" data-hb-hardware="windows" data-hb-hardware-label="Windows" data-hb-models="gemma4-12b qwen3.8-27b" data-hb-tiers="medium">
<a class="hb-scorecard-run-link" href="../model-scorecard/2026-10-29-spark-native-0-1-54-continuation/">2026-10-29 · Windows ARM64 · NVIDIA RTX Spark N1X</a>
<span class="hb-scorecard-run-meta">Partial round · NVIDIA RTX Spark N1X (6144-core GPU, 20-core CPU) · NVIDIA RTX Spark N1X (6144-core Blackwell RTX GPU) · 23 GB · 2 models · General capability, Office and knowledge work, Engineering work, Complex workflows</span>
</li>
<li class="hb-scorecard-round hb-scorecard-run" data-hb-round="2026-10-28-dgx-spark-class" data-hb-round-label="2026-10-28 · Linux" data-hb-date="2026-10-28" data-hb-hardware="linux" data-hb-hardware-label="Linux" data-hb-models="gemma4-12b qwen3.8-27b" data-hb-tiers="medium">
<a class="hb-scorecard-run-link" href="../model-scorecard/2026-10-28-dgx-spark-class/">2026-10-28 · DGX Spark Class</a>
<span class="hb-scorecard-run-meta">Earlier round · Arm Cortex-X925 + Cortex-A725 (20 cores) · NVIDIA GB10 · 122 GB · 2 models · General capability, Office and knowledge work, Engineering work, Complex workflows</span>
</li>
<li class="hb-scorecard-round hb-scorecard-run" data-hb-round="2026-10-27-windows-gemma4-12b-native-0-1-54" data-hb-round-label="2026-10-28 · 2026-10-27-windows-gemma4-12b-native-0-1-54" data-hb-date="2026-10-28" data-hb-hardware="windows" data-hb-hardware-label="Windows" data-hb-models="gemma4-12b" data-hb-tiers="medium">
<a class="hb-scorecard-run-link" href="../model-scorecard/2026-10-27-windows-gemma4-12b-native-0-1-54/">2026-10-28 · win32 · AMD Ryzen AI 9 HX 370 w/ Radeon 890M</a>
<span class="hb-scorecard-run-meta">Earlier round · AMD Ryzen AI 9 HX 370 w/ Radeon 890M · NVIDIA GeForce RTX 5070 Ti Laptop GPU · 31 GB · 1 model · General capability, Office and knowledge work, Engineering work, Complex workflows</span>
</li>
<li class="hb-scorecard-round hb-scorecard-run" data-hb-round="2026-10-28-r9700-native-0-1-54" data-hb-round-label="2026-10-28 · 2026-10-28-r9700-native-0-1-54" data-hb-date="2026-10-28" data-hb-hardware="windows" data-hb-hardware-label="Windows" data-hb-models="gemma4-12b qwen3.8-27b" data-hb-tiers="medium">
<a class="hb-scorecard-run-link" href="../model-scorecard/2026-10-28-r9700-native-0-1-54/">2026-10-28 · Windows · Ryzen 9 7950X3D · Radeon AI PRO R9700</a>
<span class="hb-scorecard-run-meta">Earlier round · AMD Ryzen 9 7950X3D 16-Core Processor · AMD Radeon AI PRO R9700 · 64 GB · 2 models · General capability, Office and knowledge work, Engineering work, Complex workflows</span>
</li>
<li class="hb-scorecard-round hb-scorecard-run" data-hb-round="2026-10-28-spark-native-0-1-54-original" data-hb-round-label="2026-10-28 · 2026-10-28-spark-native-0-1-54-original" data-hb-date="2026-10-28" data-hb-hardware="windows" data-hb-hardware-label="Windows" data-hb-models="gemma4-12b qwen3.8-27b" data-hb-tiers="medium">
<a class="hb-scorecard-run-link" href="../model-scorecard/2026-10-28-spark-native-0-1-54-original/">2026-10-28 · Windows ARM64 · NVIDIA RTX Spark N1X</a>
<span class="hb-scorecard-run-meta">Earlier round · NVIDIA RTX Spark N1X (6144-core GPU, 20-core CPU) · NVIDIA RTX Spark N1X (6144-core Blackwell RTX GPU) · 23 GB · 2 models · General capability, Office and knowledge work, Engineering work, Complex workflows</span>
</li>
<li class="hb-scorecard-round hb-scorecard-run" data-hb-round="2026-10-27-m5max-native-0-1-54" data-hb-round-label="2026-10-28 · Mac" data-hb-date="2026-10-28" data-hb-hardware="mac" data-hb-hardware-label="Mac" data-hb-models="gemma4-12b qwen3.8-27b" data-hb-tiers="medium">
<a class="hb-scorecard-run-link" href="../model-scorecard/2026-10-27-m5max-native-0-1-54/">2026-10-28 · Mac · Apple M5 Max</a>
<span class="hb-scorecard-run-meta">Earlier round · M5 Max · Apple M5 Max (integrated GPU) · 128 GB · 2 models · General capability, Office and knowledge work, Engineering work, Complex workflows</span>
</li>
<li class="hb-scorecard-round hb-scorecard-run" data-hb-round="2026-10-25-m5max-bolt-five" data-hb-round-label="2026-10-25" data-hb-date="2026-10-25" data-hb-hardware="mac" data-hb-hardware-label="Mac" data-hb-models="gemma4-12b gemma4-e2b gemma4-e4b nemotron3.5-bolt-e4b qwen3.5-9b" data-hb-tiers="small medium tiny">
<a class="hb-scorecard-run-link" href="../model-scorecard/2026-10-25-m5max-bolt-five/">2026-10-25 · Mac · Apple M5 Max</a>
<span class="hb-scorecard-run-meta">Earlier round · M5 Max · Apple M5 Max (integrated GPU) · 128 GB · 5 models · General capability</span>
</li>
<li class="hb-scorecard-round hb-scorecard-run" data-hb-round="2026-10-21-m5max-ornith-observed-subset" data-hb-round-label="2026-10-21" data-hb-date="2026-10-21" data-hb-hardware="mac" data-hb-hardware-label="Mac" data-hb-models="ornith1.5-35b-a3b" data-hb-tiers="medium">
<a class="hb-scorecard-run-link" href="../model-scorecard/2026-10-21-m5max-ornith-observed-subset/">2026-10-21 · Mac · Apple M5 Max</a>
<span class="hb-scorecard-run-meta">Partial round · M5 Max · Apple M5 Max (integrated GPU) · 128 GB · 1 model · General capability, Office and knowledge work, Engineering work, Complex workflows</span>
</li>
<li class="hb-scorecard-round hb-scorecard-run" data-hb-round="2026-10-20-rtx5070ti-core-continuation-64k" data-hb-round-label="2026-10-20 · 2026-10-20-rtx5070ti-core-continuation-64k" data-hb-date="2026-10-20" data-hb-hardware="windows" data-hb-hardware-label="Windows" data-hb-models="gemma4-12b gemma4-e4b ornith1.5-9b qwen3.5-4b qwen3.5-9b qwen3.8-27b underdog-saluki-27b-iq2-mix" data-hb-tiers="medium small tiny">
<a class="hb-scorecard-run-link" href="../model-scorecard/2026-10-20-rtx5070ti-core-continuation-64k/">2026-10-20 · rtx5070ti-core-continuation-64k</a>
<span class="hb-scorecard-run-meta">Earlier round · AMD Ryzen AI 9 HX 370 w/ Radeon 890M · NVIDIA GeForce RTX 5070 Ti Laptop GPU · 31 GB · 7 models · General capability</span>
</li>
<li class="hb-scorecard-round hb-scorecard-run" data-hb-round="2026-10-20-rtx5070ti-nanbeige-core-32k" data-hb-round-label="2026-10-20 · 2026-10-20-rtx5070ti-nanbeige-core-32k" data-hb-date="2026-10-20" data-hb-hardware="windows" data-hb-hardware-label="Windows" data-hb-models="nanbeige4.2-3b" data-hb-tiers="tiny">
<a class="hb-scorecard-run-link" href="../model-scorecard/2026-10-20-rtx5070ti-nanbeige-core-32k/">2026-10-20 · rtx5070ti-nanbeige-core-32k</a>
<span class="hb-scorecard-run-meta">Earlier round · AMD Ryzen AI 9 HX 370 w/ Radeon 890M · NVIDIA GeForce RTX 5070 Ti Laptop GPU · 31 GB · 1 model · General capability</span>
</li>
<li class="hb-scorecard-round hb-scorecard-run" data-hb-round="2026-10-20-rtx5070ti-core-original-64k" data-hb-round-label="2026-10-20 · 2026-10-20-rtx5070ti-core-original-64k" data-hb-date="2026-10-20" data-hb-hardware="windows" data-hb-hardware-label="Windows" data-hb-models="gemma4-12b gemma4-e4b ornith1.5-9b qwen3.5-4b qwen3.5-9b qwen3.8-27b underdog-saluki-27b-iq2-mix" data-hb-tiers="medium small tiny">
<a class="hb-scorecard-run-link" href="../model-scorecard/2026-10-20-rtx5070ti-core-original-64k/">2026-10-20 · rtx5070ti-core-original-64k</a>
<span class="hb-scorecard-run-meta">Partial round · AMD Ryzen AI 9 HX 370 w/ Radeon 890M · NVIDIA GeForce RTX 5070 Ti Laptop GPU · 31 GB · 7 models · General capability</span>
</li>
<li class="hb-scorecard-round hb-scorecard-run" data-hb-round="2026-10-16-m5max-local-seven-completed-arms" data-hb-round-label="2026-10-16" data-hb-date="2026-10-16" data-hb-hardware="mac" data-hb-hardware-label="Mac" data-hb-models="btl4-35b lfm2.5-24b-a2b qwen3.6-35b-a3b qwen3.8-27b" data-hb-tiers="medium">
<a class="hb-scorecard-run-link" href="../model-scorecard/2026-10-16-m5max-local-seven-completed-arms/">2026-10-16 · Mac · Apple M5 Max</a>
<span class="hb-scorecard-run-meta">Earlier round · M5 Max · Apple M5 Max (integrated GPU) · 128 GB · 4 models · General capability, Office and knowledge work, Engineering work, Complex workflows</span>
</li>
<li class="hb-scorecard-round hb-scorecard-run" data-hb-round="2026-10-12-dgx-spark-class" data-hb-round-label="2026-10-12 · Linux" data-hb-date="2026-10-12" data-hb-hardware="linux" data-hb-hardware-label="Linux" data-hb-models="gemma4-31b qwen3.8-27b" data-hb-tiers="medium">
<a class="hb-scorecard-run-link" href="../model-scorecard/2026-10-12-dgx-spark-class/">2026-10-12 · DGX Spark Class</a>
<span class="hb-scorecard-run-meta">Earlier round · DGX Spark Class · NVIDIA GB10 · 122 GB · 2 models · General capability, Office and knowledge work, Engineering work, Complex workflows</span>
</li>
<li class="hb-scorecard-round hb-scorecard-run" data-hb-round="2026-10-12-m5max-cli-integration" data-hb-round-label="2026-10-12 · Mac" data-hb-date="2026-10-12" data-hb-hardware="mac" data-hb-hardware-label="Mac" data-hb-models="claude-sonnet-5-5 gpt-6-luna" data-hb-tiers="cloud">
<a class="hb-scorecard-run-link" href="../model-scorecard/2026-10-12-m5max-cli-integration/">2026-10-12 · Mac · Apple M5 Max</a>
<span class="hb-scorecard-run-meta">Partial round · M5 Max · Apple M5 Max (integrated GPU) · 128 GB · 2 models · General capability, Office and knowledge work, Engineering work, Complex workflows</span>
</li>
<li class="hb-scorecard-round hb-scorecard-run" data-hb-round="2026-10-11-m5max-six-providers" data-hb-round-label="2026-10-11" data-hb-date="2026-10-11" data-hb-hardware="mac" data-hb-hardware-label="Mac" data-hb-models="claude-sonnet-5-5 gemma4-31b gpt-6-luna qwen3.8-27b" data-hb-tiers="cloud medium">
<a class="hb-scorecard-run-link" href="../model-scorecard/2026-10-11-m5max-six-providers/">2026-10-11 · Mac · Apple M5 Max</a>
<span class="hb-scorecard-run-meta">Earlier round · M5 Max · Apple M5 Max (integrated GPU) · 128 GB · 4 models · General capability, Office and knowledge work, Engineering work, Complex workflows</span>
</li>
<li class="hb-scorecard-round hb-scorecard-run" data-hb-round="2026-09-18-dgx-spark-class" data-hb-round-label="2026-09-18" data-hb-date="2026-09-18" data-hb-hardware="linux" data-hb-hardware-label="Linux" data-hb-models="qwen3.8-27b qwen3.8-flash-next" data-hb-tiers="large medium">
<a class="hb-scorecard-run-link" href="../model-scorecard/2026-09-18-dgx-spark-class/">2026-09-18 · DGX Spark Class</a>
<span class="hb-scorecard-run-meta">Earlier round · DGX Spark Class · NVIDIA GB10 · 122 GB · 2 models · General capability</span>
</li>
<li class="hb-scorecard-round hb-scorecard-run" data-hb-round="2026-09-07-dgx-spark-class" data-hb-round-label="2026-09-08" data-hb-date="2026-09-08" data-hb-hardware="linux" data-hb-hardware-label="Linux" data-hb-models="gemma4-31b muse-glimmer-30b nemotron3.5-lightning-30b qwen3.6-35b-a3b qwen3.8-27b qwen3.8-flash-next" data-hb-tiers="large medium">
<a class="hb-scorecard-run-link" href="../model-scorecard/2026-09-07-dgx-spark-class/">2026-09-08 · DGX Spark Class</a>
<span class="hb-scorecard-run-meta">Earlier round · DGX Spark Class · NVIDIA GB10 · 122 GB · 6 models · General capability, Office and knowledge work, Engineering work, Complex workflows</span>
</li>
<li class="hb-scorecard-round hb-scorecard-run" data-hb-round="2026-09-04-win32-amd-ryzen-9-7950x3d-16-core-proces" data-hb-round-label="2026-09-04" data-hb-date="2026-09-04" data-hb-hardware="windows" data-hb-hardware-label="Windows" data-hb-models="qwen3.5-27b qwen3.5-2b qwen3.5-4b qwen3.5-9b" data-hb-tiers="medium small tiny">
<a class="hb-scorecard-run-link" href="../model-scorecard/2026-09-04-win32-amd-ryzen-9-7950x3d-16-core-proces/">2026-09-04 · win32 · AMD Ryzen 9 7950X3D 16-Core Processor</a>
<span class="hb-scorecard-run-meta">Earlier round · AMD Ryzen 9 7950X3D 16-Core Processor · AMD Radeon AI PRO R9700 · 64 GB · 4 models · General capability, Office and knowledge work</span>
</li>
<li class="hb-scorecard-round hb-scorecard-run" data-hb-round="2026-09-03-mac-apple-m2" data-hb-round-label="2026-09-03" data-hb-date="2026-09-03" data-hb-hardware="mac" data-hb-hardware-label="Mac" data-hb-models="gemma4-12b ornith1.5-9b qwen3.5-9b" data-hb-tiers="medium small">
<a class="hb-scorecard-run-link" href="../model-scorecard/2026-09-03-mac-apple-m2/">2026-09-03 · Mac · Apple M2</a>
<span class="hb-scorecard-run-meta">Earlier round · M2 · Apple M2 (integrated GPU) · 16 GB · 3 models · General capability, Office and knowledge work</span>
</li>
<li class="hb-scorecard-round hb-scorecard-run" data-hb-round="2026-09-02-ryzen-ai-hx-370-core-productivity" data-hb-round-label="2026-09-02" data-hb-date="2026-09-02" data-hb-hardware="windows" data-hb-hardware-label="Windows" data-hb-models="gemma4-12b ornith1.5-9b qwen3.5-9b qwen3.6-35b-a3b qwen3.8-27b" data-hb-tiers="medium small">
<a class="hb-scorecard-run-link" href="../model-scorecard/2026-09-02-ryzen-ai-hx-370-core-productivity/">2026-09-02 · Ryzen AI HX 370 + RTX 5070 Ti Laptop</a>
<span class="hb-scorecard-run-meta">Earlier round · AMD Ryzen AI 9 HX 370 w/ Radeon 890M · NVIDIA GeForce RTX 5070 Ti Laptop GPU · 31 GB · 5 models · General capability, Office and knowledge work</span>
</li>
<li class="hb-scorecard-round hb-scorecard-run" data-hb-round="2026-08-31-dwarfstar-vs-dense" data-hb-round-label="2026-08-31" data-hb-date="2026-08-31" data-hb-hardware="linux" data-hb-hardware-label="Linux" data-hb-models="deepseek-v4-flash-284b ornith1.5-35b-a3b qwen3.8-27b" data-hb-tiers="large medium">
<a class="hb-scorecard-run-link" href="../model-scorecard/2026-08-31-dwarfstar-vs-dense/">2026-08-31 · DGX Spark Class</a>
<span class="hb-scorecard-run-meta">Earlier round · DGX Spark Class · NVIDIA GB10 · 122 GB · 3 models · General capability, Office and knowledge work, Engineering work, Complex workflows</span>
</li>
<li class="hb-scorecard-round hb-scorecard-run" data-hb-round="2026-08-30-dgx-spark-class" data-hb-round-label="2026-08-30" data-hb-date="2026-08-30" data-hb-hardware="linux" data-hb-hardware-label="Linux" data-hb-models="ornith1.5-9b qwen3.6-35b-a3b qwen3.8-27b" data-hb-tiers="medium small">
<a class="hb-scorecard-run-link" href="../model-scorecard/2026-08-30-dgx-spark-class/">2026-08-30 · DGX Spark Class</a>
<span class="hb-scorecard-run-meta">Earlier round · DGX Spark Class · NVIDIA GB10 · 122 GB · 3 models · General capability, Office and knowledge work</span>
</li>
<li class="hb-scorecard-round hb-scorecard-run" data-hb-round="2026-08-27-win32-amd-ryzen-9-7950x3d-16-core-proces" data-hb-round-label="2026-08-27" data-hb-date="2026-08-27" data-hb-hardware="windows" data-hb-hardware-label="Windows" data-hb-models="gemma4-26b gemma4-31b qwen3.6-35b-a3b qwen3.8-27b" data-hb-tiers="medium">
<a class="hb-scorecard-run-link" href="../model-scorecard/2026-08-27-win32-amd-ryzen-9-7950x3d-16-core-proces/">2026-08-27 · win32 · AMD Ryzen 9 7950X3D 16-Core Processor</a>
<span class="hb-scorecard-run-meta">Earlier round · AMD Ryzen 9 7950X3D 16-Core Processor · AMD Radeon AI PRO R9700 · 64 GB · 4 models · General capability, Office and knowledge work</span>
</li>
<li class="hb-scorecard-round hb-scorecard-run" data-hb-round="2026-08-25-mac-apple-m4-max" data-hb-round-label="2026-08-26" data-hb-date="2026-08-26" data-hb-hardware="mac" data-hb-hardware-label="Mac" data-hb-models="qwen3.8-27b" data-hb-tiers="medium">
<a class="hb-scorecard-run-link" href="../model-scorecard/2026-08-25-mac-apple-m4-max/">2026-08-26 · Mac · Apple M4 Max</a>
<span class="hb-scorecard-run-meta">Earlier round · M4 Max · 64 GB · 1 model · General capability, Office and knowledge work</span>
</li>
<li class="hb-scorecard-round hb-scorecard-run" data-hb-round="2026-08-22-mac-apple-m4-max" data-hb-round-label="2026-08-22" data-hb-date="2026-08-22" data-hb-hardware="mac" data-hb-hardware-label="Mac" data-hb-models="btl4-compact gemma4-12b gemma4-e2b gemma4-e4b lfm2.5-2.6b mistral-7b ornith1.5-9b qwen3.5-2b qwen3.5-4b qwen3.5-9b" data-hb-tiers="medium small tiny">
<a class="hb-scorecard-run-link" href="../model-scorecard/2026-08-22-mac-apple-m4-max/">2026-08-22 · Mac · Apple M4 Max</a>
<span class="hb-scorecard-run-meta">Earlier round · M4 Max · 64 GB · 10 models · General capability, Office and knowledge work</span>
</li>
<li class="hb-scorecard-round hb-scorecard-run" data-hb-round="2026-08-20-mac-apple-m4-max" data-hb-round-label="2026-08-20 · Mac" data-hb-date="2026-08-20" data-hb-hardware="mac" data-hb-hardware-label="Mac" data-hb-models="gemma4-31b qwen3.6-35b-a3b qwen3.8-27b" data-hb-tiers="medium">
<a class="hb-scorecard-run-link" href="../model-scorecard/2026-08-20-mac-apple-m4-max/">2026-08-20 · Mac · Apple M4 Max</a>
<span class="hb-scorecard-run-meta">Earlier round · M4 Max · 64 GB · 3 models · General capability, Office and knowledge work</span>
</li>
<li class="hb-scorecard-round hb-scorecard-run" data-hb-round="2026-08-19-gb10-spark" data-hb-round-label="2026-08-20 · Linux" data-hb-date="2026-08-20" data-hb-hardware="linux" data-hb-hardware-label="Linux" data-hb-models="btl4-35b deepseek-v4-flash-284b gemma4-e4b qwen3.6-27b qwen3.8-27b" data-hb-tiers="large medium small">
<a class="hb-scorecard-run-link" href="../model-scorecard/2026-08-19-gb10-spark/">2026-08-20 · DGX Spark Class</a>
<span class="hb-scorecard-run-meta">Earlier round · DGX Spark Class · 122 GB · 5 models · General capability, Office and knowledge work</span>
</li>
<li class="hb-scorecard-round hb-scorecard-run" data-hb-round="2026-08-14-m4max-llamacpp" data-hb-round-label="2026-08-14" data-hb-date="2026-08-14" data-hb-hardware="mac" data-hb-hardware-label="Mac" data-hb-models="qwen3.6-27b qwen3.6-35b-a3b qwen3.8-27b" data-hb-tiers="medium">
<a class="hb-scorecard-run-link" href="../model-scorecard/2026-08-14-m4max-llamacpp/">2026-08-14 · Mac · Apple M4 Max</a>
<span class="hb-scorecard-run-meta">Earlier round · M4 Max · 64 GB · 3 models · General capability, Office and knowledge work</span>
</li>
<li class="hb-scorecard-round hb-scorecard-run" data-hb-round="2026-08-13-m4max-llamacpp" data-hb-round-label="2026-08-13" data-hb-date="2026-08-13" data-hb-hardware="mac" data-hb-hardware-label="Mac" data-hb-models="gemma4-26b muse-glimmer-30b nemotron3.5-lightning-30b qwen3.6-35b-a3b" data-hb-tiers="medium">
<a class="hb-scorecard-run-link" href="../model-scorecard/2026-08-13-m4max-llamacpp/">2026-08-13 · Mac · Apple M4 Max</a>
<span class="hb-scorecard-run-meta">Earlier round · M4 Max · 64 GB · 4 models · General capability, Office and knowledge work</span>
</li>
<li class="hb-scorecard-round hb-scorecard-run" data-hb-round="2026-08-11-m4max-llamacpp" data-hb-round-label="2026-08-11" data-hb-date="2026-08-11" data-hb-hardware="mac" data-hb-hardware-label="Mac" data-hb-models="gemma4-26b gemma4-31b gemma4-e4b qwen3.6-27b qwen3.6-35b-a3b" data-hb-tiers="medium small">
<a class="hb-scorecard-run-link" href="../model-scorecard/2026-08-11-m4max-llamacpp/">2026-08-11 · Mac · Apple M4 Max</a>
<span class="hb-scorecard-run-meta">Earlier round · M4 Max · 64 GB · 5 models · General capability, Office and knowledge work</span>
</li>
<li class="hb-scorecard-round hb-scorecard-run" data-hb-round="2026-08-09-m4max-llamacpp" data-hb-round-label="2026-08-09" data-hb-date="2026-08-09" data-hb-hardware="mac" data-hb-hardware-label="Mac" data-hb-models="gemma4-12b gemma4-31b gemma4-e4b ornith-9b" data-hb-tiers="medium small">
<a class="hb-scorecard-run-link" href="../model-scorecard/2026-08-09-m4max-llamacpp/">2026-08-09 · Mac · Apple M4 Max</a>
<span class="hb-scorecard-run-meta">Earlier round · M4 Max · 64 GB · 4 models · General capability, Office and knowledge work</span>
</li>
</ul>
</div>


## Community rounds

Anyone can run the same tests on their own machine with `gezel bench`, and send the result in with `gezel bench submit`. Rounds we accept appear here, apart from ours: they are measured on hardware we do not control, so they never enter the tables above, the model pages, or the model catalog. Read each one against its own stamp, the same as any round.

No community rounds have been published yet.

Run `gezel bench --json result.json` on your own machine, then `gezel bench submit result.json` to send the round in.

## Reading the table

**Tasks passed** counts every attempt across every job in the set. A model with `24/33 (73%)` finished 24 of 33 attempts correctly. If any job in the set ran fewer than three times you'll see a raw count instead of a percentage — too small a sample to quote as a rate. A model whose results were incomplete is left out of the table entirely rather than shown with a gap.

**Quality** is an AI reviewer's opinion of the finished work, and the count beside it is how many pieces that opinion covers. It only grades work that was actually produced, including declared artifacts from failed attempts where the round used inline judging. Missing artifacts receive no invented quality score — `6.5/10 (18 pieces)` is a weaker claim than `6.5/10 (26 pieces)`. Treat it as color next to the pass rate, never as a substitute for it. Task-specific rubrics stay separate rather than being averaged into one score.

**Performance** shows two measured speeds on the machine named above: output speed is how fast the model writes its answer, and prefill speed is how fast it takes in your prompt and documents. Both matter for how a chat *feels* — prefill governs the pause before it starts, while output governs how fast text appears. A dash means that round did not record a throughput probe.

**Context** is the working memory the model was given for these runs — how much it can hold at once. **Memory used** is the most memory the model and its engine held on the test machine. What that number covers depends on the machine, so each round says which one it measured:

- **On a Mac** the graphics chip shares the computer's memory and our measurement sees all of it, so **Memory used** is the model's whole footprint.
- **On a PC with a separate graphics card** the column is called **System memory**. It counts the computer's own memory only, not what the model keeps on the graphics card.
- **On machines like the DGX Spark**, where the graphics chip shares memory in a way our measurement can't see, the column is left out. The number would read far below what the model really uses.

Treat these as a rough guide from one machine, not a promise about yours. The Models catalog in the app is the better check for whether a model fits your computer. When the engine reported its KV-cache precision, it appears beside the model name — for example, `(kv: q8_0)`.

Each **test round** keeps all of its tables together under one provenance stamp. Earlier rounds stay separate from the latest because a change to gezel or to the task set can move a score without any model changing.

**Size** is the model's parameter count where we know it. Bigger is often but not always better: on office work in particular, some smaller models beat larger ones, and a model family's habits matter more than its size.

**Every result in one table** sets every round's rows side by side, under the column names the download uses. `pass_rate_pct` counts only the attempts the model was responsible for, and `rate_quotable` is `no` where a job ran fewer than three times, so read that figure as a count. `judge_score` is the one place task rubrics are averaged: a summary across a round's rubrics, weighted by how many pieces each covered, and fair to compare only within one judge; the download keeps each rubric's own score. Speeds are the median of each attempt's engine log where a round recorded them and the older probe otherwise, as `perf_source` says, and a round measured across separate hardware periods has no single speed, so those cells stay empty. Focused reruns show `subset` under `scope`.

Where `perf_source` says **observed chat-event prefill**, the prefill figure summarizes partial rate observations within each trial. These recovered figures are not duration-weighted throughput across every request or exact prefill times. The round's report gives coverage and keeps them separate from aggregate engine measurements.

## Choosing from this

A high score on the office set is the better guide for everyday document, planning, and analysis work. A high score on the general set matters more if you want the model writing or fixing code, and the engineering set, where a round has it, is the stricter test of that.

For writing, reviewing, and illustrating documents in DocBlocks, [Docbench](https://gezel.com/docs/docbench/) is the more direct guide: it grades the answers themselves, not whether a job finished.

If a model you're considering isn't listed, it hasn't been measured here yet — which is not a verdict on it either way. The Models catalog in the app will still tell you whether it fits this machine.
