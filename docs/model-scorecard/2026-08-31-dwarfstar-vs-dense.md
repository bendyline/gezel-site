# 2026-08-31 · DGX Spark Class

A model scorecard round on DGX Spark Class · NVIDIA GB10 · 122 GB: 3 models across 4 task sets. Every round is listed in the [model scorecard](https://gezel.com/docs/model-scorecard/), with its results side by side in one table.

<div class="hb-scorecard-round hb-scorecard-round-page">
<p class="hb-scorecard-stamp"><strong>DGX Spark Class · NVIDIA GB10 · 122 GB · ds4 + llama-cpp · 3 trials per task · 2026-08-31 · gezel f59825ea · catalog 0.1.51</strong></p>
<p class="hb-scorecard-memory-note">Memory isn't shown for this round. This machine's graphics chip shares the computer's memory in a way our measurement can't see, so the number would read far below what the model really uses.</p>
<div class="hb-scorecard-suite" data-hb-suite="core">
<h5 class="hb-scorecard-suite-title">General capability</h5>
<table><thead><tr><th>Model</th><th>Size</th><th>Tasks passed</th><th>Quality</th><th>Performance</th><th>Context</th></tr></thead><tbody><tr data-hb-model="deepseek-v4-flash-284b" data-hb-tier="large"><td>deepseek-v4-flash-284b-q2</td><td>284B</td><td>33/33 (100%)</td><td>8/10 (7 pieces)</td><td>17.1 tok/s output<br />456 tok/s prefill</td><td>—</td></tr><tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>qwen3.8-27b-q4 (kv: f16)</td><td>27B</td><td>33/33 (100%)</td><td>7.8/10 (9 pieces)</td><td>31.1 tok/s output<br />708 tok/s prefill</td><td>256K</td></tr><tr data-hb-model="ornith1.5-35b-a3b" data-hb-tier="medium"><td>ornith1.5-35b-a3b-q8 (kv: f16)</td><td>35B</td><td>29/33 (88%)</td><td>7.7/10 (7 pieces)</td><td>42.8 tok/s output<br />1,248 tok/s prefill</td><td>64K</td></tr></tbody></table>
<p class="hb-scorecard-taskcount">Tasks in this set: 11.</p>
</div>
<div class="hb-scorecard-suite" data-hb-suite="productivity">
<h5 class="hb-scorecard-suite-title">Office and knowledge work</h5>
<table><thead><tr><th>Model</th><th>Size</th><th>Tasks passed</th><th>Quality</th><th>Performance</th><th>Context</th></tr></thead><tbody><tr data-hb-model="deepseek-v4-flash-284b" data-hb-tier="large"><td>deepseek-v4-flash-284b-q2</td><td>284B</td><td>36/39 (92%)</td><td>6.6/10 (27 pieces)</td><td>17.1 tok/s output<br />456 tok/s prefill</td><td>—</td></tr><tr data-hb-model="ornith1.5-35b-a3b" data-hb-tier="medium"><td>ornith1.5-35b-a3b-q8 (kv: f16)</td><td>35B</td><td>36/39 (92%)</td><td>7/10 (27 pieces)</td><td>42.8 tok/s output<br />1,248 tok/s prefill</td><td>64K</td></tr><tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>qwen3.8-27b-q4 (kv: f16)</td><td>27B</td><td>36/39 (92%)</td><td>7.2/10 (27 pieces)</td><td>31.1 tok/s output<br />708 tok/s prefill</td><td>256K</td></tr></tbody></table>
<p class="hb-scorecard-taskcount">Tasks in this set: 13.</p>
</div>
<div class="hb-scorecard-suite" data-hb-suite="developer">
<h5 class="hb-scorecard-suite-title">Engineering work</h5>
<table><thead><tr><th>Model</th><th>Size</th><th>Tasks passed</th><th>Quality</th><th>Performance</th><th>Context</th></tr></thead><tbody><tr data-hb-model="ornith1.5-35b-a3b" data-hb-tier="medium"><td>ornith1.5-35b-a3b-q8 (kv: f16)</td><td>35B</td><td>19/30 (63%)</td><td>6.1/10 (17 pieces)</td><td>42.8 tok/s output<br />1,248 tok/s prefill</td><td>64K</td></tr><tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>qwen3.8-27b-q4 (kv: f16)</td><td>27B</td><td>18/30 (60%)</td><td>6.9/10 (15 pieces)</td><td>31.1 tok/s output<br />708 tok/s prefill</td><td>256K</td></tr></tbody></table>
<p class="hb-scorecard-withheld">Not published — some tasks could not be measured on this round: deepseek-v4-flash-284b-q2 (2 task(s) unmeasured)</p>
<p class="hb-scorecard-taskcount">Tasks in this set: 10.</p>
</div>
<div class="hb-scorecard-suite" data-hb-suite="complex-work">
<h5 class="hb-scorecard-suite-title">Complex workflows</h5>
<table><thead><tr><th>Model</th><th>Size</th><th>Tasks passed</th><th>Quality</th><th>Performance</th><th>Context</th></tr></thead><tbody><tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>qwen3.8-27b-q4 (kv: f16)</td><td>27B</td><td>15/27 (56%)</td><td>2.4/10 (6 pieces)</td><td>29.1 tok/s output<br />713 tok/s prefill</td><td>256K</td></tr><tr data-hb-model="ornith1.5-35b-a3b" data-hb-tier="medium"><td>ornith1.5-35b-a3b-q8 (kv: f16)</td><td>35B</td><td>12/26 (46%)</td><td>2.4/10 (6 pieces)</td><td>42.8 tok/s output<br />1,248 tok/s prefill</td><td>64K</td></tr></tbody></table>
<p class="hb-scorecard-withheld">Not published — some tasks could not be measured on this round: deepseek-v4-flash-284b-q2 (1 task(s) unmeasured)</p>
<p class="hb-scorecard-taskcount">Tasks in this set: 9.</p>
</div>
</div>
