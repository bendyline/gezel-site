# 2026-10-28 · win32 · AMD Ryzen AI 9 HX 370 w/ Radeon 890M

A model scorecard round on AMD Ryzen AI 9 HX 370 w/ Radeon 890M · NVIDIA GeForce RTX 5070 Ti Laptop GPU · 31 GB: 1 model across 4 task sets. Every round is listed in the [model scorecard](https://gezel.com/docs/model-scorecard/), with its results side by side in one table.

<div class="hb-scorecard-round hb-scorecard-round-page">
<p class="hb-scorecard-stamp"><strong>AMD Ryzen AI 9 HX 370 w/ Radeon 890M · NVIDIA GeForce RTX 5070 Ti Laptop GPU · 31 GB · llama-cpp · 3 trials per task · 2026-10-28 · gezel 22fec99111a5ad9796af83a4a1a222236be91006 · catalog 0.3.1</strong></p>
<p class="hb-scorecard-round-note">All four suites completed: 129 attempts, exactly three per suite/scenario, 89 raw passes. The eligible subset is 89/116 after 12 required-tool exclusions and one unevaluable authored gate; that last defect was model-authored, not a machine outage. All attempts remain in task performance. There are 59 artifact judgments: 56 included and three excluded for a mismatched A/B rubric, plus 70 tasks without an applicable rubric. Different rubrics are kept separate. Nine deferred canonical browser checks passed on the unchanged saved artifacts. Reviews assessed source and artifacts, not rendered visual polish. Admission-probe speeds remain separate from task medians. See the October 28 Windows Gemma 4 report download for exact axes, rationales, raw scores, exclusions, tokens, GPU telemetry and provenance.</p>
<p class="hb-scorecard-memory-note">System memory counts this computer's own memory only. What the model keeps on the separate graphics card isn't included.</p>
<div class="hb-scorecard-suite" data-hb-suite="core">
<h5 class="hb-scorecard-suite-title">General capability</h5>
<table><thead><tr><th>Model</th><th>Size</th><th>Tasks passed</th><th>Performance</th><th>Context</th><th>System memory</th></tr></thead><tbody><tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4) (kv: f16)</td><td>12B</td><td>29/33 (88%)</td><td>140.9 tok/s output<br />1,754 tok/s prefill</td><td>149K</td><td>14.2 GB</td></tr></tbody></table>
<h6>Task performance</h6>
<p>Task measurements include failures within each stated period or comparison subset. Measurement methods and exclusions are stated in period labels and round notes. Values are per-trial medians (minimum–maximum; sample count), not admission probes. Wall time includes tools. System RSS and GPU memory are separate peak measurements; do not add their medians. Periods remain separate because hardware performance can change.</p>
<table><thead><tr><th scope="col">Model</th><th scope="col">Period</th><th scope="col">Trials</th><th scope="col">Output (tok/s)</th><th scope="col">Prefill (tok/s)</th><th scope="col">Wall time (min)</th><th scope="col">Peak system RSS (GiB)</th><th scope="col">Peak GPU memory (GiB)</th></tr></thead><tbody>
<tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4)</td><td>All trials · native 0.1.54</td><td>33</td><td>126.21 (99.26–148.97; n=33)</td><td>1,927.35 (1,646.20–2,022.87; n=33)</td><td>1.0 (0.5–12.1; n=33)</td><td>14.19 (10.50–20.66; n=33)</td><td>10.36 (10.35–10.40; n=33)</td></tr>
</tbody></table>
<h6>Artifact reviews</h6>
<p>Advisory means out of 10, with eligible artifact counts. Rubrics are separate and are not a combined model score. A dash means no eligible artifact was scored under that rubric. Missing artifacts have no score; excluded reviews do not enter these means. Not applicable means the task had no applicable qualitative rubric. Judge: the OpenAI Codex agent that ran the round (in-session review). Review identity and limitations are recorded with the evaluation.</p>
<table><thead><tr><th scope="col">Model</th><th scope="col">Period</th><th scope="col">HTML quality</th><th scope="col">No artifact</th><th scope="col">Excluded reviews</th><th scope="col">Not applicable</th></tr></thead><tbody>
<tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4)</td><td>All trials · native 0.1.54</td><td>4.53/10 (9 pieces)</td><td>0</td><td>0</td><td>24</td></tr>
</tbody></table>
<p class="hb-scorecard-taskcount">Tasks in this set: 11.</p>
</div>
<div class="hb-scorecard-suite" data-hb-suite="productivity">
<h5 class="hb-scorecard-suite-title">Office and knowledge work</h5>
<h6>Task performance</h6>
<p>Task measurements include failures within each stated period or comparison subset. Measurement methods and exclusions are stated in period labels and round notes. Values are per-trial medians (minimum–maximum; sample count), not admission probes. Wall time includes tools. System RSS and GPU memory are separate peak measurements; do not add their medians. Periods remain separate because hardware performance can change.</p>
<table><thead><tr><th scope="col">Model</th><th scope="col">Period</th><th scope="col">Trials</th><th scope="col">Output (tok/s)</th><th scope="col">Prefill (tok/s)</th><th scope="col">Wall time (min)</th><th scope="col">Peak system RSS (GiB)</th><th scope="col">Peak GPU memory (GiB)</th></tr></thead><tbody>
<tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4)</td><td>All trials · native 0.1.54</td><td>39</td><td>122.51 (100.95–143.10; n=39)</td><td>1,857.89 (1,733.81–2,087.06; n=39)</td><td>2.6 (0.5–79.6; n=39)</td><td>17.84 (10.50–21.08; n=39)</td><td>10.36 (10.35–10.36; n=39)</td></tr>
</tbody></table>
<h6>Artifact reviews</h6>
<p>Advisory means out of 10, with eligible artifact counts. Rubrics are separate and are not a combined model score. A dash means no eligible artifact was scored under that rubric. Missing artifacts have no score; excluded reviews do not enter these means. Not applicable means the task had no applicable qualitative rubric. Judge: the OpenAI Codex agent that ran the round (in-session review). Review identity and limitations are recorded with the evaluation.</p>
<table><thead><tr><th scope="col">Model</th><th scope="col">Period</th><th scope="col">craftbook-annotated-bibliography</th><th scope="col">craftbook-powerpoint-deck</th><th scope="col">craftbook-research-to-document</th><th scope="col">craftbook-spreadsheet-model</th><th scope="col">craftbook-week-plan</th><th scope="col">docblocks-theme-roundtrip</th><th scope="col">meeting-followup</th><th scope="col">wikipedia-research-brief</th><th scope="col">No artifact</th><th scope="col">Excluded reviews</th><th scope="col">Not applicable</th></tr></thead><tbody>
<tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4)</td><td>All trials · native 0.1.54</td><td>6.42/10 (3 pieces)</td><td>6.58/10 (3 pieces)</td><td>6.11/10 (3 pieces)</td><td>4.33/10 (3 pieces)</td><td>1.25/10 (3 pieces)</td><td>5.33/10 (3 pieces)</td><td>6.42/10 (3 pieces)</td><td>4.25/10 (3 pieces)</td><td>0</td><td>3</td><td>12</td></tr>
</tbody></table>
<p class="hb-scorecard-withheld">Not published — some tasks could not be measured on this round: Gemma 4 (12B, Q4) (1 task(s) unmeasured)</p>
<p class="hb-scorecard-taskcount">Tasks in this set: 13.</p>
</div>
<div class="hb-scorecard-suite" data-hb-suite="developer">
<h5 class="hb-scorecard-suite-title">Engineering work</h5>
<h6>Task performance</h6>
<p>Task measurements include failures within each stated period or comparison subset. Measurement methods and exclusions are stated in period labels and round notes. Values are per-trial medians (minimum–maximum; sample count), not admission probes. Wall time includes tools. System RSS and GPU memory are separate peak measurements; do not add their medians. Periods remain separate because hardware performance can change.</p>
<table><thead><tr><th scope="col">Model</th><th scope="col">Period</th><th scope="col">Trials</th><th scope="col">Output (tok/s)</th><th scope="col">Prefill (tok/s)</th><th scope="col">Wall time (min)</th><th scope="col">Peak system RSS (GiB)</th><th scope="col">Peak GPU memory (GiB)</th></tr></thead><tbody>
<tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4)</td><td>All trials · native 0.1.54</td><td>30</td><td>121.85 (109.44–139.43; n=30)</td><td>1,738.53 (1,236.60–1,947.13; n=30)</td><td>5.2 (0.8–44.2; n=30)</td><td>18.46 (13.77–21.33; n=30)</td><td>10.36 (10.27–10.48; n=30)</td></tr>
</tbody></table>
<h6>Artifact reviews</h6>
<p>Advisory means out of 10, with eligible artifact counts. Rubrics are separate and are not a combined model score. A dash means no eligible artifact was scored under that rubric. Missing artifacts have no score; excluded reviews do not enter these means. Not applicable means the task had no applicable qualitative rubric. Judge: the OpenAI Codex agent that ran the round (in-session review). Review identity and limitations are recorded with the evaluation.</p>
<table><thead><tr><th scope="col">Model</th><th scope="col">Period</th><th scope="col">craftbook-api-contract-review</th><th scope="col">craftbook-bug-fix-tdd</th><th scope="col">craftbook-code-review</th><th scope="col">craftbook-codemod-sweep</th><th scope="col">craftbook-deep-security-review</th><th scope="col">craftbook-refactor-module</th><th scope="col">No artifact</th><th scope="col">Excluded reviews</th><th scope="col">Not applicable</th></tr></thead><tbody>
<tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4)</td><td>All trials · native 0.1.54</td><td>5.00/10 (3 pieces)</td><td>4.22/10 (3 pieces)</td><td>7.17/10 (3 pieces)</td><td>3.44/10 (3 pieces)</td><td>5.11/10 (3 pieces)</td><td>1.89/10 (3 pieces)</td><td>0</td><td>0</td><td>12</td></tr>
</tbody></table>
<p class="hb-scorecard-withheld">Not published — some tasks could not be measured on this round: Gemma 4 (12B, Q4) (3 task(s) unmeasured)</p>
<p class="hb-scorecard-taskcount">Tasks in this set: 10.</p>
</div>
<div class="hb-scorecard-suite" data-hb-suite="complex-work">
<h5 class="hb-scorecard-suite-title">Complex workflows</h5>
<table><thead><tr><th>Model</th><th>Size</th><th>Tasks passed</th><th>Performance</th><th>Context</th><th>System memory</th></tr></thead><tbody><tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4) (kv: f16)</td><td>12B</td><td>10/26 (38%)</td><td>140.9 tok/s output<br />1,754 tok/s prefill</td><td>154K</td><td>19.3 GB</td></tr></tbody></table>
<h6>Task performance</h6>
<p>Task measurements include failures within each stated period or comparison subset. Measurement methods and exclusions are stated in period labels and round notes. Values are per-trial medians (minimum–maximum; sample count), not admission probes. Wall time includes tools. System RSS and GPU memory are separate peak measurements; do not add their medians. Periods remain separate because hardware performance can change.</p>
<table><thead><tr><th scope="col">Model</th><th scope="col">Period</th><th scope="col">Trials</th><th scope="col">Output (tok/s)</th><th scope="col">Prefill (tok/s)</th><th scope="col">Wall time (min)</th><th scope="col">Peak system RSS (GiB)</th><th scope="col">Peak GPU memory (GiB)</th></tr></thead><tbody>
<tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4)</td><td>All trials · native 0.1.54</td><td>27</td><td>108.41 (97.10–142.73; n=27)</td><td>1,731.36 (1,259.77–1,869.46; n=27)</td><td>6.5 (0.8–43.1; n=27)</td><td>19.29 (11.90–21.48; n=27)</td><td>10.27 (10.27–10.27; n=27)</td></tr>
</tbody></table>
<h6>Artifact reviews</h6>
<p>Advisory means out of 10, with eligible artifact counts. Rubrics are separate and are not a combined model score. A dash means no eligible artifact was scored under that rubric. Missing artifacts have no score; excluded reviews do not enter these means. Not applicable means the task had no applicable qualitative rubric. Judge: the OpenAI Codex agent that ran the round (in-session review). Review identity and limitations are recorded with the evaluation.</p>
<table><thead><tr><th scope="col">Model</th><th scope="col">Period</th><th scope="col">craftbook-invoice-run</th><th scope="col">HTML quality</th><th scope="col">No artifact</th><th scope="col">Excluded reviews</th><th scope="col">Not applicable</th></tr></thead><tbody>
<tr data-hb-model="gemma4-12b" data-hb-tier="medium"><td>Gemma 4 (12B, Q4)</td><td>All trials · native 0.1.54</td><td>5.53/10 (3 pieces)</td><td>2.63/10 (2 pieces)</td><td>0</td><td>0</td><td>22</td></tr>
</tbody></table>
<p class="hb-scorecard-taskcount">Tasks in this set: 9.</p>
</div>
</div>

## October 28 Windows Gemma 4 12B results

Gemma 4 12B completed all four task sets on an RTX 5070 Ti laptop using
native 0.1.54: 129 attempts, three per scenario in each suite, with 89 raw
passes. Twelve attempts lacked required tools and one had an unevaluable
model-authored gate. The reviewed subset contains 89 passes in 116 attempts;
the download retains every raw verdict and exclusion reason.

All 59 applicable artifacts were judged, including outputs from failed
attempts. The **Artifact reviews** tables keep each rubric separate, exclude
three A/B reviews with mismatched axes, and distinguish 70 tasks with no
applicable rubric from missing artifacts. These were unblinded source and
artifact reviews by the OpenAI Codex agent that ran the round, in the same
session. Nine deferred browser
checks subsequently passed on unchanged saved artifacts; these short checks
do not establish complete gameplay or visual quality.

The **Task performance** tables cover all 129 attempts, with per-trial
medians, ranges and sample counts for native output and prefill speed, wall
time, peak system RSS and peak GPU memory. The overall median native output
rate was 121.16 tokens/s. Admission-probe rates remain separate. Exact token
counts, GPU utilization, memory samples and fixed-score breakdowns are in the
download.

Download the [scorecard data](https://gezel.com/docs/assets/scorecards/2026-10-27-windows-gemma4-12b-native-0-1-54/scorecard.json),
[full judging and performance report](https://gezel.com/docs/assets/scorecards/2026-10-27-windows-gemma4-12b-native-0-1-54/scorecard-details.json),
and [measurement notes](https://gezel.com/docs/assets/scorecards/2026-10-27-windows-gemma4-12b-native-0-1-54/README.md).
The run identifier retains the October 27 scheduling date; execution occurred
on October 28.
