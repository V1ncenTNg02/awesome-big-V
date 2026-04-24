# Project Memory

> This file is the AI agent's persistent memory for this project.
> It is read at the start of every session and updated before every session ends.
> It is NOT a substitute for code comments, changelog entries, or ADRs.
> It captures what those documents cannot: non-obvious constraints, failed attempts,
> discovered gotchas, and a running summary of what each session accomplished.

---

## Special requirements

> Non-obvious constraints, rules, and decisions that are not derivable from the code itself.
> Add entries here when something would surprise a future agent working on this project.
> Each entry must explain the WHY — not just the what.

<!--
Format per entry:
### REQ-NNN — <short title>
**Discovered:** YYYY-MM-DD
**Area:** <backend / frontend / infra / data model / testing / all>
**Requirement:** <what the constraint or rule is>
**Why:** <the reason — stakeholder request, past incident, compliance, architectural decision>
**How to apply:** <when this kicks in, what to do or avoid>
-->

### REQ-001 — Cloud Run deployment requires standalone Next.js output
**Discovered:** 2026-04-24
**Area:** infra
**Requirement:** `next.config.ts` must keep `output: 'standalone'`. Removing it breaks the Docker build — the standalone server.js is not generated without it.
**Why:** The Dockerfile copies `.next/standalone` as the production server. Without standalone mode Next.js does not produce this directory.
**How to apply:** Never remove `output: 'standalone'` from next.config.ts without updating the Dockerfile and CI pipeline.

---

## Session log

> A reverse-chronological log of what each agent session accomplished, decided, or attempted.
> The most recent session appears first.
> Each entry is a summary — not a full transcript. Focus on outcomes, decisions, and blockers.

<!--
Format per entry:
### YYYY-MM-DD — <session topic>
**Completed:**
- <what was built or fixed>

**Decisions made:**
- <any non-obvious choice made during the session and why>

**Blockers / open questions:**
- <anything that was blocked, unclear, or left for the next session>

**Files changed:** <comma-separated list of the key files modified>
-->

### 2026-04-24 — Add GCP Cloud Run CI/CD pipeline
**Completed:**
- Created `Dockerfile` (multi-stage Next.js standalone build, node:20-alpine)
- Created `.dockerignore`
- Created `.github/workflows/deploy.yml` (GitHub Actions → Artifact Registry → Cloud Run)
- Updated `next.config.ts` with `output: 'standalone'`
- Recorded ADR-001 in `docs/decisions/decisions.md`

**Decisions made:**
- GitHub Actions over Cloud Build (simpler, repo already on GitHub)
- Service account key auth over Workload Identity Federation (simpler for solo portfolio project)
- Cloud Run `min-instances=0` (scale to zero, cost-effective for portfolio)

**Blockers / open questions:**
- User must complete one-time GCP manual setup before pipeline will work (see below)

**Files changed:** `Dockerfile`, `.dockerignore`, `.github/workflows/deploy.yml`, `next.config.ts`, `docs/decisions/decisions.md`, `docs/changelog/changelog.md`

---

### 2026-04-24 — Fill in CLAUDE.md project settings
**Completed:**
- Replaced all `<placeholder>` values in `.claude/CLAUDE.md` with actual project details
- Added Design Tokens section (Tailwind custom colours, fonts, border-radius)
- Documented known pitfalls: Next.js Image dimensions, missing docs, empty skill dirs

**Decisions made:**
- Noted that `docs/design/ui-design.md` and `docs/testing/testing-strategy.md` do not exist yet — must be created from templates before frontend/implementation work
- Noted that `skills/general/` and `skills/infra/` are empty — workflow skills not yet built

**Blockers / open questions:**
- `docs/design/ui-design.md` needs to be created before next frontend session
- No test framework installed — testing rules are aspirational

**Files changed:** `.claude/CLAUDE.md`, `docs/memory/project-memory.md`

---

## Known gotchas

> Things that went wrong, caused confusion, or required a non-obvious fix.
> Add here so the next session does not repeat the same mistake.

<!--
Format per entry:
### <short description of the gotcha>
**Area:** <file path, module, or domain>
**What happened:** <what the surprising behaviour or failure was>
**Root cause:** <why it happened>
**Fix / workaround:** <what to do when you encounter this>
-->

*(No gotchas recorded yet.)*

---

## Pending work from previous sessions

> Tasks explicitly deferred to a future session. Remove entries when the work is done.

<!--
Format per entry:
- [ ] <task description> — deferred from YYYY-MM-DD session, reason: <why it was deferred>
-->

*(Nothing pending.)*
