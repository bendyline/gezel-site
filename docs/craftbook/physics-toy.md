# Interactive Physics Toy

Build a single-file interactive canvas physics or particle toy such as a bouncing-ball sandbox, gravity wells, springs, cloth, fluid, or a boids flock that the user can poke with the mouse. Defines the simulation model — forces, integration, collisions, and the interaction verbs — first, then implements a stable per-frame integrator. Physics toys feel magical only when the numerics are stable and the mouse interaction is responsive, so the concept phase pins the forces and integration scheme before any drawing, the ordering that keeps a small model from shipping a jittery or exploding sim.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Concept | Designer | forces, integration, collisions, interaction verbs |
| 2 | Build | Developer | implement the integrator + interaction in index.html |
| 3 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 4 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "physics simulation" or "particle toy" or "bouncing balls" or "gravity sandbox" or "interactive canvas" or "boids" in chat to start it.
