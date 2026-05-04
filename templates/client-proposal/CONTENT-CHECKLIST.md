# Client proposal — content checklist (copy per engagement)

Use this as a **writing brief**. Replace `{{…}}` before implementing in `lib/data/*.ts`.

---

## Document identity

| Field | Your value |
|-------|------------|
| Client organisation | {{CLIENT_ORG}} |
| Prepared for (role / audience) | {{AUDIENCE}} |
| Proposal product name | {{PRODUCT_NAME}} |
| One-line purpose | {{ONE_LINE_PURPOSE}} |
| Pilot / phase-zero scope (if any) | {{PILOT_SCOPE}} |

Maps to: `proposalMeta` in `lib/data/proposal.ts`.

---

## Executive & urgency (stable sections, custom copy)

**Quick value cards (3)** — why this programme matters:

1. {{VALUE_CARD_1_TITLE}} — {{VALUE_CARD_1_BODY}}
2. {{VALUE_CARD_2_TITLE}} — {{VALUE_CARD_2_BODY}}
3. {{VALUE_CARD_3_TITLE}} — {{VALUE_CARD_3_BODY}}

**Evidence / rationale (4 bullets)** — mandate, market challenge, data need, benchmark:

- {{EVIDENCE_1_TITLE}}: {{EVIDENCE_1_TEXT}}
- {{EVIDENCE_2_TITLE}}: {{EVIDENCE_2_TEXT}}
- {{EVIDENCE_3_TITLE}}: {{EVIDENCE_3_TEXT}}
- {{EVIDENCE_4_TITLE}}: {{EVIDENCE_4_TEXT}}

**Risks if no action (3 lines)**:

1. {{RISK_1}}
2. {{RISK_2}}
3. {{RISK_3}}

Maps to: `quickCards` pattern (if used), `evidencePoints`, `riskIfNot`, `urgencyPoints`.

---

## Problem table (4 rows × 3 columns)

| Dimension | Current state | Implication |
|-----------|---------------|-------------|
| {{DIM_1}} | {{CURRENT_1}} | {{IMPL_1}} |
| {{DIM_2}} | {{CURRENT_2}} | {{IMPL_2}} |
| {{DIM_3}} | {{CURRENT_3}} | {{IMPL_3}} |
| {{DIM_4}} | {{CURRENT_4}} | {{IMPL_4}} |

Maps to: `problemRows`.

---

## Quantified story (optional but strong)

- KPIs (labels + figures + trend): {{KPI_NOTES}}
- Policy / issue signals: {{POLICY_SIGNALS_NOTES}}
- Funnel or pipeline stages: {{PIPELINE_NOTES}}
- Domain-specific alerts (3 strings): {{ALERTS}}

Maps to: `kpis`, `policySignals`, `pipeline`, `alerts`, `pakarUtilisation` (rename metrics in code if not “pakar”).

---

## Modules (usually 6)

For each module:

- Title, short label, icon (emoji), description, bullet features (5), **output sentence** for the client org.

Repeat for modules 1–6. Maps to: `modules[]`.

---

## Explorer / prototype screens (chairman, member, etc.)

For each screen: `key`, tab label, title, subtitle, headline metric, status chip, 4 cards, one **insight** sentence.

Maps to: `explorerScreens`.

---

## Journey (5 steps)

Numbered flow from signup → impact. Maps to: `journeySteps`.

---

## Roadmap (3 phases)

For each phase: name, timeline, title, 5 deliverables. Maps to: `roadmap`.

---

## Impact closing (3 audiences)

- For {{CLIENT_ORG}}: {{IMPACT_CLIENT}}
- For end users / members: {{IMPACT_USERS}}
- For government / sponsors (if relevant): {{IMPACT_GOV}}

Maps to: `impactCards`.

---

## Team & legal

- Team members: name, role, bio (see `lib/data/team.ts`).
- Terms assumptions, exclusions, payment, contact: `lib/data/terms.ts`.

---

## Brand

- Primary / secondary hex colours: {{BRAND_COLORS}}
- Logo file in `public/` + `LOGO_URL` in `lib/brand.ts`.

---

When the checklist is complete, implement in TypeScript using the **same array shapes** as the current files so you do not need to change React components.
