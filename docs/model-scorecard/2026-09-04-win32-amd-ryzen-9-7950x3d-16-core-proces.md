# 2026-09-04 · win32 · AMD Ryzen 9 7950X3D 16-Core Processor

A model scorecard round on AMD Ryzen 9 7950X3D 16-Core Processor · AMD Radeon AI PRO R9700 · 64 GB: 4 models across 2 task sets. Every round is listed in the [model scorecard](https://gezel.com/docs/model-scorecard/), with its results side by side in one table.

<div class="hb-scorecard-round hb-scorecard-round-page">
<p class="hb-scorecard-stamp"><strong>AMD Ryzen 9 7950X3D 16-Core Processor · AMD Radeon AI PRO R9700 · 64 GB · llama-cpp · 3 trials per task · 2026-09-04 · gezel f115c698 · catalog 0.1.55</strong></p>
<p class="hb-scorecard-round-note">Compares four sizes of Qwen 3.5 (2B, 4B, 9B and 27B, all Q4) on a Ryzen 9 7950X3D with a Radeon AI PRO R9700. Only general capability and office work were tested: models this size do not yet pass every general task, so the harder sets would mostly score zero. This computer has no NVIDIA graphics, so models ran on llama.cpp's Vulkan backend, and these results are not comparable to NVIDIA (CUDA) rounds.</p>
<p class="hb-scorecard-memory-note">System memory counts this computer's own memory only. What the model keeps on the separate graphics card isn't included.</p>
<div class="hb-scorecard-suite" data-hb-suite="core">
<h5 class="hb-scorecard-suite-title">General capability</h5>
<table><thead><tr><th>Model</th><th>Size</th><th>Tasks passed</th><th>Quality</th><th>Performance</th><th>Context</th><th>System memory</th></tr></thead><tbody><tr data-hb-model="qwen3.5-27b" data-hb-tier="medium"><td>qwen3.5-27b-q4 (kv: f16)</td><td>27B</td><td>30/33 (91%)</td><td>6.4/10 (9 pieces)</td><td>55.9 tok/s output<br />656 tok/s prefill</td><td>159K</td><td>22.2 GB</td></tr><tr data-hb-model="qwen3.5-9b" data-hb-tier="small"><td>qwen3.5-9b-q4 (kv: f16)</td><td>9B</td><td>26/33 (79%)</td><td>5.3/10 (9 pieces)</td><td>122.9 tok/s output<br />2,143 tok/s prefill</td><td>256K</td><td>8.9 GB</td></tr><tr data-hb-model="qwen3.5-4b" data-hb-tier="tiny"><td>qwen3.5-4b-q4 (kv: f16)</td><td>4B</td><td>16/33 (48%)</td><td>5.3/10 (9 pieces)</td><td>153 tok/s output<br />3,349 tok/s prefill</td><td>256K</td><td>7.2 GB</td></tr><tr data-hb-model="qwen3.5-2b" data-hb-tier="tiny"><td>qwen3.5-2b-q4 (kv: f16)</td><td>2B</td><td>6/33 (18%)</td><td>2.7/10 (9 pieces)</td><td>203.3 tok/s output<br />7,605 tok/s prefill</td><td>256K</td><td>5.1 GB</td></tr></tbody></table>
<p class="hb-scorecard-taskcount">Tasks in this set: 11.</p>
</div>
<div class="hb-scorecard-suite" data-hb-suite="productivity">
<h5 class="hb-scorecard-suite-title">Office and knowledge work</h5>
<table><thead><tr><th>Model</th><th>Size</th><th>Tasks passed</th><th>Quality</th><th>Performance</th><th>Context</th><th>System memory</th></tr></thead><tbody><tr data-hb-model="qwen3.5-27b" data-hb-tier="medium"><td>qwen3.5-27b-q4 (kv: f16)</td><td>27B</td><td>36/39 (92%)</td><td>6.9/10 (27 pieces)</td><td>55.9 tok/s output<br />656 tok/s prefill</td><td>159K</td><td>21.1 GB</td></tr><tr data-hb-model="qwen3.5-9b" data-hb-tier="small"><td>qwen3.5-9b-q4 (kv: f16)</td><td>9B</td><td>32/39 (82%)</td><td>6/10 (27 pieces)</td><td>122.9 tok/s output<br />2,143 tok/s prefill</td><td>256K</td><td>7.6 GB</td></tr><tr data-hb-model="qwen3.5-4b" data-hb-tier="tiny"><td>qwen3.5-4b-q4 (kv: f16)</td><td>4B</td><td>28/39 (72%)</td><td>5.3/10 (26 pieces)</td><td>157 tok/s output<br />3,429 tok/s prefill</td><td>256K</td><td>6.0 GB</td></tr><tr data-hb-model="qwen3.5-2b" data-hb-tier="tiny"><td>qwen3.5-2b-q4 (kv: f16)</td><td>2B</td><td>20/39 (51%)</td><td>4.3/10 (27 pieces)</td><td>203.3 tok/s output<br />7,605 tok/s prefill</td><td>256K</td><td>3.7 GB</td></tr></tbody></table>
<p class="hb-scorecard-taskcount">Tasks in this set: 13.</p>
</div>
</div>
