# Lightweight Threat Model

Produce a lightweight threat model for a feature or system using a structured method (STRIDE over a simple data-flow diagram) and output a prioritized mitigation plan. First scopes the system by drawing its data-flow — actors, processes, data stores, and trust boundaries — and locks what is in scope, then enumerates threats per element using STRIDE (spoofing, tampering, repudiation, info-disclosure, denial-of-service, elevation-of-privilege) and rates each by likelihood and impact, then writes a threat-model report mapping each credible threat to a concrete mitigation and an owner. Use this for a threat model, security design review, STRIDE analysis, attack-surface mapping, or thinking through what could go wrong before building a feature — it yields a structured, prioritized set of threats and mitigations rather than an ad-hoc list of worries.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the system | Planner | draw the data-flow + trust boundaries, lock scope |
| 2 | Enumerate threats | Reviewer | STRIDE each element, rate likelihood × impact |
| 3 | Write the threat model | Reviewer | prioritized threats mapped to mitigations |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "threat model this" or "STRIDE analysis" or "what could go wrong with this design" or "security design review" or "map the attack surface" or "model the threats" in chat to start it.
