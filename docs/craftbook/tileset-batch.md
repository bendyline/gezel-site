# Tileset Batch

Produce a style-locked batch of tiles and account for every one: named to the convention, sized to spec, generated against the library's style anchor, and appended to the manifest with tags — an asset library a game engine can trust, not a folder of maybes. Locks the tile list and the naming convention FIRST, then generates the batch in the house style, then writes the manifest records and the batch summary. Use for tile batches, 'we need forest tiles', growing a game's asset library, style-consistent tilesets, and keeping the asset manifest honest.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Lock the batch | Designer | tile list, naming convention, size spec, style anchor |
| 2 | Generate the tiles | Image Generator | the batch, named to the convention, in the house style |
| 3 | Write the manifest records | Researcher | one record per new tile, appended, ids unique |
| 4 | Write the batch summary | Copywriter | what was made, how it is named, what the library now holds |
| 5 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 6 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "make a batch of tiles" or "we need more tiles for the game" or "tileset for the platformer" or "generate the tile batch" or "grow the asset library" in chat to start it.
