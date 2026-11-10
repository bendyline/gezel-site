# Digital Board Game

Build a single-file web version of a turn-based board game such as tic-tac-toe, checkers, connect-four, reversi, or a simple chess variant, with two-player hotseat or a basic AI opponent. Locks the rules, turn order, legal-move set, and win/draw detection first, then the board visual language, then implements an authoritative turn state machine. Board games demand correct turn alternation and exhaustive win/draw detection, so the rules phase enumerates every terminal condition before rendering — the ordering that stops a small model from shipping a board where turns desync or a win goes unnoticed.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Rules design | Designer | turn order, legal moves, win/draw detection |
| 2 | Visual design | Designer | board look, pieces, turn indicator |
| 3 | Build | Developer | implement the turn state machine in index.html |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "board game" or "tic tac toe" or "connect four" or "checkers" or "make chess" or "two player game" in chat to start it.
