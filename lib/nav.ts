export const NAV_PAGES = [
  { href: "/",         label: "Proposal",   step: 1 },
  { href: "/pricing",  label: "Investment", step: 2 },
  { href: "/team",     label: "Our Team",   step: 3 },
  { href: "/timeline", label: "Timeline",   step: 4 },
  { href: "/terms",    label: "Terms",      step: 5 },
] as const;

export type NavPage = (typeof NAV_PAGES)[number];
