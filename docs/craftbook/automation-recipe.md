# Write an Automation Recipe

Turn 'I wish the house would...' into an inspectable, versioned automation: triggers and actions that name real devices from the house's own inventory, a dry run through the device tools before anything is armed, and a manual override always written in. Locks the owner's intent and the safety rules FIRST (nothing that heats or locks runs unattended without a failsafe, an override path is mandatory, dry-run before arm), then drafts the recipe, then proves it against the devices — so the house only ever does what was actually asked, and never anything it cannot be talked out of. Use for home automations, 'make the lights do X', schedules and scenes, sensor-triggered routines, and wiring up a new smart-home behavior.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the wish | Developer | the owner's intent, the real device inventory, and the safety rules locked |
| 2 | Draft the recipe | Developer | the automation as one inspectable JSON file under automations/ |
| 3 | Dry-run the recipe | Developer | every trigger and action exercised against the devices, evidence on file |
| 4 | Write the install notes | Copywriter | what it does, how to arm it, how to stop it, what the dry run proved |
| 5 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 6 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "set up an automation" or "make the house do" or "automate the lights" or "write an automation recipe" or "when I get home, turn on" in chat to start it.
