# 2026-10-20 · rtx5070ti-core-continuation-64k

A model scorecard round on AMD Ryzen AI 9 HX 370 w/ Radeon 890M · NVIDIA GeForce RTX 5070 Ti Laptop GPU · 31 GB: 7 models across 1 task set. Every round is listed in the [model scorecard](https://gezel.com/docs/model-scorecard/), with its results side by side in one table.

<div class="hb-scorecard-round hb-scorecard-round-page">
<p class="hb-scorecard-stamp"><strong>AMD Ryzen AI 9 HX 370 w/ Radeon 890M · NVIDIA GeForce RTX 5070 Ti Laptop GPU · 31 GB · llama-cpp · 3 trials per task · 2026-10-20 · gezel dee6f3e3aea8 · catalog 0.2.5</strong></p>
<p class="hb-scorecard-round-note">Continuation after the Nanbeige context-floor correction, at unchanged observed 65,536 tokens and one slot for these seven models. All 11 core scenarios are represented: two repeats of the first seven and three of the last four (26 trials per model). The 49 original-runtime trials remain in their own round. Counts only; do not pool builds into a three-repeat rate. Sequential laptop runs experienced changing hardware performance. Runtime content: c01c89e726cb. Task performance and advisory reviews appear below by journal and rubric; exact trial scores, axes and evidence are in the October Windows data download.</p>
<p class="hb-scorecard-memory-note">System memory counts this computer's own memory only. What the model keeps on the separate graphics card isn't included.</p>
<div class="hb-scorecard-suite" data-hb-suite="core">
<h5 class="hb-scorecard-suite-title">General capability</h5>
<table><thead><tr><th>Model</th><th>Size</th><th>Tasks passed</th><th>Context</th><th>System memory</th></tr></thead><tbody><tr data-hb-model="underdog-saluki-27b-iq2-mix" data-hb-tier="medium"><td>Underdog Saluki 1.0 (27B, IQ2 mix) (kv: f16)</td><td>27B</td><td>23/26 (some tasks run 2× — count not rate)</td><td>64K</td><td>13.3 GB</td></tr><tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4) (kv: f16)</td><td>12B</td><td>21/26 (some tasks run 2× — count not rate)</td><td>64K</td><td>16.1 GB</td></tr><tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>Qwen 3.8 (27B, Q2) (kv: f16)</td><td>27B</td><td>21/26 (some tasks run 2× — count not rate)</td><td>64K</td><td>15.4 GB</td></tr><tr data-hb-model="gemma4-e4b" data-hb-tier="small"><td>Gemma 4 (E4B, Q4) (kv: f16)</td><td>8B</td><td>20/26 (some tasks run 2× — count not rate)</td><td>64K</td><td>6.2 GB</td></tr><tr data-hb-model="qwen3.5-9b" data-hb-tier="small"><td>Qwen 3.5 (9B, Q4) (kv: f16)</td><td>9B</td><td>20/26 (some tasks run 2× — count not rate)</td><td>64K</td><td>11.1 GB</td></tr><tr data-hb-model="ornith1.5-9b" data-hb-tier="small"><td>Ornith 1.5 (9B, Q4) (kv: f16)</td><td>9B</td><td>16/26 (some tasks run 2× — count not rate)</td><td>64K</td><td>9.7 GB</td></tr><tr data-hb-model="qwen3.5-4b" data-hb-tier="tiny"><td>Qwen 3.5 (4B, Q4) (kv: f16)</td><td>4B</td><td>15/26 (some tasks run 2× — count not rate)</td><td>64K</td><td>8.0 GB</td></tr></tbody></table>
<h6>Task performance</h6>
<p>Task measurements include failures within each stated period or comparison subset. Measurement methods and exclusions are stated in period labels and round notes. Values are per-trial medians (minimum–maximum; sample count), not admission probes. Wall time includes tools. System RSS and GPU memory are separate peak measurements; do not add their medians. Periods remain separate because hardware performance can change.</p>
<table><thead><tr><th scope="col">Model</th><th scope="col">Period</th><th scope="col">Trials</th><th scope="col">Output (tok/s)</th><th scope="col">Prefill (tok/s)</th><th scope="col">Wall time (min)</th><th scope="col">Peak system RSS (GiB)</th><th scope="col">Peak GPU memory (GiB)</th></tr></thead><tbody>
<tr data-hb-model="underdog-saluki-27b-iq2-mix" data-hb-tier="medium"><td>Underdog Saluki 1.0 (27B, IQ2 mix)</td><td>B · 10-20 18:55–10-22 05:00 UTC</td><td>26</td><td>12.59 (2.89–13.48; n=26)</td><td>657.32 (140.59–698.64; n=26)</td><td>6.4 (1.7–46.5; n=26)</td><td>13.31 (9.50–18.85; n=26)</td><td>10.46 (10.38–10.47; n=26)</td></tr>
<tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4)</td><td>B · 10-20 18:24–10-22 05:27 UTC</td><td>26</td><td>120.70 (11.11–155.67; n=26)</td><td>1,830.85 (396.53–2,024.00; n=26)</td><td>2.0 (0.6–53.5; n=26)</td><td>16.06 (10.42–18.57; n=26)</td><td>8.50 (8.41–8.50; n=26)</td></tr>
<tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>Qwen 3.8 (27B, Q2)</td><td>B · 10-20 19:09–10-22 05:24 UTC</td><td>26</td><td>5.58 (3.24–7.94; n=26)</td><td>472.99 (114.26–510.99; n=26)</td><td>15.0 (3.6–103.1; n=26)</td><td>15.44 (11.49–18.36; n=26)</td><td>11.41 (11.33–11.42; n=26)</td></tr>
<tr data-hb-model="gemma4-e4b" data-hb-tier="small"><td>Gemma 4 (E4B, Q4)</td><td>B · 10-20 18:31–10-22 05:30 UTC</td><td>26</td><td>191.39 (19.51–221.68; n=26)</td><td>4,483.23 (641.15–4,738.97; n=26)</td><td>1.8 (0.5–190.0; n=26)</td><td>6.15 (4.36–13.93; n=26)</td><td>4.04 (3.96–6.71; n=26)</td></tr>
<tr data-hb-model="qwen3.5-9b" data-hb-tier="small"><td>Qwen 3.5 (9B, Q4)</td><td>B · 10-20 18:37–10-22 05:33 UTC</td><td>26</td><td>77.25 (7.50–95.94; n=26)</td><td>2,468.40 (374.34–2,608.23; n=26)</td><td>2.5 (0.8–21.6; n=26)</td><td>11.06 (7.18–16.85; n=26)</td><td>7.99 (7.91–7.99; n=26)</td></tr>
<tr data-hb-model="ornith1.5-9b" data-hb-tier="small"><td>Ornith 1.5 (9B, Q4)</td><td>B · 10-20 18:41–10-22 05:39 UTC</td><td>26</td><td>56.60 (4.75–64.59; n=26)</td><td>2,618.56 (484.86–2,803.54; n=26)</td><td>5.0 (1.0–30.0; n=26)</td><td>9.74 (6.50–14.60; n=26)</td><td>7.16 (7.08–7.17; n=26)</td></tr>
<tr data-hb-model="qwen3.5-4b" data-hb-tier="tiny"><td>Qwen 3.5 (4B, Q4)</td><td>B · 10-20 18:50–10-22 05:40 UTC</td><td>26</td><td>113.07 (12.63–145.17; n=26)</td><td>3,745.83 (424.39–4,056.35; n=26)</td><td>1.7 (0.7–55.3; n=26)</td><td>8.05 (4.83–15.80; n=26)</td><td>5.67 (5.59–5.67; n=26)</td></tr>
</tbody></table>
<h6>Artifact reviews</h6>
<p>Advisory means out of 10, with eligible artifact counts. Rubrics are separate and are not a combined model score. A dash means no eligible artifact was scored under that rubric. Missing artifacts have no score; excluded reviews do not enter these means. Judge: the OpenAI Codex agent that ran the round (in-session review). Review identity and limitations are recorded with the evaluation.</p>
<table><thead><tr><th scope="col">Model</th><th scope="col">Period</th><th scope="col">Code quality</th><th scope="col">Data quality</th><th scope="col">Document quality</th><th scope="col">HTML quality</th><th scope="col">No artifact</th><th scope="col">Excluded reviews</th></tr></thead><tbody>
<tr data-hb-model="underdog-saluki-27b-iq2-mix" data-hb-tier="medium"><td>Underdog Saluki 1.0 (27B, IQ2 mix)</td><td>B · 10-20 18:55–10-22 05:00 UTC</td><td>4.67/10 (6 pieces)</td><td>4.50/10 (2 pieces)</td><td>4.85/10 (12 pieces)</td><td>3.46/10 (6 pieces)</td><td>0</td><td>0</td></tr>
<tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4)</td><td>B · 10-20 18:24–10-22 05:27 UTC</td><td>4.50/10 (5 pieces)</td><td>3.00/10 (1 pieces)</td><td>4.48/10 (12 pieces)</td><td>3.54/10 (6 pieces)</td><td>2</td><td>0</td></tr>
<tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>Qwen 3.8 (27B, Q2)</td><td>B · 10-20 19:09–10-22 05:24 UTC</td><td>5.00/10 (6 pieces)</td><td>4.38/10 (2 pieces)</td><td>4.73/10 (12 pieces)</td><td>4.13/10 (6 pieces)</td><td>0</td><td>0</td></tr>
<tr data-hb-model="gemma4-e4b" data-hb-tier="small"><td>Gemma 4 (E4B, Q4)</td><td>B · 10-20 18:31–10-22 05:30 UTC</td><td>3.88/10 (6 pieces)</td><td>2.13/10 (2 pieces)</td><td>4.08/10 (12 pieces)</td><td>3.33/10 (6 pieces)</td><td>0</td><td>0</td></tr>
<tr data-hb-model="qwen3.5-9b" data-hb-tier="small"><td>Qwen 3.5 (9B, Q4)</td><td>B · 10-20 18:37–10-22 05:33 UTC</td><td>4.54/10 (6 pieces)</td><td>3.63/10 (2 pieces)</td><td>4.46/10 (12 pieces)</td><td>2.75/10 (6 pieces)</td><td>0</td><td>0</td></tr>
<tr data-hb-model="ornith1.5-9b" data-hb-tier="small"><td>Ornith 1.5 (9B, Q4)</td><td>B · 10-20 18:41–10-22 05:39 UTC</td><td>3.75/10 (5 pieces)</td><td>4.75/10 (1 pieces)</td><td>4.46/10 (12 pieces)</td><td>3.75/10 (6 pieces)</td><td>2</td><td>0</td></tr>
<tr data-hb-model="qwen3.5-4b" data-hb-tier="tiny"><td>Qwen 3.5 (4B, Q4)</td><td>B · 10-20 18:50–10-22 05:40 UTC</td><td>4.08/10 (6 pieces)</td><td>3.00/10 (2 pieces)</td><td>4.13/10 (12 pieces)</td><td>3.33/10 (6 pieces)</td><td>0</td><td>0</td></tr>
</tbody></table>
<p class="hb-scorecard-taskcount">Tasks in this set: 11.</p>
</div>
</div>

## October 2026 Windows results and review data

This note also covers [2026-10-20 · rtx5070ti-core-original-64k](../2026-10-20-rtx5070ti-core-original-64k/), [2026-10-20 · rtx5070ti-nanbeige-core-32k](../2026-10-20-rtx5070ti-nanbeige-core-32k/).

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
