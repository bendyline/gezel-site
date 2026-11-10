# FAQ from Source Docs

Build a grounded FAQ page by mining real source documents for the questions users actually ask, then writing tight, accurate answers traced back to the source: it first researches the corpus to extract candidate questions, dedupes and groups them, and ranks by likely frequency, then writes clear question-and-answer pairs where every answer is supported by the docs. Covers FAQ generation, help center questions, support docs, knowledge mining, common questions, and self-service content. Mining the source before writing is the point: a small model that derives questions from the actual docs avoids inventing FAQs nobody asks and answers the docs cannot support.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Mine the questions | Researcher | extract, dedupe, group, and rank candidate questions from the docs |
| 2 | Write the FAQ | Copywriter | write grounded Q&A pairs in scannable sections |
| 3 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 4 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "create an faq" or "faq from docs" or "generate help questions" or "common questions page" or "support faq" in chat to start it.
