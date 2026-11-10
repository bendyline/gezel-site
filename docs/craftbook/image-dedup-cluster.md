# Image Dedup & Cluster

Find and group near-duplicate images across a folder — exact dupes, resized/re-encoded copies, and visually similar shots from the same burst — using perceptual hashing or visual similarity, then report clusters with a recommended keeper per group. Lock the similarity definition and thresholds FIRST (what counts as a duplicate vs merely similar) because the whole result hinges on that line; then analyze pairwise, cluster, and produce a human-reviewable report. Covers deduplication, near-duplicate detection, perceptual hashing, image clustering, burst grouping, and library cleanup.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the dedup | Planner | define similarity, thresholds, and the keeper rule |
| 2 | Analyze similarity | Developer | hash, compare, and cluster the images |
| 3 | Write the report | Developer | produce the reviewable dedup report |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "find duplicate images" or "cluster similar photos" or "dedupe my image folder" or "near-duplicate detection" or "group similar images" in chat to start it.
