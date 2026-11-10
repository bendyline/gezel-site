# Rough Cut Assembly

Execute the cut list and prove it ran: every clip verified against the media index before anything renders, the assembly driven through the project's media pipeline with a run log, and the result checked against the expected duration — an assembly you can trust unwatched. Locks the pre-flight checks FIRST (clips exist, in and out points sit inside their durations, failure handling decided), then runs the assembly, then verifies and reports. Use for rough cuts, assembling a cutlist, executing an edit pass, render runs, and 'put the cut together'.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Pre-flight the cut list | Developer | cutlist validated against the media index, run plan locked |
| 2 | Run the assembly | Developer | the cutlist executed through the media pipeline, log on disk |
| 3 | Verify and report | Reviewer | expected versus actual, segment count, the honest run report |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "assemble the rough cut" or "run the cutlist" or "put the cut together" or "render the rough cut" or "execute the edit" in chat to start it.
