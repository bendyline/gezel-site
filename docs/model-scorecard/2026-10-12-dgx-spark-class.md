# 2026-10-12 · DGX Spark Class

A model scorecard round on DGX Spark Class · NVIDIA GB10 · 122 GB: 2 models across 4 task sets. Every round is listed in the [model scorecard](https://gezel.com/docs/model-scorecard/), with its results side by side in one table.

<div class="hb-scorecard-round hb-scorecard-round-page">
<p class="hb-scorecard-stamp"><strong>DGX Spark Class · NVIDIA GB10 · 122 GB · llama-cpp · 3 trials per task · 2026-10-12 · gezel da2ed808 · catalog 0.1.95</strong></p>
<p class="hb-scorecard-round-note">Measured after the October 2026 fixes to our tests.</p>
<p class="hb-scorecard-memory-note">Memory isn't shown for this round. This machine's graphics chip shares the computer's memory in a way our measurement can't see, so the number would read far below what the model really uses.</p>
<div class="hb-scorecard-suite" data-hb-suite="core">
<h5 class="hb-scorecard-suite-title">General capability</h5>
<table><thead><tr><th>Model</th><th>Size</th><th>Tasks passed</th><th>Performance</th><th>Context</th></tr></thead><tbody><tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>qwen3.8-27b-q4 (kv: f16)</td><td>27B</td><td>33/33 (100%)</td><td>30.1 tok/s output<br />699 tok/s prefill</td><td>256K</td></tr><tr data-hb-model="gemma4-31b" data-hb-tier="medium"><td>gemma4-31b-q4 (kv: f16)</td><td>30.7B</td><td>32/33 (97%)</td><td>33.5 tok/s output<br />754 tok/s prefill</td><td>81K</td></tr></tbody></table>
<p class="hb-scorecard-taskcount">Tasks in this set: 11.</p>
</div>
<div class="hb-scorecard-suite" data-hb-suite="productivity">
<h5 class="hb-scorecard-suite-title">Office and knowledge work</h5>
<table><thead><tr><th>Model</th><th>Size</th><th>Tasks passed</th><th>Performance</th><th>Context</th></tr></thead><tbody><tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>qwen3.8-27b-q4 (kv: f16)</td><td>27B</td><td>37/39 (95%)</td><td>30.1 tok/s output<br />699 tok/s prefill</td><td>256K</td></tr><tr data-hb-model="gemma4-31b" data-hb-tier="medium"><td>gemma4-31b-q4 (kv: f16)</td><td>30.7B</td><td>36/39 (92%)</td><td>33.5 tok/s output<br />754 tok/s prefill</td><td>81K</td></tr></tbody></table>
<p class="hb-scorecard-taskcount">Tasks in this set: 13.</p>
</div>
<div class="hb-scorecard-suite" data-hb-suite="developer">
<h5 class="hb-scorecard-suite-title">Engineering work</h5>
<table><thead><tr><th>Model</th><th>Size</th><th>Tasks passed</th><th>Performance</th><th>Context</th></tr></thead><tbody><tr data-hb-model="qwen3.8-27b" data-hb-tier="medium"><td>qwen3.8-27b-q4 (kv: f16)</td><td>27B</td><td>29/30 (97%)</td><td>30.1 tok/s output<br />699 tok/s prefill</td><td>256K</td></tr><tr data-hb-model="gemma4-31b" data-hb-tier="medium"><td>gemma4-31b-q4 (kv: f16)</td><td>30.7B</td><td>26/30 (87%)</td><td>33.5 tok/s output<br />754 tok/s prefill</td><td>81K</td></tr></tbody></table>
<p class="hb-scorecard-taskcount">Tasks in this set: 10.</p>
</div>
<div class="hb-scorecard-suite" data-hb-suite="complex-work">
<h5 class="hb-scorecard-suite-title">Complex workflows</h5>
<table><thead><tr><th>Model</th><th>Size</th><th>Tasks passed</th><th>Performance</th><th>Context</th></tr></thead><tbody><tr data-hb-model="gemma4-31b" data-hb-tier="medium"><td>gemma4-31b-q4 (kv: f16)</td><td>30.7B</td><td>20/25 (80%)</td><td>34 tok/s output<br />757 tok/s prefill</td><td>81K</td></tr></tbody></table>
<p class="hb-scorecard-withheld">Not published — some tasks could not be measured on this round: qwen3.8-27b-q4 (1 task(s) unmeasured)</p>
<p class="hb-scorecard-taskcount">Tasks in this set: 9.</p>
</div>
</div>
