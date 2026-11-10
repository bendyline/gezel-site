# Security Review of a Diff

Perform a focused security review of a code change or diff and produce a vulnerability report mapped to a threat checklist. First scopes the change's attack surface and locks a security checklist (injection, authn/authz, secrets, deserialization, SSRF, crypto misuse, input validation, dependency risk), then audits the diff against each class while tracing tainted data from untrusted sources to dangerous sinks, then writes a findings report rating each issue by severity and likelihood with a concrete remediation. Use this for a security review, secure code review, vulnerability assessment of a diff, an AppSec pass, or checking a change for injection/auth/secret-leak risks before merge — it surfaces exploitable flaws tied to specific lines rather than generic security platitudes.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the attack surface | Reviewer | map trust boundaries, lock a security checklist |
| 2 | Audit for vulnerabilities | Reviewer | trace tainted data to sinks, check each threat class |
| 3 | Write the security report | Reviewer | findings with severity, exploit, remediation |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "security review" or "is this change secure" or "check this diff for vulnerabilities" or "secure code review" or "appsec review" or "review for injection" in chat to start it.
