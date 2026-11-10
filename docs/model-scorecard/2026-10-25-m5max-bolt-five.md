# 2026-10-25 · Mac · Apple M5 Max

A model scorecard round on M5 Max · Apple M5 Max (integrated GPU) · 128 GB: 5 models across 1 task set. Every round is listed in the [model scorecard](https://gezel.com/docs/model-scorecard/), with its results side by side in one table.

<div class="hb-scorecard-round hb-scorecard-round-page">
<p class="hb-scorecard-stamp"><strong>M5 Max · Apple M5 Max (integrated GPU) · 128 GB · llama-cpp + mlx · 3 trials per task · 2026-10-25 · gezel 4f2c5491d9a1cbf6cdd645e708dd674a22615d15 · catalog 0.3.0</strong></p>
<p class="hb-scorecard-round-note">Complete five-model core comparison: 165 trials, 110 raw passes, 55 task failures; 158 artifact reviews and seven missing outputs. Bolt uses llama.cpp Metal; Gemma and Qwen use MLX. Four advisory rubrics remain separate. Bolt decode is request-derived; MLX output is an active-stream estimate and prefill is unavailable. Task observations include failed attempts and recovery, not admission probes. Known framework and evaluator defects remain in the frozen raw results; a gate pass does not certify artifact quality. See the October 25 M5 Max Bolt comparison JSON download for all judgments, performance coverage and 32 findings. Earlier old-build and interrupted trials are excluded.</p>
<div class="hb-scorecard-suite" data-hb-suite="core">
<h5 class="hb-scorecard-suite-title">General capability</h5>
<table><thead><tr><th>Model</th><th>Size</th><th>Tasks passed</th></tr></thead><tbody><tr data-hb-model="gemma4-e4b" data-hb-tier="small"><td>Gemma 4 (E4B, Q4)</td><td>small</td><td>26/33 (79%)</td></tr><tr data-hb-model="nemotron3.5-bolt-e4b" data-hb-tier="small"><td>Nemotron 3.5 Bolt (E4B, Q4)</td><td>small</td><td>26/33 (79%)</td></tr><tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4)</td><td>medium</td><td>23/33 (70%)</td></tr><tr data-hb-model="qwen3.5-9b" data-hb-tier="small"><td>Qwen 3.5 (9B, Q4)</td><td>small</td><td>21/33 (64%)</td></tr><tr data-hb-model="gemma4-e2b" data-hb-tier="tiny"><td>Gemma 4 (E2B, Q4)</td><td>tiny</td><td>14/33 (42%)</td></tr></tbody></table>
<h6>Task performance</h6>
<p>Task measurements include failures within each stated period or comparison subset. Measurement methods and exclusions are stated in period labels and round notes. Values are per-trial medians (minimum–maximum; sample count), not admission probes. Wall time includes tools. System RSS and GPU memory are separate peak measurements; do not add their medians. Periods remain separate because hardware performance can change.</p>
<table><thead><tr><th scope="col">Model</th><th scope="col">Period</th><th scope="col">Trials</th><th scope="col">Output (tok/s)</th><th scope="col">Prefill (tok/s)</th><th scope="col">Wall time (min)</th><th scope="col">Peak system RSS (GiB)</th><th scope="col">Peak GPU memory (GiB)</th></tr></thead><tbody>
<tr data-hb-model="gemma4-e4b" data-hb-tier="small"><td>Gemma 4 (E4B, Q4)</td><td>Frozen run · MLX sampled decode estimate</td><td>33</td><td>79.00 (55.00–103.00; n=33)</td><td>—</td><td>2.3 (0.5–19.4; n=33)</td><td>8.11 (7.98–17.15; n=33)</td><td>—</td></tr>
<tr data-hb-model="nemotron3.5-bolt-e4b" data-hb-tier="small"><td>Nemotron 3.5 Bolt (E4B, Q4)</td><td>Frozen run · llama.cpp request timings</td><td>33</td><td>72.00 (59.18–90.14; n=33)</td><td>2,513.96 (1,977.37–3,492.57; n=33)</td><td>2.6 (0.5–25.9; n=33)</td><td>10.04 (8.60–19.80; n=33)</td><td>—</td></tr>
<tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4)</td><td>Frozen run · MLX sampled decode estimate</td><td>33</td><td>38.00 (30.00–49.00; n=33)</td><td>—</td><td>4.2 (0.7–19.2; n=33)</td><td>10.67 (10.31–14.21; n=33)</td><td>—</td></tr>
<tr data-hb-model="qwen3.5-9b" data-hb-tier="small"><td>Qwen 3.5 (9B, Q4)</td><td>Frozen run · MLX sampled decode estimate</td><td>33</td><td>63.50 (30.00–87.00; n=30)</td><td>—</td><td>2.6 (0.7–44.5; n=33)</td><td>7.97 (7.20–20.80; n=33)</td><td>—</td></tr>
<tr data-hb-model="gemma4-e2b" data-hb-tier="tiny"><td>Gemma 4 (E2B, Q4)</td><td>Frozen run · MLX sampled decode estimate</td><td>33</td><td>115.50 (96.00–136.00; n=32)</td><td>—</td><td>1.7 (0.5–19.9; n=33)</td><td>7.11 (7.03–10.38; n=33)</td><td>—</td></tr>
</tbody></table>
<h6>Artifact reviews</h6>
<p>Advisory means out of 10, with eligible artifact counts. Rubrics are separate and are not a combined model score. A dash means no eligible artifact was scored under that rubric. Missing artifacts have no score; excluded reviews do not enter these means. Judge: the OpenAI Codex agent that ran the round (in-session review). Review identity and limitations are recorded with the evaluation.</p>
<table><thead><tr><th scope="col">Model</th><th scope="col">Period</th><th scope="col">Code quality</th><th scope="col">Data quality</th><th scope="col">Document quality</th><th scope="col">HTML quality</th><th scope="col">No artifact</th><th scope="col">Excluded reviews</th></tr></thead><tbody>
<tr data-hb-model="gemma4-e4b" data-hb-tier="small"><td>Gemma 4 (E4B, Q4)</td><td>Frozen run · MLX sampled decode estimate</td><td>4.84/10 (8 pieces)</td><td>4.50/10 (3 pieces)</td><td>4.02/10 (12 pieces)</td><td>2.56/10 (9 pieces)</td><td>1</td><td>0</td></tr>
<tr data-hb-model="nemotron3.5-bolt-e4b" data-hb-tier="small"><td>Nemotron 3.5 Bolt (E4B, Q4)</td><td>Frozen run · llama.cpp request timings</td><td>4.78/10 (9 pieces)</td><td>4.00/10 (3 pieces)</td><td>4.17/10 (12 pieces)</td><td>2.58/10 (6 pieces)</td><td>3</td><td>0</td></tr>
<tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4)</td><td>Frozen run · MLX sampled decode estimate</td><td>4.50/10 (9 pieces)</td><td>4.75/10 (2 pieces)</td><td>4.08/10 (12 pieces)</td><td>3.19/10 (9 pieces)</td><td>1</td><td>0</td></tr>
<tr data-hb-model="qwen3.5-9b" data-hb-tier="small"><td>Qwen 3.5 (9B, Q4)</td><td>Frozen run · MLX sampled decode estimate</td><td>3.67/10 (9 pieces)</td><td>2.63/10 (2 pieces)</td><td>4.06/10 (12 pieces)</td><td>2.78/10 (9 pieces)</td><td>1</td><td>0</td></tr>
<tr data-hb-model="gemma4-e2b" data-hb-tier="tiny"><td>Gemma 4 (E2B, Q4)</td><td>Frozen run · MLX sampled decode estimate</td><td>4.14/10 (9 pieces)</td><td>2.50/10 (3 pieces)</td><td>3.73/10 (12 pieces)</td><td>2.25/10 (8 pieces)</td><td>1</td><td>0</td></tr>
</tbody></table>
<p class="hb-scorecard-taskcount">Tasks in this set: 11.</p>
</div>
</div>

## October 25 M5 Max Bolt comparison and review data

The five-model core campaign completed all 165 trials: 11 scenarios, three
repeats, five models. Bolt and Gemma E4B each passed 26/33, Gemma E2B 14/33,
Gemma 12B 23/33 and Qwen 9B 21/33. Every trial was reviewed, including failed
outputs: 158 artifacts have advisory scores and seven missing outputs have
no invented score. HTML, code, data and document quality remain separate.

Download the [scorecard data](https://gezel.com/docs/assets/scorecards/2026-10-25-m5max-bolt-five/scorecard.json)
and [full report JSON with judging and performance](https://gezel.com/docs/assets/scorecards/2026-10-25-m5max-bolt-five/scorecard-details.json).
The full report preserves exact review axes and rationales, per-trial timings,
token coverage, fixed-score breakdowns, model identities and 32 documented
framework/evaluator findings. Some gate passes contained incomplete or broken
artifacts; some gates also rejected valid outputs. Raw verdicts remain
unchanged, and these findings do not establish when a defect was introduced.

Bolt ran on llama.cpp Metal using NVIDIA's October 23 revision; the other
models used MLX. The **Task performance** rows show task medians, ranges and
sample counts, including failed attempts and recovery. Bolt throughput is
request-derived; MLX decode is an active-stream estimate and MLX prefill is
unavailable. Token streams have incomplete coverage, first-write latency is
not completed-output latency, and process RSS is not GPU telemetry.
[Download notes and validation](https://gezel.com/docs/assets/scorecards/2026-10-25-m5max-bolt-five/README.md)
explain the frozen comparison, measurement limits and excluded older trials.
