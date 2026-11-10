# Draft a Social Post

Draft one social post from idea to approved copy. Reads your voice guide and recent posts, grounds the angle in what your feeds actually responded to, drafts the base message, then fits a variant to each platform's limits — Bluesky 300 graphemes, X 280 characters, Instagram captions with the hook in the first 125 characters, LinkedIn up to 3000 characters in a professional register — with hashtags where idiomatic, alt text for media, and thread splits when the copy runs long. Then it stops for your review: approve, ask for a revision round, or approve and queue to Bluesky through the outbox. Covers social media copywriting, tweet and thread drafting, Bluesky posts, Instagram captions, post scheduling, and a human approval gate. Nothing is ever published without your say-so.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Brief | Developer | Resolve the topic and angle, read the voice, and write the drafting brief. |
| 2 | Draft the post and variants | Copywriter | Write the base copy and one platform-fitted variant per target, each within its limit. |
| 3 | User review | Developer | The human gate. Present the draft and variants; wait for an explicit answer. The scheduler stands down while the question is pending. |
| 4 | Commit the post | Developer | Move the approved draft out of staging into posts/<created>-<slug>/ and update the index. |
| 5 | Queue to Bluesky (only when asked) | Developer | Queue the approved Bluesky variant through the outbox — skipped unless the review answer asked for it. |
| 6 | Finish | Developer | Summarize the outcome and stop. |

Say something like "draft a social post" or "write a social post" or "draft a post about" or "draft a bluesky post" or "draft a tweet" in chat to start it.
