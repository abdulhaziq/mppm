export type Milestone = {
  month: string;
  phase: "Fasa 1" | "Fasa 2" | "Fasa 3";
  deliverables: string[];
  checkpoint?: string;
};

export const milestones: Milestone[] = [
  { month: "Bulan 1",  phase: "Fasa 1", deliverables: ["Kickoff meeting & requirement sign-off", "System architecture design", "UI/UX wireframes"], checkpoint: "Design Review — client approval required" },
  { month: "Bulan 2",  phase: "Fasa 1", deliverables: ["Member registration & profile module", "Admin dashboard v1", "Industry classification system"] },
  { month: "Bulan 3",  phase: "Fasa 1", deliverables: ["Pakar Industri directory & profiles", "Programme registration module", "UAT Fasa 1"], checkpoint: "Fasa 1 Delivery — payment milestone 1" },
  { month: "Bulan 4",  phase: "Fasa 2", deliverables: ["SME readiness scoring engine", "Digital & finance assessment forms"] },
  { month: "Bulan 5",  phase: "Fasa 2", deliverables: ["Consultation booking system", "Industry pulse survey module", "Automated follow-up flows"] },
  { month: "Bulan 6",  phase: "Fasa 2", deliverables: ["Programme impact reports", "Dashboard data integration", "UAT Fasa 2"], checkpoint: "Fasa 2 Delivery — payment milestone 2" },
  { month: "Bulan 7",  phase: "Fasa 3", deliverables: ["Business matching engine", "Supplier & partner discovery"] },
  { month: "Bulan 8",  phase: "Fasa 3", deliverables: ["Policy & impact dashboard", "SME issue heatmap", "Pulse survey analytics"] },
  { month: "Bulan 9",  phase: "Fasa 3", deliverables: ["Membership tier system", "Paid consultation payment gateway"] },
  { month: "Bulan 10", phase: "Fasa 3", deliverables: ["International collaboration module", "System performance optimisation"] },
  { month: "Bulan 11", phase: "Fasa 3", deliverables: ["Full UAT & security testing", "Staff training sessions", "Documentation"], checkpoint: "Pre-launch review" },
  { month: "Bulan 12", phase: "Fasa 3", deliverables: ["Go-live & production deployment", "Post-launch monitoring", "Handover & support begins"], checkpoint: "Go-Live — final payment milestone" },
];

export const phaseColors: Record<Milestone["phase"], string> = {
  "Fasa 1": "#1F7A6B",
  "Fasa 2": "#2FAE9B",
  "Fasa 3": "#F4C542",
};
