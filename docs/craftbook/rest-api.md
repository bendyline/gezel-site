# REST API Service

Build a RESTful HTTP API service with resource endpoints, JSON request/response bodies, status codes, validation, and error handling. Locks the contract FIRST — resources, routes, verbs, request/response shapes, status-code map, auth, and pagination — so the implementation has a fixed target, then builds the server, then writes endpoint tests that exercise every route and error case. Covers CRUD endpoints, RESTful routing, OpenAPI-style contract, HTTP status codes, input validation, JSON serialization, and integration tests against the running handler.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Contract design | Planner | lock resources, routes, request/response shapes, status codes |
| 2 | Build the service | Developer | implement the server to the locked contract |
| 3 | Write endpoint tests | Developer | test every route, status code, and error path |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "build a rest api" or "create an http api" or "crud endpoints" or "make a backend api" or "json api service" in chat to start it.
