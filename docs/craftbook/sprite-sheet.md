# Game Sprite Sheet

Produce a game-ready sprite sheet — a character or object with its animation frames (idle, walk, jump, attack) on a uniform grid — plus the frame metadata (JSON atlas) a game engine needs to slice it. Lock the style and the frame inventory FIRST (cell size, pivot, palette, which animations and how many frames each) because a sprite sheet is only usable if every cell is the same size and the pivot is consistent; then generate the frames and pack them into a sheet with a matching atlas. Covers sprite sheets, game art, animation frames, texture atlases, pixel-art characters, and 2D game assets.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Style & frame scope | Designer | lock cell size, pivot, palette, and frame inventory |
| 2 | Generate frames | Image Generator | draw each animation frame on the uniform cell |
| 3 | Pack the sheet + atlas | Developer | compose the grid sheet and emit the JSON atlas |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "make a sprite sheet" or "game character sprites" or "animation frames for a game" or "texture atlas" or "pixel art sprite sheet" in chat to start it.
