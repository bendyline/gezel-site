# 2026-11-03 · Mac · Apple M5 Max

A focused rerun on M5 Max · Apple M5 Max (integrated GPU) · 128 GB: 2 models across 2 task sets. Every round is listed in the [model scorecard](https://gezel.com/docs/model-scorecard/), with its results side by side in one table.

<div class="hb-scorecard-round hb-scorecard-round-page">
<p class="hb-scorecard-stamp"><strong>M5 Max · Apple M5 Max (integrated GPU) · 128 GB · llama-cpp + mlx · focused subset · 1 trial per task · 2026-11-03 · gezel d0750db1712b45c304d3ba772e996f01a1da1b30 · catalog 0.3.5</strong></p>
<p class="hb-scorecard-round-note">Exploratory comparison, shortened from the planned 516 trials: 72 matched trials, 18 pairs per model, one repetition over core and productivity; developer and complex-work were not run. Both models passed 16/18 on MLX and 18/18 on llama.cpp; equivalence within ±5 percentage points is not established. The passing, unpaired PowerPoint trial has a preserved fixture-identity flag and remains in downloads only. All four recorded failures remain unchanged, including one diagnosed gate false-positive. Native 0.1.55; generalist auto; Gilde 0.3.5 with the staged Gemma MLX assistant drafter candidate, not an installed catalog release. Observed MLX prefill is recovered from rounded, partial first-token chat events, not aggregate request throughput or pure prefill time. Engine quantizations and speculation differ. Raw scores, judgments, performance coverage and paired uncertainty are in the downloads.</p>
<div class="hb-scorecard-suite" data-hb-suite="core">
<h5 class="hb-scorecard-suite-title">General capability</h5>
<table><thead><tr><th>Model</th><th>Size</th><th>Tasks passed</th><th>Context</th><th>Memory used</th></tr></thead><tbody><tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4) · llama.cpp (kv: f16)</td><td>12B</td><td>11/11 (some tasks run once — count not rate)</td><td>256K</td><td>18.8 GB</td></tr><tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>Qwen 3.8 (27B, Q4) · llama.cpp (kv: f16)</td><td>27B</td><td>11/11 (some tasks run once — count not rate)</td><td>256K</td><td>39.0 GB</td></tr><tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>Qwen 3.8 (27B, Q4) · MLX</td><td>27B</td><td>10/11 (some tasks run once — count not rate)</td><td>—</td><td>—</td></tr><tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4) · MLX</td><td>12B</td><td>9/11 (some tasks run once — count not rate)</td><td>—</td><td>—</td></tr></tbody></table>
<h6>Task performance</h6>
<p>Task measurements include failures within each stated period or comparison subset. Measurement methods and exclusions are stated in period labels and round notes. Values are per-trial medians (minimum–maximum; sample count), not admission probes. Wall time includes tools. System RSS and GPU memory are separate peak measurements; do not add their medians. Periods remain separate because hardware performance can change. Observed prefill uses partial chat-event rates summarized within each trial. It is not a duration-weighted aggregate of every request, and does not recover pure prefill time.</p>
<table><thead><tr><th scope="col">Model</th><th scope="col">Period</th><th scope="col">Trials</th><th scope="col">Output (tok/s)</th><th scope="col">Prefill (tok/s)</th><th scope="col">Wall time (min)</th><th scope="col">Peak system RSS (GiB)</th><th scope="col">Peak GPU memory (GiB)</th></tr></thead><tbody>
<tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4) · llama.cpp</td><td>Matched subset · native 0.1.55</td><td>11</td><td>81.72 (63.36–123.39; n=11)</td><td>1,101.53 (853.20–1,519.39; n=11)</td><td>1.4 (0.4–4.6; n=11)</td><td>18.84 (13.70–28.44; n=11)</td><td>—</td></tr>
<tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>Qwen 3.8 (27B, Q4) · llama.cpp</td><td>Matched subset · native 0.1.55</td><td>11</td><td>35.85 (27.64–50.85; n=11)</td><td>449.19 (395.51–630.37; n=11)</td><td>1.9 (0.6–19.7; n=11)</td><td>38.95 (35.79–51.01; n=11)</td><td>—</td></tr>
<tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>Qwen 3.8 (27B, Q4) · MLX</td><td>Matched subset · native 0.1.55</td><td>11</td><td>34.00 (26.00–45.00; n=11)</td><td>574.00 (493.00–801.00; n=11) observed</td><td>2.0 (1.0–47.8; n=11)</td><td>17.21 (17.13–20.02; n=11)</td><td>—</td></tr>
<tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4) · MLX</td><td>Matched subset · native 0.1.55</td><td>11</td><td>63.00 (47.00–80.00; n=11)</td><td>1,341.50 (1,046.00–1,963.00; n=11) observed</td><td>2.6 (0.5–10.8; n=11)</td><td>10.07 (9.87–18.06; n=11)</td><td>—</td></tr>
</tbody></table>
<h6>Artifact reviews</h6>
<p>Advisory means out of 10, with eligible artifact counts. Rubrics are separate and are not a combined model score. A dash means no eligible artifact was scored under that rubric. Missing artifacts have no score; excluded reviews do not enter these means. Not applicable means the task had no applicable qualitative rubric. Judge: the OpenAI Codex agent that ran the round (in-session review). Review identity and limitations are recorded with the evaluation.</p>
<table><thead><tr><th scope="col">Model</th><th scope="col">Period</th><th scope="col">HTML quality</th><th scope="col">No artifact</th><th scope="col">Excluded reviews</th><th scope="col">Not applicable</th></tr></thead><tbody>
<tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4) · llama.cpp</td><td>Matched subset · native 0.1.55</td><td>4.50/10 (3 pieces)</td><td>0</td><td>0</td><td>8</td></tr>
<tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>Qwen 3.8 (27B, Q4) · llama.cpp</td><td>Matched subset · native 0.1.55</td><td>4.75/10 (3 pieces)</td><td>0</td><td>0</td><td>8</td></tr>
<tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>Qwen 3.8 (27B, Q4) · MLX</td><td>Matched subset · native 0.1.55</td><td>6.08/10 (3 pieces)</td><td>0</td><td>0</td><td>8</td></tr>
<tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4) · MLX</td><td>Matched subset · native 0.1.55</td><td>3.92/10 (3 pieces)</td><td>0</td><td>0</td><td>8</td></tr>
</tbody></table>
<p class="hb-scorecard-taskcount">Tasks in this set: 11.</p>
</div>
<div class="hb-scorecard-suite" data-hb-suite="productivity">
<h5 class="hb-scorecard-suite-title">Office and knowledge work</h5>
<table><thead><tr><th>Model</th><th>Size</th><th>Tasks passed</th><th>Context</th><th>Memory used</th></tr></thead><tbody><tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4) · llama.cpp (kv: f16)</td><td>12B</td><td>7/7 (some tasks run once — count not rate)</td><td>256K</td><td>18.8 GB</td></tr><tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4) · MLX</td><td>12B</td><td>7/7 (some tasks run once — count not rate)</td><td>—</td><td>—</td></tr><tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>Qwen 3.8 (27B, Q4) · llama.cpp (kv: f16)</td><td>27B</td><td>7/7 (some tasks run once — count not rate)</td><td>256K</td><td>38.6 GB</td></tr><tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>Qwen 3.8 (27B, Q4) · MLX</td><td>27B</td><td>6/7 (some tasks run once — count not rate)</td><td>—</td><td>—</td></tr></tbody></table>
<h6>Task performance</h6>
<p>Task measurements include failures within each stated period or comparison subset. Measurement methods and exclusions are stated in period labels and round notes. Values are per-trial medians (minimum–maximum; sample count), not admission probes. Wall time includes tools. System RSS and GPU memory are separate peak measurements; do not add their medians. Periods remain separate because hardware performance can change. Observed prefill uses partial chat-event rates summarized within each trial. It is not a duration-weighted aggregate of every request, and does not recover pure prefill time.</p>
<table><thead><tr><th scope="col">Model</th><th scope="col">Period</th><th scope="col">Trials</th><th scope="col">Output (tok/s)</th><th scope="col">Prefill (tok/s)</th><th scope="col">Wall time (min)</th><th scope="col">Peak system RSS (GiB)</th><th scope="col">Peak GPU memory (GiB)</th></tr></thead><tbody>
<tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4) · llama.cpp</td><td>Matched subset · native 0.1.55</td><td>7</td><td>85.05 (75.04–105.02; n=7)</td><td>1,101.83 (931.24–1,277.21; n=7)</td><td>2.0 (0.5–2.9; n=7)</td><td>18.78 (14.14–24.56; n=7)</td><td>—</td></tr>
<tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4) · MLX</td><td>Matched subset · native 0.1.55</td><td>7</td><td>57.00 (51.00–68.00; n=7)</td><td>1,222.00 (1,028.00–1,615.50; n=7) observed</td><td>2.5 (0.6–6.3; n=7)</td><td>9.96 (9.89–10.81; n=7)</td><td>—</td></tr>
<tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>Qwen 3.8 (27B, Q4) · llama.cpp</td><td>Matched subset · native 0.1.55</td><td>7</td><td>33.73 (23.55–53.75; n=7)</td><td>440.62 (401.65–612.30; n=7)</td><td>2.9 (1.2–9.4; n=7)</td><td>38.56 (35.83–44.83; n=7)</td><td>—</td></tr>
<tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>Qwen 3.8 (27B, Q4) · MLX</td><td>Matched subset · native 0.1.55</td><td>7</td><td>34.00 (25.00–49.00; n=6)</td><td>743.00 (522.00–943.00; n=7) observed</td><td>2.2 (1.0–21.1; n=7)</td><td>17.29 (17.15–17.58; n=7)</td><td>—</td></tr>
</tbody></table>
<h6>Artifact reviews</h6>
<p>Advisory means out of 10, with eligible artifact counts. Rubrics are separate and are not a combined model score. A dash means no eligible artifact was scored under that rubric. Missing artifacts have no score; excluded reviews do not enter these means. Not applicable means the task had no applicable qualitative rubric. Judge: the OpenAI Codex agent that ran the round (in-session review). Review identity and limitations are recorded with the evaluation.</p>
<table><thead><tr><th scope="col">Model</th><th scope="col">Period</th><th scope="col">craftbook-spreadsheet-model</th><th scope="col">docblocks-theme-roundtrip</th><th scope="col">meeting-followup</th><th scope="col">No artifact</th><th scope="col">Excluded reviews</th><th scope="col">Not applicable</th></tr></thead><tbody>
<tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4) · llama.cpp</td><td>Matched subset · native 0.1.55</td><td>4.50/10 (1 pieces)</td><td>4.00/10 (1 pieces)</td><td>6.50/10 (1 pieces)</td><td>0</td><td>0</td><td>4</td></tr>
<tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4) · MLX</td><td>Matched subset · native 0.1.55</td><td>4.50/10 (1 pieces)</td><td>5.67/10 (1 pieces)</td><td>5.25/10 (1 pieces)</td><td>0</td><td>0</td><td>4</td></tr>
<tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>Qwen 3.8 (27B, Q4) · llama.cpp</td><td>Matched subset · native 0.1.55</td><td>5.50/10 (1 pieces)</td><td>4.00/10 (1 pieces)</td><td>6.75/10 (1 pieces)</td><td>0</td><td>0</td><td>4</td></tr>
<tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>Qwen 3.8 (27B, Q4) · MLX</td><td>Matched subset · native 0.1.55</td><td>4.50/10 (1 pieces)</td><td>4.67/10 (1 pieces)</td><td>6.75/10 (1 pieces)</td><td>0</td><td>0</td><td>4</td></tr>
</tbody></table>
<p class="hb-scorecard-taskcount">Tasks in this set: 7.</p>
</div>
</div>

## November 3 M5 Max condensed engine comparison

This follow-up compared Qwen 3.8 27B Q4 and Gemma 4 12B Q4 on MLX and
llama.cpp after fixes, using native 0.1.55 on an Apple M5 Max with 128 GB
of unified memory. We shortened the original 516-trial plan to save time.
The comparison contains **72 matched trials: 18 pairs per model, one
repetition**, across core and productivity. Developer and complex-work were
not run. This chronological subset was selected after outcomes were visible,
so the findings are exploratory.

Both models passed **16/18 on MLX and 18/18 on llama.cpp**. Practical
equivalence within our chosen margin of **±5 percentage points is not
established**. The observed difference is −11.11 pp; the conservative paired
95% interval is [−38.09, +20.66] pp and the scenario-cluster bootstrap interval
is [−26.32, 0.00] pp for each model. These data also do not establish that the
underlying gap exceeds 5 pp. The paired analysis documents assumptions,
unavailable original pairs, sensitivity and nominal/adjusted tests.

Median recorded decode was **34.00 tok/s on MLX versus 35.66 on llama.cpp
for Qwen**, and **59.00 versus 84.12 for Gemma**. Gemma's roughly 30% lower
MLX rate here does not reproduce the earlier twofold gap. These are complete
integration measurements with different estimators, quantizations and
speculative decoding, not an isolated engine benchmark or causal test of a fix.
Gemma MLX used a staged assistant drafter candidate; Gilde remained 0.3.5.

MLX prefill was recovered from first-token diagnostics: **121 rounded rate
observations in the 36 included MLX trials**. The medians of trial medians
are **604.75 tok/s for Qwen and 1332.25 for Gemma**. Tables mark these rates
as **observed**: they cover partial provider turns and are not equivalent to
llama.cpp's duration-weighted aggregate. Exact MLX prefill times remain unknown.
The download preserves all 126 observations across all 37 recorded MLX trials,
their source hashes and coverage limits.

All four recorded failures remain unchanged. The diagnoses identify an
image-tool workflow failure, unresolved duplicate data, a section-placement
failure, and a conflict-synthesis gate false-positive. The last unpaired
Gemma MLX PowerPoint trial passed its gate but encountered a fixture-identity
flag; it is excluded from the matched comparison and retained in downloads.
There are **25 artifact reviews**, including that excluded trial's review;
24 enter the displayed rubric means. The other 48 trials have no applicable
rubric. Fixed scores and advisory quality remain separate.

Download the [report](https://gezel.com/docs/assets/scorecards/2026-11-03-m5max-fixed-paired/report.md),
[paired analysis](https://gezel.com/docs/assets/scorecards/2026-11-03-m5max-fixed-paired/paired-analysis.md),
[performance CSV](https://gezel.com/docs/assets/scorecards/2026-11-03-m5max-fixed-paired/performance.csv),
[performance data](https://gezel.com/docs/assets/scorecards/2026-11-03-m5max-fixed-paired/performance.json),
[MLX prefill observations](https://gezel.com/docs/assets/scorecards/2026-11-03-m5max-fixed-paired/mlx-prefill-recovery.json),
and [judge data](https://gezel.com/docs/assets/scorecards/2026-11-03-m5max-fixed-paired/judging.json).
The [download index](https://gezel.com/docs/assets/scorecards/2026-11-03-m5max-fixed-paired/README.md)
also links all 73 trial records, postmortems, provenance, verification and the
scope amendment. The earlier native-0.1.54 round remains a separate record.
