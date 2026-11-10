# PowerPoint from Content

Turn source content into a real editable PowerPoint file (.pptx), not an HTML deck. Locks the narrative and one message per slide, writes ordinary Markdown with one H1 per slide, then uses DocBlocks for theme-aware conversion, visual preview, and artifact saving. No Developer is needed merely to export the deck.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Acquire and verify sources | Researcher | Read the exact supplied source and strongly prefer authoritative research before outlining, while allowing an honest no-research path. |
| 2 | Lock the slide outline | Planner | Lock the audience, purpose, sequence, evidence, and one message per slide. |
| 3 | Write the Markdown deck | Copywriter | Write {{outputDir}}/deck.md with exactly one matching H1 per locked outline slide. |
| 4 | Review narrative and grounding | Reviewer | Verify slide parity, factual traceability, and presentation readiness before conversion. |
| 5 | Save the PowerPoint | Designer | Convert the approved Markdown, check the saved PPTX, and finish with its file location. |

Say something like "make a powerpoint" or "create a pptx" or "powerpoint from this content" or "turn this into a presentation" or "build a slide deck file" or "export these slides to powerpoint" in chat to start it.

Needs toolsets: `docblocks`.
