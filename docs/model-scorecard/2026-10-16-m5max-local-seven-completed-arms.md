# 2026-10-16 · Mac · Apple M5 Max

A model scorecard round on M5 Max · Apple M5 Max (integrated GPU) · 128 GB: 4 models across 4 task sets. Every round is listed in the [model scorecard](https://gezel.com/docs/model-scorecard/), with its results side by side in one table.

<div class="hb-scorecard-round hb-scorecard-round-page">
<p class="hb-scorecard-stamp"><strong>M5 Max · Apple M5 Max (integrated GPU) · 128 GB · llama-cpp · 3 trials per task · 2026-10-16 · gezel bc4af5dc2649 · catalog 0.2.3</strong></p>
<p class="hb-scorecard-round-note">Completed arms only: LFM 2.5, Qwen 3.6, Qwen 3.8 and BTL4 each recorded all 129 trials (516 observations). Ornith is retained in a separate partial round, not mixed into this headline table. Four suites, 43 suite entries, three requested repetitions. Fixed classifications and scores are unchanged. No pooled qualitative judge score: see scorecard-details.json for exact per-task rubrics and 248 artifact reviews. Performance columns are arithmetic means of short admission probes (each under 256 decode tokens), not sustained in-trial speeds; prefer the companion in-trial distributions for throughput comparisons. Six frozen infrastructure exclusions remain recorded across the package. Models ran sequentially on one device, with model-specific frozen tuning.</p>
<div class="hb-scorecard-suite" data-hb-suite="core">
<h5 class="hb-scorecard-suite-title">General capability</h5>
<table><thead><tr><th>Model</th><th>Size</th><th>Tasks passed</th><th>Performance</th><th>Context</th><th>Memory used</th></tr></thead><tbody><tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>Qwen 3.8 (27B, Q4) (kv: f16)</td><td>27B</td><td>33/33 (100%)</td><td>36.7 tok/s output<br />501 tok/s prefill</td><td>256K</td><td>40.4 GB</td></tr><tr data-hb-model="qwen3.6-35b-a3b" data-hb-tier="medium"><td>Qwen 3.6 (35B-A3B, Q4) (kv: f16)</td><td>35B-A3B</td><td>31/33 (94%)</td><td>133.9 tok/s output<br />1,441 tok/s prefill</td><td>256K</td><td>29.6 GB</td></tr><tr data-hb-model="btl4-35b" data-hb-tier="medium"><td>BTL-4 (35B-A3B, Q4) (kv: f16)</td><td>35B-A3B</td><td>28/33 (85%)</td><td>119.4 tok/s output<br />2,828 tok/s prefill</td><td>256K</td><td>28.1 GB</td></tr><tr data-hb-model="lfm2.5-24b-a2b" data-hb-tier="medium"><td>LFM2.5 (24B-A2B, Q4) (kv: f16)</td><td>24B-A2B</td><td>24/32 (75%)</td><td>182.6 tok/s output<br />4,711 tok/s prefill</td><td>128K</td><td>17.7 GB</td></tr></tbody></table>
<p class="hb-scorecard-taskcount">Tasks in this set: 11.</p>
</div>
<div class="hb-scorecard-suite" data-hb-suite="productivity">
<h5 class="hb-scorecard-suite-title">Office and knowledge work</h5>
<table><thead><tr><th>Model</th><th>Size</th><th>Tasks passed</th><th>Performance</th><th>Context</th><th>Memory used</th></tr></thead><tbody><tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>Qwen 3.8 (27B, Q4) (kv: f16)</td><td>27B</td><td>37/39 (95%)</td><td>36.7 tok/s output<br />501 tok/s prefill</td><td>256K</td><td>43.7 GB</td></tr><tr data-hb-model="qwen3.6-35b-a3b" data-hb-tier="medium"><td>Qwen 3.6 (35B-A3B, Q4) (kv: f16)</td><td>35B-A3B</td><td>35/39 (90%)</td><td>133.9 tok/s output<br />1,441 tok/s prefill</td><td>256K</td><td>32.7 GB</td></tr><tr data-hb-model="btl4-35b" data-hb-tier="medium"><td>BTL-4 (35B-A3B, Q4) (kv: f16)</td><td>35B-A3B</td><td>31/39 (79%)</td><td>119.4 tok/s output<br />2,828 tok/s prefill</td><td>256K</td><td>30.0 GB</td></tr><tr data-hb-model="lfm2.5-24b-a2b" data-hb-tier="medium"><td>LFM2.5 (24B-A2B, Q4) (kv: f16)</td><td>24B-A2B</td><td>28/39 (72%)</td><td>182.6 tok/s output<br />4,711 tok/s prefill</td><td>128K</td><td>18.1 GB</td></tr></tbody></table>
<p class="hb-scorecard-taskcount">Tasks in this set: 13.</p>
</div>
<div class="hb-scorecard-suite" data-hb-suite="developer">
<h5 class="hb-scorecard-suite-title">Engineering work</h5>
<table><thead><tr><th>Model</th><th>Size</th><th>Tasks passed</th><th>Performance</th><th>Context</th><th>Memory used</th></tr></thead><tbody><tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>Qwen 3.8 (27B, Q4) (kv: f16)</td><td>27B</td><td>27/30 (90%)</td><td>36.7 tok/s output<br />501 tok/s prefill</td><td>256K</td><td>45.4 GB</td></tr><tr data-hb-model="qwen3.6-35b-a3b" data-hb-tier="medium"><td>Qwen 3.6 (35B-A3B, Q4) (kv: f16)</td><td>35B-A3B</td><td>26/30 (87%)</td><td>133.9 tok/s output<br />1,441 tok/s prefill</td><td>256K</td><td>34.0 GB</td></tr><tr data-hb-model="btl4-35b" data-hb-tier="medium"><td>BTL-4 (35B-A3B, Q4) (kv: f16)</td><td>35B-A3B</td><td>25/30 (83%)</td><td>119.4 tok/s output<br />2,828 tok/s prefill</td><td>256K</td><td>29.3 GB</td></tr><tr data-hb-model="lfm2.5-24b-a2b" data-hb-tier="medium"><td>LFM2.5 (24B-A2B, Q4) (kv: f16)</td><td>24B-A2B</td><td>18/30 (60%)</td><td>182.6 tok/s output<br />4,711 tok/s prefill</td><td>128K</td><td>19.1 GB</td></tr></tbody></table>
<p class="hb-scorecard-taskcount">Tasks in this set: 10.</p>
</div>
<div class="hb-scorecard-suite" data-hb-suite="complex-work">
<h5 class="hb-scorecard-suite-title">Complex workflows</h5>
<table><thead><tr><th>Model</th><th>Size</th><th>Tasks passed</th><th>Performance</th><th>Context</th><th>Memory used</th></tr></thead><tbody><tr data-hb-model="qwen3.6-35b-a3b" data-hb-tier="medium"><td>Qwen 3.6 (35B-A3B, Q4) (kv: f16)</td><td>35B-A3B</td><td>19/25 (76%)</td><td>133.9 tok/s output<br />1,441 tok/s prefill</td><td>256K</td><td>38.0 GB</td></tr><tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>Qwen 3.8 (27B, Q4) (kv: f16)</td><td>27B</td><td>19/27 (70%)</td><td>36.7 tok/s output<br />501 tok/s prefill</td><td>256K</td><td>47.0 GB</td></tr><tr data-hb-model="btl4-35b" data-hb-tier="medium"><td>BTL-4 (35B-A3B, Q4) (kv: f16)</td><td>35B-A3B</td><td>14/26 (54%)</td><td>119.4 tok/s output<br />2,828 tok/s prefill</td><td>256K</td><td>33.5 GB</td></tr><tr data-hb-model="lfm2.5-24b-a2b" data-hb-tier="medium"><td>LFM2.5 (24B-A2B, Q4) (kv: f16)</td><td>24B-A2B</td><td>7/27 (26%)</td><td>182.6 tok/s output<br />4,711 tok/s prefill</td><td>128K</td><td>17.8 GB</td></tr></tbody></table>
<p class="hb-scorecard-taskcount">Tasks in this set: 9.</p>
</div>
</div>

## October 2026 Mac results and review data

This note also covers [2026-10-21 · Mac · Apple M5 Max](../2026-10-21-m5max-ornith-observed-subset/).

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
