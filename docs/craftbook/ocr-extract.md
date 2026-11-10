# OCR a Folder of Scans

Extract the text from a folder of scanned documents or photographed pages into clean, structured text — preserving reading order, paragraph breaks, and per-file provenance — then verify the extraction against the source images. Scope FIRST the languages, output structure (one file per scan vs a combined doc), and how to handle tables/columns/low-confidence regions, because OCR quality is dominated by handling layout and flagging uncertainty; then run extraction and verify a sample reads correctly. Covers OCR, text extraction, scanned documents, digitizing paper, receipt/invoice text, and image-to-text.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the extraction | Planner | languages, output structure, layout & confidence rules |
| 2 | Extract the text | Developer | OCR each scan into structured text |
| 3 | Verify the extraction | Reviewer | check a sample of outputs against the source images |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "ocr a folder of scans" or "extract text from images" or "digitize scanned documents" or "image to text" or "read text from photos" in chat to start it.
