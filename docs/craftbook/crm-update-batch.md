# Bulk CRM Update from Notes

Turn unstructured notes (call logs, meeting recaps, email threads) into a batch of structured CRM updates: per-contact field changes, activity logs, and next-step tasks as a validated import file. Scopes the CRM field schema and extraction rules FIRST (which objects/fields, allowed picklist values, the match-or-create key, required fields), then a developer extracts and maps every note into rows against that schema, then a reviewer validates the batch for schema-conformance and that no update mutates a field without evidence in the source. Scoping the schema before extraction is what makes the import load cleanly and prevents fabricated field values. Use for CRM data entry, bulk contact updates, importing notes into Salesforce/HubSpot, activity logging, and turning call notes into pipeline updates.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the schema | Planner | lock the CRM fields, picklists, match key, and rules |
| 2 | Build the batch | Developer | extract and map notes into schema-conformant rows |
| 3 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 4 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "update crm from notes" or "bulk crm update" or "import notes into salesforce" or "log activities to hubspot" or "turn call notes into crm records" in chat to start it.
