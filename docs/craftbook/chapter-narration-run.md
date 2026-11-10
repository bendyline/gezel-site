# Narrate a Chapter

Take one chapter from manuscript to narrated audio, deliberately: a narration script with pronunciations and pauses marked before anything renders, the audio driven through the project's narration capabilities with a run log, and a listen-check against the text — no skipped paragraphs, no mangled names. Locks the chapter and the style sheet FIRST (voice, pace, every proper noun's pronunciation), then preps the script, then renders, then checks coverage. Use for narrating a chapter, audiobook recording runs, text-to-speech passes, and 'read chapter two aloud'.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the chapter | Developer | chapter locked, style sheet read, pronunciation list built |
| 2 | Prep the narration script | Copywriter | the chapter as a marked-up narration script |
| 3 | Render the audio | Developer | the chapter rendered to audio with its run log |
| 4 | Listen-check and report | Reviewer | coverage and name check against the manuscript, run report |
| 5 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 6 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "narrate the chapter" or "record chapter two" or "render the narration" or "audiobook chapter run" or "read the chapter aloud" in chat to start it.
