# GraphQL API

Build a GraphQL API with a typed schema (SDL), resolvers, queries, mutations, and input validation. Designs the schema FIRST — types, fields, nullability, query/mutation operations, and the resolver-to-data mapping — because in GraphQL the schema IS the contract, then implements resolvers, then writes operation tests covering each query, mutation, and error. Covers GraphQL schema definition language, resolvers, nullable vs non-null fields, mutations, query arguments, N+1 awareness, and error handling.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Schema design | Planner | lock the SDL types, queries, mutations, nullability |
| 2 | Build resolvers | Developer | implement the schema + resolvers |
| 3 | Write operation tests | Developer | test each query, mutation, and error |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "build a graphql api" or "graphql schema and resolvers" or "create a graphql server" or "graphql endpoint" in chat to start it.
