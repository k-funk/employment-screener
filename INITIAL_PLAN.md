# Recruiter App — Project Plan

## Stack
- **Package manager:** pnpm
- **Framework:** Next.js (latest, App Router)
- **UI:** Material UI (latest)
- **Language:** TypeScript (latest)
- **Linting:** ESLint with the following rulesets:
  - `eslint:recommended`
  - `typescript-eslint/recommended`
  - `react/recommended`
  - `react-hooks/recommended`

---

## Routes

| Path | Description |
|---|---|
| `/` | Resume page (content TBD) |
| `/recruiter` | Multi-step recruiter intake form |

---

## Page: Resume (`/`)

Placeholder for now. Will be built out once resume content is provided. Use Material UI components. Style TBD.

---

## Page: Recruiter Form (`/recruiter`)

A multi-step form for recruiters to fill out before reaching out. Steps are linear but the user can navigate back. No submission logic yet — on final submit, show a thank-you state.

### Step 1 — The Company

| Field | Type | Required | Notes |
|---|---|---|---|
| Company name | Text input | Yes | |
| Industry / field | Text input | Yes | |
| Funding stage | Select | Yes | Options: Seed, Series A, Series B, Series C, Series D+, Profitable / Bootstrapped, Public |
| Employment type | Radio / Select | Yes | Options: Full Time / W2, Part Time / 1099, Other (free text) |

### Step 2 — The Team & Org

| Field | Type | Required | Notes |
|---|---|---|---|
| Engineering org size | Number input | Yes | |
| Levels between IC and CTO | Number input | Yes | Neutral framing, signals org flatness |
| Company location(s) | Text input (freeform) | No | Where the company is based — not conditional |

### Step 3 — The Role

| Field | Type | Required | Notes |
|---|---|---|---|
| Fully remote? | Radio (Yes / No) | Yes | If Yes, show follow-up |
| → If remote: how often does the team meet in person? | Text or Select | No | Conditional |
| Tech stack | Text input (freeform or tags) | Yes | |
| Projects in first 6 months | Textarea | No | Optional — recruiters often don't know |

---

## Form Behavior

- Back/Next navigation between steps
- Validation on Next (required fields must be filled before advancing)
- Progress indicator above each step: "Step X of 3" label + MUI `LinearProgress` bar
- Spam protection after Step 3, before final submit: a simple plain-English question (e.g. "What color is the sky?"). Wrong answer blocks submission. Not a numbered step — just a gate before submit.
- Final step submits to a thank-you state (no backend yet)
- Google Sheets integration to be added later

---

## Open Questions / To Decide Later

- Resume content and visual style
- Whether to add a progress indicator (step 1 of 3, etc.)
- Google Sheets submission integration
- Any auth or spam protection on the recruiter form
