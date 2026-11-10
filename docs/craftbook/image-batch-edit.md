# Batch Image Transform

Apply a consistent transform across a whole folder of images — resize, crop to a ratio, convert format, compress, watermark, or recolor — and verify every file came out correct. Scope the exact transform and a verification rule FIRST (target dimensions, format, quality, naming) so the batch is deterministic and reproducible, then process every file and prove the output count, dimensions, and format match the spec. Covers bulk image processing, resizing, format conversion, compression, watermarking, and folder-wide edits.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the transform | Planner | lock the exact transform, output spec, and verify rule |
| 2 | Process the folder | Developer | apply the transform to every file |
| 3 | Verify the batch | Reviewer | confirm count, dimensions, and format per file |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "batch edit images" or "resize a folder of images" or "convert image formats" or "compress images" or "bulk image transform" in chat to start it.
