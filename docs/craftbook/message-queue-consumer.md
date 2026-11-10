# Message Queue Consumer / Worker

Build a queue consumer/worker that pulls messages off a queue, processes them reliably, and handles failures with retries and a dead-letter path — at-least-once delivery done right. Scopes the messaging contract FIRST — the message schema, ack/nack semantics, idempotency key, retry/backoff policy, dead-letter rules, and concurrency — then implements the consumer loop with ack-after-success and DLQ routing, then tests success, retry, poison-message, and duplicate-delivery handling. Covers queue consumers, at-least-once vs at-most-once, ack/nack, idempotent processing, retry with backoff, dead-letter queues, and poison-message isolation.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the consumer | Planner | lock message schema, ack/retry/DLQ, idempotency |
| 2 | Build the consumer | Developer | implement the consume loop with retry + DLQ |
| 3 | Test reliability | Developer | test success, retry, poison-message, duplicates |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "build a queue consumer" or "message worker" or "process queue messages" or "handle a message queue" or "dead letter queue worker" in chat to start it.
