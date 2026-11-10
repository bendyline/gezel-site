# gRPC Service

Build a gRPC service from a Protocol Buffers contract — define the .proto service and messages, implement the server handlers, and verify with client calls including streaming and status codes. Designs the proto contract FIRST — the service, RPC methods, request/response messages, field numbers, and the streaming kinds — because the .proto is the binding contract across languages, then implements the handlers, then tests unary/streaming calls and gRPC status codes. Covers protobuf service/message definitions, field numbering, unary vs server/client/bidi streaming, gRPC status codes, deadlines, and a client-driven test.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Proto contract design | Planner | lock the service, methods, messages, streaming kinds |
| 2 | Build the service | Developer | write the .proto + implement the server handlers |
| 3 | Test with a client | Developer | test unary/streaming calls and status codes |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "build a grpc service" or "protobuf service and server" or "implement grpc handlers" or "create a .proto and server" or "rpc service" in chat to start it.
