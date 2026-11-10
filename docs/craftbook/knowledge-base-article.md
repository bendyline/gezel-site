# Knowledge Base Article

Write a support knowledge-base article that lets a user solve their problem without contacting support: it first scopes the exact user problem, the search terms they would use, prerequisites, and the success outcome, then writes a task-oriented article with a clear title, a short overview, numbered steps with expected results, screenshots/placeholders where needed, and a troubleshooting section, then a review pass verifies accuracy and self-service completeness. Covers help center article, support documentation, how-to article, KB article, self-service docs, and product help. Scoping the precise problem and search terms before writing is the point: a small model that pins the one job-to-be-done writes a findable, followable article instead of a vague overview that leaves the user still stuck.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Article scope | Planner | lock the problem, search terms, prerequisites, and success outcome |
| 2 | Write the article | Copywriter | write the task-oriented, self-service article |
| 3 | Accuracy & completeness review | Reviewer | verify the article is accurate and lets a user self-serve |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "write a knowledge base article" or "help center article" or "support how-to" or "kb article" or "self-service docs" in chat to start it.
