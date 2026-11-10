# Inbound Webhook Handler

Build a handler that receives inbound webhook events, verifies their authenticity, parses the payload, and dispatches by event type — idempotently and resiliently. Locks the webhook contract FIRST — the event types, payload shapes, signature-verification scheme, idempotency key, and required 2xx-fast-ack behavior — then implements verification + routing + handlers, then tests valid/invalid signatures, each event type, replays, and malformed payloads. Covers HMAC signature verification, payload parsing, event-type dispatch, idempotency/dedupe, fast 2xx acknowledgement, and retry-safe processing.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Webhook contract scope | Planner | lock event types, payloads, signature + idempotency rules |
| 2 | Build the handler | Developer | implement verification, dispatch, idempotency |
| 3 | Write handler tests | Developer | test signatures, event types, replays, malformed bodies |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "build a webhook handler" or "receive webhooks" or "process inbound webhooks" or "verify webhook signatures" or "webhook endpoint" in chat to start it.
