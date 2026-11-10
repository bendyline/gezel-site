# RSS / Feed Digest

Build a recurring digest from RSS/Atom feeds or news sources: fetch the latest items in the window, dedupe and cluster by topic, then write a scannable digest with one-line takes and source links. Scopes the feed list and digest format FIRST (which feeds, the time window, topic sections, item cap, ranking signal), then a developer fetches and normalizes the feed items into a deduped item list, then a copywriter writes the curated digest from those items only. Scoping sources and the window before fetching is what keeps the digest fresh, deduped, and within length instead of an unranked firehose. Use for RSS digests, news roundups, feed summaries, content curation, and recurring reading digests.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Source scope | Planner | lock the feeds, window, sections, and item cap |
| 2 | Gather feed items | Developer | fetch, normalize, dedupe items into an item list |
| 3 | Write the digest | Copywriter | compose the curated digest from gathered items |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "rss digest" or "news roundup" or "feed summary" or "summarize these feeds" or "curated reading digest" in chat to start it.
