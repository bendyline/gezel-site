# Social Feed

Run a social feed like a small newsroom — a social media writer keeps every post moving through a real pipeline (idea to published, nothing by accident), a copywriter sharpens each variant for its platform, and a live board shows exactly where every post stands.

**Crew it sets up**

| Role template | Crew lead |
| --- | --- |
| omroeper | Yes — leads the project |
| copywriter | No |

**Plans it installs:** `draft-social-post`, `social-digest`, `reception-report`

**Scheduled work**

| When | Plan |
| --- | --- |
| Night Shift (once per night) | social-digest |
| `0 15 * * 1` | reception-report |
