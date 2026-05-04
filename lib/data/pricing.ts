export const phases = [
  {
    phase: "Fasa 1", timeline: "Bulan 1–3", cost: "RM 45,000",
    scope: "Reka bentuk sistem, profil ahli, direktori Pakar Industri, dashboard pentadbir asas, pendaftaran program",
    deliverables: ["System architecture & UI/UX design", "Member onboarding flow", "Admin dashboard v1", "Pakar Industri directory", "Programme registration module"],
  },
  {
    phase: "Fasa 2", timeline: "Bulan 4–6", cost: "RM 55,000",
    scope: "SME readiness score, tempahan konsultasi, survey industri, automasi follow-up, laporan program",
    deliverables: ["SME readiness scoring engine", "Consultation booking system", "Industry pulse survey", "Automated follow-up flows", "Programme impact reports"],
  },
  {
    phase: "Fasa 3", timeline: "Bulan 7–12", cost: "RM 65,000",
    scope: "Business matching, policy dashboard, membership tiers, konsultasi berbayar, kolaborasi antarabangsa",
    deliverables: ["Business matching engine", "Policy & impact dashboard", "Membership tier system", "Paid consultation gateway", "International collaboration module"],
  },
] as const;

export const totalInvestment = "RM 165,000";

export const paymentStructure = [
  { milestone: "Permulaan Projek (Fasa 1 kickoff)",  percentage: "30%", amount: "RM 49,500" },
  { milestone: "Penghantaran Fasa 2 (bulan ke-6)",   percentage: "40%", amount: "RM 66,000" },
  { milestone: "Penghantaran Fasa 3 & Go-Live",      percentage: "30%", amount: "RM 49,500" },
] as const;

export const included = [
  "UI/UX design dan development (web & mobile-responsive)",
  "Backend API, database dan cloud hosting setup",
  "3 fasa delivery seperti roadmap",
  "Testing, QA dan bug fixes dalam tempoh waranti 3 bulan",
  "Latihan pentadbir dan dokumentasi sistem",
  "1 tahun technical support selepas go-live",
] as const;

export const excluded = [
  "Kandungan (content writing, foto, video)",
  "Pengambilan data sedia ada ke dalam sistem baharu",
  "Bayaran domain dan SSL tahunan (≈RM 500/tahun)",
  "Perkhidmatan pihak ketiga seperti SMS gateway, payment processor",
  "Perubahan skop di luar spesifikasi yang diluluskan",
] as const;

export const addOns = [
  { name: "Mobile App (iOS & Android)",       price: "RM 35,000" },
  { name: "AI-powered matching engine",       price: "RM 25,000" },
  { name: "Multilingual support (EN/BM/CN)",  price: "RM 12,000" },
  { name: "Custom reporting module",          price: "RM 15,000" },
] as const;

export const financialProjection = [
  { year: "Tahun 1", revenue: "RM 720K",  height: 70  },
  { year: "Tahun 2", revenue: "RM 2.1M",  height: 135 },
  { year: "Tahun 3", revenue: "RM 3.6M",  height: 195 },
] as const;

export const revenueStreams = [
  "Pakar Industri consultation commission (15–20%)",
  "Premium membership tiers untuk SME",
  "Training & certification programme fees",
  "Sponsored government & industry initiatives",
] as const;
