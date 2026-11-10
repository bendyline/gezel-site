# Comprehensive Codebase Review

The definitive deep, consultant-level review of an entire codebase and its architecture. Before any review turn runs, the runtime brings the project's static index and AI index as up to date as they can get and publishes an honest coverage snapshot the report must cite. The review then harvests every indexed finding (per-file AI reviews, tracked issues, security findings, dependency advisories), assesses the architecture and module boundaries, sweeps for duplicated code and logic, dead code, hygiene problems, embarrassments, and lightweight security issues — verifying every lead in real source — and clusters it all into systemic themes. The deliverable is a prioritized consultant report with a per-dimension scorecard, file-and-line-cited findings, quick wins vs strategic recommendations, and a machine-readable findings file, gated so no fabricated citation survives. Use for a comprehensive codebase review, a deep code and architecture audit, a code-quality due-diligence pass, or the definitive 'please review my whole codebase' request.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Survey the system | Reviewer | read the runtime's index-freshness snapshot and map the whole system before judging any of it |
| 2 | Harvest indexed findings | Reviewer | pull every existing AI-review, security, and dependency lead into one evidence base |
| 3 | Assess the architecture | Reviewer | boundaries, coupling, dependency direction, pattern consistency, and duplicated logic — verified in source |
| 4 | Sweep quality and hygiene | Reviewer | duplicated code, dead code, embarrassments, and lightweight security problems — verified in source |
| 5 | Synthesize themes | Reviewer | cluster every confirmed finding into root-cause themes; rank; split quick wins from strategic work |
| 6 | Write the consultant report | Reviewer | the definitive deliverable: scorecard, cited findings, recommendations, and a machine-readable findings file |
| 7 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 8 | Finish | Reviewer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "comprehensive codebase review" or "deep codebase review" or "review my whole codebase" or "consultant level code review" or "deep dive on code quality and architecture" or "full audit of the codebase" or "what is wrong with this codebase" in chat to start it.

Needs toolsets: `builtin.code-intel`, `builtin.security-intel`, `builtin.git`.
