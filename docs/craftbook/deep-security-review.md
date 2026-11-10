# Deep Security Review

Run a slow, thorough, WHOLE-CODEBASE security audit that looks for SYSTEMIC weaknesses — a vulnerability class repeated across many routes, a missing control at an architectural layer, inconsistent authorization, ad-hoc secret handling, a trust-boundary violation — not just isolated issues in one file. First reconnoiters the whole system using gezel's static security index (dependency inventory, attack surface, source/sink findings, taint reachability), then builds a threat model to find the highest-blast-radius areas, then audits those areas holistically confirming real source-to-sink paths and consistency of controls across every entry point, then clusters findings into root-cause systemic themes, then writes a prioritized report with a machine-readable findings file. Use this for a deep or systemic security review, a codebase security audit, a nightly security sweep, or finding security issues across a whole project — it is intentionally broader and deeper than a PR-time diff review (see pr-security-review for that).

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Reconnoiter the whole system | Reviewer | build a whole-system security map from the static index |
| 2 | Threat-model the system | Reviewer | assets, actors, STRIDE per boundary, highest blast radius |
| 3 | Audit for systemic weaknesses | Reviewer | confirm real source→sink paths and control consistency across all entry points |
| 4 | Cluster findings into systemic themes | Reviewer | group findings by root cause; rank by blast radius |
| 5 | Write the security report | Reviewer | systemic report + machine-readable findings, all citing real files |
| 6 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 7 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "deep security review" or "audit the codebase for vulnerabilities" or "systemic security review" or "find security issues across the whole codebase" or "whole-codebase security audit" or "nightly security audit" in chat to start it.

Needs toolsets: `builtin.security-intel`, `builtin.code-intel`.
