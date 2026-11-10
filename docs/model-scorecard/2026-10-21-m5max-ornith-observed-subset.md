# 2026-10-21 · Mac · Apple M5 Max

A focused rerun on M5 Max · Apple M5 Max (integrated GPU) · 128 GB: 1 model across 4 task sets. Every round is listed in the [model scorecard](https://gezel.com/docs/model-scorecard/), with its results side by side in one table.

<div class="hb-scorecard-round hb-scorecard-round-page">
<p class="hb-scorecard-stamp"><strong>M5 Max · Apple M5 Max (integrated GPU) · 128 GB · llama-cpp · focused subset · 3 trials per task · 2026-10-21 · gezel bc4af5dc2649 · catalog 0.2.3</strong></p>
<p class="hb-scorecard-round-note">PARTIAL OBSERVATIONS: Ornith recorded 85 of 129 planned trials; 84 stable-identity observations are included here. The final drift-flagged failure is retained in the 601-observation companion and omitted from these comparison cells. No third repetition was run; report counts, not rates. Nemotron and MiniCPM were not run. Four suites, 43 suite entries, three requested repetitions. Fixed classifications and scores are unchanged. No pooled qualitative judge score: see scorecard-details.json for exact per-task rubrics and 248 artifact reviews. Performance columns are arithmetic means of short admission probes (each under 256 decode tokens), not sustained in-trial speeds; prefer the companion in-trial distributions for throughput comparisons. Six frozen infrastructure exclusions remain recorded across the package. Models ran sequentially on one device, with model-specific frozen tuning.</p>
<div class="hb-scorecard-suite" data-hb-suite="core">
<h5 class="hb-scorecard-suite-title">General capability</h5>
<table><thead><tr><th>Model</th><th>Size</th><th>Tasks passed</th><th>Performance</th><th>Context</th><th>Memory used</th></tr></thead><tbody><tr data-hb-model="ornith1.5-35b-a3b" data-hb-tier="medium"><td>Ornith 1.5 (35B-A3B, Q4) (kv: f16)</td><td>35B-A3B</td><td>21/22 (some tasks run 2× — count not rate)</td><td>190.6 tok/s output<br />2,619 tok/s prefill</td><td>256K</td><td>28.7 GB</td></tr></tbody></table>
<p class="hb-scorecard-taskcount">Tasks in this set: 11.</p>
</div>
<div class="hb-scorecard-suite" data-hb-suite="productivity">
<h5 class="hb-scorecard-suite-title">Office and knowledge work</h5>
<table><thead><tr><th>Model</th><th>Size</th><th>Tasks passed</th><th>Performance</th><th>Context</th><th>Memory used</th></tr></thead><tbody><tr data-hb-model="ornith1.5-35b-a3b" data-hb-tier="medium"><td>Ornith 1.5 (35B-A3B, Q4) (kv: f16)</td><td>35B-A3B</td><td>23/26 (some tasks run 2× — count not rate)</td><td>190.6 tok/s output<br />2,619 tok/s prefill</td><td>256K</td><td>32.3 GB</td></tr></tbody></table>
<p class="hb-scorecard-taskcount">Tasks in this set: 13.</p>
</div>
<div class="hb-scorecard-suite" data-hb-suite="developer">
<h5 class="hb-scorecard-suite-title">Engineering work</h5>
<table><thead><tr><th>Model</th><th>Size</th><th>Tasks passed</th><th>Performance</th><th>Context</th><th>Memory used</th></tr></thead><tbody><tr data-hb-model="ornith1.5-35b-a3b" data-hb-tier="medium"><td>Ornith 1.5 (35B-A3B, Q4) (kv: f16)</td><td>35B-A3B</td><td>18/20 (some tasks run 2× — count not rate)</td><td>190.6 tok/s output<br />2,619 tok/s prefill</td><td>256K</td><td>32.5 GB</td></tr></tbody></table>
<p class="hb-scorecard-taskcount">Tasks in this set: 10.</p>
</div>
<div class="hb-scorecard-suite" data-hb-suite="complex-work">
<h5 class="hb-scorecard-suite-title">Complex workflows</h5>
<p class="hb-scorecard-withheld">Not published — some tasks could not be measured on this round: Ornith 1.5 (35B-A3B, Q4) (1 task(s) unmeasured)</p>
<p class="hb-scorecard-taskcount">Tasks in this set: 9.</p>
</div>
</div>

## October 2026 Mac results and review data

This note also covers [2026-10-16 · Mac · Apple M5 Max](../2026-10-16-m5max-local-seven-completed-arms/).

The Apple M5 Max campaign closed at 601 recorded attempts: 476 passed,
119 failed their tasks, and six were excluded for infrastructure problems.
LFM 2.5, Qwen 3.6, Qwen 3.8 and BTL4 each completed 129 attempts. Ornith
completed 85 of 129 planned attempts; Nemotron and MiniCPM were not run.

The tables retain 600 attempts in two separate rounds: four complete model
arms and the partial Ornith round. One additional failed Ornith attempt had
comparison-identity drift and remains in the evidence download with its
original classification, outside the comparison tables.

The [scorecard data](https://gezel.com/docs/assets/scorecards/2026-10-16-m5max-local-seven/scorecard.json)
and [full judging and performance data](https://gezel.com/docs/assets/scorecards/2026-10-16-m5max-local-seven/scorecard-details.json)
are available as JSON. The companion includes all 601 observations, 248
artifact reviews, each task's rubric and sample counts, and per-trial speed
and memory measurements. Four declared artifacts were missing, 14 reviews
had a mismatched rubric, and 335 tasks had no applicable declared rubric.
No review is pending. Different task rubrics are kept separate, so this
round has no combined quality score in the tables.

All nine admission probes generated fewer than 256 output tokens; Ornith's
single probe generated 84. Treat the table's speeds as preliminary. The
companion also records engine-derived speeds during the actual tasks and
their sample counts. [Download notes and validation details](https://gezel.com/docs/assets/scorecards/2026-10-16-m5max-local-seven/README.md)
explain the populations and caveats.
