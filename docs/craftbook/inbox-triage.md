# Inbox Triage & Reply Drafts

Triage a batch of incoming emails or messages into priority buckets and draft replies for the ones that need them. Locks the triage rules and bucket taxonomy FIRST (urgent / needs-reply / FYI / archive, plus the criteria for each and a reply policy), then classifies every message deterministically against those rules, then a copywriter drafts on-voice replies only for the messages flagged needs-reply. The rules-before-triage ordering is what stops a small model from inventing ad-hoc categories and gives the reviewer something to grade. Use for inbox zero, support-queue triage, email sorting, message prioritization, and auto-drafting responses.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Rules scope | Planner | lock the bucket taxonomy + triage rules + reply policy |
| 2 | Triage | Developer | classify every message against the locked rules |
| 3 | Draft replies | Copywriter | write on-voice replies for the flagged messages |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "triage my inbox" or "sort these emails" or "draft replies" or "inbox zero" or "prioritize my messages" in chat to start it.
