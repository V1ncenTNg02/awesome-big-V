# Changelog

All notable changes to this project are documented here, newest first.

**Types:** `feat` | `fix` | `refactor` | `migration` | `test` | `docs` | `chore`

| Type | When to use |
|---|---|
| `feat` | New feature or user-visible behaviour added |
| `fix` | Bug fix — correcting unintended behaviour |
| `refactor` | Internal restructuring without changing behaviour |
| `migration` | Database migration file added |
| `test` | Test added or modified |
| `docs` | Documentation, README, PRD, comments |
| `chore` | Config, tooling, dependency changes |

---

## [Unreleased]

### 2026-04-24 — Add README
- **Type:** `docs`
- **Files:** `README.md`
- **Summary:**
  - **Before:** No README existed at the repo root.
  - **After:** README added with project description, live site link, tech stack, and local dev + deployment instructions.
- **Migration notes:** None
- **Rollback:** Delete `README.md`

### 2026-04-24 — Add CI/CD pipeline for GCP Cloud Run deployment
- **Type:** `feat`
- **Files:** `Dockerfile`, `.dockerignore`, `.github/workflows/deploy.yml`, `next.config.ts`
- **Summary:**
  - **Before:** No deployment pipeline; site was running locally only.
  - **After:** Push to `main` triggers a GitHub Actions workflow that builds a Docker image, pushes it to Artifact Registry (`us-central1-docker.pkg.dev/general-gcp-project-493207/portfolio/awesome-big-v`), and deploys to Cloud Run service `awesome-big-v` in `us-central1`. `next.config.ts` updated to `output: 'standalone'` for the Docker standalone server.
- **Migration notes:** Requires one-time GCP setup — see manual steps in session log.
- **Rollback:** Delete the Cloud Run service in GCP Console; revert `next.config.ts` if needed.

### Add Greythorn IDO Platform project card
- **Type:** `feat`
- **Files:** `data/projects.ts`, `public/projects/next-ido.png`
- **Summary:**
  - **Before:** Projects section had two entries (Vellum ESG, Intelligent Clinic).
  - **After:** Third project entry added — Greythorn IDO Platform (1199×495px screenshot, link to next-ido.vercel.app).
- **Migration notes:** None
- **Rollback:** Remove the third object from the `projects` array in `data/projects.ts`.

### Add external links to project cards
- **Type:** `feat`
- **Files:** `data/projects.ts`, `components/career/ProjectCard.tsx`
- **Summary:**
  - **Before:** Project cards displayed a plain title with no link.
  - **After:** `Project` interface has an optional `url` field. When present, the card title renders as an `<a>` tag opening in a new tab (`rel="noopener noreferrer"`) with a hover underline and a `↗` indicator. Cards without a URL render unchanged.
- **Migration notes:** `url` is optional — existing projects without a URL require no change.
- **Rollback:** Remove the `url` field from the interface and revert the conditional in `ProjectCard.tsx`.

<!-- Add entries here as work progresses, then move to a versioned section on release -->

---

<!-- ## [1.0.0] — YYYY-MM-DD

### [Change Name]
- **Type:** feat
- **Files:** path/to/file.ts
- **Summary:**
  - **Before:** File did not exist / What the old logic was
  - **After:** What the new logic is and why the change was made
- **Migration notes:** Any steps needed when upgrading
- **Rollback:** How to revert if needed

-->
