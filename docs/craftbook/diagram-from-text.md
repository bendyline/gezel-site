# Diagram from Text

Render a clear technical diagram — flowchart, architecture, sequence, ER, or org chart — from a plain-language description, as code-defined (Mermaid/Graphviz/SVG) so it is editable and version-controllable rather than a flat picture. Spec FIRST the diagram type, the exact nodes and edges, and the layout direction, because diagrams fail when relationships are wrong or the graph is an unreadable tangle; then build the diagram so it renders, with every described entity and relationship present and labeled. Covers flowcharts, architecture diagrams, sequence diagrams, ER diagrams, org charts, mind maps, and diagram-as-code.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Spec the diagram | Planner | lock type, nodes, edges, labels, and layout |
| 2 | Build the diagram | Developer | author the renderable diagram to the spec |
| 3 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 4 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "make a diagram from this description" or "draw a flowchart" or "architecture diagram" or "sequence diagram" or "turn text into a diagram" in chat to start it.
