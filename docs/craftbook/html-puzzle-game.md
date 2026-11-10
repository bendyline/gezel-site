# HTML Puzzle Game

Build a single-file HTML logic or puzzle game such as a match-3, sliding tile, Sokoban, 2048, minesweeper, or sudoku. Locks the rule system, the solve/fail condition, and the win detection first, then a clean grid visual language, then implements deterministic board state with valid-move enforcement. Puzzle games live or die on correct rules and reliable win detection, so the design phase pins the exact legal-move and victory logic before any rendering — the ordering that prevents a small model from shipping a grid that looks right but never registers a win.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Game design | Designer | rules, legal moves, win/fail detection |
| 2 | Visual design | Designer | grid look, tile states, feedback |
| 3 | Build | Developer | implement board state + move rules in index.html |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "puzzle game" or "logic game" or "make a 2048" or "sliding puzzle" or "match three game" or "sudoku" in chat to start it.
