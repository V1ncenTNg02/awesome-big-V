# Decision Log

Records every significant architecture, data-flow, security, infrastructure, and feature decision.
Add a new entry whenever a non-obvious choice is made — the goal is to capture the context
so future contributors understand why things are the way they are.

---

## Entry template

Copy and fill this template for every new decision:

```
### [ADR-NNN] — <short decision title>
- **Date:** YYYY-MM-DD
- **Status:** Proposed | Accepted | Superseded by ADR-NNN | Deprecated
- **Deciders:** <names or roles>
- **Tags:** architecture | security | data | infrastructure | feature | process

**Context**
What situation or problem forced a decision? What constraints existed?

**Options considered**
1. <Option A> — pros / cons
2. <Option B> — pros / cons
3. <Option C> — pros / cons

**Decision**
Which option was chosen and why? State the decision clearly in one sentence.

**Consequences**
- Positive: <benefits gained>
- Negative: <trade-offs or costs accepted>
- Risks: <what could go wrong and how it is mitigated>

**Review trigger**
<What event or condition should prompt revisiting this decision?>
```

---

## Decisions

<!-- Add new decisions below, newest first -->

### [ADR-001] — Deploy to GCP Cloud Run via GitHub Actions
- **Date:** 2026-04-24
- **Status:** Accepted
- **Deciders:** Vincent Ng
- **Tags:** infrastructure

**Context**
Portfolio site needs a hosting target. Initial assumption was Vercel, but decision was made
to use GCP Cloud Run to keep everything within an existing GCP project (`general-gcp-project-493207`).

**Options considered**
1. Vercel — zero-config Next.js hosting, free tier, no containers required
2. GCP Cloud Run (GitHub Actions) — containerised, full control, uses existing GCP project
3. GCP Cloud Run (Cloud Build) — same runtime but more GCP-native CI/CD setup

**Decision**
GCP Cloud Run with GitHub Actions (Option 2). Keeps infrastructure in one GCP project and
uses GitHub Actions because the repo is already on GitHub, making trigger setup trivial.

**Consequences**
- Positive: Full control over container; stays within existing GCP project; CI/CD is versioned in the repo
- Negative: Requires Docker knowledge to debug; service account key stored as GitHub secret (long-lived credential)
- Risks: Service account key exposure — mitigated by limiting SA to minimum required roles; upgrade to Workload Identity Federation when needed

**Review trigger**
If long-lived SA key becomes a compliance concern, migrate to Workload Identity Federation.

<!-- Example:

### [ADR-001] — Use UTC timestamps everywhere
- **Date:** 2024-01-15
- **Status:** Accepted
- **Deciders:** Engineering team
- **Tags:** data, architecture

**Context**
Multiple timezones in the user base. Storing local timestamps causes ambiguity and bugs
when users travel or when the server timezone changes.

**Options considered**
1. Store UTC, convert to local on display — consistent, unambiguous
2. Store local time with timezone offset — complex, error-prone on migration
3. Store Unix epoch integers — portable but unreadable in the database

**Decision**
Store all timestamps as UTC (Option 1). Convert to the user's local timezone only at the
presentation layer.

**Consequences**
- Positive: No timezone ambiguity; safe across server migrations; easy to compare and sort
- Negative: All display code must handle timezone conversion explicitly
- Risks: Developers may accidentally display UTC to users — mitigated by a linting rule

**Review trigger**
If the product expands to regions where regulatory requirements mandate local-time storage.

-->
