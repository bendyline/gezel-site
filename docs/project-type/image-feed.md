# Image Feed

A visual feed with a working rhythm — your social media writer runs the posting pipeline, an image maker turns notions into pictures in the feed's own style, and a live gallery shows every post from first idea to published.

**Crew it sets up**

| Role template | Crew lead |
| --- | --- |
| omroeper | Yes — leads the project |
| image-generator | No |

**Plans it installs:** `draft-social-post`, `social-digest`, `reception-report`

**Scheduled work**

| When | Plan |
| --- | --- |
| Night Shift (once per night) | social-digest |
| `0 15 * * 1` | reception-report |
