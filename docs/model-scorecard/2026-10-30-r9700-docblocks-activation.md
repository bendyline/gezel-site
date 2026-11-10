# 2026-10-30 · Windows · Ryzen 9 7950X3D · Radeon AI PRO R9700

A focused rerun on AMD Ryzen 9 7950X3D 16-Core Processor · AMD Radeon AI PRO R9700 · 64 GB: 2 models across 1 task set. Every round is listed in the [model scorecard](https://gezel.com/docs/model-scorecard/), with its results side by side in one table.

<div class="hb-scorecard-round hb-scorecard-round-page">
<p class="hb-scorecard-stamp"><strong>AMD Ryzen 9 7950X3D 16-Core Processor · AMD Radeon AI PRO R9700 · 64 GB · llama-cpp · focused subset · 3 trials per task · 2026-10-30 · gezel 22fec99111a5 · catalog 0.3.1</strong></p>
<p class="hb-scorecard-round-note">Separate six-trial DocBlocks activation condition, three repetitions per model. The supported binary expectedDeliverable contract exposed all 19 DocBlocks tools, changing the session/tool condition; it does not replace the 258-trial baseline. Qwen passed 2/3 and Gemma 0/3. Binary messageGezel repair was rejected before delivery, so these are not clean model-only failures or ignored nudges. Initial tool-schema and grounding errors are analyzed separately. Three Qwen reports were judged; three Gemma reports were absent. Original prompts, gates, generalist auto and native 0.1.54 were retained. See the separate condition postmortem in the R9700 download.</p>
<p class="hb-scorecard-memory-note">System memory counts this computer's own memory only. What the model keeps on the separate graphics card isn't included.</p>
<div class="hb-scorecard-suite" data-hb-suite="productivity">
<h5 class="hb-scorecard-suite-title">Office and knowledge work</h5>
<table><thead><tr><th>Model</th><th>Size</th><th>Tasks passed</th><th>Context</th><th>System memory</th></tr></thead><tbody><tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>Qwen 3.8 (27B, Q4) (kv: f16)</td><td>27B</td><td>2/3 (67%)</td><td>139K</td><td>22.1 GB</td></tr><tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4) (kv: f16)</td><td>12B</td><td>0/3 (0%)</td><td>256K</td><td>17.2 GB</td></tr></tbody></table>
<h6>Task performance</h6>
<p>Task measurements include failures within each stated period or comparison subset. Measurement methods and exclusions are stated in period labels and round notes. Values are per-trial medians (minimum–maximum; sample count), not admission probes. Wall time includes tools. System RSS and GPU memory are separate peak measurements; do not add their medians. Periods remain separate because hardware performance can change.</p>
<table><thead><tr><th scope="col">Model</th><th scope="col">Period</th><th scope="col">Trials</th><th scope="col">Output (tok/s)</th><th scope="col">Prefill (tok/s)</th><th scope="col">Wall time (min)</th><th scope="col">Peak system RSS (GiB)</th><th scope="col">Peak GPU memory (GiB)</th></tr></thead><tbody>
<tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>Qwen 3.8 (27B, Q4)</td><td>Separate activation condition · all attempts</td><td>3</td><td>55.72 (54.59–56.53; n=3)</td><td>780.47 (779.01–786.13; n=3)</td><td>2.2 (1.9–7.0; n=3)</td><td>22.13 (21.96–22.46; n=3)</td><td>28.48 (28.48–28.49; n=3)</td></tr>
<tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4)</td><td>Separate activation condition · all attempts</td><td>3</td><td>118.92 (117.91–124.89; n=3)</td><td>1,199.86 (1,093.31–1,206.24; n=3)</td><td>6.1 (5.9–6.8; n=3)</td><td>17.23 (15.23–17.41; n=3)</td><td>14.69 (14.69–14.70; n=3)</td></tr>
</tbody></table>
<h6>Artifact reviews</h6>
<p>Advisory means out of 10, with eligible artifact counts. Rubrics are separate and are not a combined model score. A dash means no eligible artifact was scored under that rubric. Missing artifacts have no score; excluded reviews do not enter these means. Judge: the OpenAI Codex agent that ran the round (in-session review). Review identity and limitations are recorded with the evaluation.</p>
<table><thead><tr><th scope="col">Model</th><th scope="col">Period</th><th scope="col">docblocks-theme-roundtrip</th><th scope="col">No artifact</th><th scope="col">Excluded reviews</th></tr></thead><tbody>
<tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>Qwen 3.8 (27B, Q4)</td><td>Separate activation condition · all attempts</td><td>5.43/10 (3 pieces)</td><td>0</td><td>0</td></tr>
<tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4)</td><td>Separate activation condition · all attempts</td><td>—</td><td>3</td><td>0</td></tr>
</tbody></table>
<p class="hb-scorecard-taskcount">Tasks in this set: 1.</p>
</div>
</div>

## October 28–30 R9700 comparison and review data

This note also covers [2026-10-28 · Windows · Ryzen 9 7950X3D · Radeon AI PRO R9700](../2026-10-28-r9700-native-0-1-54/).

The Qwen 3.8 27B Q4 and Gemma 4 12B Q4 comparison completed all **258 trials**
across four task sets, with three repetitions per model and scenario.
Qwen passed 104/125 eligible attempts; Gemma passed 81/127. Six raw exclusions
remain recorded: three Windows sandbox failures and three model-authored
gate configurations that the harness classified as infrastructure failures.
Qwen's complex-work suite has no eligible custom-gate attempt, so that suite's
headline is withheld while all its observations remain available.

Download the [scorecard data](https://gezel.com/docs/assets/scorecards/2026-10-28-r9700-native-0-1-54/scorecard.json)
and [full run data with judging and performance](https://gezel.com/docs/assets/scorecards/2026-10-28-r9700-native-0-1-54/scorecard-details.json).
The companion includes per-trial fixed scores, both advisory judge ledgers,
scenario and repetition results, latency, throughput, RAM/GPU measurements,
postmortems and review audits. Known setup and evaluator problems remain
visible beside the frozen results. Different review rubrics stay separate;
misaligned A/B and incidental fixture-page opinions are excluded from the
website's quality means and retained in the download.

A **separate six-trial activation subset** exposed the missing DocBlocks tools
and produced two Qwen passes and no Gemma passes. It does not replace the
original six setup failures. Binary repair messages were rejected before
delivery; the postmortem distinguishes that framework limitation from initial
schema and grounding errors. All trials and judging are complete.

Both models ran on Windows with a Radeon AI PRO R9700 and native 0.1.54.
The task tables show engine-log measurements across all attempts; system RSS
and GPU memory remain separate, and one GPU observation is missing.
[Download notes and validation](https://gezel.com/docs/assets/scorecards/2026-10-28-r9700-native-0-1-54/README.md)
explain all denominators, review selections, timing limitations and the
frozen capability implementation's differences from its prose rubric.
