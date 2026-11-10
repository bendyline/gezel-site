# 2026-10-20 · rtx5070ti-nanbeige-core-32k

A model scorecard round on AMD Ryzen AI 9 HX 370 w/ Radeon 890M · NVIDIA GeForce RTX 5070 Ti Laptop GPU · 31 GB: 1 model across 1 task set. Every round is listed in the [model scorecard](https://gezel.com/docs/model-scorecard/), with its results side by side in one table.

<div class="hb-scorecard-round hb-scorecard-round-page">
<p class="hb-scorecard-stamp"><strong>AMD Ryzen AI 9 HX 370 w/ Radeon 890M · NVIDIA GeForce RTX 5070 Ti Laptop GPU · 31 GB · llama-cpp · 3 trials per task · 2026-10-20 · gezel dee6f3e3aea8 · catalog 0.2.5</strong></p>
<p class="hb-scorecard-round-note">Nanbeige rerun: all 33 requested cells recorded at 32,768 tokens, one slot and f16 KV across 12 preserved journals with verified identical runtime. 12 passed, nine were model failures and 12 exceeded context; the latter are infrastructure exclusions, not GPU OOM. Some scenarios have no attributable trials, so the reader withholds a full-suite score. GPU fit was verified. Oct 22 samples included a 33 W cap and 810 MHz memory; throughput later rose without operator changes. No uniform speed claim is made. Runtime content: c01c89e726cb. Task performance and advisory reviews appear below by journal and rubric; exact trial scores, axes and evidence are in the October Windows data download.</p>
<p class="hb-scorecard-memory-note">System memory counts this computer's own memory only. What the model keeps on the separate graphics card isn't included.</p>
<div class="hb-scorecard-suite" data-hb-suite="core">
<h5 class="hb-scorecard-suite-title">General capability</h5>
<h6>Task performance</h6>
<p>Task measurements include failures within each stated period or comparison subset. Measurement methods and exclusions are stated in period labels and round notes. Values are per-trial medians (minimum–maximum; sample count), not admission probes. Wall time includes tools. System RSS and GPU memory are separate peak measurements; do not add their medians. Periods remain separate because hardware performance can change.</p>
<table><thead><tr><th scope="col">Model</th><th scope="col">Period</th><th scope="col">Trials</th><th scope="col">Output (tok/s)</th><th scope="col">Prefill (tok/s)</th><th scope="col">Wall time (min)</th><th scope="col">Peak system RSS (GiB)</th><th scope="col">Peak GPU memory (GiB)</th></tr></thead><tbody>
<tr data-hb-model="nanbeige4.2-3b" data-hb-tier="tiny"><td>Nanbeige 4.2 (3B, Q4)</td><td>N1 · 10-20 16:55–10-20 17:59 UTC</td><td>3</td><td>44.32 (44.29–48.42; n=3)</td><td>1,481.48 (1,297.46–1,548.52; n=3)</td><td>25.0 (3.9–31.0; n=3)</td><td>11.46 (10.11–14.44; n=3)</td><td>8.02 (8.02–8.02; n=3)</td></tr>
<tr data-hb-model="nanbeige4.2-3b" data-hb-tier="tiny"><td>Nanbeige 4.2 (3B, Q4)</td><td>N2 · 10-20 18:15–10-20 18:22 UTC</td><td>2</td><td>51.34 (43.85–58.83; n=2)</td><td>1,651.79 (1,108.81–2,194.77; n=2)</td><td>3.2 (2.6–3.9; n=2)</td><td>9.83 (9.13–10.53; n=2)</td><td>8.02 (8.02–8.02; n=2)</td></tr>
<tr data-hb-model="nanbeige4.2-3b" data-hb-tier="tiny"><td>Nanbeige 4.2 (3B, Q4)</td><td>N3 · 10-22 05:57–10-22 07:09 UTC · restricted GPU period</td><td>2</td><td>4.38 (2.99–5.76; n=2)</td><td>163.55 (94.12–232.97; n=2)</td><td>35.7 (9.0–62.5; n=2)</td><td>3.77 (3.75–3.79; n=2)</td><td>8.02 (8.02–8.02; n=2)</td></tr>
<tr data-hb-model="nanbeige4.2-3b" data-hb-tier="tiny"><td>Nanbeige 4.2 (3B, Q4)</td><td>N4 · 10-22 08:02–10-22 08:29 UTC · restricted GPU period</td><td>1</td><td>2.95 (2.95–2.95; n=1)</td><td>91.61 (91.61–91.61; n=1)</td><td>27.1 (27.1–27.1; n=1)</td><td>3.95 (3.95–3.95; n=1)</td><td>8.02 (8.02–8.02; n=1)</td></tr>
<tr data-hb-model="nanbeige4.2-3b" data-hb-tier="tiny"><td>Nanbeige 4.2 (3B, Q4)</td><td>N5 · 10-22 09:03–10-22 14:15 UTC · spans speed change</td><td>6</td><td>3.65 (3.18–6.71; n=6)</td><td>188.52 (124.40–634.21; n=6)</td><td>44.3 (11.9–101.0; n=6)</td><td>9.81 (3.80–11.68; n=6)</td><td>8.02 (8.02–8.03; n=6)</td></tr>
<tr data-hb-model="nanbeige4.2-3b" data-hb-tier="tiny"><td>Nanbeige 4.2 (3B, Q4)</td><td>N6 · 10-22 14:50–10-22 15:15 UTC</td><td>4</td><td>48.67 (41.91–58.05; n=4)</td><td>1,603.53 (1,013.49–2,023.10; n=4)</td><td>4.3 (2.2–11.7; n=4)</td><td>10.08 (3.84–10.83; n=4)</td><td>8.02 (8.02–8.02; n=4)</td></tr>
<tr data-hb-model="nanbeige4.2-3b" data-hb-tier="tiny"><td>Nanbeige 4.2 (3B, Q4)</td><td>N7 · 10-22 15:54–10-22 16:01 UTC</td><td>1</td><td>41.24 (41.24–41.24; n=1)</td><td>1,000.87 (1,000.87–1,000.87; n=1)</td><td>7.2 (7.2–7.2; n=1)</td><td>9.43 (9.43–9.43; n=1)</td><td>8.02 (8.02–8.02; n=1)</td></tr>
<tr data-hb-model="nanbeige4.2-3b" data-hb-tier="tiny"><td>Nanbeige 4.2 (3B, Q4)</td><td>N8 · 10-22 16:08–10-22 16:34 UTC</td><td>3</td><td>43.46 (41.10–45.41; n=3)</td><td>1,297.88 (1,214.47–1,519.03; n=3)</td><td>2.3 (1.5–21.1; n=3)</td><td>3.84 (3.83–11.67; n=3)</td><td>8.02 (8.02–8.02; n=3)</td></tr>
<tr data-hb-model="nanbeige4.2-3b" data-hb-tier="tiny"><td>Nanbeige 4.2 (3B, Q4)</td><td>N9 · 10-22 17:08–10-22 17:49 UTC</td><td>2</td><td>46.38 (46.23–46.53; n=2)</td><td>1,393.51 (1,375.83–1,411.18; n=2)</td><td>19.4 (18.8–20.0; n=2)</td><td>12.33 (12.12–12.54; n=2)</td><td>8.02 (8.02–8.02; n=2)</td></tr>
<tr data-hb-model="nanbeige4.2-3b" data-hb-tier="tiny"><td>Nanbeige 4.2 (3B, Q4)</td><td>N10 · 10-22 18:10–10-22 18:49 UTC</td><td>5</td><td>44.95 (40.98–55.60; n=5)</td><td>1,382.78 (909.22–1,781.28; n=5)</td><td>10.1 (1.2–11.2; n=5)</td><td>10.24 (3.83–11.58; n=5)</td><td>8.02 (8.02–8.02; n=5)</td></tr>
<tr data-hb-model="nanbeige4.2-3b" data-hb-tier="tiny"><td>Nanbeige 4.2 (3B, Q4)</td><td>N11 · 10-22 19:10–10-22 19:13 UTC</td><td>1</td><td>40.45 (40.45–40.45; n=1)</td><td>952.71 (952.71–952.71; n=1)</td><td>2.3 (2.3–2.3; n=1)</td><td>3.86 (3.86–3.86; n=1)</td><td>8.02 (8.02–8.02; n=1)</td></tr>
<tr data-hb-model="nanbeige4.2-3b" data-hb-tier="tiny"><td>Nanbeige 4.2 (3B, Q4)</td><td>N12 · 10-22 20:05–10-22 20:21 UTC</td><td>3</td><td>42.39 (41.69–43.41; n=3)</td><td>1,276.71 (1,201.48–1,543.61; n=3)</td><td>3.9 (1.7–7.7; n=3)</td><td>9.12 (3.86–11.68; n=3)</td><td>8.02 (8.02–8.02; n=3)</td></tr>
</tbody></table>
<h6>Artifact reviews</h6>
<p>Advisory means out of 10, with eligible artifact counts. Rubrics are separate and are not a combined model score. A dash means no eligible artifact was scored under that rubric. Missing artifacts have no score; excluded reviews do not enter these means. Judge: the OpenAI Codex agent that ran the round (in-session review). Review identity and limitations are recorded with the evaluation.</p>
<table><thead><tr><th scope="col">Model</th><th scope="col">Period</th><th scope="col">Code quality</th><th scope="col">Document quality</th><th scope="col">HTML quality</th><th scope="col">No artifact</th><th scope="col">Excluded reviews</th></tr></thead><tbody>
<tr data-hb-model="nanbeige4.2-3b" data-hb-tier="tiny"><td>Nanbeige 4.2 (3B, Q4)</td><td>N1 · 10-20 16:55–10-20 17:59 UTC</td><td>—</td><td>—</td><td>3.63/10 (2 pieces)</td><td>0</td><td>1</td></tr>
<tr data-hb-model="nanbeige4.2-3b" data-hb-tier="tiny"><td>Nanbeige 4.2 (3B, Q4)</td><td>N2 · 10-20 18:15–10-20 18:22 UTC</td><td>2.75/10 (1 pieces)</td><td>—</td><td>—</td><td>0</td><td>1</td></tr>
<tr data-hb-model="nanbeige4.2-3b" data-hb-tier="tiny"><td>Nanbeige 4.2 (3B, Q4)</td><td>N3 · 10-22 05:57–10-22 07:09 UTC · restricted GPU period</td><td>4.75/10 (1 pieces)</td><td>—</td><td>—</td><td>1</td><td>0</td></tr>
<tr data-hb-model="nanbeige4.2-3b" data-hb-tier="tiny"><td>Nanbeige 4.2 (3B, Q4)</td><td>N4 · 10-22 08:02–10-22 08:29 UTC · restricted GPU period</td><td>—</td><td>—</td><td>—</td><td>1</td><td>0</td></tr>
<tr data-hb-model="nanbeige4.2-3b" data-hb-tier="tiny"><td>Nanbeige 4.2 (3B, Q4)</td><td>N5 · 10-22 09:03–10-22 14:15 UTC · spans speed change</td><td>—</td><td>4.33/10 (3 pieces)</td><td>2.88/10 (2 pieces)</td><td>1</td><td>0</td></tr>
<tr data-hb-model="nanbeige4.2-3b" data-hb-tier="tiny"><td>Nanbeige 4.2 (3B, Q4)</td><td>N6 · 10-22 14:50–10-22 15:15 UTC</td><td>3.42/10 (3 pieces)</td><td>—</td><td>—</td><td>0</td><td>1</td></tr>
<tr data-hb-model="nanbeige4.2-3b" data-hb-tier="tiny"><td>Nanbeige 4.2 (3B, Q4)</td><td>N7 · 10-22 15:54–10-22 16:01 UTC</td><td>—</td><td>—</td><td>—</td><td>1</td><td>0</td></tr>
<tr data-hb-model="nanbeige4.2-3b" data-hb-tier="tiny"><td>Nanbeige 4.2 (3B, Q4)</td><td>N8 · 10-22 16:08–10-22 16:34 UTC</td><td>—</td><td>4.63/10 (2 pieces)</td><td>—</td><td>0</td><td>1</td></tr>
<tr data-hb-model="nanbeige4.2-3b" data-hb-tier="tiny"><td>Nanbeige 4.2 (3B, Q4)</td><td>N9 · 10-22 17:08–10-22 17:49 UTC</td><td>—</td><td>—</td><td>1.00/10 (1 pieces)</td><td>0</td><td>1</td></tr>
<tr data-hb-model="nanbeige4.2-3b" data-hb-tier="tiny"><td>Nanbeige 4.2 (3B, Q4)</td><td>N10 · 10-22 18:10–10-22 18:49 UTC</td><td>3.17/10 (3 pieces)</td><td>—</td><td>2.50/10 (1 pieces)</td><td>1</td><td>0</td></tr>
<tr data-hb-model="nanbeige4.2-3b" data-hb-tier="tiny"><td>Nanbeige 4.2 (3B, Q4)</td><td>N11 · 10-22 19:10–10-22 19:13 UTC</td><td>—</td><td>—</td><td>—</td><td>1</td><td>0</td></tr>
<tr data-hb-model="nanbeige4.2-3b" data-hb-tier="tiny"><td>Nanbeige 4.2 (3B, Q4)</td><td>N12 · 10-22 20:05–10-22 20:21 UTC</td><td>—</td><td>4.75/10 (2 pieces)</td><td>—</td><td>0</td><td>1</td></tr>
</tbody></table>
<p class="hb-scorecard-withheld">Not published — some tasks could not be measured on this round: Nanbeige 4.2 (3B, Q4) (2 task(s) unmeasured)</p>
<p class="hb-scorecard-taskcount">Tasks in this set: 11.</p>
</div>
</div>

## October 2026 Windows results and review data

This note also covers [2026-10-20 · rtx5070ti-core-continuation-64k](../2026-10-20-rtx5070ti-core-continuation-64k/), [2026-10-20 · rtx5070ti-core-original-64k](../2026-10-20-rtx5070ti-core-original-64k/).

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
