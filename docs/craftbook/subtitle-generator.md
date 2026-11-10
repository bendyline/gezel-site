# Subtitle & Caption Generator

Generate time-synced subtitles/captions for a video in a standard caption format (SRT or WebVTT), so the video is accessible and watchable without sound. Scopes the caption format and timing/reading-speed rules FIRST, transcribes the audio with precise word timings, then formats those into properly cued, line-length-limited caption cues. The transcribe-then-format split is deliberate: getting accurate text and timings is a different skill from chunking them into readable, on-screen-friendly cues that respect reading speed and never overlap.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the captions | Planner | format (SRT/VTT), timing rules, line limits, language |
| 2 | Transcribe with timings | Developer | STT the audio into word/segment timestamps |
| 3 | Format the caption file | Developer | chunk timed text into valid SRT/VTT cues |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "generate subtitles" or "make captions for a video" or "create an srt file" or "add closed captions" or "subtitle this video" in chat to start it.
