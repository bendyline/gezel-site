# Build a Gezel app: the complete guide

This is the page to read, or to hand to an AI agent, before building a Gezel app. It starts with the working loop and the rules that keep an app working, then gives the four maintained guides: how an app is put together, how its page talks to Gezel, how it looks, and how it is organized. The exact references are linked at the end.

A **Gezel app** is an experience: a page people use, a crew that works it, the craftbooks the crew follows, and the actions it takes. A **project type** is the app's reusable composition, a **project** is one person's copy of it, and a `.gezapp` is a package that carries the composition to another computer. Use only the parts an app needs: a page and a folder are already an app.

## For AI agents: start here

Work the same loop a person does, using its machine-readable ends:

1. Install the command line with `npm install -g @bendyline/gezel-cli` (Node.js 24 or newer). `gezel app guide` prints this page for the version you installed. Add `--download` to any command that needs a model (`gezel run`, `gezel do`): it downloads the on-device engine and the model that fits this computer, printing each step, instead of stopping to ask.
2. Start from `gezel app new <name> --with-page`, or from one of the [sample apps](https://github.com/bendyline/gezel/tree/main/examples/apps).
3. Read the file formats with `gezel app schemas --json`. They are rendered from the build you installed, so they are never out of date.
4. Run `gezel app validate <folder> --json`. Fix every finding and run it again until `ok` is `true`.
5. Run `gezel app pack <folder>` to make the `.gezapp`.
6. Report what the app does, which files it owns, what it can read and change, what you tested, and how to install it with `gezel app add`.

These rules keep an app working:

- **Decide data and permissions first.** Name the files the app owns, what its page reads (`pages.reads`), where it adds files (`pages.imports`), and what each action may change.
- **Use the page API, not a bridge of your own.** Pages talk to Gezel through `window.gezel` and inherit Gezel's fonts. Never copy font files or platform scripts into an app, and never build a private file or query bridge.
- **Change files only through declared tools.** A page has no raw write API, and nothing may get around the workspace write policy.
- **Reuse the shared file components.** Anything that shows or adds files uses `gezel.ui.components.fileCard` and `fileAdder`.
- **Reuse before you add.** Prefer existing roles and craftbooks. Extend the shared runtime only when a reusable capability is missing.
- **Organize the page the Gezel way.** Home plus a tab per noun, actions as keys that open dialogs, and actions on the records themselves.
- **Test what people will use.** Try a real Gezel flow as well as the standalone demo, in both themes and at a narrow width.

The rest of this page is the four maintained guides, in this order:

## Building AI Apps inside Gezel

File-oriented apps should reuse the [shared file card and file adder](https://gezel.com/docs/gezel-page-apis/#file-cards-and-adding-files). Use explicit `pages.imports` destinations for uploads, alongside `pages.reads` for browsing. The components work with plain HTML, inherit shared typography, and include an in-memory standalone demo adapter. Test both demo and embedded flows, including write denial, partial failures and resetting demo state.

An AI App is a reusable experience that runs *inside* Gezel: a tailored project, a purpose-built crew, repeatable craftbooks, scripts, data, and an optional interactive dashboard. A language trainer, research room, board game, or client-service workspace can all use the same underlying pieces while feeling like a distinct application.

"Gezel app" and "AI App" name that experience. The **project type** is its reusable composition and setup recipe; the **project** is one person's instance. You can build a useful app with only a page and a folder, then add a crew member or a craftbook when the work calls for one. You do not need every component in every app.

For the interface, read [Using the Gezel page APIs](https://gezel.com/docs/gezel-page-apis/) and the [app page style guide](https://gezel.com/docs/gezel-app-page-style-guide/). The complete [page API reference](https://github.com/bendyline/gezel/blob/main/docs/output-pane-api.md) and [project-type specification](https://github.com/bendyline/gezel/blob/main/docs/project-types.md) provide the precise runtime contracts. These three Help guides are the starting path for people and AI agents building an app.

The project type is the composition root and installer. Public AI Apps arrive through the [project-type collection](https://gezel.com/docs/project-types-index/); private or experimental apps travel as `.gezapp` packages. Both start life as the same thing: a source folder you can build with the command line, by hand, or with an AI agent — this article is the guide to that folder.

An AI App is different from a connected app. A connected app runs in its own process and interface and reaches Gezel through `@bendyline/gezel-app-sdk`. See [Building connected apps with gezel-app-sdk](https://gezel.com/docs/building-connected-apps-with-gezel-app-sdk/) when that is what you are building.

### Build one in five minutes

Scaffolding, schema export, validation, and packing work without a running service. Installation and adoption use the Gezel daemon. Start with a disposable project folder while developing an app that writes data:

```bash
gezel app new my-app --with-page     # a minimal source folder that validates
cd my-app
gezel app schemas --out schemas     # the exact schemas this CLI understands
# edit items/ — the role's about.md and the version manifest are the heart
gezel app validate .                 # every finding at once; --json for tooling
gezel app pack .                     # -> my-app-1.0.0.gezapp
gezel app add my-app-1.0.0.gezapp     # review and confirm the installation
cd ~/the/folder/for/it && gezel app apply my-app
```

`apply` outfits the current folder as a project: it creates the crew from the embedded role templates, installs craftbooks and scripts, seeds the data files, and pins the Output page. From there, iterate — edit the source, `validate`, `pack`, `add` (an upgrade), and `apply --refresh`; `gezel app status` reports seed drift, and `gezel app serve` shares the finished page (and optional visitor chat) as a mini-site.

The `--with-page` scaffold includes a working records page. Run `gezel app demo . --out ../my-app-demo` and open the generated `pages/dashboard/index.html` for a standalone demo with resettable, in-memory sample data. The exporter supplies the shared bootstrap, components and fonts; app source does not bundle them. Inside Gezel it reads the real `data.json`, inherits the shared body/UI/heading fonts, follows host theme changes, and displays failures without switching to sample data. It includes loading, empty, pending, and retry states and cleans up its subscriptions. The browser preview is read-only; embedded and shared-site actions remain subject to host permissions.

The scaffold exposes `add_record` to the keeper and `page_add_record` to the page, both backed by the same `records-store` script. This distinction matters: a name in `pages.tools` is excluded from the model's tool roster. Keep separate names when both audiences need an action. The sample uses button and keyboard handlers because the page sandbox does not allow native form submissions. Extend this starting point using the style/API guides, and test your new actions against a real host as well as the demo.

Three worked samples of graded size live in [examples/apps](https://github.com/bendyline/gezel/tree/main/examples/apps) — `example-journal` (the minimal shape), `example-habit-tracker` (state, tools, a live page), and `example-reading-circle` (a crew, craftbooks, schedules, dependencies). Copying the smallest one that fits beats starting empty.

For shared page APIs, inspect the [Media Library](https://github.com/bendyline/gilde/tree/main/data/project-types/me/media-library) and [Data Analysis](https://github.com/bendyline/gilde/tree/main/data/project-types/da/data-analysis) types: they show folder discovery, file-viewer navigation, inherited typography, and indexed summaries without private transports. Use the API reference as the contract; a sample's implementation choices are not additional requirements.

### Or start from a working project

The other on-ramp is to prototype the experience as an ordinary project first: settle the crew roles in conversation, work through each craftbook, run the scripts by hand, and decide which files are durable state versus generated artifacts.

When the composition feels right, ask someone on the crew who has the project-management tools to export the type applied to that project. Gezel writes a `.gezapp` into the project artifacts — and a `.gezapp` is a renamed zip of exactly the source layout below, so unzip it, drop in a small `gezapp.json`, and keep iterating with `validate` and `pack`.

### The source folder

A source folder is a `gezapp.json` beside an `items/` tree. The tree is the same layout the packed archive and the installed app use (items sharded by the first two characters of their id, identity separate from versioned content), which is why exports round-trip:

```text
my-app/
  gezapp.json                        the source manifest — small on purpose
  items/
    project-types/my/my-app/
      manifest.json                  identity: id, name, description, maintainer
      versions/1.0.0/
        manifest.json                the composition root (everything below hangs off it)
        about.md                     param-templated project context
        mission.md
        records.json                 seed data (workspaceSeed)
        scripts/
          record-store.ts            sidecar script — folded inline at pack
        craftbooks/
          review-records.json        type-private craftbook document
        pages/
          dashboard/index.html       the Output page
    gezel-templates/my/my-app-lead/
      manifest.json                  role identity (kind, id, name, role)
      versions/1.0.0/
        manifest.json                points at about.md
        about.md                     the role's working character
    craftbook-templates/my/my-app-review/
      manifest.json
      versions/1.0.0/
        craftbook.json               the reusable craftbook document
        test.json                    its eval sidecar
```

`gezapp.json` stays small on purpose — `format: "gezel-ai-app-source"`, `schemaVersion: 1`, and optionally an `entry` pin and a `publisher`. The item list, per-item SHA-256 hashes, the external dependency lock, `minGezelVersion`, and timestamps are all derived from the tree by `gezel app pack`; writing them by hand is a validation error, not a convention.

Scripts have two equal authoring forms. The version manifest's `scripts` map holds inline TypeScript strings — the form models author most reliably — and `versions/<v>/scripts/<name>.ts` holds the same scripts as real files, which people and typecheckers prefer. Pack folds sidecars into the map and drops the files, so the shipped app is byte-identical either way; defining one name in both forms is a validation error.

Craftbooks also have two homes. A procedure private to this app lives embedded at `versions/<v>/craftbooks/<id>.json` — it ships inside the project type and appears in no catalog. A reusable procedure is its own `craftbook-templates/` item with a `craftbook.json` and a `test.json` eval sidecar — or simply a reference to an existing recipe in the [craftbook collection](https://gezel.com/docs/craftbooks-index/). The version manifest's `craftbooks` list references both by id, and an embedded document wins over a catalog item with the same id.

### The parts of an AI App

| Part | What it contributes |
| --- | --- |
| Project type | Identity, version, setup params, project templates, crew roster, and references to every other part |
| Role templates | Each crew member's name, role, and `about.md` working character; one entry can be the crew lead (`voorman: true`), or a solo type presents its one crew member under a custom `leadLabel`. Browse the [role collection](https://gezel.com/docs/role-catalog/) before writing a new one |
| Craftbooks | Repeatable procedures installed into each project — embedded (type-private) or referenced catalog items |
| Scripts and tools | Capability-declared TypeScript run in Gezel's sandbox; a `tools` entry exposes a script as a schema-validated tool for the model or the page |
| Output page | A read-limited HTML/CSS/JS experience pinned into the project's Output tab |
| Data | Ordinary JSON, Markdown, and media files seeded into the workspace or artifacts |
| Schedules | Consent-gated scheduled or Night Shift craftbook runs |
| Toolsets | Catalog references for capabilities the project needs or suggests; toolset code is never embedded |

Nothing installs merely because Gezel detects a suitable project type: adoption is explicit, params render as a form and substitute into `nameTemplate`, the about/mission templates, and seed files, and toolsets and schedules remain subject to consent and security policy.

### Design the contract before building the interface

Write a short brief with five decisions: what the person does, which files are authoritative, which actions change them, where judgment needs a model, and what successful completion looks like. Map each decision to an existing part of the platform:

| Requirement | Put it here |
| --- | --- |
| Show, search, filter, or chart existing content | A type-owned page using the shared page APIs |
| Store a record or calculate a deterministic result | A capability-declared SDK script, exposed through a tool when needed |
| Make a judgment, explain, research, or converse | A focused crew role with the tools it actually needs |
| Carry out a repeatable multi-step job | A craftbook with clear inputs, step ownership, and completion gates |
| Set up the experience | The project type's params, about/mission, crew, scripts, seeds, and project defaults |

Describe the data contract explicitly: path, workspace or artifacts, schema, owner, who writes it, and how the page learns about changes. Keep the source definition separate from user data. A gallery's HTML belongs to the catalog type; photos belong to the selected workspace. A generated report belongs in artifacts. The page should not create a second source of truth in local storage.

For a folder app such as Media Library or Data Analysis, declare a page with read access and no `workspaceSeed`. On desktop, New Project can attach an existing folder to a seedless type without copying or moving its originals. Typed creation accepts `workingDir`; types with workspace starter files use an internal workspace instead. This does not imply that CLI `app apply` is read-only: applying a stateful type can seed files in the folder you choose.

Start a new type with the smallest version manifest that fits. For a read-only folder app, a composition can be this small; its identity manifest still lives one level above `versions/`:

```json
{
  "schemaVersion": 1,
  "version": "1.0.0",
  "releasedAt": "2026-10-19T00:00:00Z",
  "aboutTemplate": "about.md",
  "missionTemplate": "mission.md",
  "pages": {
    "entry": "index.html",
    "api": 1,
    "reads": [{ "source": "workspace", "path": ".", "subtree": true }]
  }
}
```

Add `params` only for choices the person needs to make. `nameTemplate`, `aboutTemplate`, and `missionTemplate` describe the instance; they are not replacements for a role's character. `tabVisibility` can simplify supporting tabs, `mode` and `leadLabel` shape a solo experience, and `meesterManaged` controls progress check-ins. Set `indexingEnabled: false` only when the app does not need indexed search or tables. Omitting a default preserves the existing project choice; a declaration can change it during adoption.

### Add a crew and repeatable work

A custom role is a `gezel-templates` item with an identity manifest, a version manifest, and an `about.md`. Reference its template id in `gezels[]`, marking the crew lead with `voorman: true` when appropriate. Reuse a suitable existing role before adding a new one. A role template defines expertise, temperament, working style, and boundaries; it does not define one person's project brief. Keep tool listings out of its prose because Gezel injects the actual available tools at runtime.

A custom craftbook turns a job into a sequence that can be checked. Define its input parameters, a valid `entryStepId`, unique step ids, the role responsible for each step, concrete outputs, and success gates. Use a script for calculation or mechanical file manipulation and a model for judgment. Do not ask a model to reconstruct data already available to a script. Use `{{task.dir}}` for task-owned outputs instead of inventing global paths. See [Plans](https://gezel.com/docs/craftbooks-overview/), [the script SDK](https://gezel.com/docs/writing-scripts-with-gezel-sdk/), and the complete [Reading Circle sample](https://github.com/bendyline/gezel/tree/main/examples/apps/example-reading-circle) for a crew with both embedded and reusable craftbooks.

Validate craftbook documents against schemas exported by the installed CLI rather than guessing step or gate fields. Reusable catalog craftbooks carry a `test.json` sidecar; that sidecar is not proof the workflow has run successfully. Exercise a representative task and its gates. Schedules reference the craftbook id and should make their consent behavior explicit; start with `consent: "ask"` for work the person has not yet enabled.

### Choose public catalog or private package authoring

The app composition is the same in both cases; the authoring and release loops differ.

| Target | Source | Check and use it |
| --- | --- | --- |
| Private, experimental, or portable app | `gezapp.json` + `items/` | `gezel app validate`, `pack`, then install and apply against a test project |
| Public Gilde app | `gilde/data/<kind>/<shard>/<id>/` | Gilde's schema/content checks, page-demo checks, and local index build; then test with Gezel using that content root |

In the Gezel repository, public catalog content belongs in the sibling Gilde checkout, not in Gezel's old `data/` tree or installed dependencies. `GEZEL_GILDE_DATA_DIR` can select the checkout's `data/` directory for a development service. The normal application still uses its pinned catalog unless configured otherwise. A catalog change must be released and consumed before it appears in an ordinary installation.

The private source packer folds script sidecars into the version manifest. That preprocessing is specific to the source-package path: when authoring Gilde directly, follow its released-payload conventions and validators. Never hand-edit a released version; add a new version. Exported hashes, dependency locks, and catalog-root indexes are generated, not authored.

#### New versions reach existing projects

Projects made from an earlier version of an app move to a newer one on their own, within the same major version, when the update would change nothing the person made: the page, tool declarations and scripts move together, and their data, edited About text and settings stay. An update that would replace a script edited in the project, add crew, connect a tool service, start a recurring run, or write new files into a person's folder waits for them to approve it in the project. Apps installed from a `.gezapp` always wait for approval. Write versions so this is safe:

- A minor or patch version must read every data file an earlier version of the same major wrote. Change a data file's shape only in a new major version; existing projects stay on their major.
- A param added within a major needs a `default`, or projects made earlier are not offered the update.
- Keep page and script changes in step: they ship together, so a page may call a tool its own version's script provides.

### Scripts, tools, and the Output page

Each script declares its capabilities, inputs, outputs, and whether it is an action or gate through `@bendyline/gezel-sdk`; the [Writing scripts with gezel-sdk](https://gezel.com/docs/writing-scripts-with-gezel-sdk/) article covers that contract. Adoption copies the scripts into the project with provenance.

A `tools` entry gives a script a stable name, a JSON Schema `inputs` object validated before every run, and static `bind` values so several narrow tools can share one script without letting the caller replace the bound operation. A tool listed in `pages.tools` is page-only — kept off the model's roster — and can carry a `reaction` that summons a named crew member when the page invokes it, with the tool output interpolated into the reaction prompt.

Design tools a small local model can use. These rules come from running app requests on Gemma 4 E4B and 12B, where each one fixed a request that otherwise failed:

- **Give the status tool the whole picture a request needs.** A meal planner whose status listed only the grocery gap could not plan "around what we have", because nothing said what was in stock. Include ids, owners, dates and totals, and lead with what changed. A `state: true` tool runs before each chat turn and the model often answers from its output without calling anything, literally: asked what was due in 60 days, it skipped a separate "Overdue" list. Put what a question selects in one list, most urgent first.
- **Name people in an output field, don't just count them.** Asked who still owed a dietary answer, a model read `missingDietary: 2` beside a list that also held a guest who had not replied, decided he was one of the two, and could not name the other. A `noDietaryAnswer` field listing the names leaves nothing to infer.
- **Say when to call a write tool.** "Call it as soon as the person mentions one, before you describe it" stops a model that would otherwise describe a plan it never saved.
- **Make adds idempotent on name.** "We ran out of olive oil" often arrives as an add; update the existing record instead of creating a twin.
- **Give relative changes their own input.** Told that someone joined a party of four, a model replaced the party with one name. A `joining` input the script adds to the count removes the arithmetic from the model.
- **Keep money in integer cents and dates as local `YYYY-MM-DD`**, and roll a monthly date forward to the last day of a shorter month rather than into the next.
- **Speak to the model in the units its inputs take.** Store cents, but report dollars in tool outputs. After reading `openValueCents` in one result, a model passed `valueChange: 340000` for "another $3,400" to an input that takes dollars, and a $22,500 deal became $362,500.

The Output page runs in a sandbox and codes against the injected `window.gezel` API (typed definitions in `@bendyline/gezel-sdk/page`; set `pages.api` to `1`). Every readable file must appear in `pages.reads` and every callable tool in `pages.tools` — there is deliberately no raw page write API, so state changes flow through declared tools and stay auditable:

```js
async function refresh() {
  render(await gezel.data.read('records.json', { as: 'json' }));
}
const stop = gezel.data.watch('records.json', () => { void refresh().catch(showError); });
await refresh();
const { output } = await gezel.tools.invoke('add_record', { title: 'First review' });
window.addEventListener('pagehide', stop, { once: true });
```

Here `render` and `showError` are your UI functions. A watch reports that a file changed; it does not pass the file contents to `render`.

Use `gezel.data.list()` to discover files, `data.url()` for media, and `data.open()` to navigate to their existing Gezel renditions. Use `gezel.tables.list/describe/query` for permission-scoped summaries and charts over indexed data. These capabilities are shared infrastructure; keep them out of app-specific transports. See the [page API guide](https://gezel.com/docs/gezel-page-apis/) for host differences and failure states.

Pages inherit Gezel's local body/UI and heading fonts. They still define their own layout, color variables, control styles, and responsive behavior. Follow the [page style guide](https://gezel.com/docs/gezel-app-page-style-guide/), including both themes and system fallbacks for standalone demos.

### Validate, pack, and share

`gezel app validate` collects every finding at once, in layers: folder shape and portable paths, every manifest and craftbook parsed with the same schemas the runtime uses, the exact verification an install runs (hashes, reference closure, dependency locks), referenced files and craftbook step graphs, script diagnostics from the real TypeScript compiler, page syntax and theme checks, and offline dependency availability. Errors mean install or adoption would break; warnings are advisory.

`gezel app pack` derives the manifest and produces the `.gezapp` — a renamed zip holding the root manifest and the `items/` tree, with a SHA-256 digest per embedded item. Exactly one entry project type travels, along with every role and craftbook template it references; toolsets, connectors, and models stay outside as an exact-version dependency lock — models remain separate catalog choices (browse [every model](https://gezel.com/docs/model-catalog/)) and are never bundled into an app. Version 1 packages are explicitly `unsigned` — hashes detect corruption, not authorship, so install only from sources you trust.

Installation is `gezel app add`: a first pass previews publisher, contents, compatibility, conflicts, and missing dependencies without writing anything; the confirmed pass installs atomically under `~/.gezel/ai-apps/`, records a receipt, and mounts the app as one catalog source. Import never executes package contents, and `gezel app list/show/enable/disable/remove/update` manage the installed lifecycle.

For public distribution, contribute the same `items/` content to the [Gilde repository](https://github.com/bendyline/gilde) — the catalog and a `.gezapp` share the layout, so a private app can graduate to the public collection without restructuring.

### For AI agents building apps

An AI agent building an app should work the same loop a person does, with the machine-readable ends of it:

- `gezel app schemas --out schemas` (or `--json`) — the JSON Schemas for every catalog content file plus the packed and source gezapp manifests, rendered live from the running build so they can never be stale.
- `gezel app validate <folder> --json` — the findings list with stable rule ids; fix and re-run until `ok` is true, then `pack`.
- [examples/apps](https://github.com/bendyline/gezel/tree/main/examples/apps) — three complete source folders of graded complexity, each kept working against the real service by the repository's test suite.
- `gezel app new` — a guaranteed-valid starting shape when no sample is at hand.

Use this brief when asking an LLM to build an app:

> Build a Gezel app for [person and task]. Read Building AI Apps inside Gezel, Using the Gezel page APIs, and the Gezel app page style guide first. Choose public Gilde content or a private `.gezapp` source folder. State the user flow, authoritative files and schemas, read/write permissions, crew responsibilities, and completion criteria. Reuse existing APIs, roles, and craftbooks. Implement only the components this app needs. Use shared fonts and `window.gezel`, deterministic scripts for actions, and gated craftbooks for repeatable work. Include labeled standalone samples where required, but never use samples after a live failure. Validate against the installed schemas, test the main flow in a real host, and report supported modes, remaining limitations, and the release/install step needed to use it.

Before handing over the app:

1. Validate the source or Gilde payload, including every referenced role, craftbook, script, page, and seed. Keep generated and authored files distinct.
2. Create or apply the app in an isolated test project. Verify the actual folder binding, permission denials, and every state-changing action. A folder explorer must leave originals unchanged.
3. Exercise the main craftbook with representative inputs and confirm its outputs and gates. Check disabled/consent-required schedules without silently arming them.
4. Test the page's live and standalone flows, light/dark themes, keyboard navigation, narrow layout, empty content, unavailable capabilities, and failed actions. Dispose watches and media players. A page with a conversation gets a [sample conversation](https://gezel.com/docs/gezel-page-apis/#the-sample-conversation) for its demo; then ask the real crew lead the same suggestions on a small local model, so the demo never promises what the app cannot do.
5. If upgrading, apply the new version to a project made with the old one (`gezel app apply <id>`, or `gezel app status` to see what is on offer) and confirm its data still loads. Document any unsupported migration rather than overwriting data as a convenience.
6. Report what shipped, what was tested, which host modes are supported, and whether the normal app consumes the new catalog version yet.

### What still needs improvement

The authoring loop above is real, but the surrounding lifecycle still has gaps:

| Gap | What is needed |
| --- | --- |
| Project-to-app export | Export packages the catalog definition; a diff-and-review flow that turns organic project changes (edited scripts, new craftbooks, a redesigned page) into a new version does not exist yet |
| Import interface | The desktop app still routes import through project artifacts and model tools; file picking, bundle review, and conflict handling belong in the UI the way the CLI already has them |
| Updates and drift | Updates keep the person's data, edits and settings, and an edited script is saved before it is replaced; there is no three-way merge of an edited script yet |
| Schema evolution | App data-version declarations and migrations, so an existing project can cross a major version, plus backup and rollback for custom records |
| Dashboard surface | First-class page templates, an in-app development preview, diagnostics, and possibly more than one app-owned project tab |
| Craftbook test harness | `test.json` sidecars are validated at authoring time, but the eval harness does not yet run an installed app's craftbook tests |
| Signing and registries | v1 signature status is `unsigned`; a signing story and a private registry path alongside public Gilde contributions |

Until those close, treat the source folder as the canonical form of an AI App: Gilde for public distribution, `.gezapp` for controlled sharing, and ordinary projects for prototypes whose composition is still changing.

## Using the Gezel page APIs

A project type can ship `pages/index.html` with relative JavaScript, CSS, and assets. Gezel hosts that page in the project's Output pane and injects `window.gezel` before its scripts run. You build a normal browser interface; Gezel supplies project identity, scoped file access, declared actions, and the theme. You do not need a React component inside the desktop shell or a new service for each app.

Read [Building AI Apps inside Gezel](https://gezel.com/docs/building-ai-apps-inside-gezel/) for the whole app and the [app page style guide](https://gezel.com/docs/gezel-app-page-style-guide/) for injected fonts and page-owned styles. The complete [Output Pane API reference](https://github.com/bendyline/gezel/blob/main/docs/output-pane-api.md) owns method signatures, error codes, permissions, limits, and compatibility; [the typed API](https://github.com/bendyline/gezel/blob/main/packages/sdk/src/page.ts) is exported as `@bendyline/gezel-sdk/page` for authoring tools.

### Declare the page and its authority

This is a `pages` block inside a project type's **version** manifest:

```json
{
  "pages": {
    "entry": "index.html",
    "api": 1,
    "reads": [
      { "source": "workspace", "path": "media", "subtree": true },
      { "source": "artifacts", "path": "summary.json" }
    ],
    "tools": ["page_refresh_summary"]
  }
}
```

The entry is relative to `pages/`. Reads are project-relative; `workspace` and `artifacts` are different trees. An exact-file grant does not grant the surrounding directory. A folder explorer can deliberately grant `{"source":"workspace","path":".","subtree":true}` for the whole selected project folder. The host checks the grants and path containment. It binds the project; a page never supplies its own project id to escape that boundary.

Every `pages.tools` name must also be declared in the type's `tools` array. Those names are page-only: they are removed from the model's tool roster. If both the page and the model need an action, declare two tool names sharing the same script and bound operation. A declared action still needs the script's capabilities and the user's project policy to permit it.

### Choose the smallest API that does the job

| Job | API | Important behavior |
| --- | --- | --- |
| Identify the app instance | `gezel.page` | Type name, params, project id, API version, and host mode |
| List a folder | `gezel.data.list(path, opts?)` | One directory at a time; recursion and scan bounds belong to the page |
| Read small state | `gezel.data.read(path, opts?)` | JSON, text, or bytes; bounded reads |
| Follow changes | `gezel.data.watch(path, callback, opts?)` | Callback signals a change; re-read the data; retain the unsubscribe function |
| Display media | `gezel.data.url(path, opts?)` | Assign to an image/audio/video element; hosted media can stream and seek |
| Open the original in Gezel | `gezel.data.open(path, opts?)` | Navigates to the existing file rendition in embedded mode |
| Render a consistent file tile or row | `gezel.ui.components.fileCard(mount, options)` | Thumbnail/fallback, metadata, keyboard action and existing file viewer |
| Add files with a picker or drop | `gezel.ui.components.fileAdder(mount, options)` | Explicit destination, progress, cancellation and per-file results |
| Discover upload destinations | `gezel.data.importTargets()` | Manifest targets plus current write permission |
| Copy selected files into a destination | `gezel.data.importFiles(files, options)` | Scoped, create-only uploads; returns saved paths and partial failures |
| Find indexed datasets | `gezel.tables.list()` | Only tables whose source files are within the page's readable scope |
| Inspect columns | `gezel.tables.describe(tableName)` | Column types and available metadata |
| Summarize or chart data | `gezel.tables.query(sql, opts?)` | Bounded, read-only DuckDB queries over permitted indexed tables |
| Change state or run an action | `gezel.tools.invoke(name, input?)` | Schema-validated, declared script-backed action |
| Follow the host theme | `gezel.ui.theme`, `gezel.ui.onTheme(callback)` | Apply at boot and keep the unsubscribe function |

Use the existing file rendition instead of rebuilding a spreadsheet or CSV editor in your page. Use the shared query API instead of bundling DuckDB or fetching observation storage files. Tables describe an indexed snapshot: listing a CSV does not guarantee a table is ready. Handle missing indexing and unavailable query engines explicitly.

For a simple live list, wire a change signal to a fresh read, and treat filenames as text:

```js
// Use the injected host or initialize sample handlers through the demo bootstrap.
const list = document.querySelector('#files');
const status = document.querySelector('#status');
let revision = 0;
async function refresh() {
  const request = ++revision;
  try {
    const entries = await gezel.data.list('media');
    if (request !== revision) return;
    list.replaceChildren(...entries.map((entry) => {
      const row = document.createElement('li');
      row.textContent = entry.name;
      return row;
    }));
    status.textContent = entries.length ? `${entries.length} items` : 'This folder is empty.';
  } catch (error) {
    if (request === revision) status.textContent = `Could not read this folder: ${error.message}`;
  }
}
const stop = gezel.data.watch('media', refresh, { intervalMs: 15000 });
window.addEventListener('pagehide', () => { revision++; stop(); }, { once: true });
void refresh();
```

Do not treat the watch callback's `{path, etag}` as the file's contents. Avoid overlapping whole-folder scans and unbounded watchers. The browser fallback interval is configurable; embedded watches use the host's shared mechanism.

### Account for the host mode

| Host | Files/media | Tools | File viewer | Tables |
| --- | --- | --- | --- | --- |
| Desktop Output pane (`embedded`) | Scoped access | Declared actions | `data.open()` | When the query engine and index are available |
| Authenticated mini-site (`serve`) | Scoped access | Declared actions | Unavailable | When the query engine and index are available |
| Capability preview tab (`browser`) | Capability-scoped fallback | Unavailable | Unavailable | Unavailable |
| Published or exported standalone demo (`demo`) | Authored samples | In-memory demo handlers | Explain the live action | Authored sample summaries, if provided |
| Phone's embedded snapshot | Scoped bridge with bounded media relay | Supported portable actions | Host-dependent; handle unavailable | Unavailable in the portable runtime |

Feature-detect optional additions such as `gezel.tables` and `gezel.data.open`, then handle their errors. Mode alone is not a promise that every engine or codec is installed. Avoid offering an action that cannot work in the current mode.

For standalone demos, the website publisher, local preview server, or offline exporter injects a shared bootstrap before app scripts. App source contains its UI and sample handlers, not a copied SDK, component runtime, or font set. Initialize with `const api = window.gezel || window.makeDemoGezel({ page, tools, data, existingPaths });`. In a real host the existing API wins; in a demo, the bootstrap installs the sample transport and `api.ui.components`. Import targets come from the manifest's `pages.imports`. Keep deterministic samples, a visible banner and Reset demo. A failed live call must remain a live error, not switch into demo mode.

Pages have no daemon credentials, Node filesystem, unrestricted SQL connection, or arbitrary-path write API. Imports are a narrow exception for explicitly declared destinations. Stay on this shared surface.

### Fullscreen layout and embedded chat

Read `gezel.ui.layout` at boot and subscribe with `gezel.ui.onLayout(callback)`. The snapshot contains `fullscreen`, `width`, and `height` in CSS pixels. In the Output pane, fullscreen means the page is maximized inside the Gezel window's main workspace. The project sidebar stays available on its configured side, expanded or collapsed as the user left it. Each project remembers whether its page is closed, open, or fullscreen when revisited, including after a restart. It does not mean that the operating system window is maximized. The same page stays mounted across maximize/restore; game state and drafts survive. The initial fullscreen value is false until the host handshake arrives. Browser, serve, and demo pages follow the browser Fullscreen API instead. The root also receives `data-gezel-fullscreen="true"` or `"false"` for CSS.

Mount native chat with `gezel.ui.components.chat(element, options)`. Give the mount an explicit height. The handle has `element`, `update(partialOptions)`, `destroy()`, and `ready` (a promise that rejects when the host cannot mount it). Keep the mount in the document and hide it with CSS to preserve its current conversation. Destroy it when permanently discarding it.

```js
const chat = gezel.ui.components.chat('#game-chat', {
  gezelRole: 'Opponent', // resolve a role from this project's crew
  lockRecipient: true,
  showAddress: false,
  showThreads: false,
  placeholder: 'Ask about a move…',
});
const arrange = ({ fullscreen, width }) => {
  document.querySelector('#game').classList.toggle('with-chat', fullscreen && width >= 800);
};
arrange(gezel.ui.layout);
const stopLayout = gezel.ui.onLayout(arrange);
window.addEventListener('pagehide', () => { stopLayout(); chat.destroy(); });
```

```css
#game { display: grid; min-height: 0; }
#game-chat { display: none; height: 70vh; min-width: 0; }
#game.with-chat { grid-template-columns: minmax(0, 1fr) minmax(300px, 360px); gap: 16px; }
#game.with-chat #game-chat { display: block; }
```

Use `gezelId` for an exact crew member, `gezelRole` for a role, or omit both to use the project's crew lead (then its first member). An unavailable requested recipient displays an error rather than silently choosing someone else. `lockRecipient` defaults to true and disables recipient switching and mention fan-out. `showAddress` and `showThreads` default to true. `variant: 'composer'` omits the timeline; the default `'chat'` shows that recipient's project history. `attachments`, `dictation`, `promptAssist`, and `expand` default to false and can be enabled individually, subject to the host's capabilities.

Chat currently requires the embedded Gezel host. Browser previews, app-serve visitors, and standalone demos show an explicit unavailable message; demos never call a model. The parent owns the native chat and composer, including their theme, accessibility, sessions, and ordinary permission prompts. Page scripts receive no transcript, input text, credentials, or programmatic send method. Options change presentation, not the recipient's tool authority.

The slot follows layout, scrolling, and hidden containers. Keep it rectangular and untransformed; the host clips it to the page viewport. Page CSS cannot restyle chat internals, and page popovers cannot cover native chat. A modal page dialog (`dialog.showModal()`, `aria-modal="true"`, or a component dialog) dims the chat instead: the host draws the dialog's backdrop color over it, leaves the dialog's own area uncovered, and lets clicks reach the page until the dialog closes. At most four slots can be mounted per page. Removing a slot from the document destroys it; create a new handle if you need to mount it again.

### Building a full-page workspace

`gezel.ui.components.appLayout(main, options)` wraps an existing content element without replacing its DOM. In fullscreen it opens a companion beside the content; below 900 CSS pixels the conversation stacks beneath it. Restoring the pane, hiding the conversation, or opening a native page dialog retains the conversation and its draft. While a page dialog is open the conversation stays on screen, dimmed with the rest of the page, since iframe content cannot cover host-owned chat.

```js
const workspace = gezel.ui.components.appLayout('main', {
  title: 'Practice with your tutor',
  description: 'Choose a scene, then talk here.',
  chat: { showAddress: false, lockRecipient: true, dictation: true },
});
```

`chat: false` gives a file-only application room to expand without recruiting a companion. Multi-person crews can use `lockRecipient: false, showAddress: true`. The page still owns its content, typography choices, and domain layout. Feature detect `appLayout` when supporting older hosts. Retain the handle and call `destroy()` if discarding the workspace; it also cleans up on `pagehide`.

Use `actionForm` for a compact, accessible form that invokes one declared page tool. It validates required fields, numbers and dates; serializes one save at a time; and retains entered values after a failure. Fields can be text, number, date, URL, multiline text, or a selection. `mapInput` can map a simple form into the tool's input schema. It does not change the page's authority.

```js
const form = gezel.ui.components.actionForm('#add-guest', {
  title: 'Add a guest', tool: 'page_add_guest',
  fields: [
    { name: 'name', label: 'Guest or household', required: true },
    { name: 'party', label: 'Party size', type: 'number', min: 1, step: 1, required: true },
  ],
  onSaved: () => refreshGuests(),
});
```

On a current host, draw actions as keys that open dialogs, following the [app UX guide](https://gezel.com/docs/gezel-app-ux-guide/). A row's own key can open the same dialog filled in for that record:

```js
const components = gezel.ui.components;
const modern = components.version >= 2;
const addGuest = components.actionForm('#guest-actions', {
  title: 'Add a guest', tool: 'page_add_guest', presentation: 'dialog', primary: true,
  submitLabel: 'Add guest',
  fields: [
    { name: 'name', label: 'Guest or household', required: true },
    { name: 'party', label: 'Party size', type: 'number', min: 1, step: 1, required: true },
  ],
  onSaved: () => refreshGuests(),
});
function editParty(guest) {
  if (modern) addGuest.open({ name: guest.name, party: guest.party });
}
```

`presentation: 'inline'` draws an always-open form for a settings panel; call `reset(values)` with the saved values after each read so it shows what is set now. Older hosts ignore `presentation` and draw a disclosure, so keep the action reachable there and feature-detect `open`.

`tabs` organizes a workspace into page-owned panels. Put the summary tiles and main view on Home, one noun per tab, and Settings last:

```js
const tabs = gezel.ui.components.tabs('#tabs', {
  label: 'Guest list',
  tabs: [
    { id: 'home', label: 'Home', panel: '#home' },
    { id: 'guests', label: 'Guests', panel: '#guests', badge: awaitingReply },
    { id: 'settings', label: 'Settings', panel: '#settings' },
  ],
});
```

The component only labels, shows, and hides the panels; the page owns their content. `tabs.update({ tabs })` with new badges keeps keyboard focus. Destroy the handle with the view.

Give the page its own alias when a model already uses the action: `page_add_guest` and `add_guest` share the same script and bindings, while only the former appears in `pages.tools`. Workspace policy, tool schema validation, and script permissions still apply. Forms do not write files directly. Standalone demos provide in-memory handlers for the same aliases.

`collectionFilter('#search', { container: '#guests', selector: 'li:not(.empty)', label: 'Find a guest', placeholder: 'Name or household', minItems: 8 })` adds accent-insensitive search over rendered records, shown once the list reaches `minItems`. It updates when the collection changes and preserves existing buttons and controls. It searches only those rendered items; describe pagination or truncation honestly. Keep the handle and destroy it with the view.

### File cards and adding files

The host injects `gezel.ui.components` with the page API. It works with ordinary HTML and has no React dependency. Pass a selector or an element; the component appends its own custom element with a shadow root. Retain its handle and call `destroy()` before discarding it. `update(partialOptions)` updates an existing instance. File adder handles also provide `refresh()` to recheck destination availability after a settings change.

```html
<div id="add-files"></div>
<div id="selected-file"></div>
```

```js
const card = gezel.ui.components.fileCard('#selected-file', {
  file: { source: 'workspace', path: 'media/garden.jpg', size: 24576 },
  variant: 'tile', // 'row' for a compact list
});
const adder = gezel.ui.components.fileAdder('#add-files', {
  target: 'library',
  onAdded: async (savedFiles) => { await refreshListing(); },
});
window.addEventListener('pagehide', () => { card.destroy(); adder.destroy(); });
```

By default a card calls `data.open` and displays an error if the host viewer is unavailable. A gallery can supply `onActivate(file)` to show its own media preview; do not replace Gezel's spreadsheet/document renditions. `thumbnail: false` disables automatic image thumbnails; an explicit URL selects a local demo illustration. Filenames render as text. Components inherit `--font-ui` and track `ui.onTheme`; see the [style guide](https://gezel.com/docs/gezel-app-page-style-guide/#shared-file-components).

Declare destinations in the project type, separately from readable files:

```json
{
  "pages": {
    "entry": "index.html",
    "api": 1,
    "reads": [{ "source": "workspace", "path": "media", "subtree": true }],
    "imports": [{
      "id": "library", "source": "workspace", "path": "media",
      "accept": [".jpg", ".png", ".mp4"], "maxFileBytes": 268435456
    }]
  }
}
```

Imports support workspace destinations only. `path: "."` means the project's selected folder. `accept` is an optional extension allowlist; the host enforces it and the byte limit independently of picker hints. An import declaration does not grant read access or override managed workspace writes. In particular, an external folder still needs the user's existing write opt-in in Project Settings. There is no page-facing bypass or permission toggle.

Use the adder for the usual flow. A custom UI can call `data.importFiles(File[], { target, signal, onProgress })`; each result is `{ ok: true, name, file: { source, path, name, size, mtime } }` or `{ ok: false, name, error }`. `onProgress` reports `{ completed, total, name }` per file, not bytes. Save the returned paths: duplicates become `name (1).ext`, and existing files are never overwritten. Originals stay where the user selected them. Cancel stops pending work and does not undo files already saved. A file that finished committing as cancellation arrived may already exist; refresh the listing to reconcile.

The current limits are 100 files per batch, 256 MiB per file (a target may lower it), two active uploads per project, four per daemon, 120 attempts per project per minute, and a five-minute upload deadline. The server streams bytes to private temporary storage, validates scopes and paths, rechecks the destination and write policy at commit, and publishes atomically through the Store. It rejects traversal, symlink escapes, hidden/reserved names, and alternate streams. Imports never accept host source paths from a page.

Live imports currently require the embedded desktop host. Browser tabs, phone snapshots and app-serve visitors get an explicit unavailable state; a shareable site's read capability never grants uploads. Components themselves work across these hosts. Always handle unsupported hosts and permission failures without silently enabling demo mode.

After `onAdded`, refresh the app's listing. Ordinary workspace indexing follows asynchronously, so a newly added spreadsheet may appear before its DuckDB tables are ready. Keep the indexing/empty state and normal table refresh behavior.

#### Standalone component demos

The demo host supplies the components and shared fonts before app code. Keep the visible banner and Reset demo control. For Gilde, use `npm run demos` or `npm run export-page-demo -- <id> --out <new-directory>`. For private source folders, run `gezel app demo . --out ../my-app-demo` and open its generated entry under `pages/`; the output works offline without a daemon. The website uses shared, content-hashed assets; each offline export contains its own generated asset set. Do not double-click the unprocessed source page or add platform files to its `pages/` tree.

```js
const api = window.gezel || window.makeDemoGezel({
  page: { typeName: 'My library' },
  existingPaths: samples.map(file => file.path),
  // data and tools: app-owned sample handlers, when needed
});
const components = api.ui.components;
// Merge these into your representative sample listing after onAdded:
const added = components.demo?.files() ?? [];
// In your Reset demo handler, clear imported descriptors and release object URLs:
components.demo?.reset();
```

Demo imports exercise the same picker, drop, validation, progress and cards. They retain browser Files/object URLs in this tab, use deterministic metadata, and never write to disk or invoke a model. `data.url` resolves imported demo media. Reset the page's own sample state and remount the adder to clear its result list. Do not claim imported demo data was indexed: Data Analysis keeps its charts on labeled sample tables.

React apps can mount either component in a ref inside an effect and call `destroy()` in cleanup. There is no separate React component implementation to keep in sync.

#### The sample conversation

In a standalone demo, `appLayout` (or a bare `chat` slot) draws a sample conversation where Gezel's chat would be. A demo opens as the whole window: the layout reports `fullscreen: true` without the Fullscreen API, so the companion sits beside the page, or beneath it below 900 CSS pixels. Script the conversation and pass it as `chat`:

```js
const api = window.gezel || window.makeDemoGezel({
  page: { typeName: 'Meal Planner' },
  tools: { page_set_menu: input => setDemoMenu(input), grocery_list: () => demoGroceries() },
  data: { 'menu.json': () => demoMenu },
  chat: {
    name: 'Mila',
    role: 'Meal Planner',
    greeting: 'Hello, I’m Mila. Sunday is still open.',
    suggestions: ['Plan Sunday around what we have'],
    respond: async (text, ctx) => {
      if (!/sunday|plan/i.test(text)) return null;
      await ctx.invoke('set_menu', { day: 'sunday', meal: 'Shakshuka' }, 'Sunday: Shakshuka');
      return 'Sunday is shakshuka. Everything it needs is stocked.';
    },
    reactions: { page_set_menu: input => `${input.day} is set.` },
  },
});
```

`ctx.read(path)` returns a snapshot of the sample data. `ctx.invoke(tool, input, summary)` runs the page's demo handler for the model's tool name, falling back to its `page_` alias, shows the step in the conversation, fires the page's watches and `gezel-app-data-changed`, and briefly highlights page text that changed. `ctx.say(text)` adds a line mid-turn, and `ctx.suggest(list)` swaps the suggestions without a reply. A read-only tool that changes nothing repaints nothing. A reply is a string, an array of strings, or `{ reply, suggestions }`; `null` gives the shared answer that the preview follows a few sample requests. `reactions`, keyed by page tool, are the demo form of a manifest `reaction`: the person's page action summons a reply, and a game answers with the companion's move through its turn tool.

The composer labels the replies as scripted, nothing leaves the page, and a live host never runs this code. Without a script the conversation greets the visitor and gives the shared answer, naming the crew lead's role when the exporter supplies it. A demo configured with `layout: 'pane'` keeps the narrow Output-pane presentation.

## Gezel app page style guide

An app page should feel like part of Gezel: readable, warm, and focused on the person's work. This guide applies to the HTML/CSS/JavaScript pages declared by a project type's `pages` block. Start with [Building AI Apps inside Gezel](https://gezel.com/docs/building-ai-apps-inside-gezel/) for the composition and [Using the Gezel page APIs](https://gezel.com/docs/gezel-page-apis/) for behavior. The [app UX guide](https://gezel.com/docs/gezel-app-ux-guide/) says how an app is organized: Home and noun tabs, actions as keys that open dialogs, and actions on the records themselves.

### What the host supplies today

Gezel injects a shared typography stylesheet into hosted project-type HTML, before the page's own styles. This works in desktop previews, app-serve, and the phone's offline page snapshot. It includes local font faces and these roles:

| Role | Default | Applied automatically to |
| --- | --- | --- |
| `--font-body` | Hanken Grotesk, with system sans fallbacks | The document root; ordinary body text inherits it |
| `--font-ui` | Hanken Grotesk, with system sans fallbacks | Buttons, inputs, selects, textareas, options, and option groups |
| `--font-heading` | PT Serif, with serif fallbacks | `h1` through `h6` |
| `--font-display` | The heading family | Compatibility alias used by `--font-heading` |

Hanken Grotesk has normal weights 400, 500, 600, and 700 plus 400 italic. PT Serif has normal 400 and 700 plus 400 italic. Use those weights rather than requesting an intermediate serif weight that the browser must synthesize.

**Do not copy fonts, licenses, `@font-face` declarations, or a font CDN into each app.** Gezel owns the hosted font assets. The defaults use low-specificity `:where()` selectors, so your authored styles can override them. A `font: … system-ui` shorthand on `body` also overrides them; avoid that accidental reset.

The host supplies typography and an opt-in component kit, not a complete CSS framework. It does **not** inject the shell's color palette, spacing or radius tokens, a CSS reset, a body margin reset, a type size scale, general button styling, a chart library, or page layouts. Variables such as `--bg` and classes such as `.primary` have no built-in meaning inside the page. Define the ones your page uses. Shell CSS does not inherit through the sandboxed iframe.

### Shared file components

For a full application workspace, `ui.components.appLayout` wraps the existing main content and adds a responsive fullscreen conversation. It keeps the page mounted on restore, provides a conversation toggle, and dims its native chat slot with the rest of the page while a page dialog is open. Use a specific companion title and a short description of useful work the person can do together. A file-only app can pass `chat: false`. Keep the content usable in the ordinary pane as well.

In a standalone demo the same slot holds the [sample conversation](https://gezel.com/docs/gezel-page-apis/#the-sample-conversation), drawn to match Gezel's chat: replies in the heading serif, the visitor's messages in an accent-tinted bubble, each tool the companion uses as a quiet step row with a check, and suggestions as bare keys under the conversation (one scrolling row on narrow screens). It lives in the component's shadow root, so restyle it only through the `--gezel-component-*` properties below. Keep its copy in the role's voice: short, specific, American English, no emojis.

Use `actionForm` for declared edits: `presentation: 'dialog'` for an action key that opens a modal, `'inline'` for a settings panel. Use `tabs` for a workspace's Home, noun, and Settings panels, and `collectionFilter` for search over long lists of rendered records. These components supply controls and state handling, while the app owns field labels, domain data, allowed actions, and refresh behavior. Avoid duplicating the host's composer or building a separate persistence store. See [workspace components](https://gezel.com/docs/gezel-page-apis/#building-a-full-page-workspace).

For a responsive game or other app, use `gezel.ui.layout` / `ui.onLayout` and `data-gezel-fullscreen` to adapt when the Output pane expands. Native chat slots use `ui.components.chat`; size their containing rectangle in page CSS and choose their controls through options. They inherit the shell's theme and fonts, not page CSS overrides. See [fullscreen and chat](https://gezel.com/docs/gezel-page-apis/#fullscreen-layout-and-embedded-chat) for the layout example and clipping constraints.

Prefer `gezel.ui.components.fileCard` for a file tile/row and `fileAdder` for uploads. The [page API guide](https://gezel.com/docs/gezel-page-apis/#file-cards-and-adding-files) covers mounting, lifecycle, permission declarations and standalone demo setup. Both ship their own shadow-root styles, native buttons, focus outlines, status messages and light/dark colors. They inherit the host's `--font-ui`; published and exported demos receive the same fonts. A page's broad `button` or `img` rules do not change component internals.

Pages own the containing grid/list, spacing and breakpoints. Choose `variant: 'tile'` or `'row'`; use `update` when changing layouts. Keep filenames as the primary label and preserve keyboard access. The adder states where files go and what was saved, so do not hide that destination or status.

Optional CSS custom properties on the mount element are `--gezel-component-text`, `--gezel-component-surface`, `--gezel-component-border`, `--gezel-component-muted`, and `--gezel-component-accent`. Set both light and dark values if overriding them, and maintain contrast and a visible focus outline. In dark mode the components fill a primary key with deep terracotta (`#8c4428`) and cream ink, as the shell does, and keep the lighter accent for focus rings; a page's own filled keys should match. No copied fonts, CSS framework, external icon service or per-app component fork is needed.

Ordinary workspace/artifact HTML keeps its own styles. The demo publisher/exporter supplies the same typography and components. Keep system fallbacks for degraded rendering without bundling a second font set into app source:

```css
body {
  font-family: var(--font-body, system-ui, sans-serif);
  font-size: 1rem;
  line-height: 1.5;
}
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading, Georgia, serif);
  font-weight: 400;
}
button, input, select, textarea {
  font-family: var(--font-ui, system-ui, sans-serif);
  font-size: inherit;
}
```

The implementation contract is in [the typography roles](https://github.com/bendyline/gezel/blob/main/packages/ui/src/assets/fonts/typography-tokens.css), [the injected defaults](https://github.com/bendyline/gezel/blob/main/packages/ui/src/assets/fonts/page-defaults.css), and [the font builder](https://github.com/bendyline/gezel/blob/main/scripts/project-page-typography.mjs). Update this guide when that contract changes.

### Theme and page-owned tokens

Use parchment and warm ink in light mode, dark neutral surfaces in dark mode, and terracotta for actions. Sage is an identity color. Use semantic variables in component rules; retain content colors for photographs, illustrations, charts, and other data.

Use both the system preference and the host theme. The media query gives the page a correct initial appearance and supports a raw standalone demo. An explicit host theme should win over the operating system preference. This small starter uses the shell's palette values, but **these declarations belong to the page; they are not injected**:

```css
:root {
  color-scheme: light dark;
  --page-bg: #eae5d6;
  --page-panel: #f3eddf;
  --page-text: #1c1c1c;
  --page-muted: #5a4f42;
  --page-border: #8b7e6b;
  --page-accent: #9a4e30;
}
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --page-bg: #141517;
    --page-panel: #1c1d20;
    --page-text: #f0f0f0;
    --page-muted: #b9aea0;
    --page-border: #8b7e6b;
    --page-accent: #d5a07a;
  }
}
:root[data-theme="dark"] {
  color-scheme: dark;
  --page-bg: #141517;
  --page-panel: #1c1d20;
  --page-text: #f0f0f0;
  --page-muted: #b9aea0;
  --page-border: #8b7e6b;
  --page-accent: #d5a07a;
}
:root[data-theme="light"] { color-scheme: light; }
* { box-sizing: border-box; }
[hidden] { display: none !important; }
body { margin: 0; background: var(--page-bg); color: var(--page-text); }
main { max-width: 72rem; margin: auto; padding: clamp(1rem, 3vw, 2.5rem); }
button, input, select, textarea {
  min-height: 44px;
  padding: .5rem .75rem;
  border: 1px solid var(--page-border);
  border-radius: 6px;
  background: var(--page-panel);
  color: var(--page-text);
}
:focus-visible { outline: 2px solid var(--page-accent); outline-offset: 3px; }
a { font-family: var(--font-ui, system-ui, sans-serif); color: var(--page-accent); }
```

After the real API or shared demo bootstrap has initialized `gezel`, apply and subscribe to its theme:

```js
const applyTheme = ({ mode }) => { document.documentElement.dataset.theme = mode; };
applyTheme(gezel.ui.theme);
const stopTheme = gezel.ui.onTheme(applyTheme);
window.addEventListener('pagehide', stopTheme, { once: true });
```

### Layout, controls, and language

- Put the person's content first. Give the page one clear title, a short explanation when needed, and visible primary actions. Keep project ids, tool names, SQL, and host transport details out of ordinary flows.
- Use serif for headings and sans for body text, labels, and controls. Start body text around 16px with a comfortable line-height. Keep captions readable and avoid shrinking controls to fit a narrow pane.
- Use mostly-square controls: 4px for small badges, 6px for buttons and inputs, and around 10px for trays and small surfaces. Choice controls are keys in a tray with a clear pressed state. Avoid capsule buttons, emoji navigation, and decorative dashboard clutter.
- Use native elements: a `button` for an action, an `a` for a real destination, labels for inputs, and a real table for tabular data. Give toggles `aria-pressed` and icon-only controls an accessible name.
- The embedded page sandbox permits scripts but not native form submissions. Use `button type="button"` and explicit action handlers; support Enter in single-line inputs without relying on a form's `submit` event. Invoke declared tools through `gezel.tools.invoke`.
- Keep focus visible, support keyboard operation, and restore focus after closing dialogs. Native video/audio controls are a useful baseline. Do not autoplay media.
- Check contrast in both themes, including helper text and selected states. Communicate errors and chart series with text or shape as well as color. Honor reduced-motion preferences when adding animation.
- Check a narrow Output pane and a 320px viewport. Wrap filters, allow long filenames to break, and contain necessary table overflow within its region. A page should not force the whole host to scroll sideways.

The full product direction remains in [Gezel UX](https://github.com/bendyline/gezel/blob/main/docs/ux.md); the [brand guidelines](https://github.com/bendyline/gezel/blob/main/docs/design-guidelines.md) cover other surfaces. Their shell class names and token declarations are references, not automatically available page APIs.

### Data and state are part of the design

Show distinct loading, empty, permission-denied, unavailable, partial-result, and failed-action states. Keep useful content visible when an optional capability fails; a data dashboard can still list files without DuckDB, and a gallery can still list a file whose codec cannot play. Tell the person when a listing or query is truncated, or when a chart describes an indexed snapshot rather than the latest file bytes.

Use `textContent` for filenames and data labels. Read files through `gezel.data`, use `data.url()` for media, and use declared tools for writes. Debounce refreshes, limit rendered cards, unsubscribe watches, stop players on close, and ignore stale asynchronous results after a selection changes.

Standalone samples must be clearly labeled and deterministic. Keep their mutations in memory and provide Reset demo. Never substitute sample data after a live permission or query failure. The [page API guide](https://gezel.com/docs/gezel-page-apis/) describes the host modes and the shared demo bootstrap.

Before delivery, inspect light and dark mode, keyboard focus, long labels, an empty folder, a failed operation, narrow layouts, and the real host flow. Structural validation cannot establish that a page is usable.

## Gezel app UX guide

This guide says how an app page is organized and how people act in it. The [page style guide](https://gezel.com/docs/gezel-app-page-style-guide/) covers what Gezel supplies to a page and how it looks: fonts, color, controls, and states. [Using the Gezel page APIs](https://gezel.com/docs/gezel-page-apis/) covers the components named here.

It is a living standard. Each practice has a number, so a review can cite it ("B3: this form picks a record that is already on screen"). The open questions at the end record what is not settled. When a pass over the apps teaches something new, change the practice and add a line to the change list.

### Start from the app's shape

Most apps fall into one of five shapes. Pick the shape first; it decides the structure.

| Shape | Examples | Structure |
| --- | --- | --- |
| Workspace | Shift Roster, Sales Pipeline, Event Desk | Home, then one tab per noun the person manages, then Settings when there is something to set |
| Single list | Household Manual, Life Binder | One view with a key bar under the title and actions on each row |
| Board | Checkers, Chess, Word Clues | The board is the page. New game opens a dialog |
| Practice | Flashcards, Language Trainer | Home is today's practice, with tabs for what you collect and for progress |
| Collection | Media Library, Design Scheme | The gallery is the page, with filter keys, an Add key, and a preview dialog per item |

### A. Structure

**A1. One title and one summary line.** The `h1` names the person's subject when there is one ("Trip: Lisbon", "The Glass Cartographer"), otherwise the app. Under it, one line says the state in plain words and what needs attention: "The week is approved, with 2 spots still open." Compute it from the data; never leave a static description there.

**A2. Home comes first and answers "what needs me now?"** In a workspace app, Home holds up to four summary tiles, the list of things that need the person, the app's main view, and the app's top two or three actions.

**A3. One tab per noun.** Each thing the person manages (People, Deals, Quotes, Vendors) gets a tab with its full list, its search, and its create and update actions. Label tabs with short plural nouns in sentence case. Two to five tabs is right; more means two nouns should merge.

**A4. Settings comes last, and only when there is something to set.** Rules, rates, targets, and event or campaign details belong there. Settings forms are open on the tab, not behind a key, and show the values saved now. Never show an empty Settings tab.

**A5. No tab repeats Home.** When the app's main view already is a noun's list, that noun lives on Home and gets no tab of its own. Shift Roster's week grid is its list of shifts, so Shift Roster has Home, People, and Settings, and no Shifts tab.

**A6. Declare navigation; don't derive it from headings.** Many section headings are dashboard panels ("Coming up", "Reorder now"), not places to go. Name the tabs and what each holds. Do not add an "On this page" row of links.

**A7. A single-view app has no tabs.** A key bar under the title and actions on each row are enough. Add tabs when a second noun needs its own list, not before.

### B. Actions

**B1. An action is a key that opens a dialog.** Never put a form on the page behind an expandable card. The disclosure presentation of `actionForm` exists only for older pages. One exception: a quick add of one field and its key (a grocery item, a record's title) can sit open at the top of the list it adds to.

**B2. Three keys at most, and one filled primary per view.** The primary is the action that creates or commits. When the view already has a commit key of its own (Approve the week), every action key in that view is secondary.

**B3. Act on the record where it is.** When a form starts by picking a record that is already on screen (a shift, a deal, an invoice), put a small key on that record's row or card instead: Fill, Time off, Move, Mark paid. It opens the same dialog with the record filled in. Keep a general key only when people also start that action from nowhere in particular.

**B4. Dialogs follow one pattern.** The title is the action ("Add a person"), and fields sit in one column. Cancel comes before the verb on the right ("Assign", "Add person"). Escape and a click on the backdrop close the dialog. A failed save keeps the dialog open with the typed values and says what went wrong. A successful save closes it and confirms beside the key that opened it, and the page shows the change.

**B5. Ask before discarding work.** New game, remove, and anything else that loses state opens a dialog first.

**B6. Keys name a verb and its object.** "Add a shift", in sentence case. When the dialog title is long, give the key a shorter label.

### C. Showing records

**C1. Show values the way people say them.** Write "Thu, Nov 12", "$1,529", and "In review", never `2026-11-12`, `1529`, `in-review`, or an internal id like `ch-4`. Do date math in local time.

**C2. Color follows the value.** A count is ink. Red and amber mean a problem now, so 0 conflicts is not red. The accent is not a color for counts.

**C3. Empty states span their list and say how to fill it.** "Open spots appear here once the week has shifts." Never squeeze the message into a list's first grid column.

**C4. Say when a list is cut.** Write "Showing 4 of 12" when only part of a list is shown.

**C5. Search only long lists.** Show a search box from about eight items, inside the list's section, with a placeholder that says what to type ("Name or role"). Do not count the empty-state row as an item.

**C6. Everything the companion can change has a place on the page.** If it can edit sessions, past visits, or a voice guide, the person can see them somewhere.

### D. Color and type

The [page style guide](https://gezel.com/docs/gezel-app-page-style-guide/) holds the detail. These are the rules apps most often break.

**D1. Actions use Gezel's action color.** Primary keys, focus rings, and Send use terracotta. The app's own accent is identity: charts, bars, and chips. Never set `--gezel-component-accent` to restyle Gezel's components in an app color.

**D2. One demo banner.** The banner is a quiet parchment strip with Reset demo, the same in every app. It is a notice, not an action or an error.

**D3. Headings use PT Serif at weight 400.** Small uppercase labels and eyebrows use the UI sans. Do not mark one up as a styled-down `h2` or `h3`, which turns it serif.

**D4. Body text is about 16px.** Nothing you can press is smaller than 28px, and keys are 44px tall.

### E. The companion

**E1. The conversation's title says where you are, and its description suggests what to ask.** For example: "At the scheduling desk" and "Add a shift, mark when someone can't work, or ask where the week is short."

**E2. Keep the composer's placeholder to about 28 characters.** For example, "What changed this week?" A longer one is cut off in the panel.

**E3. Demo suggestions do real work on the page.** See [the sample conversation](https://gezel.com/docs/gezel-page-apis/#the-sample-conversation).

### Building it

The components carry most of these practices. A page on a current host (page components version 2) can use:

- `actionForm(mount, { presentation: 'dialog', primary, buttonLabel, ... })`. It draws a key that opens the form in a modal. Its handle's `open(values)` opens the form filled in, for a row's key. Use `trigger: false` for a dialog that only rows open.
- `actionForm(mount, { presentation: 'inline' })` for a settings form, with `reset(values)` to show what is saved.
- `tabs(mount, { tabs: [{ id, label, panel, badge }] })` for underline tabs over the page's own panels.
- `collectionFilter(mount, { ..., placeholder, minItems: 8 })` for search that appears only when it helps.

Feature-detect version 2 (`gezel.ui.components.version >= 2` and `typeof tabs === 'function'`). Keep an older host usable: there, an action form falls back to a disclosure.

Catalog apps in Gilde share one composition script, `application.js`. Its `config` declares the structure, and the script builds the tabs, keys, settings forms, and row dialogs from it:

```json
"tabs": [
  { "id": "home", "label": "Home", "sections": [".tiles", "#gaps-section", "#week-section"],
    "actions": ["add_shift", "assign_shift", "set_availability"], "primary": false },
  { "id": "people", "label": "People", "sections": ["#hours-section", "#away-section"],
    "actions": ["add_staff", "set_availability"] },
  { "id": "settings", "label": "Settings", "settings": ["set_rules"], "sections": ["#rules-section"] }
]
```

A row action is a button in the page's own markup. The shared script opens the matching dialog filled in:

```js
const fill = document.createElement('button');
fill.type = 'button';
fill.className = 'key';
fill.textContent = 'Fill';
fill.setAttribute('aria-label', `Fill ${dayName} ${shift.fields.start} ${shift.fields.role}`);
fill.setAttribute('data-app-action', 'assign_shift');
fill.setAttribute('data-app-values', JSON.stringify({ id: shift.id }));
```

Shift Roster 1.1.0 is the reference implementation. Its page shows Home, People, and Settings, Fill keys on open spots, Time off keys on each person, and a settings form that shows the saved rules.

### Review checklist

- [ ] The shape is chosen, and the structure matches it (A2–A7).
- [ ] The summary line says the state and what needs attention (A1).
- [ ] Every action opens a dialog. No view has more than three keys or more than one primary (B1, B2).
- [ ] Forms that pick an on-screen record are row keys (B3).
- [ ] No ISO dates, raw enum values, or ids are shown (C1). Tones follow values (C2).
- [ ] Empty states span their list. Search appears only on long lists, with a real placeholder (C3, C5).
- [ ] Actions and focus use the action color. The demo banner is the shared one (D1, D2).
- [ ] The page works at 420px wide without scrolling sideways, in dark mode, and with the keyboard.

### Open questions

- **Settings for what the person chose at creation.** A business name, an event date, or a weekly word goal is a project parameter. Pages can read these but not change them, so most of them cannot appear in Settings today. A host-drawn Settings form generated from the parameter schema would serve every app at once.
- **Nouns shared between apps.** Shift Roster, New Hire Onboarding, and Training Tracker each keep their own list of the same café staff. Should one business keep one People list?
- **Field types the forms lack.** A rating, a yes/no choice, a color, and amounts stored in cents. Without them, some actions stay a free-text field or stay out of Settings.
- **The companion's name on the page.** Pages know the crew member's role but not their name, so page text says "Your shift scheduler" while the conversation says "Nina".
- **Narrow tab rows.** The shell's tab rows trade labels for icons as they narrow. App tabs scroll instead, which works for short labels but is not the shell's rule.
- **Host-supplied tokens.** Pages still declare their own colors, spacing, and title sizes. A small shared set (action color, surfaces, title scale) would remove most of the drift this guide polices.

### Changes

- **November 7, 2026.** First version, from a review of 43 catalog apps. It covers the five app shapes, Home and noun tabs, dialog actions, row actions, inline settings, and value formatting.

## References

Open these when you need an exact detail:

- [Output Pane API reference](https://github.com/bendyline/gezel/blob/main/docs/output-pane-api.md): every page method, permission, mode, limit, and error code.
- [TypeScript declarations for pages](https://github.com/bendyline/gezel/blob/main/packages/sdk/src/page.ts): the same API as types.
- [Project-type specification](https://github.com/bendyline/gezel/blob/main/docs/project-types.md): composition, adoption, upgrades, and the `.gezapp` format.
- [Writing scripts with gezel-sdk](https://gezel.com/docs/writing-scripts-with-gezel-sdk/): deterministic actions and the checks that hold a craftbook step until its work is right.
- [Sample apps](https://github.com/bendyline/gezel/tree/main/examples/apps): three complete source folders, kept working by Gezel's test suite.
- [Sharing an app page with app serve](https://github.com/bendyline/gezel/blob/main/docs/app-serve.md): a page outside the desktop app.
