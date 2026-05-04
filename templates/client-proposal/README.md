# Client proposal web template (reuse pattern)

This repository is both a **deployable Next.js product** and a **pattern** for future client proposals: same layout, navigation, and section structure; swap **data + brand** per client.

## What stays stable (reuse)

- App shell: `app/layout.tsx`, navigation (`components/Nav.tsx`, `lib/nav.ts`).
- Page structure: proposal story on `/`, supporting routes (`/team`, `/timeline`, `/pricing`, `/terms`) as needed per engagement.
- UI building blocks: `components/ui/*`.
- Executive narrative pattern on `/`: **Board Brief (45-second chairman readout) + Full Executive Summary** before detailed sections.
- Deployment: `docs/DEPLOY-GITHUB-PAGES.md`, `.github/workflows/deploy-github-pages.yml`.

## What changes per client (fork or branch)

| Concern | Primary files |
|--------|----------------|
| Colours + logo | `lib/brand.ts`, `public/mppm-logo.png` (replace asset + path) |
| Main narrative (hero, KPIs, modules, roadmap, etc.) | `lib/data/proposal.ts` |
| Team + credentials | `lib/data/team.ts` |
| Terms, pilot plan, contact | `lib/data/terms.ts` |
| Navigation labels / steps | `lib/nav.ts` |

Copy **`CONTENT-CHECKLIST.md`** in this folder when starting a new client and fill placeholders before editing TypeScript.

## Suggested workflow for a new client

1. Duplicate the repo (GitHub “Use this template” if you template this repo, or branch `client/<slug>`).
2. Replace brand + logo.
3. Rewrite `lib/data/proposal.ts` from the checklist (keep structure; change copy).
   - Always fill both `chairmanReadout` and `executiveBrief` so the two-layer leadership flow is preserved.
4. Adjust `lib/data/team.ts` and `lib/data/terms.ts`.
5. Trim routes you do not need (remove pages under `app/` and entries in `lib/nav.ts`).
6. Deploy per `docs/DEPLOY-GITHUB-PAGES.md`.

## Naming

For white-label builds, consider renaming `package.json` `name` and the visible product title strings in `proposal.ts` / layout metadata so PDFs and browser tabs match the client.
