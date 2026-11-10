# Coherent Icon Pack

Produce a coherent set of UI icons that look like they belong to one family — consistent grid, stroke weight, corner radius, optical sizing, and metaphor language — from a named list of concepts. Lock the style system (grid, stroke, padding, keyline shapes) BEFORE drawing any icon, because icon-set quality is almost entirely about consistency: a pack of individually-nice icons with mismatched strokes looks broken. Then generate every icon to the system and assemble a previewable sheet. Covers icon sets, UI icons, SVG icon libraries, glyph packs, and design systems.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Style scope | Designer | lock grid, stroke, radius, padding, and the icon list |
| 2 | Generate icons | Image Generator | draw every icon to the locked system |
| 3 | Assemble the sheet | Developer | preview grid + usage snippet |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "make an icon pack" or "design a set of icons" or "ui icon set" or "consistent icons" or "svg icon library" in chat to start it.
