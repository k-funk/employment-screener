Employment Screener — Build Plan

 Context

 Building a Next.js portfolio app for Kevin Funk from
 scratch. The app has two routes: a resume page (/) and
 a multi-step recruiter intake form (/recruiter).
 Designs were created in Google Stitch and serve as the
 primary UI reference. The user confirmed: use Tailwind
 CSS (not MUI), follow the design's form structure, and
 add a tech stack open input to Step 3.

 ---
 Stack

 - Package manager: pnpm
 - Framework: Next.js (latest, App Router)
 - Language: TypeScript
 - Styling: Tailwind CSS with custom design tokens from
 the designs
 - Fonts: Manrope (headlines) + Inter (body/labels) via
 Google Fonts
 - Icons: Material Symbols Outlined (Google CDN)
 - Linting: ESLint — eslint:recommended,
 typescript-eslint/recommended, react/recommended,
 react-hooks/recommended

 ---
 File Structure

 src/
   app/
     layout.tsx              # Root layout: fonts, Nav,
 Footer, dark mode html class
     globals.css             # Tailwind directives +
 ambient-shadow, cta-gradient, material symbols settings
     page.tsx                # Resume page (/)
     recruiter/
       page.tsx              # Recruiter form shell —
 manages step state + form data
   components/
     Nav.tsx                 # Frosted glass nav —
 "Kevin Funk" logo, Resume/Recruiters links, dark mode
 toggle
     Footer.tsx              # © Kevin Funk + LinkedIn /
  GitHub / Email links
     recruiter/
       ProgressBar.tsx       # "Section XX" label +
 "Step X of 4" + LinearProgress bar
       Step1.tsx             # Company: name (text),
 industry (select), employment type (FT/PT card buttons)
       Step2.tsx             # Team: org size (number),
 hierarchy (1–6+ button grid), presence (radio cards +
 slider)
       Step3.tsx             # Growth: funding stage
 (radio cards), first 6mo impact (textarea), tech stack
 (text input)
       Step4.tsx             # Verification:
 plain-English spam gate question + answer input
       ThankYou.tsx          # Final thank-you state
 shown after successful submit
   types/
     recruiter.ts            # RecruiterFormData
 interface

 ---
 Tailwind Config (tailwind.config.ts)

 Extend with the full design token palette (all colors
 from the HTML files), font families, and border-radius
 overrides:
 - Colors: all surface-*, primary*, secondary*,
 tertiary*, on-*, outline*, error* tokens
 - fontFamily: headline: ['Manrope'], body: ['Inter'],
 label: ['Inter']
 - borderRadius: DEFAULT: 0.25rem, lg: 0.5rem, xl:
 0.75rem, full: 9999px
 - darkMode: 'class'

 ---
 globals.css

 @tailwind base;
 @tailwind components;
 @tailwind utilities;

 @layer utilities {
   .ambient-shadow { box-shadow: 0 20px 40px rgba(19,
 27, 46, 0.06); }
   .cta-gradient { background: linear-gradient(135deg,
 #4edea3 0%, #00ad78 100%); }
 }

 .material-symbols-outlined {
   font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD'
  0, 'opsz' 24;
 }

 input:focus, select:focus { outline: none; }

 ---
 Shared Components

 Nav.tsx

 - Fixed, frosted glass: bg-[#f7f9fb]/80
 backdrop-blur-xl ambient-shadow
 - Left: "Kevin Funk" in Manrope bold
 - Center: Resume / Recruiters links (active link gets
 emerald underline + color)
 - Right: dark mode toggle button (Material Symbol
 dark_mode) — toggles dark class on <html>
 - Thin separator line below nav using
 bg-surface-container-low h-px

 Footer.tsx

 - © 2024 Kevin Funk left, LinkedIn / GitHub / Email
 links right
 - border-t border-[#c6c5d4]/20

 ---
 Resume Page (/)

 Faithfully converted from
 google_stitch_design_plan/resume/code.html:
 - Hero: large "Kevin Funk" headline, "Staff Software
 Engineer" subtitle, bio paragraphs, "Check for Fit" (→
 /recruiter) + "Download CV" buttons
 - Contact sidebar: email + GitHub
 - "Technical Mastery" section: dark navy background,
 Primary + Additional skill chips
 - Work Experience: Hazel Health, EasyPost, eBay,
 OpenDNS + early roles
 - Education: Graduate, Undergraduate, Certifications,
 Military
 - "Check for Fit" button links to /recruiter

 ---
 Recruiter Form (/recruiter)

 State (recruiter/page.tsx)

 type Step = 1 | 2 | 3 | 4 | 'done';
 const [step, setStep] = useState<Step>(1);
 const [formData, setFormData] =
 useState<RecruiterFormData>({...});
 Validation on Next: required fields must be non-empty
 before advancing.

 RecruiterFormData type

 interface RecruiterFormData {
   companyName: string;
   industry: string;
   employmentType: 'FT' | 'PT' | '';
   orgSize: string;
   hierarchyLevels: string;         // '1'–'5' | '6+'
   presence: 'remote' | 'hybrid' | 'onsite' | '';
   presenceFrequency: number;       // 1–5 slider
   fundingStage: string;
   firstSixMonths: string;
   techStack: string;
   verificationAnswer: string;
 }

 Step 1 — Recruiter Intake

 - Company name: underline-only text input
 - Industry: underline-only select (Technology, FinTech,
  Healthcare, E-commerce, Other)
 - Employment type: FT / PT card buttons (selected
 state: emerald border + bg)

 Step 2 — Team & Structure

 - Org size: number input with "ENGINEERS" label at
 right, underline style
 - Hierarchy: 6-button grid (1, 2, 3, 4, 5, 6+) —
 selected gets bg-tertiary-fixed-dim
 border-on-tertiary-container
 - Presence: three radio cards (Fully Remote, Hybrid,
 On-site) with Material Symbol icons
 - Frequency slider: only visible always (range 1–5,
 labels: Rarely / 2-3 Days/Week / Daily)

 Step 3 — Growth & Mission

 - Funding stage: radio cards (Seed/Early Stage, Series
 A/B Growth, Series C/D+ Expansion, Public)
 - First 6 months: textarea in rounded card with word
 count
 - Tech stack: open text input (underline style), label
 "TECH STACK", question "What's your primary tech
 stack?"

 Step 4 — Finalizing Your Interest

 - Human verification card with shield_person icon
 - Question: "To keep things human, what's 10 + 5?"
 - Answer: underline text input
 - Correct answer ("15") required to submit; wrong
 answer shows inline error
 - "Complete Submission" button
 - Social proof strip below card

 ThankYou state

 - Replace form with a centered thank-you message
 (emerald check icon, headline, subtext)

 Navigation

 - Back / Next Step buttons persistent at bottom
 - Step 1 Back is disabled/hidden
 - Progress bar updates per step (25% / 50% / 75% /
 100%)

 ---
 Setup Commands

 pnpm create next-app@latest . --typescript --tailwind
 --app --src-dir --no-eslint --import-alias "@/*"
 pnpm add -D eslint eslint-config-next
 @typescript-eslint/eslint-plugin
 @typescript-eslint/parser eslint-plugin-react
 eslint-plugin-react-hooks

 Configure .eslintrc.json with the 4 required rulesets.

 ---
 Verification

 1. pnpm dev — app starts at localhost:3000
 2. / — resume page renders with all sections, dark mode
  toggle works
 3. /recruiter — Step 1 loads; required field validation
  blocks Next if empty
 4. Advance through all 4 steps, each with correct
 progress bar fill
 5. Step 4: wrong answer shows error, correct answer
 ("15") advances to ThankYou state
 6. Dark mode toggle applies dark class and all dark
 variants render correctly
