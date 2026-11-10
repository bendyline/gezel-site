# Typed SDK Wrapper for an External API

Wrap a third-party HTTP API as a clean, typed client library — studying the real API surface first so the wrapper matches reality, not guesses. Studies the API FIRST — endpoints, auth, request/response shapes, rate limits, error formats, and pagination from the actual docs — then builds a typed client with sensible methods and error handling, then tests each method against a mocked API including auth and error paths. Covers reading API docs, typed request/response models, auth handling, retry/rate-limit awareness, pagination helpers, error mapping, and a mockable client.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Study the API | Researcher | extract endpoints, auth, shapes, limits from the docs |
| 2 | Build the client | Developer | implement the typed client to the study |
| 3 | Test against a mock | Developer | test each method, auth, errors, pagination |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "wrap an api" or "build an sdk client" or "typed api client" or "create a wrapper for an external api" or "api client library" in chat to start it.
