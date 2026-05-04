export const pilotPlan = [
  ["Tempoh", "3 bulan"],
  ["Scope",  "100 SME + 20 Pakar Industri"],
  ["Fungsi", "Dashboard + Consultation + Basic Matching"],
  ["Output", "Chairman report + pilot data pack"],
] as const;

export const scopeSummary = [
  "6 modul sistem (Member, Pakar, SME Score, Matching, Policy, Events)",
  "Web platform (desktop & mobile-responsive)",
  "Admin dashboard untuk pengurusan MPPM",
  "API integration-ready untuk sistem sedia ada",
  "3-bulan pilot programme sebelum full launch",
  "12-bulan technical support selepas go-live",
] as const;

export const assumptions = [
  "MPPM menyediakan kandungan (teks, logo, imej) dalam masa 2 minggu dari kickoff",
  "Satu titik hubungan (PIC) dari pihak MPPM untuk kelulusan",
  "UAT setiap fasa diselesaikan dalam 2 minggu selepas penghantaran",
  "Hosting dan domain disediakan oleh vendor (termasuk dalam kos)",
] as const;

export const exclusions = [
  "Data migration dari sistem lama",
  "Kandungan editorial dan copywriting",
  "Perkhidmatan pihak ketiga (SMS, payment processor)",
  "Perubahan skop selepas sign-off setiap fasa",
] as const;

export const paymentTerms = [
  "30% deposit semasa tandatangan perjanjian",
  "40% semasa penghantaran Fasa 2 (bulan ke-6)",
  "30% baki semasa go-live (bulan ke-12)",
  "Invois dibayar dalam 14 hari dari tarikh invois",
] as const;

export const contactInfo = {
  name:    "A. Haziq Samat",
  role:    "Project Director & Lead Architect",
  email:   "haziq@zicco.my",
  phone:   "+6016 477 67 97",
  company: "Zicco Sdn Bhd",
} as const;
