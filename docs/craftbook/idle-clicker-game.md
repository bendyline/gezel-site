# Idle / Incremental Game

Build a single-file idle or incremental clicker game such as a cookie/factory clicker with upgrades, generators, and exponential growth. Designs the resource economy — base click yield, generator costs, cost-scaling factor, and per-second production — first, then the layout, then implements a tick loop with persistent-feeling progression. Idle games are an economy problem before a UI problem: if costs and yields are not tuned the game is boring in 10 seconds or unwinnable, so the economy phase locks the exact numbers and growth curve before any rendering.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Economy design | Designer | resources, generator costs, scaling, tick rate |
| 2 | Visual design | Designer | big-click target, shop layout, number formatting |
| 3 | Build | Developer | implement the tick loop + shop in index.html |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "idle game" or "clicker game" or "incremental game" or "cookie clicker" or "factory game" or "make an idle game" in chat to start it.
