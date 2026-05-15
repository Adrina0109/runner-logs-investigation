# runner-logs-investigation

A Node.js API used as a CI investigation exercise for the GitHub Actions runner logs lesson.

## What This Repository Is
This is a training lab repository containing intentional CI failures for students to investigate and fix. The goal is to practice reading GitHub Actions runner logs to identify root causes and apply targeted resolutions.

## Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/kalviumcommunity/runner-logs-investigation.git
   cd runner-logs-investigation
   ```
2. Install dependencies locally:
   ```bash
   npm install --legacy-peer-deps
   ```
   *(Note: CI will fail during the installation step — this is expected behavior for the exercise.)*
3. Run tests locally:
   ```bash
   npm test
   ```

## Workflow Overview
This project includes two workflows:
- **ci.yml**: Runs automatically on push to `main` and on pull requests. It handles dependency installation and test execution.
- **release.yml**: Triggered manually via `workflow_dispatch` to create a GitHub release.

## Known CI Failures (Intentional)
Students must determine the root cause of these failures by reading the runner logs:
- **Dependency conflict in ci.yml**
- **Permission error in release.yml**

## Health Endpoint
The API provides a health check endpoint at `GET /health`.
**Expected Response:**
```json
{
  "status": "ok",
  "version": "1.0.0"
}
```

---
This repository is part of Lesson 2.4 — Investigating GitHub Actions Runner Logs.
