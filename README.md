# employment-screener

Personal portfolio and recruiter intake tool for Kevin Funk, Staff Software Engineer.

## What it does

Two pages:

- **`/`** — Resume/portfolio. Work history, skills, education, and links to contact and download a PDF resume.
- **`/recruiter`** — A multi-step intake form for recruiters to complete before reaching out. Covers role basics (employment type, team size, remote/hybrid/onsite), company context (funding stage, tech stack), and a plain-English description of what the first six months would look like. Submissions are sent to a Google Apps Script endpoint; failures fall back to a pre-filled `mailto:` link.

## How it's built

- **Next.js 15** (App Router) with `output: 'export'` for static generation
- **React 19** — the recruiter form is fully client-side with step-by-step state management and per-step validation
- **Tailwind CSS** with a custom Material Design 3 color system (light + dark mode)
- **TypeScript** throughout
- **pnpm** for package management

### Dark mode

A synchronous inline `<script>` in `<head>` reads the `theme` cookie before the browser paints, adding a `dark` class to `<html>` — no flash of unstyled content. The nav toggle writes back to `document.cookie`. Server-side cookie reading was intentionally avoided to keep the build fully static.

### Fonts & icons

- **Inter** (body) and **Manrope** (headlines) via `next/font/google`
- **Material Symbols Outlined** via Google Fonts CDN

## Deployment

Deployed to GitHub Pages at `k-funk.github.io/employment-screener`.

```bash
pnpm run deploy   # next build → gh-pages push
```
