# Docbench: models for document work

The [model scorecard](https://gezel.com/docs/model-scorecard/) asks whether a model can finish a job on its own. Docbench asks a different question: when DocBlocks hands a model a single piece of document work, how good is what comes back? It runs the same prompts, parsers, and repairs DocBlocks itself uses, so the score describes what you would see in the editor, not a lab version of it.

## What it measures

Every model gets the same documents and the same requests, in six groups:

- **Review** — the eight review styles, from a general read to resume feedback, fact checking, and plain-language edits. Each test document has known problems written into it, and a reviewer checks which ones the model found, which suggestions were real but small, and which were wrong. Clean documents check that a model does not invent problems.
- **Writing** — new content from a brief, plus text added to the end of a document or inserted in the middle of one, and rewrites (shorter, more formal, fixed grammar, bullets to prose).
- **Pictures** — choosing what to illustrate, building diagrams of thirteen kinds, drawing simple illustrations, and writing briefs for an image model. Drawings are judged as rendered pictures.
- **Slides** — turning a document into a slide deck.
- **Study** — summaries, notes, quizzes, and flashcards that stay true to the source.
- **Narration** — cleaning up a dictated transcript without changing what was said.

Each answer gets two kinds of marks. Automatic checks catch answers DocBlocks could not use at all: cut off, unparseable, or ignoring the request. An AI reviewer then grades the rest against a written rubric. An answer DocBlocks could not use scores zero.

## Reading the score

**Docbench** is a weighted average of the six groups, from 0 to 100. Review and writing count for a quarter each, pictures a fifth, study aids 15%, slides 10%, and narration 5%.

**95% range** is how far the score could plausibly move if we had picked different test documents. Two models whose ranges overlap are not reliably different, so they share a **band**, and the band is the fairest way to read the order.

**Usable** is the share of answers DocBlocks could show you at all, before any grading.

**Suggestions per document** breaks general review down by how much each suggestion would change the draft: small fixes, moderate changes, and substantial ones, beside the trivial and wrong suggestions a model added. A model that finds few substantial problems but many trivial ones will feel busy without being helpful.

Scores compare fairly only within one round: the same test set, the same reviewer, and the same version of the prompts. Each round says which it used.

Sometimes a fix to Gezel changes what a model can do, such as a model that could not produce structured answers until Gezel worked around it. Then that model is measured again in a **focused re-run** under the same tests, reviewer and date, and listed beneath the full round. Its row in the full table says it was re-measured, and its band is its place in the full field.

## Results

**2026-11-11 · NVIDIA RTX Spark N1X (6144-core GPU, 20-core CPU) · NVIDIA RTX Spark N1X (6144-core Blackwell RTX GPU) · 23 GB · llama-cpp · pack 0.2.1 · judged by claude-opus-5-5**

| Band | Model | Size | Docbench | 95% range | Review | Writing | Pictures | Slides | Study | Narration | Usable |
| ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 1 | Qwen 3.8 (27B, Q4) | 27B | **81** | 79–82 | 72 | 89 | 82 | 89 | 74 | 86 | 100% |
| 1 | Qwen 3.8 (27B, Q2) | 27B | **79** | 77–81 | 69 | 87 | 78 | 90 | 74 | 87 | 100% |
| 1 | Gemma 4 (12B, Q4) | 12B | **79** | 77–81 | 70 | 83 | 84 | 86 | 72 | 88 | 100% |
| 2 | Qwen 3.6 (35B-A3B, Q4) | 35B | **76** | 73–79 | 62 | 89 | 73 | 89 | 74 | 86 | 99% |
| 2 | Ornith 1.5 (9B, Q4) | 9B | **73** | 71–75 | 50 | 87 | 78 | 86 | 73 | 77 | 96% |
| 2 | Gemma 4 (E4B, Q4) | 8B | **73** | 71–75 | 52 | 86 | 74 | 86 | 69 | 86 | 99% |
| 2 | Qwen 3.5 (9B, Q4) | 9B | **72** | 70–74 | 52 | 87 | 72 | 84 | 71 | 82 | 99% |
| 3 | Qwen 3.5 (4B, Q4) | 4B | **71** | 69–72 | 47 | 85 | 77 | 86 | 67 | 79 | 100% |
| 3 | Nemotron 3.5 Bolt (E4B, Q4) | 8B | **69** | 67–72 | 50 | 85 | 66 | 82 | 68 | 83 | 99% |
| 4 | Granite 4.2 (8B, Q4) | 8B | **66** | 63–68 | 38 | 82 | 69 | 82 | 67 | 76 | 96% |
| 4 | Gemma 4 (E2B, Q4) | 2.3B | **64** | 61–66 | 40 | 74 | 69 | 80 | 65 | 72 | 97% |
| 4 | Nanbeige 4.2 (3B, Q4) (re-measured below) | 3B | **61** | 59–63 | 49 | 82 | 73 | 0 | 69 | 78 | 94% |
| 5 | MiniCPM5 (2B, Q4) | 2B | **59** | 57–62 | 35 | 74 | 60 | 75 | 59 | 75 | 97% |
| 5 | Granite 4.2 (3B, Q4) | 3B | **59** | 56–61 | 34 | 74 | 60 | 78 | 59 | 67 | 98% |
| 5 | GPT-OSS (20B, MoE, Q4) (re-measured below) | 20B | **58** | 54–62 | 22 | 82 | 66 | 67 | 70 | 33 | 86% |
| 5 | Qwen 3.5 (2B, Q4) | 2B | **56** | 53–58 | 30 | 74 | 51 | 75 | 56 | 71 | 95% |
| 5 | LFM3 (1.7B, Q4) | 1.7B | **55** | 52–58 | 30 | 68 | 70 | 76 | 57 | 13 | 92% |
| 6 | Llama 3.2 (3B, Q4) | 3B | **54** | 51–56 | 32 | 66 | 56 | 64 | 53 | 68 | 94% |
| 7 | LFM2.5 (2.6B, Q4) | 2.6B | **47** | 44–49 | 40 | 72 | 50 | 0 | 57 | 0 | 85% |
| 7 | Qwen 3.5 (0.8B, Q4) | 0.8B | **43** | 40–45 | 20 | 56 | 32 | 70 | 46 | 67 | 88% |
| 8 | MiniCPM5 (1B, Q4) | 1B | **37** | 35–40 | 14 | 54 | 32 | 63 | 34 | 48 | 85% |

Suggestions per document in general review (moderate-quality drafts):

| Model | Small fixes | Moderate | Substantial | Trivial | Wrong |
| --- | ---: | ---: | ---: | ---: | ---: |
| Qwen 3.8 (27B, Q4) | 2.8 | 2.0 | 0.3 | 0.0 | 0.0 |
| Qwen 3.8 (27B, Q2) | 2.8 | 1.5 | 0.3 | 0.8 | 0.0 |
| Gemma 4 (12B, Q4) | 2.5 | 1.5 | 0.5 | 0.3 | 0.0 |
| Qwen 3.6 (35B-A3B, Q4) | 2.7 | 1.3 | 0.3 | 0.3 | 0.3 |
| Ornith 1.5 (9B, Q4) | 2.5 | 0.8 | 0.3 | 2.0 | 1.0 |
| Gemma 4 (E4B, Q4) | 2.3 | 1.0 | 0.0 | 0.8 | 0.5 |
| Qwen 3.5 (9B, Q4) | 1.8 | 1.0 | 0.8 | 0.5 | 0.5 |
| Qwen 3.5 (4B, Q4) | 1.0 | 0.3 | 0.3 | 0.8 | 0.8 |
| Nemotron 3.5 Bolt (E4B, Q4) | 1.8 | 0.3 | 0.0 | 0.5 | 1.0 |
| Granite 4.2 (8B, Q4) | 2.7 | 1.3 | 0.0 | 1.3 | 0.0 |
| Gemma 4 (E2B, Q4) | 1.3 | 0.8 | 0.0 | 1.3 | 1.5 |
| Nanbeige 4.2 (3B, Q4) | 1.8 | 0.5 | 0.3 | 1.3 | 1.0 |
| MiniCPM5 (2B, Q4) | 1.7 | 0.3 | 0.3 | 1.3 | 1.3 |
| Granite 4.2 (3B, Q4) | 0.5 | 0.0 | 0.0 | 0.5 | 0.0 |
| GPT-OSS (20B, MoE, Q4) | 4.0 | 0.0 | 0.0 | 1.0 | 1.0 |
| Qwen 3.5 (2B, Q4) | 1.3 | 0.3 | 0.0 | 1.3 | 0.8 |
| LFM3 (1.7B, Q4) | 3.0 | 0.3 | 0.0 | 4.0 | 3.3 |
| Llama 3.2 (3B, Q4) | 0.8 | 1.0 | 0.3 | 1.5 | 1.0 |
| LFM2.5 (2.6B, Q4) | 2.5 | 0.3 | 0.0 | 1.0 | 0.3 |
| Qwen 3.5 (0.8B, Q4) | 0.7 | 0.0 | 0.0 | 3.3 | 0.3 |
| MiniCPM5 (1B, Q4) | 0.0 | 0.0 | 0.3 | 3.3 | 1.0 |

docbench 0.2.1 · public fixtures 27f9a7ba3ea4 · 32768-token launch context · judge claude-opus-5-5 (prompt v2) · prompts dated 2026-11-10

### Focused re-run — 2026-11-12

**2026-11-12 · NVIDIA RTX Spark N1X (6144-core GPU, 20-core CPU) · NVIDIA RTX Spark N1X (6144-core Blackwell RTX GPU) · 23 GB · llama-cpp · pack 0.2.2 · judged by claude-opus-5-5**

| Band | Model | Size | Docbench | 95% range | Review | Writing | Pictures | Slides | Study | Narration | Usable |
| ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 3 | Nanbeige 4.2 (3B, Q4) | 3B | **71** | 69–73 | 53 | 83 | 71 | 83 | 69 | 79 | 97% |
| 3 | GPT-OSS (20B, MoE, Q4) | 20B | **67** | 64–69 | 40 | 83 | 73 | 79 | 67 | 75 | 97% |

Focused re-run of nanbeige4.2-3b-q4, gpt-oss-20b-q4 beside docbench-sweep-0.2.1-2026-11-10, after fixes to how Gezel serves them; bands place them in that round's field · docbench 0.2.2 · public fixtures 27f9a7ba3ea4 · 32768-token launch context · judge claude-opus-5-5 (prompt v2) · prompts dated 2026-11-10

## How the reviewer is checked

An AI reviewer is only worth trusting if it is consistent and hard to fool, so before a round is published the reviewer passes three tests: it must give nearly the same marks when asked twice, agree with a second reviewer from a different model family, and mark down deliberately damaged answers (cut short, padded, with invented numbers, or ignoring the request) at least nine times in ten.

Some test documents are kept private and used only in published rounds. If a model does much better on the public documents than the private ones, that is a sign the prompts have been tuned to the test rather than to real work.

## Choosing from this

In DocBlocks, the model list ranks models that fit your computer by their docbench score, so the first suggestion is the best measured model your hardware can run. If a model has no score, it has not been measured yet. That is not a verdict either way.
