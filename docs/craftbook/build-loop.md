# Build Loop

Generic make-something procedure: scope the work and lock concrete acceptance criteria, build it, evaluate the result against those criteria, and loop back to building until every criterion is met — then finish. The fallback structure when no domain-specific craftbook fits.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Build | Developer | Lock concrete acceptance criteria, then build the deliverable to meet them. The workflow advances to Evaluate automatically when the deliverable lands. |
| 2 | Evaluate | Reviewer | Grade the deliverable against EVERY acceptance criterion. All pass → finish. Any fail → write the gaps and loop back to Build. |
| 3 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |
