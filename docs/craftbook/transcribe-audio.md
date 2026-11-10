# Transcribe Audio or Video

Convert an audio or video recording into an accurate, readable transcript using speech-to-text, with speaker labels and timestamps. Scopes the output format, speaker-labeling, and timestamp granularity FIRST so the transcript is usable downstream (search, subtitles, minutes), then transcribes the full recording end-to-end, then verifies coverage against the recording's duration and checks for dropped segments. The scope-first ordering matters because deciding timestamp cadence and speaker handling up front is what separates a clean, searchable transcript from a wall of unattributed text.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the transcript | Planner | format, speaker labels, timestamp cadence, glossary |
| 2 | Transcribe the recording | Developer | run STT over the full file, label speakers, timestamp |
| 3 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 4 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "transcribe this audio" or "transcribe a video" or "speech to text" or "get a transcript" or "convert recording to text" in chat to start it.
