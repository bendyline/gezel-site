# Simple Forecast / Trend Model

Build a simple, defensible forecast of a time series (revenue, demand, signups, usage) with the assumptions and method stated up front and the projection plus a confidence band as the output. Scopes the series, horizon, method, and assumptions FIRST (so the forecast isn't an unexplained black box), then builds the projection with a baseline and an interval, then reviews it for sanity against history and overfitting. Use this for forecasting a metric, projecting a trend, estimating future demand, a simple time-series projection, or a 'what will this be next quarter' estimate.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the forecast | Researcher | lock the series, horizon, method, and assumptions |
| 2 | Build the forecast | Developer | compute the projection with a baseline and an uncertainty band |
| 3 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 4 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "forecast this metric" or "project a trend" or "estimate future demand" or "time series forecast" or "what will next quarter be" in chat to start it.
