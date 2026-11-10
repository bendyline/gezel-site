# Containerize a Service

Containerize an application with a production-grade Dockerfile — small, secure, reproducible, and buildable — plus the supporting files to run it. Scopes the container contract FIRST — base image, build vs runtime stages, dependencies, exposed port, entrypoint, env config, and the size/security bar — then writes the Dockerfile + .dockerignore + compose, then a reviewer confirms it builds, runs, and meets the bar. Covers multi-stage builds, slim base images, layer caching, non-root user, .dockerignore, healthchecks, EXPOSE/ENTRYPOINT, and reproducible image builds.

## How it runs

| # | Step | Who runs it | What happens |
| --- | --- | --- | --- |
| 1 | Scope the container | Planner | lock base image, stages, port, entrypoint, bar |
| 2 | Write the Dockerfile | Developer | implement the multi-stage Dockerfile + support files |
| 3 | Verify the image | Reviewer | confirm it builds, runs, and meets the bar |
| 4 | Evaluate | Reviewer | Grade the deliverable against every acceptance criterion. All pass → finish; any fail → loop back and fix the gap. |
| 5 | Finish | Developer | All acceptance criteria met. Stamp a short summary and report DONE. |

Say something like "dockerize this app" or "write a dockerfile" or "containerize a service" or "create a docker image" or "docker compose setup" in chat to start it.
