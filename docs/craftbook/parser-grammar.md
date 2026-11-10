# Parser / DSL for a Small Grammar

Build a parser for a small domain-specific language or data format — tokenize, parse to an AST, and report clear errors on malformed input. Designs the grammar FIRST — the token set, the grammar rules (BNF-style), operator precedence, the AST node shapes, and the error strategy — then implements lexer + parser producing the AST, then tests valid inputs parse to the right AST and invalid inputs fail with useful errors. Covers tokenization/lexing, recursive-descent parsing, grammar rules, operator precedence, AST construction, and helpful parse-error messages.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Grammar design | Planner | lock tokens, grammar rules, precedence, AST shapes |
| 2 | Build the parser | Developer | implement lexer + parser → AST |
| 3 | Test the parser | Developer | test valid ASTs and useful error reporting |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "build a parser" or "parse a dsl" or "write a grammar and parser" or "tokenize and parse" or "make a mini language" in chat to start it.
