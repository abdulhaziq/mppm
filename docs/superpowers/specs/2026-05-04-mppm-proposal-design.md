# MPPM Digital Empowerment Ecosystem — Proposal Web App Design

**Date:** 2026-05-04
**Status:** Approved

## Overview

Convert two existing JSX proposal files into a polished, multi-page Next.js 15 App Router application with animated page transitions, deployed to Vercel. Content is merged from both source files; branding follows the MPPM brand palette from the chairman proposal.

**Source files:**
- `/mnt/c/Users/abdul/Downloads/mppm_web_proposal.jsx` — core proposal content
- `/mnt/c/Users/abdul/Downloads/mppm_web_proposal_for chairman.jsx` — chairman-focused content, brand colors, financial data

## Brand Palette

```ts
const BRAND = {
  primary:   "#1F7A6B",   // teal green
  secondary: "#2FAE9B",   // lighter teal
  accent:    "#F4C542",   // gold
  dark:      "#0E3B33",   // deep dark green
  soft:      "#F4FBF8",   // near-white teal tint
  ink:       "#0F172A",   // near-black
};
```

Logo: `https://www.mppmal.my/wp-content/uploads/2023/01/logo-mppm.png`

## Architecture

**Framework:** Next.js 15 App Router
**Styling:** Tailwind CSS v4
**Animations:** Framer Motion (page transitions + scroll-triggered fade-ins)
**Deployment:** Vercel

### Routes

| Route | Page | Purpose |
|---|---|---|
| `/` | Proposal | Full MPPM Digital Operating System proposal (merged content) |
| `/pricing` | Investment | Cost breakdown, payment structure, financial projections |
| `/team` | Our Team | Team profiles, credentials, past work, tech stack |
| `/timeline` | Timeline | Month-by-month milestones and deliverables |
| `/terms` | Terms & Next Steps | Scope, assumptions, payment terms, pilot plan, CTA |

### Project Structure

```
/app
  layout.tsx               — Root layout: shared nav, Framer Motion page wrapper
  page.tsx                 — Proposal (merged content, polished)
  /pricing/page.tsx        — Investment, financial projections, revenue streams
  /team/page.tsx           — Team credentials & contact
  /timeline/page.tsx       — Detailed milestone timeline
  /terms/page.tsx          — Terms, pilot plan, next steps, sign-off CTA
/components
  /ui
    Card.tsx               — Reusable rounded card
    Button.tsx             — Primary / outline button variants
    SectionHeader.tsx      — Eyebrow + title + optional body
    IconBadge.tsx          — Emoji icon in rounded container
    ProgressBar.tsx        — Branded progress bar
    PhoneMockup.tsx        — Phone frame for explorer section
  Nav.tsx                  — Top navigation bar with progress indicator
  PageNav.tsx              — Previous / Next page buttons (bottom of each page)
  PageTransition.tsx       — Framer Motion AnimatePresence wrapper
/lib
  brand.ts                 — BRAND color constants
  data/
    proposal.ts            — Proposal page data
    pricing.ts             — Pricing & financial data
    team.ts                — Team member data
    timeline.ts            — Timeline milestone data
    terms.ts               — Terms & pilot plan data
```

## Shared Navigation

- **Top nav:** MPPM logo on left; 5 page links with active state; step progress indicator (1 of 5)
- **Bottom page nav:** "← [Previous]" on left, "[Next] →" on right; hidden on first/last page respectively
- **Transitions:** Framer Motion `AnimatePresence` slide direction based on forward/back navigation

## Page Content Specs

### Page 1 — Proposal (`/`)

Merged content from both source files, structured as:

1. **Hero** — MPPM logo, headline "MPPM Digital Operating System", tagline, CTA buttons
2. **Proposal Snapshot card** — metadata (disediakan untuk, cadangan, tujuan, pilot)
3. **Executive Summary** — 3 quick cards (Naik taraf peranan, Data sebagai kuasa, Pilot rendah risiko)
4. **Urgency & Risk** — 2-column: "Kenapa Sekarang" + "Risiko Jika Tidak"
5. **Rationale** — 4 evidence points (Mandat, Cabaran SME, Keperluan Data, Benchmark)
6. **Problem Statement** — 4-row gap table (Model Operasi, Data Ahli, Pakar Industri, Dasar)
7. **Chairman Dashboard** — KPIs, Policy Signals, SME Pipeline, Pakar Utilisation, Strategic Alerts
8. **System Journey** — 5-step user flow
9. **Interactive Module Scope** — 6 modules, click to expand features + output
10. **System Explorer** — 4 screen views with phone mockup (Chairman, Member, Pakar, Policy)
11. **Expected Impact** — 3 stakeholder cards (MPPM, Ahli/SME, Kerajaan)
12. **Closing** — Footer CTA

UI improvements:
- Scroll-triggered fade-in per section (`whileInView`)
- Card hover lift (`hover:-translate-y-1`)
- Active module selector with smooth indicator
- Phone mockup screen switcher with crossfade
- All blue replaced with MPPM brand palette

### Page 2 — Investment (`/pricing`)

- Hero: total investment headline + "transparent, milestone-based" subtext
- Phase cost table: Fasa 1 / 2 / 3 with scope summary and cost per phase
- Payment structure: 30% / 40% / 30% milestone breakdown
- Included vs. excluded scope (two-column)
- Financial projections bar chart: Year 1 RM720K → Year 2 RM2.1M → Year 3 RM3.6M
- Revenue streams: consultation commission, premium membership, training, gov initiatives
- Optional add-ons section

### Page 3 — Our Team (`/team`)

- Agency/studio intro (2–3 sentences about who is delivering)
- Team member cards: name, role, photo placeholder, 2-line bio
- Credentials & past work (2–3 project highlights)
- Tech stack badges

### Page 4 — Timeline (`/timeline`)

- Month-by-month breakdown across 12 months
- Aligns to 3 roadmap phases from the proposal
- Key deliverables per month with status indicators
- Client review checkpoints highlighted
- Dependency notes

### Page 5 — Terms & Next Steps (`/terms`)

- Pilot plan highlight: 3 months · 100 SME · 20 Pakar Industri
- Scope of work summary (bullet list)
- Assumptions & exclusions
- Payment terms (reference to pricing page)
- Clear CTA: "Ready to proceed?" with contact info
- Signature / agreement block

## Deployment

1. Initialize Git repo in `/project/mppm`
2. Scaffold Next.js 15 app with `create-next-app`
3. Push to GitHub
4. Connect to Vercel via `vercel` CLI and deploy
5. Auto-deploy on push to `main`
