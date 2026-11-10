# 2026-10-30 · Windows ARM64 · NVIDIA RTX Spark N1X

A focused rerun on NVIDIA RTX Spark N1X (6144-core GPU, 20-core CPU) · NVIDIA RTX Spark N1X (6144-core Blackwell RTX GPU) · 23 GB: 2 models across 1 task set. Every round is listed in the [model scorecard](https://gezel.com/docs/model-scorecard/), with its results side by side in one table.

<div class="hb-scorecard-round hb-scorecard-round-page">
<p class="hb-scorecard-stamp"><strong>NVIDIA RTX Spark N1X (6144-core GPU, 20-core CPU) · NVIDIA RTX Spark N1X (6144-core Blackwell RTX GPU) · 23 GB · llama-cpp · focused subset · 3 trials per task · 2026-10-30 · gezel 22fec99111a5 · catalog 0.3.1</strong></p>
<p class="hb-scorecard-round-note">Final six previously unstarted complex-work attempts: one automatic pass and five raw failures. The passing Gemma parameter report contained incorrect totals. Gemma fanout never reached inference because model capacity remained reserved; the published table attributes that attempt to infrastructure, preserving the raw verdict in the download. Its model-token usage is unavailable. This segment uses the same verified script-isolation condition as the continuation, with no retries. Part of the 258-attempt Spark comparison across four task sets, three repetitions overall. Segments retain separate rounds and counts because neither execution condition has three repeats of every task. Native 0.1.54, llama.cpp CUDA, generalist auto. Task performance includes all attempts; artifact reviews retain separate rubrics. Source reviews can expose incorrect outputs accepted by automatic checks. The downloadable Spark report preserves all raw fixed scores, 119 artifact judgments, exact axes, exclusions, latency, tokens, RAM/GPU samples and review diagnostics.</p>
<p class="hb-scorecard-memory-note">System memory counts this computer's own memory only. What the model keeps on the separate graphics card isn't included.</p>
<div class="hb-scorecard-suite" data-hb-suite="complex-work">
<h5 class="hb-scorecard-suite-title">Complex workflows</h5>
<table><thead><tr><th>Model</th><th>Size</th><th>Tasks passed</th><th>Context</th><th>System memory</th></tr></thead><tbody><tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>Qwen 3.8 (27B, Q4) (kv: f16)</td><td>27B</td><td>0/3 (some tasks run once — count not rate)</td><td>250K</td><td>5.6 GB</td></tr></tbody></table>
<h6>Task performance</h6>
<p>Task measurements include failures within each stated period or comparison subset. Measurement methods and exclusions are stated in period labels and round notes. Values are per-trial medians (minimum–maximum; sample count), not admission probes. Wall time includes tools. System RSS and GPU memory are separate peak measurements; do not add their medians. Periods remain separate because hardware performance can change.</p>
<table><thead><tr><th scope="col">Model</th><th scope="col">Period</th><th scope="col">Trials</th><th scope="col">Output (tok/s)</th><th scope="col">Prefill (tok/s)</th><th scope="col">Wall time (min)</th><th scope="col">Peak system RSS (GiB)</th><th scope="col">Peak GPU memory (GiB)</th></tr></thead><tbody>
<tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4)</td><td>Separate continuation condition · all attempts</td><td>3</td><td>62.89 (62.05–63.73; n=2)</td><td>1,142.62 (1,115.16–1,170.08; n=2)</td><td>13.1 (5.5–26.4; n=3)</td><td>9.95 (1.19–10.91; n=3)</td><td>13.08 (1.20–13.37; n=3)</td></tr>
<tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>Qwen 3.8 (27B, Q4)</td><td>Separate continuation condition · all attempts</td><td>3</td><td>22.86 (15.54–24.37; n=3)</td><td>518.50 (349.22–540.48; n=3)</td><td>16.0 (14.0–24.3; n=3)</td><td>5.60 (5.36–8.51; n=3)</td><td>35.19 (35.18–35.69; n=3)</td></tr>
</tbody></table>
<h6>Artifact reviews</h6>
<p>Advisory means out of 10, with eligible artifact counts. Rubrics are separate and are not a combined model score. A dash means no eligible artifact was scored under that rubric. Missing artifacts have no score; excluded reviews do not enter these means. Not applicable means the task had no applicable qualitative rubric. Judge: none recorded. Review identity and limitations are recorded with the evaluation.</p>
<table><thead><tr><th scope="col">Model</th><th scope="col">Period</th><th scope="col">No artifact</th><th scope="col">Excluded reviews</th><th scope="col">Not applicable</th></tr></thead><tbody>
<tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4)</td><td>Separate continuation condition · all attempts</td><td>0</td><td>0</td><td>3</td></tr>
<tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>Qwen 3.8 (27B, Q4)</td><td>Separate continuation condition · all attempts</td><td>0</td><td>0</td><td>3</td></tr>
</tbody></table>
<p class="hb-scorecard-withheld">Not published — some tasks could not be measured on this round: Gemma 4 (12B, Q4) (1 task(s) unmeasured)</p>
<p class="hb-scorecard-taskcount">Tasks in this set: 3.</p>
</div>
</div>

## October 28–30 Spark comparison and review data

This note also covers [2026-10-28 · Windows ARM64 · NVIDIA RTX Spark N1X](../2026-10-28-spark-native-0-1-54-original/), [2026-10-29 · Windows ARM64 · NVIDIA RTX Spark N1X](../2026-10-29-spark-native-0-1-54-continuation/).

Qwen 3.8 27B Q4 and Gemma 4 12B Q4 completed **258 planned attempts** on
Windows ARM64 with an NVIDIA RTX Spark N1X and native 0.1.54. The four task
sets each have three repetitions per model and scenario across the complete
campaign. The tables retain three separate segments: 169 original attempts,
83 continuation attempts, and six final attempts. These segments show counts,
not percentages; the original and later script-isolation conditions are not
pooled.

On the original condition, Qwen passed 65/84 eligible attempts and Gemma
52/84. Gemma's median engine decode speed was 66.15 tokens/s versus Qwen's
26.44. The two later segments used the same verified condition with the
Windows script sandbox disabled while other script permissions remained.
All raw outcomes and fixed scores are retained. Two raw infrastructure
exclusions remain, including a model-authored unevaluable gate. The published
table additionally sets aside the final Gemma fanout attempt because capacity
admission blocked it before inference; the download preserves its original
failure classification and explains the correction.

All **119 artifact judgments**, covering 125 produced paths across 112
trials, are included in the download. The table uses one primary review per
trial, keeps different rubrics separate, and excludes six primary A/B reviews
whose rubric did not fit the output. Two declared artifacts were missing;
144 trials had no declared quality rubric. These were bounded source reviews,
not complete interactive or visual checks. Some automatic passes contained
incorrect results, including the final Gemma parameterized report.

Task performance includes every attempt within its own segment: engine-log
decode and prefill, duration, and separately reported system RSS and GPU memory.
The companion adds first-action and first-artifact timings, tokens, GPU
utilization, sample coverage, exact review axes and justifications, per-trial
postmortems, and infrastructure/evaluator findings. Local-model token evidence
is unavailable for the admission-blocked attempt, rather than reported as zero.

Download the [scorecard data](https://gezel.com/docs/assets/scorecards/2026-10-30-spark-native-0-1-54/scorecard.json),
[full judging and performance data](https://gezel.com/docs/assets/scorecards/2026-10-30-spark-native-0-1-54/scorecard-details.json),
[reviewed report](https://gezel.com/docs/assets/scorecards/2026-10-30-spark-native-0-1-54/report.md),
and [all trials](https://gezel.com/docs/assets/scorecards/2026-10-30-spark-native-0-1-54/overall-trials.csv).
[Download notes and validation](https://gezel.com/docs/assets/scorecards/2026-10-30-spark-native-0-1-54/README.md)
explain the preserved baselines, review selection and published attribution.
