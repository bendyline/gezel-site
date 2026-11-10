# Auth / Session Implementation

Implement an authentication and session flow — login, session/token issuance, verification, and logout — with the security fundamentals baked in. Threat-models FIRST to lock the security requirements — credential hashing, token/session strategy, expiry, CSRF/XSS posture, and the attacks in scope — then implements registration/login/verify/logout to those requirements, then a security-minded reviewer audits for the classic auth pitfalls. Covers password hashing (bcrypt/argon2), session vs JWT, token expiry/refresh, secure cookie flags, timing-safe comparison, CSRF protection, and brute-force throttling.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Threat scope | Planner | lock the security requirements and threats in scope |
| 2 | Build the auth flow | Developer | implement register/login/verify/logout securely |
| 3 | Security review | Reviewer | audit for the classic auth pitfalls |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "implement login" or "build an auth flow" or "session handling" or "add authentication" or "jwt or session auth" in chat to start it.
