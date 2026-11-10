# Social Digest

The overnight read of your social feeds. Scans the synced Bluesky, X, and Instagram corpus records since the last look plus your own post index, then leaves a morning digest: what happened on each feed, notable mentions and replies with the people who wrote them, which posts moved on likes, reposts, and replies, and suggested next moves — each carrying a one-click action to draft the follow-up post or a reply task. Covers social media monitoring, engagement tracking, mention triage, and a nightly social summary grounded entirely in real synced records. No connected feed? It still runs, reports what the workspace knows, and names the gap instead of inventing activity.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scan the feeds | Developer | Collect raw notes from every synced corpus record in the window — the only numbers the digest may cite. |
| 2 | Compose the digest | Developer | Write the morning digest from the scan notes, ending with 1-3 one-click actions. |
| 3 | Evaluate | Reviewer | Grade the digest against every criterion. All pass — finish; any fail — loop back to compose with the named gaps. |
| 4 | Finish | Developer | Stamp the summary note and stop. |

Say something like "social digest" or "what happened on our feeds" or "engagement digest" or "overnight social summary" in chat to start it.
