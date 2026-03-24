# employment-screener

## Stack & Structure

Next.js 15 App Router, TypeScript, Tailwind CSS v3, pnpm. Two routes: `/` (resume) and `/recruiter` (4-step intake form). Deployed as a static export to GitHub Pages at `k-funk.github.io/employment-screener`.

Use Tailwind utility classes with the custom design tokens in `tailwind.config.ts`. All colors use the Material Design 3 token naming convention.

## Key Files

- `src/app/layout.tsx` — root layout with Nav + Footer, Manrope/Inter via next/font, Material Symbols via CDN, inline script for dark mode FOUC prevention
- `src/app/page.tsx` — resume page (server component)
- `src/app/recruiter/page.tsx` — recruiter form shell (client component, manages step/formData state, scrolls to top on step change)
- `src/components/recruiter/` — Step1–4, ProgressBar, ThankYou, SubmissionError
- `src/components/WorkExperience.tsx` — reusable job history card
- `src/types/recruiter.ts` — RecruiterFormData interface
- `src/lib/submitForm.ts` — submits form to Google Apps Script endpoint
- `src/lib/contact.ts` — shared contact constants (email, GitHub, LinkedIn)
- `next.config.ts` — `output: 'export'`, `images: { unoptimized: true }`, `basePath: '/employment-screener'`; also exports `BASE_PATH` constant used by layout/pages
- `public/kfunk_resume_2026.pdf` — downloadable CV
- `public/favicon.ico` + related PNG/manifest files — favicon set

## Dark Mode

Toggled by adding/removing `dark` class on `<html>`, persisted via `document.cookie` (`theme=dark`). FOUC prevented by an inline `<script>` in `<head>` that reads the cookie synchronously before paint. Server-side `cookies()` from `next/headers` was intentionally removed to keep the build fully static.

**Important:** Static export is live — any server-only Next.js APIs (`cookies`, `headers`, etc.) will break the build.

## Recruiter Form

RecruiterFormData fields: `name`, `email`, `organization`, `organizationUrl?`, `industry`, `employmentType`, `orgSize`, `hierarchyLevels`, `presence`, `capitalStructure`, `firstSixMonths`, `techStack`, `compensation`, `additionalNotes`, `verificationAnswer`.

Human verification answer: **11** (6+5). `verificationAnswer` is excluded from form submission.

## Deployment

```bash
pnpm run deploy   # next build → touch out/.nojekyll → gh-pages -d out -t
```

Pushes `out/` to the `gh-pages` branch. Plain `<link>` tags and `<a>` hrefs don't get `basePath` applied automatically — use the exported `BASE_PATH` constant from `next.config.ts` to prefix asset paths (e.g. favicons, PDF links).

## Change History

> **Note for Claude:** After completing any work in this repo, append a dated entry to this section summarizing what changed and any patterns worth knowing for future similar changes.



### 2026-03-23

**GitHub Pages static export setup**
- Removed `cookies()` from `layout.tsx` (server-only, incompatible with static export); replaced with inline `<script>` FOUC prevention
- `next.config.ts`: added `output: 'export'`, `images: { unoptimized: true }`, `basePath: '/employment-screener'`
- `package.json`: added `gh-pages` devDependency and `deploy` script

**Favicon**
- Added full favicon set to `public/` (ico, 16/32px PNG, apple-touch-icon, android-chrome 192/512, site.webmanifest)
- `<link>` tags in `layout.tsx` use hardcoded `/employment-screener/` prefix — `basePath` is not auto-applied to plain `<link>` tags

**Recruiter form**
- Added `compensation` free-text field to Step3 (after Tech Stack) — optional, asks for salary range + equity %
- Adding a new field requires: updating `RecruiterFormData` in `src/types/recruiter.ts`, adding to `initialData` in `src/app/recruiter/page.tsx`, and adding the input to the relevant Step component
- Shortened submit button to `'Submit'` (was wrapping on mobile)
- Added `window.scrollTo({ top: 0, behavior: 'instant' })` on Next/Back transitions — mobile was staying at previous scroll position

**WorkExperience component**
- Date pill and location left-align on small screens: `items-start md:items-end`

### 2026-03-24

**BASE_PATH constant**
- Extracted `BASE_PATH = '/employment-screener'` as a named export from `next.config.ts`
- `layout.tsx` and `page.tsx` now import and use it — string lives in one place
- Pattern: any new asset href that needs the base path prefix should use `` `${BASE_PATH}/...` `` rather than a hardcoded string
