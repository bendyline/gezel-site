# Incident Postmortem

Write a blameless incident postmortem after a production outage or degradation — a structured, factual document covering the impact, a precise timeline (detection → diagnosis → mitigation → resolution), the root cause and contributing factors via a five-whys analysis, what went well and what went poorly, and concrete, owned, dated action items that prevent recurrence. A researcher assembles the verified timeline and evidence from logs/alerts/chat, a copywriter writes the blameless narrative and root-cause analysis, and a reviewer checks the timeline is accurate, the analysis reaches a true root cause, and every action item is specific and owned. Use this for outage retrospectives, severity-incident reviews, and any 'what happened and how do we prevent it' writeup.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Assemble the timeline | Researcher | build a verified, timestamped factual timeline |
| 2 | Write the postmortem | Copywriter | blameless narrative, root-cause, and owned action items |
| 3 | Review for accuracy and blamelessness | Reviewer | check root cause, timeline fidelity, and action quality |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "write a postmortem" or "incident retrospective" or "outage writeup" or "root cause analysis" or "post-incident review" in chat to start it.
