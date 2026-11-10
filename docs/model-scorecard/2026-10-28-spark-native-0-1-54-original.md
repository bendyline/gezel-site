# 2026-10-28 · Windows ARM64 · NVIDIA RTX Spark N1X

A model scorecard round on NVIDIA RTX Spark N1X (6144-core GPU, 20-core CPU) · NVIDIA RTX Spark N1X (6144-core Blackwell RTX GPU) · 23 GB: 2 models across 4 task sets. Every round is listed in the [model scorecard](https://gezel.com/docs/model-scorecard/), with its results side by side in one table.

<div class="hb-scorecard-round hb-scorecard-round-page">
<p class="hb-scorecard-stamp"><strong>NVIDIA RTX Spark N1X (6144-core GPU, 20-core CPU) · NVIDIA RTX Spark N1X (6144-core Blackwell RTX GPU) · 23 GB · llama-cpp · 3 trials per task · 2026-10-28 · gezel 22fec99111a5 · catalog 0.3.1</strong></p>
<p class="hb-scorecard-round-note">Original execution condition: 169 attempts, 117 passes and one sandbox-resolution infrastructure exclusion. The launcher existed on the machine but was unresolved by an isolated trial. The later continuation changes script isolation and is not merged with this baseline. Part of the 258-attempt Spark comparison across four task sets, three repetitions overall. Segments retain separate rounds and counts because neither execution condition has three repeats of every task. Native 0.1.54, llama.cpp CUDA, generalist auto. Task performance includes all attempts; artifact reviews retain separate rubrics. Source reviews can expose incorrect outputs accepted by automatic checks. The downloadable Spark report preserves all raw fixed scores, 119 artifact judgments, exact axes, exclusions, latency, tokens, RAM/GPU samples and review diagnostics.</p>
<p class="hb-scorecard-memory-note">System memory counts this computer's own memory only. What the model keeps on the separate graphics card isn't included.</p>
<div class="hb-scorecard-suite" data-hb-suite="core">
<h5 class="hb-scorecard-suite-title">General capability</h5>
<table><thead><tr><th>Model</th><th>Size</th><th>Tasks passed</th><th>Context</th><th>System memory</th></tr></thead><tbody><tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>Qwen 3.8 (27B, Q4) (kv: f16)</td><td>27B</td><td>21/22 (some tasks run 2× — count not rate)</td><td>250K</td><td>6.6 GB</td></tr><tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4) (kv: f16)</td><td>12B</td><td>17/22 (some tasks run 2× — count not rate)</td><td>256K</td><td>10.6 GB</td></tr></tbody></table>
<h6>Task performance</h6>
<p>Task measurements include failures within each stated period or comparison subset. Measurement methods and exclusions are stated in period labels and round notes. Values are per-trial medians (minimum–maximum; sample count), not admission probes. Wall time includes tools. System RSS and GPU memory are separate peak measurements; do not add their medians. Periods remain separate because hardware performance can change.</p>
<table><thead><tr><th scope="col">Model</th><th scope="col">Period</th><th scope="col">Trials</th><th scope="col">Output (tok/s)</th><th scope="col">Prefill (tok/s)</th><th scope="col">Wall time (min)</th><th scope="col">Peak system RSS (GiB)</th><th scope="col">Peak GPU memory (GiB)</th></tr></thead><tbody>
<tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>Qwen 3.8 (27B, Q4)</td><td>Original condition · all attempts</td><td>22</td><td>28.69 (18.41–36.09; n=22)</td><td>591.69 (370.09–670.10; n=22)</td><td>3.9 (1.0–55.7; n=22)</td><td>6.59 (3.47–11.51; n=22)</td><td>35.45 (35.40–35.90; n=22)</td></tr>
<tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4)</td><td>Original condition · all attempts</td><td>22</td><td>69.74 (57.30–84.31; n=22)</td><td>1,317.74 (1,005.25–1,427.14; n=22)</td><td>2.9 (0.8–13.5; n=22)</td><td>10.63 (4.24–11.95; n=22)</td><td>13.26 (13.20–20.19; n=22)</td></tr>
</tbody></table>
<h6>Artifact reviews</h6>
<p>Advisory means out of 10, with eligible artifact counts. Rubrics are separate and are not a combined model score. A dash means no eligible artifact was scored under that rubric. Missing artifacts have no score; excluded reviews do not enter these means. Not applicable means the task had no applicable qualitative rubric. Judge: the OpenAI Codex agent that ran the round (in-session review). Review identity and limitations are recorded with the evaluation.</p>
<table><thead><tr><th scope="col">Model</th><th scope="col">Period</th><th scope="col">HTML quality</th><th scope="col">No artifact</th><th scope="col">Excluded reviews</th><th scope="col">Not applicable</th></tr></thead><tbody>
<tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>Qwen 3.8 (27B, Q4)</td><td>Original condition · all attempts</td><td>5.92/10 (6 pieces)</td><td>0</td><td>0</td><td>16</td></tr>
<tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4)</td><td>Original condition · all attempts</td><td>4.50/10 (6 pieces)</td><td>0</td><td>0</td><td>16</td></tr>
</tbody></table>
<p class="hb-scorecard-taskcount">Tasks in this set: 11.</p>
</div>
<div class="hb-scorecard-suite" data-hb-suite="productivity">
<h5 class="hb-scorecard-suite-title">Office and knowledge work</h5>
<table><thead><tr><th>Model</th><th>Size</th><th>Tasks passed</th><th>Context</th><th>System memory</th></tr></thead><tbody><tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4) (kv: f16)</td><td>12B</td><td>22/26 (some tasks run 2× — count not rate)</td><td>256K</td><td>11.3 GB</td></tr><tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>Qwen 3.8 (27B, Q4) (kv: f16)</td><td>27B</td><td>22/26 (some tasks run 2× — count not rate)</td><td>250K</td><td>8.8 GB</td></tr></tbody></table>
<h6>Task performance</h6>
<p>Task measurements include failures within each stated period or comparison subset. Measurement methods and exclusions are stated in period labels and round notes. Values are per-trial medians (minimum–maximum; sample count), not admission probes. Wall time includes tools. System RSS and GPU memory are separate peak measurements; do not add their medians. Periods remain separate because hardware performance can change.</p>
<table><thead><tr><th scope="col">Model</th><th scope="col">Period</th><th scope="col">Trials</th><th scope="col">Output (tok/s)</th><th scope="col">Prefill (tok/s)</th><th scope="col">Wall time (min)</th><th scope="col">Peak system RSS (GiB)</th><th scope="col">Peak GPU memory (GiB)</th></tr></thead><tbody>
<tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4)</td><td>Original condition · all attempts</td><td>26</td><td>66.15 (41.66–77.97; n=26)</td><td>1,295.42 (810.41–1,466.42; n=26)</td><td>4.9 (0.7–17.0; n=26)</td><td>11.29 (4.24–13.28; n=26)</td><td>13.21 (13.01–13.30; n=26)</td></tr>
<tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>Qwen 3.8 (27B, Q4)</td><td>Original condition · all attempts</td><td>26</td><td>26.84 (15.66–33.55; n=26)</td><td>584.85 (344.25–646.89; n=26)</td><td>8.6 (1.5–90.3; n=26)</td><td>8.82 (3.35–11.65; n=26)</td><td>35.41 (35.20–35.63; n=26)</td></tr>
</tbody></table>
<h6>Artifact reviews</h6>
<p>Advisory means out of 10, with eligible artifact counts. Rubrics are separate and are not a combined model score. A dash means no eligible artifact was scored under that rubric. Missing artifacts have no score; excluded reviews do not enter these means. Not applicable means the task had no applicable qualitative rubric. Judge: the OpenAI Codex agent that ran the round (in-session review). Review identity and limitations are recorded with the evaluation.</p>
<table><thead><tr><th scope="col">Model</th><th scope="col">Period</th><th scope="col">craftbook-annotated-bibliography</th><th scope="col">craftbook-powerpoint-deck</th><th scope="col">craftbook-research-to-document</th><th scope="col">craftbook-spreadsheet-model</th><th scope="col">craftbook-week-plan</th><th scope="col">docblocks-theme-roundtrip</th><th scope="col">meeting-followup</th><th scope="col">wikipedia-research-brief</th><th scope="col">No artifact</th><th scope="col">Excluded reviews</th><th scope="col">Not applicable</th></tr></thead><tbody>
<tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4)</td><td>Original condition · all attempts</td><td>6.13/10 (2 pieces)</td><td>7.38/10 (2 pieces)</td><td>6.67/10 (2 pieces)</td><td>3.75/10 (2 pieces)</td><td>0.50/10 (2 pieces)</td><td>4.33/10 (2 pieces)</td><td>7.13/10 (2 pieces)</td><td>3.88/10 (2 pieces)</td><td>0</td><td>2</td><td>8</td></tr>
<tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>Qwen 3.8 (27B, Q4)</td><td>Original condition · all attempts</td><td>6.38/10 (2 pieces)</td><td>6.75/10 (2 pieces)</td><td>6.67/10 (2 pieces)</td><td>5.50/10 (2 pieces)</td><td>1.50/10 (2 pieces)</td><td>7.17/10 (2 pieces)</td><td>7.13/10 (2 pieces)</td><td>6.25/10 (2 pieces)</td><td>0</td><td>2</td><td>8</td></tr>
</tbody></table>
<p class="hb-scorecard-taskcount">Tasks in this set: 13.</p>
</div>
<div class="hb-scorecard-suite" data-hb-suite="developer">
<h5 class="hb-scorecard-suite-title">Engineering work</h5>
<table><thead><tr><th>Model</th><th>Size</th><th>Tasks passed</th><th>Context</th><th>System memory</th></tr></thead><tbody><tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>Qwen 3.8 (27B, Q4) (kv: f16)</td><td>27B</td><td>12/20 (some tasks run 2× — count not rate)</td><td>250K</td><td>8.1 GB</td></tr><tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4) (kv: f16)</td><td>12B</td><td>8/20 (some tasks run 2× — count not rate)</td><td>256K</td><td>11.3 GB</td></tr></tbody></table>
<h6>Task performance</h6>
<p>Task measurements include failures within each stated period or comparison subset. Measurement methods and exclusions are stated in period labels and round notes. Values are per-trial medians (minimum–maximum; sample count), not admission probes. Wall time includes tools. System RSS and GPU memory are separate peak measurements; do not add their medians. Periods remain separate because hardware performance can change.</p>
<table><thead><tr><th scope="col">Model</th><th scope="col">Period</th><th scope="col">Trials</th><th scope="col">Output (tok/s)</th><th scope="col">Prefill (tok/s)</th><th scope="col">Wall time (min)</th><th scope="col">Peak system RSS (GiB)</th><th scope="col">Peak GPU memory (GiB)</th></tr></thead><tbody>
<tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>Qwen 3.8 (27B, Q4)</td><td>Original condition · all attempts</td><td>20</td><td>25.94 (15.28–31.86; n=20)</td><td>557.71 (347.84–602.85; n=20)</td><td>11.8 (1.9–94.6; n=20)</td><td>8.10 (3.76–12.59; n=20)</td><td>35.46 (35.21–35.52; n=20)</td></tr>
<tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4)</td><td>Original condition · all attempts</td><td>20</td><td>66.91 (45.79–75.62; n=20)</td><td>1,202.86 (804.53–1,329.16; n=20)</td><td>8.9 (1.3–35.9; n=20)</td><td>11.28 (7.35–13.05; n=20)</td><td>13.27 (13.01–13.48; n=20)</td></tr>
</tbody></table>
<h6>Artifact reviews</h6>
<p>Advisory means out of 10, with eligible artifact counts. Rubrics are separate and are not a combined model score. A dash means no eligible artifact was scored under that rubric. Missing artifacts have no score; excluded reviews do not enter these means. Not applicable means the task had no applicable qualitative rubric. Judge: the OpenAI Codex agent that ran the round (in-session review). Review identity and limitations are recorded with the evaluation.</p>
<table><thead><tr><th scope="col">Model</th><th scope="col">Period</th><th scope="col">craftbook-api-contract-review</th><th scope="col">craftbook-bug-fix-tdd</th><th scope="col">craftbook-code-review</th><th scope="col">craftbook-codemod-sweep</th><th scope="col">craftbook-deep-security-review</th><th scope="col">craftbook-refactor-module</th><th scope="col">No artifact</th><th scope="col">Excluded reviews</th><th scope="col">Not applicable</th></tr></thead><tbody>
<tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>Qwen 3.8 (27B, Q4)</td><td>Original condition · all attempts</td><td>6.50/10 (2 pieces)</td><td>2.50/10 (2 pieces)</td><td>6.50/10 (2 pieces)</td><td>6.50/10 (2 pieces)</td><td>6.83/10 (2 pieces)</td><td>3.17/10 (2 pieces)</td><td>0</td><td>0</td><td>8</td></tr>
<tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4)</td><td>Original condition · all attempts</td><td>3.25/10 (2 pieces)</td><td>4.17/10 (2 pieces)</td><td>5.25/10 (2 pieces)</td><td>3.00/10 (2 pieces)</td><td>3.83/10 (2 pieces)</td><td>1.83/10 (2 pieces)</td><td>0</td><td>0</td><td>8</td></tr>
</tbody></table>
<p class="hb-scorecard-taskcount">Tasks in this set: 10.</p>
</div>
<div class="hb-scorecard-suite" data-hb-suite="complex-work">
<h5 class="hb-scorecard-suite-title">Complex workflows</h5>
<table><thead><tr><th>Model</th><th>Size</th><th>Tasks passed</th><th>Context</th><th>System memory</th></tr></thead><tbody><tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>Qwen 3.8 (27B, Q4) (kv: f16)</td><td>27B</td><td>10/16 (some tasks run once — count not rate)</td><td>250K</td><td>10.6 GB</td></tr><tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4) (kv: f16)</td><td>12B</td><td>5/16 (some tasks run once — count not rate)</td><td>256K</td><td>12.4 GB</td></tr></tbody></table>
<h6>Task performance</h6>
<p>Task measurements include failures within each stated period or comparison subset. Measurement methods and exclusions are stated in period labels and round notes. Values are per-trial medians (minimum–maximum; sample count), not admission probes. Wall time includes tools. System RSS and GPU memory are separate peak measurements; do not add their medians. Periods remain separate because hardware performance can change.</p>
<table><thead><tr><th scope="col">Model</th><th scope="col">Period</th><th scope="col">Trials</th><th scope="col">Output (tok/s)</th><th scope="col">Prefill (tok/s)</th><th scope="col">Wall time (min)</th><th scope="col">Peak system RSS (GiB)</th><th scope="col">Peak GPU memory (GiB)</th></tr></thead><tbody>
<tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>Qwen 3.8 (27B, Q4)</td><td>Original condition · all attempts</td><td>17</td><td>24.78 (15.84–33.04; n=17)</td><td>552.21 (318.05–606.06; n=17)</td><td>19.3 (1.8–107.8; n=17)</td><td>10.57 (3.89–11.98; n=17)</td><td>35.42 (35.18–35.66; n=17)</td></tr>
<tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4)</td><td>Original condition · all attempts</td><td>16</td><td>56.88 (34.11–79.15; n=16)</td><td>1,153.82 (789.00–1,378.79; n=16)</td><td>14.9 (1.3–26.6; n=16)</td><td>12.37 (5.71–12.91; n=16)</td><td>13.24 (13.00–13.47; n=16)</td></tr>
</tbody></table>
<h6>Artifact reviews</h6>
<p>Advisory means out of 10, with eligible artifact counts. Rubrics are separate and are not a combined model score. A dash means no eligible artifact was scored under that rubric. Missing artifacts have no score; excluded reviews do not enter these means. Not applicable means the task had no applicable qualitative rubric. Judge: the OpenAI Codex agent that ran the round (in-session review). Review identity and limitations are recorded with the evaluation.</p>
<table><thead><tr><th scope="col">Model</th><th scope="col">Period</th><th scope="col">craftbook-invoice-run</th><th scope="col">No artifact</th><th scope="col">Excluded reviews</th><th scope="col">Not applicable</th></tr></thead><tbody>
<tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>Qwen 3.8 (27B, Q4)</td><td>Original condition · all attempts</td><td>5.70/10 (2 pieces)</td><td>0</td><td>0</td><td>15</td></tr>
<tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4)</td><td>Original condition · all attempts</td><td>5.10/10 (2 pieces)</td><td>0</td><td>0</td><td>14</td></tr>
</tbody></table>
<p class="hb-scorecard-taskcount">Tasks in this set: 9.</p>
</div>
</div>

## October 28–30 Spark comparison and review data

This note also covers [2026-10-29 · Windows ARM64 · NVIDIA RTX Spark N1X](../2026-10-29-spark-native-0-1-54-continuation/), [2026-10-30 · Windows ARM64 · NVIDIA RTX Spark N1X](../2026-10-30-spark-native-0-1-54-final-six/).

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
