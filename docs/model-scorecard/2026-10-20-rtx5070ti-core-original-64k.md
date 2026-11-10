# 2026-10-20 · rtx5070ti-core-original-64k

A focused rerun on AMD Ryzen AI 9 HX 370 w/ Radeon 890M · NVIDIA GeForce RTX 5070 Ti Laptop GPU · 31 GB: 7 models across 1 task set. Every round is listed in the [model scorecard](https://gezel.com/docs/model-scorecard/), with its results side by side in one table.

<div class="hb-scorecard-round hb-scorecard-round-page">
<p class="hb-scorecard-stamp"><strong>AMD Ryzen AI 9 HX 370 w/ Radeon 890M · NVIDIA GeForce RTX 5070 Ti Laptop GPU · 31 GB · llama-cpp · focused subset · 3 trials per task · 2026-10-20 · gezel dee6f3e3aea8 · catalog 0.2.5</strong></p>
<p class="hb-scorecard-round-note">Original runtime, 65,536 tokens and one slot. Seven scenarios ran once per model (49 trials); the remaining requested cells are in the separate continuation. The runtime floor raised the two 27B models from a requested 32K to an observed 64K. Counts only; this is not a full-suite ranking. Runtime content: 399efbfea8a2. Task performance and advisory reviews appear below by journal and rubric; exact trial scores, axes and evidence are in the October Windows data download.</p>
<p class="hb-scorecard-memory-note">System memory counts this computer's own memory only. What the model keeps on the separate graphics card isn't included.</p>
<div class="hb-scorecard-suite" data-hb-suite="core">
<h5 class="hb-scorecard-suite-title">General capability</h5>
<table><thead><tr><th>Model</th><th>Size</th><th>Tasks passed</th><th>Context</th><th>System memory</th></tr></thead><tbody><tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4) (kv: f16)</td><td>12B</td><td>6/7 (some tasks run once — count not rate)</td><td>64K</td><td>15.5 GB</td></tr><tr data-hb-model="underdog-saluki-27b-iq2-mix" data-hb-tier="medium"><td>Underdog Saluki 1.0 (27B, IQ2 mix) (kv: f16)</td><td>27B</td><td>6/7 (some tasks run once — count not rate)</td><td>64K</td><td>13.2 GB</td></tr><tr data-hb-model="gemma4-e4b" data-hb-tier="small"><td>Gemma 4 (E4B, Q4) (kv: f16)</td><td>8B</td><td>5/7 (some tasks run once — count not rate)</td><td>64K</td><td>6.1 GB</td></tr><tr data-hb-model="ornith1.5-9b" data-hb-tier="small"><td>Ornith 1.5 (9B, Q4) (kv: f16)</td><td>9B</td><td>5/7 (some tasks run once — count not rate)</td><td>64K</td><td>9.1 GB</td></tr><tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>Qwen 3.8 (27B, Q2) (kv: f16)</td><td>27B</td><td>5/7 (some tasks run once — count not rate)</td><td>64K</td><td>15.3 GB</td></tr><tr data-hb-model="qwen3.5-9b" data-hb-tier="small"><td>Qwen 3.5 (9B, Q4) (kv: f16)</td><td>9B</td><td>4/7 (some tasks run once — count not rate)</td><td>64K</td><td>13.0 GB</td></tr><tr data-hb-model="qwen3.5-4b" data-hb-tier="tiny"><td>Qwen 3.5 (4B, Q4) (kv: f16)</td><td>4B</td><td>3/7 (some tasks run once — count not rate)</td><td>64K</td><td>10.0 GB</td></tr></tbody></table>
<h6>Task performance</h6>
<p>Task measurements include failures within each stated period or comparison subset. Measurement methods and exclusions are stated in period labels and round notes. Values are per-trial medians (minimum–maximum; sample count), not admission probes. Wall time includes tools. System RSS and GPU memory are separate peak measurements; do not add their medians. Periods remain separate because hardware performance can change.</p>
<table><thead><tr><th scope="col">Model</th><th scope="col">Period</th><th scope="col">Trials</th><th scope="col">Output (tok/s)</th><th scope="col">Prefill (tok/s)</th><th scope="col">Wall time (min)</th><th scope="col">Peak system RSS (GiB)</th><th scope="col">Peak GPU memory (GiB)</th></tr></thead><tbody>
<tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4)</td><td>A · 10-20 02:24–10-20 14:02 UTC</td><td>7</td><td>122.18 (114.61–140.11; n=7)</td><td>1,911.42 (1,679.56–2,047.18; n=7)</td><td>1.9 (0.7–7.5; n=7)</td><td>15.47 (11.24–20.11; n=7)</td><td>8.42 (8.42–8.42; n=7)</td></tr>
<tr data-hb-model="underdog-saluki-27b-iq2-mix" data-hb-tier="medium"><td>Underdog Saluki 1.0 (27B, IQ2 mix)</td><td>A · 10-20 03:40–10-20 12:53 UTC</td><td>7</td><td>12.89 (12.31–13.09; n=7)</td><td>669.43 (548.21–691.39; n=7)</td><td>6.4 (2.4–55.3; n=7)</td><td>13.19 (9.62–18.15; n=7)</td><td>10.38 (10.38–10.38; n=7)</td></tr>
<tr data-hb-model="gemma4-e4b" data-hb-tier="small"><td>Gemma 4 (E4B, Q4)</td><td>A · 10-20 02:27–10-20 14:06 UTC</td><td>7</td><td>204.29 (176.93–218.54; n=7)</td><td>4,444.35 (4,317.25–4,759.98; n=7)</td><td>2.1 (0.6–3.0; n=7)</td><td>6.06 (4.49–7.31; n=7)</td><td>3.96 (3.96–6.68; n=7)</td></tr>
<tr data-hb-model="ornith1.5-9b" data-hb-tier="small"><td>Ornith 1.5 (9B, Q4)</td><td>A · 10-20 03:31–10-20 16:10 UTC</td><td>7</td><td>57.20 (52.70–60.94; n=7)</td><td>2,664.78 (2,246.34–2,762.87; n=7)</td><td>3.6 (2.0–60.7; n=7)</td><td>9.06 (6.59–15.06; n=7)</td><td>7.08 (7.08–7.09; n=7)</td></tr>
<tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>Qwen 3.8 (27B, Q2)</td><td>A · 10-20 03:48–10-20 13:54 UTC</td><td>7</td><td>6.26 (4.85–7.80; n=7)</td><td>482.18 (417.44–514.28; n=7)</td><td>10.6 (3.6–59.3; n=7)</td><td>15.30 (11.63–18.29; n=7)</td><td>11.33 (11.33–11.33; n=7)</td></tr>
<tr data-hb-model="qwen3.5-9b" data-hb-tier="small"><td>Qwen 3.5 (9B, Q4)</td><td>A · 10-20 02:30–10-20 14:14 UTC</td><td>7</td><td>83.87 (65.36–95.53; n=7)</td><td>2,428.44 (2,291.21–2,635.94; n=7)</td><td>2.9 (1.2–6.9; n=7)</td><td>13.02 (7.30–14.74; n=7)</td><td>7.91 (7.91–7.91; n=7)</td></tr>
<tr data-hb-model="qwen3.5-4b" data-hb-tier="tiny"><td>Qwen 3.5 (4B, Q4)</td><td>A · 10-20 03:36–10-20 16:17 UTC</td><td>7</td><td>126.21 (95.45–143.13; n=7)</td><td>3,645.02 (3,360.10–3,991.95; n=7)</td><td>2.2 (1.1–9.2; n=7)</td><td>9.99 (5.10–14.87; n=7)</td><td>5.59 (5.59–5.59; n=7)</td></tr>
</tbody></table>
<h6>Artifact reviews</h6>
<p>Advisory means out of 10, with eligible artifact counts. Rubrics are separate and are not a combined model score. A dash means no eligible artifact was scored under that rubric. Missing artifacts have no score; excluded reviews do not enter these means. Judge: the OpenAI Codex agent that ran the round (in-session review). Review identity and limitations are recorded with the evaluation.</p>
<table><thead><tr><th scope="col">Model</th><th scope="col">Period</th><th scope="col">Code quality</th><th scope="col">Data quality</th><th scope="col">HTML quality</th><th scope="col">No artifact</th><th scope="col">Excluded reviews</th></tr></thead><tbody>
<tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4)</td><td>A · 10-20 02:24–10-20 14:02 UTC</td><td>4.50/10 (3 pieces)</td><td>3.25/10 (1 pieces)</td><td>4.00/10 (3 pieces)</td><td>0</td><td>0</td></tr>
<tr data-hb-model="underdog-saluki-27b-iq2-mix" data-hb-tier="medium"><td>Underdog Saluki 1.0 (27B, IQ2 mix)</td><td>A · 10-20 03:40–10-20 12:53 UTC</td><td>4.67/10 (3 pieces)</td><td>4.25/10 (1 pieces)</td><td>4.25/10 (2 pieces)</td><td>0</td><td>1</td></tr>
<tr data-hb-model="gemma4-e4b" data-hb-tier="small"><td>Gemma 4 (E4B, Q4)</td><td>A · 10-20 02:27–10-20 14:06 UTC</td><td>3.75/10 (3 pieces)</td><td>2.75/10 (1 pieces)</td><td>4.25/10 (3 pieces)</td><td>0</td><td>0</td></tr>
<tr data-hb-model="ornith1.5-9b" data-hb-tier="small"><td>Ornith 1.5 (9B, Q4)</td><td>A · 10-20 03:31–10-20 16:10 UTC</td><td>4.33/10 (3 pieces)</td><td>2.75/10 (1 pieces)</td><td>4.42/10 (3 pieces)</td><td>0</td><td>0</td></tr>
<tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>Qwen 3.8 (27B, Q2)</td><td>A · 10-20 03:48–10-20 13:54 UTC</td><td>5.08/10 (3 pieces)</td><td>4.75/10 (1 pieces)</td><td>4.50/10 (3 pieces)</td><td>0</td><td>0</td></tr>
<tr data-hb-model="qwen3.5-9b" data-hb-tier="small"><td>Qwen 3.5 (9B, Q4)</td><td>A · 10-20 02:30–10-20 14:14 UTC</td><td>4.08/10 (3 pieces)</td><td>4.25/10 (1 pieces)</td><td>3.50/10 (3 pieces)</td><td>0</td><td>0</td></tr>
<tr data-hb-model="qwen3.5-4b" data-hb-tier="tiny"><td>Qwen 3.5 (4B, Q4)</td><td>A · 10-20 03:36–10-20 16:17 UTC</td><td>3.25/10 (3 pieces)</td><td>3.25/10 (1 pieces)</td><td>3.25/10 (3 pieces)</td><td>0</td><td>0</td></tr>
</tbody></table>
<p class="hb-scorecard-taskcount">Tasks in this set: 7.</p>
</div>
</div>

## October 2026 Windows results and review data

This note also covers [2026-10-20 · rtx5070ti-core-continuation-64k](../2026-10-20-rtx5070ti-core-continuation-64k/), [2026-10-20 · rtx5070ti-nanbeige-core-32k](../2026-10-20-rtx5070ti-nanbeige-core-32k/).

The eight-model core evaluation completed all 264 requested attempts on an
RTX 5070 Ti laptop: 182 passed, 70 failed their tasks, and 12 were excluded
after exceeding Nanbeige's 32K context. These were context failures, not GPU
out-of-memory failures. Every attempt has been reviewed.

The tables preserve three runtime rounds: 49 original trials, 182 trials
after a runtime correction, and the separate 33-trial Nanbeige 32K rerun.
The original and continuation rounds show counts because neither alone has
three repeats of every task. Nanbeige's full-suite score is withheld because
some tasks have no attributable results. Its 12 passes, nine model failures
and 12 infrastructure exclusions remain available in the data.

Download the [scorecard data](https://gezel.com/docs/assets/scorecards/2026-10-19-windows-small-model-core/scorecard.json)
and [full judging and performance data](https://gezel.com/docs/assets/scorecards/2026-10-19-windows-small-model-core/scorecard-details.json).
The companion preserves all 254 artifact reviews: 247 eligible reviews,
six infrastructure diagnostics and one excluded review that exceeded its
input limit. Ten attempts produced no artifact to score. The four task
rubrics stay separate: the **Artifact reviews** tables show HTML, code, data
and document quality means with eligible artifact counts, plus counts for
missing artifacts and excluded reviews. These were unblinded reviews by
the OpenAI Codex agent that ran the round, in the same session; no combined
quality score is calculated.

The **Task performance** tables show output and prefill speed, wall time,
peak system RSS and peak GPU memory as per-trial medians with ranges and
sample counts. They include available observations from all attempts,
including failures. These engine-log measurements are separate from
admission probes. GPU performance changed during the run, so each journal
keeps its own measurement period, including Nanbeige's slower and later
faster periods. [Download notes](https://gezel.com/docs/assets/scorecards/2026-10-19-windows-small-model-core/README.md)
explain provenance, exclusions, memory headroom and validation.
