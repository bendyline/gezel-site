# Index & Describe an Image Set

Given a folder of images, produce a structured index that describes each one (caption, tags, notable content) in a consistent schema, then validates coverage and consistency. For cataloguing, search, or alt-text generation over an image collection.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the index | Planner | fields per image + output schema + criteria |
| 2 | Describe each image | Developer | read each image, write structured descriptions |
| 3 | Assemble the index | Developer | write the index file in the chosen format |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "index images" or "describe images" or "caption a folder" or "image catalog" in chat to start it.
