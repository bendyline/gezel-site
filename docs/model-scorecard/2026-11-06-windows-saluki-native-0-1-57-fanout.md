# 2026-11-06 · Windows x64 · RTX 5070 Ti Laptop (12 GB)

A focused rerun on AMD Ryzen AI 9 HX 370 w/ Radeon 890M · NVIDIA GeForce RTX 5070 Ti Laptop GPU · 31 GB: 1 model across 1 task set. Every round is listed in the [model scorecard](https://gezel.com/docs/model-scorecard/), with its results side by side in one table.

<div class="hb-scorecard-round hb-scorecard-round-page">
<p class="hb-scorecard-stamp"><strong>AMD Ryzen AI 9 HX 370 w/ Radeon 890M · NVIDIA GeForce RTX 5070 Ti Laptop GPU · 31 GB · llama-cpp · focused subset · 1 trial per task · 2026-11-06 · gezel 643ab3876536b1f7cb17da5685d584083e67a610 · catalog 0.3.5</strong></p>
<p class="hb-scorecard-round-note">Separate logical repetition-2 fanout attempt, interrupted without result, facts, score or final metrics. It is administratively excluded, never retried or scored as a model failure. The continuation points GEZEL_MXC_EXEC at the existing verified Microsoft-signed sandbox launcher. Saluki 27B IQ2 Mix, native 0.1.57 CUDA on a 12 GB RTX 5070 Ti Laptop GPU. Every attempted task used hybrid placement: 39/64 dense FFN layers on GPU and 25 on CPU, context 65,536, one slot, f16 KV. The complete archive contains 128 of 129 planned attempts: 98 fixed passes, 27 eligible failures, one infrastructure exclusion, two unscored interruptions and one unattempted entry. Different environments and execution segments remain separate; three eligible repeats are not available for every entry. Task measurements are engine-log observations, not admission probes. Sonnet 5.5 reviews are advisory and use separate declared rubrics; original Codex reviews and fixed scores remain in the download.</p>
<div class="hb-scorecard-suite" data-hb-suite="complex-work">
<h5 class="hb-scorecard-suite-title">Complex workflows</h5>
<h6>Task performance</h6>
<p>Task measurements include failures within each stated period or comparison subset. Measurement methods and exclusions are stated in period labels and round notes. Values are per-trial medians (minimum–maximum; sample count), not admission probes. Wall time includes tools. System RSS and GPU memory are separate peak measurements; do not add their medians. Periods remain separate because hardware performance can change.</p>
<table><thead><tr><th scope="col">Model</th><th scope="col">Period</th><th scope="col">Trials</th><th scope="col">Output (tok/s)</th><th scope="col">Prefill (tok/s)</th><th scope="col">Wall time (min)</th><th scope="col">Peak system RSS (GiB)</th><th scope="col">Peak GPU memory (GiB)</th></tr></thead><tbody>
<tr data-hb-model="underdog-saluki-27b-iq2-mix" data-hb-tier="medium"><td>Underdog Saluki (27B, IQ2 Mix)</td><td>fanout · all attempts</td><td>1</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
</tbody></table>
<h6>Artifact reviews</h6>
<p>Advisory means out of 10, with eligible artifact counts. Rubrics are separate and are not a combined model score. A dash means no eligible artifact was scored under that rubric. Missing artifacts have no score; excluded reviews do not enter these means. Not applicable means the task had no applicable qualitative rubric. Judge: none recorded. Review identity and limitations are recorded with the evaluation.</p>
<table><thead><tr><th scope="col">Model</th><th scope="col">Period</th><th scope="col">No artifact</th><th scope="col">Excluded reviews</th><th scope="col">Not applicable</th></tr></thead><tbody>
<tr data-hb-model="underdog-saluki-27b-iq2-mix" data-hb-tier="medium"><td>Underdog Saluki (27B, IQ2 Mix)</td><td>fanout · all attempts</td><td>0</td><td>0</td><td>1</td></tr>
</tbody></table>
<p class="hb-scorecard-withheld">Not published — some tasks could not be measured on this round: Underdog Saluki (27B, IQ2 Mix) (1 task(s) unmeasured)</p>
<p class="hb-scorecard-taskcount">Tasks in this set: 1.</p>
</div>
</div>

## November Saluki 27B evaluation on a 12 GB laptop GPU

This note also covers [2026-11-04 · Windows x64 · RTX 5070 Ti Laptop (12 GB)](../2026-11-03-windows-saluki-native-0-1-57-original/), [2026-11-09 · Windows x64 · RTX 5070 Ti Laptop (12 GB)](../2026-11-09-windows-saluki-native-0-1-57-round3/).

Underdog Saluki 27B IQ2 Mix ran diverse tasks on a Windows laptop with an NVIDIA RTX 5070 Ti Laptop GPU, using native 0.1.57 and llama.cpp CUDA. **CPU offload was used in all 128 attempted trials:** 39 of 64 dense FFN layers were placed on the GPU and 25 on the CPU. Each task used a 65,536-token context, one slot and f16 KV cache. This demonstrates hybrid execution on a 12 GB GPU, with substantial system RAM use; full GPU residency was not demonstrated.

The requested three repetitions across core, productivity, developer and complex-work comprised 129 planned entries. There are 126 terminal runner results, two interrupted attempts without final scores, and one unattempted entry. Of the terminal results, 98 passed, 27 were eligible task failures and one was excluded for unavailable sandbox infrastructure. Forty-one of the 43 suite entries have three eligible trials; gate-script authoring and fanout authoring each have only one. The automatic outcomes measure task gates, while the separate artifact reviews examine the quality of the resulting work.

| Task set | Original passes / eligible | Round 3 passes / eligible | Other dispositions |
|---|---:|---:|---|
| Core | 19/22 | 11/11 | None |
| Productivity | 20/26 | 8/13 | None |
| Developer | 19/20 | 3/10 | None |
| Complex work | 13/16 | 5/7 | One infrastructure exclusion, two interruptions, one unattempted entry |
| **Total** | **71/84** | **27/41** | **Three excluded attempts and one unattempted entry** |

The tables retain three separate records: 85 original terminal trials, the interrupted repetition-2 fanout attempt, and 42 round-3 attempts. The original and continuation environments differ only in the explicit path to an existing, verified Microsoft-signed sandbox launcher through `GEZEL_MXC_EXEC`. Source, service build, catalog, fixtures, native binaries, model, tuning and prompts remained identical. No completed task was retried. The original stopped journals and all fixed scores are preserved, including the stale running marker for the interrupted final attempt. The causes of the process interruptions remain unconfirmed.

**Median output generation was 8.35 tokens/s** across the 126 terminal trials, with a range of 2.57–9.41. The original segment's median was 8.46; round 3's was 8.17. These are engine decoding rates summarized per trial, not output tokens divided by total task time. Round 3 also contained a slower period: its middle 23 terminal trials had a median of 2.79 tokens/s, compared with 8.585 in its first 16. The cause was not established. Median prompt processing across terminal trials was 369.47 tokens/s.

Observed peaks were 10,654 MiB GPU memory, 17,260 MiB process-tree RSS, and 31,721 MiB whole-system RAM out of 31,865 MiB. These peaks came from different trials and must not be added; GPU measurements also include image-generation work. Shared GPU memory and paging were not measured. Logs contain eight recovered endpoint or nonzero-exit episodes, with no explicit CUDA out-of-memory or context-overflow message. Successful loading therefore does not establish reliable completion or quality across every task type.

Claude CLI **Sonnet 5.5 reviewed all 128 attempted results** in an independent pass: 52 have numeric scores on their exact applicable axes, 59 have qualitative reviews without invented numeric axes, and 17 record a missing declared artifact. The CLI response identifies `claude-sonnet-5-5` for every review. Each supplied artifact was capped at 20 KiB, with up to 20 KiB of supporting source context. This was source inspection, without new rendering or execution. Prior scores were withheld from Sonnet. Its scores remain advisory and separate by rubric; the original 128 Codex reviews are retained separately. Neither judge changes the deterministic capability scores.

The evidence shows both useful task execution and recurring weaknesses. Exact data cleanup and a successful test-driven repair contrast with later developer stalls, incomplete bookkeeping and fragile authored gate scripts. Some automatic passes accepted incomplete or incorrect work. Mock-tool startup and certificate failures, grounding checks, and a source section appended by the write tool also contributed to failures. The downloadable postmortems distinguish these framework and evaluator contributions from artifact defects. The observed change in developer results is descriptive; it does not establish a cause.

Download the [scorecard data](https://gezel.com/docs/assets/scorecards/2026-11-03-windows-saluki-native-0-1-57/scorecard.json), [full trial and review evidence](https://gezel.com/docs/assets/scorecards/2026-11-03-windows-saluki-native-0-1-57/scorecard-details.json), [final report](https://gezel.com/docs/assets/scorecards/2026-11-03-windows-saluki-native-0-1-57/report.md), [three-repetition trial table](https://gezel.com/docs/assets/scorecards/2026-11-03-windows-saluki-native-0-1-57/trial-scorecard.md), [Sonnet 5.5 reviews](https://gezel.com/docs/assets/scorecards/2026-11-03-windows-saluki-native-0-1-57/judging-sonnet-5-5.json), and [CPU-offload audit](https://gezel.com/docs/assets/scorecards/2026-11-03-windows-saluki-native-0-1-57/offload-frequency.json). [Download notes and validation](https://gezel.com/docs/assets/scorecards/2026-11-03-windows-saluki-native-0-1-57/README.md) explain the separate baselines, exclusions, bounded reviews, reproducible export and evidence hashes.
