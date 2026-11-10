# SEO Metadata Pack

Generate a complete on-page SEO metadata pack for a set of pages: it first scopes each page's primary keyword and search intent and the length/format rules (title tag, meta description, Open Graph, Twitter card, slug), then writes optimized, unique metadata for every page that respects pixel/character limits and front-loads the keyword, producing a structured JSON file ready to drop into a CMS or templating layer. Covers SEO metadata, meta tags, title tags, meta descriptions, Open Graph tags, social cards, and on-page SEO. Scoping the keyword and limits per page before writing is the point: a small model that fixes the rules first produces unique, limit-respecting tags across the whole set, instead of duplicate titles and descriptions that get truncated in the SERP.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Metadata scope | Planner | lock per-page keyword/intent and the metadata field rules |
| 2 | Write the metadata | Copywriter | write unique, limit-respecting metadata for every page |
| 3 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 4 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "write seo meta tags" or "generate meta descriptions" or "title tags for pages" or "open graph tags" or "seo metadata pack" in chat to start it.
