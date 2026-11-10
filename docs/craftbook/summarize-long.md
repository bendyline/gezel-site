# Summarize a Long Document

Distill a long document into a faithful, well-structured summary at a chosen depth: it first scopes the audience, the target length and format (TL;DR line, executive summary, or bulleted key points), and what the reader must take away, then writes the summary capturing every major point and decision in proportion, with nothing invented and nothing critical dropped. Covers summarize, TL;DR, executive summary, condense a document, key takeaways, and abstract writing. Scoping audience and depth before summarizing is the point: a small model that knows who it is for and how long it should be avoids both the bloated near-copy and the lossy summary that omits the document's actual conclusion.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Summary scope | Planner | lock audience, depth, format, and required takeaways |
| 2 | Write the summary | Copywriter | write the faithful summary to the locked depth and format |
| 3 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 4 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "summarize this document" or "write a tldr" or "executive summary" or "condense this" or "key takeaways" in chat to start it.
