# Text-to-Speech a Folder

Turn a folder of text files (articles, chapters, notes, markdown) into a set of spoken audio files using text-to-speech, so a reading list becomes a listening list. Scopes the voice, file mapping, and chunking rules FIRST so long inputs do not get truncated or mispronounced, then synthesizes one audio artifact per source file with a consistent voice, then verifies every file was rendered and is audible. The scope-before-synthesize ordering is the point: deciding chunk size, file naming, and a manifest up front is what keeps a batch TTS run complete and re-runnable instead of half-finished.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the synthesis run | Planner | voice, file mapping, chunking, output manifest |
| 2 | Synthesize the audio | Developer | render one audio file per source file with the locked voice |
| 3 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 4 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "convert text to audio" or "text to speech a folder" or "narrate my articles" or "make audio from text files" or "tts batch" in chat to start it.
