# Vincent Ng — Portfolio

Personal portfolio website showcasing experience, projects, and photography.

**Live site:** [awesome-big-v-817978554954.us-central1.run.app](https://awesome-big-v-817978554954.us-central1.run.app)

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** GCP Cloud Run via GitHub Actions

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Push to `main` triggers the GitHub Actions pipeline:

1. Builds a Docker image
2. Pushes to Google Artifact Registry
3. Deploys to Cloud Run (`us-central1`)
