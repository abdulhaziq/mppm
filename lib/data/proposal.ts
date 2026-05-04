export const proposalMeta = [
  ["Disediakan untuk", "Pengerusi & Kepimpinan MPPM"],
  ["Cadangan",         "MPPM Digital Operating System"],
  ["Tujuan",           "Membina sistem ekosistem digital untuk ahli, Pakar Industri, data, program dan advokasi dasar"],
  ["Cadangan Pilot",   "3 bulan · 100 SME · 20 Pakar Industri"],
] as const;

export const kpis = [
  { label: "SME Aktif",            value: "3,250", trend: "+12% QoQ" },
  { label: "Pakar Industri Aktif", value: "210",   trend: "+8% QoQ"  },
  { label: "Program Dilaksanakan", value: "145",   trend: "+5% QoQ"  },
  { label: "Engagement Rate",      value: "68%",   trend: "+6 pts"   },
] as const;

export const policySignals = [
  { issue: "Cashflow Constraint",  intensity: "High",   score: 86 },
  { issue: "Digital Adoption Gap", intensity: "High",   score: 82 },
  { issue: "Talent Shortage",      intensity: "Medium", score: 64 },
  { issue: "Market Access",        intensity: "Medium", score: 58 },
] as const;

export const pipeline = [
  { stage: "Registered", count: 3200 },
  { stage: "Assessed",   count: 2100 },
  { stage: "Activated",  count: 1400 },
  { stage: "Monetised",  count: 620  },
] as const;

export const pakarUtilisation = [
  { name: "Digital",    usage: 82 },
  { name: "Finance",    usage: 78 },
  { name: "Marketing",  usage: 65 },
  { name: "Operations", usage: 54 },
] as const;

export const alerts = [
  "Permintaan konsultasi digital meningkat 22% bulan ini",
  "Engagement program menurun di sektor retail",
  "Isu cashflow dominan di SME manufacturing",
] as const;

export const chairmanReadout = {
  summary:
    "MPPM mempunyai mandat, jaringan dan kredibiliti nasional. Dengan membina MPPM Digital Operating System (MDOS), organisasi boleh beralih daripada model berasaskan program kepada platform ekosistem berdata yang mengaktifkan ahli, Pakar Industri, program dan advokasi dasar secara berterusan.",
  whyNow:
    "Cabaran SME semakin kompleks dan memerlukan respon yang lebih pantas, konsisten serta berasaskan data. Tanpa sistem bersepadu, momentum semasa sukar diterjemahkan kepada impak jangka panjang.",
  outcomes: [
    "Aktivasi ekosistem SME & Pakar Industri yang lebih tersusun dan boleh diukur.",
    "Pipeline program, konsultasi dan peluang perniagaan yang berulang, bukan episodik.",
    "Dashboard policy intelligence untuk mengukuhkan suara MPPM kepada kerajaan dan stakeholder.",
  ],
  decisionRequired:
    "Kelulusan untuk memulakan pilot 3 bulan (100 SME, 20 Pakar Industri) sebagai fasa validasi dengan milestone impak yang jelas.",
} as const;

export const executiveBrief = {
  context:
    "MPPM telah membina asas penting: jaringan ahli, inisiatif Pakar Industri dan kredibiliti sebagai jambatan kerajaan-industri. Peluang strategik seterusnya ialah mengintegrasikan aset ini ke dalam satu sistem operasi digital yang menjana data, tindakan dan keputusan.",
  recommendation:
    "Laksanakan MDOS sebagai platform teras MPPM, dimulakan dengan pendekatan pilot berisiko rendah untuk mengesahkan model aktivasi, pemantauan impak dan kebolehskalaan.",
  deliverables: [
    "Member Intelligence System",
    "Pakar Industri Activation Engine",
    "SME Readiness & Growth Module",
    "Business Matching Hub",
    "Policy & Impact Dashboard",
    "Programme & Certification System",
  ],
  commercialSnapshot: [
    "Cadangan pilot: 3 bulan",
    "Skop validasi: 100 SME, 20 Pakar Industri",
    "Model pelaksanaan: berfasa dengan metrik impak bulanan",
  ],
  expectedOutcomes: [
    "Peralihan daripada organisation-driven kepada platform-driven.",
    "Keupayaan advokasi berasaskan data yang lebih kredibel.",
    "Laluan pertumbuhan ahli yang lebih jelas melalui sistem, bukan acara semata-mata.",
  ],
  decisionRequired:
    "Persetujuan prinsip untuk meluluskan fasa pilot dan mandat pelaksanaan rentas fungsi bagi menjamin adopsi awal.",
} as const;

export const urgencyPoints = [
  "MPPM mempunyai mandat dan jaringan, tetapi memerlukan sistem untuk mengaktifkan ekosistem secara berterusan.",
  "SME memerlukan sokongan yang lebih tersusun: digitalisasi, pembiayaan, kepakaran, dan akses pasaran.",
  "Peranan MPPM sebagai jambatan kerajaan–industri memerlukan data, dashboard dan laporan yang boleh dibentangkan.",
] as const;

export const riskIfNot = [
  "MPPM kekal dilihat sebagai organisasi program, bukan platform ekosistem.",
  "Maklum balas industri terus bersifat manual dan tidak konsisten.",
  "Peluang untuk memimpin data SME dan Pakar Industri mungkin diambil oleh pihak lain.",
] as const;

export const evidencePoints = [
  { title: "Mandat MPPM",           text: "MPPM membawa aspirasi pemerkasaan perniagaan dan berperanan sebagai penghubung strategik antara komuniti perniagaan, industri dan pihak berkepentingan." },
  { title: "Cabaran SME Malaysia",  text: "Ekosistem SME masih berdepan jurang digitalisasi, produktiviti, pembiayaan, latihan dan akses kepada kepakaran yang tersusun." },
  { title: "Keperluan Data",        text: "Advokasi dasar yang berkesan memerlukan data ahli, survey industri, maklum balas berstruktur dan laporan impak yang boleh dibentangkan kepada pihak berkepentingan." },
  { title: "Benchmark Antarabangsa", text: "Badan perniagaan moden seperti Singapore Business Federation menggunakan survey, laporan dan sistem data untuk menyokong advokasi dan pembangunan komuniti perniagaan." },
] as const;

export const problemRows = [
  ["Model Operasi",    "Aktiviti banyak bergantung kepada program, acara dan pengiktirafan.",              "Impak selepas program sukar dipantau secara berterusan."],
  ["Data Ahli",        "Maklumat ahli tidak diaktifkan sebagai intelligence system.",                      "MPPM sukar membina laporan isu industri secara masa nyata."],
  ["Pakar Industri",   "Pengiktirafan telah diwujudkan, tetapi belum sepenuhnya menjadi enjin advisory.", "Kepakaran belum diterjemahkan kepada mentoring, konsultasi dan nilai ekonomi."],
  ["Dasar & Advokasi", "Maklum balas industri cenderung berlaku secara manual atau episodik.",            "Peranan jambatan kerajaan–industri memerlukan data yang lebih tersusun."],
] as const;

export const modules = [
  {
    icon: "👥", title: "Member Intelligence System", shortTitle: "Member Intelligence",
    desc: "Profil ahli, klasifikasi industri, status keahlian, engagement history dan readiness tagging.",
    output: "MPPM mempunyai database ahli yang hidup dan boleh digunakan untuk aktivasi serta laporan impak.",
    features: ["Digital member profile", "Industry segmentation", "Engagement history", "Readiness tagging", "Membership status"],
  },
  {
    icon: "🛡️", title: "Pakar Industri Activation Engine", shortTitle: "Pakar Industri",
    desc: "Direktori Pakar Industri, verifikasi, booking konsultasi, mentoring dan rating.",
    output: "Pengiktirafan Pakar Industri ditukar menjadi advisory economy dan sumber nilai baharu.",
    features: ["Verified expert profiles", "Consultation booking", "Mentoring workflow", "Rating & feedback", "Expert badge"],
  },
  {
    icon: "📊", title: "SME Readiness & Growth Module", shortTitle: "SME Readiness",
    desc: "Penilaian digital, operasi, kewangan dan pemasaran untuk cadangan program dan pakar.",
    output: "Ahli menerima laluan pembangunan yang jelas, bukan sekadar menghadiri program.",
    features: ["Digital readiness score", "Finance health indicator", "Ops checklist", "Recommended programmes", "Growth pathway"],
  },
  {
    icon: "🤝", title: "Business Matching Hub", shortTitle: "Business Matching",
    desc: "Padanan pembekal, rakan strategik, pelabur, peluang tender dan kolaborasi.",
    output: "Jaringan MPPM menjadi transaksi, kerjasama dan peluang perniagaan sebenar.",
    features: ["Supplier matching", "Partner discovery", "Investor interest", "Collaboration requests", "International linkage"],
  },
  {
    icon: "📈", title: "Policy & Impact Dashboard", shortTitle: "Policy Dashboard",
    desc: "Dashboard isu SME, survey industri, heatmap, laporan program dan policy feedback pack.",
    output: "MPPM boleh membawa suara industri kepada kerajaan dengan data yang lebih tersusun.",
    features: ["SME issue dashboard", "Pulse survey", "Industry heatmap", "Programme impact report", "Policy feedback pack"],
  },
  {
    icon: "🎓", title: "Programme & Certification System", shortTitle: "Events System",
    desc: "Pendaftaran program, QR attendance, sijil digital, survey selepas program dan follow-up automatik.",
    output: "Setiap acara menjadi pipeline engagement berterusan dan boleh diukur impaknya.",
    features: ["Event registration", "QR attendance", "Digital certificate", "Post-event survey", "Automated follow-up"],
  },
] as const;

export const explorerScreens = [
  {
    key: "chairman", label: "Chairman View", icon: "🏛️",
    title: "Chairman Command Dashboard",
    subtitle: "Paparan untuk Pengerusi melihat status ekosistem, isu SME dan peluang monetisasi.",
    score: "68%", status: "Engagement",
    cards: ["SME Aktif", "Policy Signals", "Pakar Utilisation", "Revenue Outlook"],
    insight: "Pengerusi melihat status ekosistem, isu SME dan peluang monetisasi dalam satu paparan.",
  },
  {
    key: "member", label: "Member App", icon: "📱",
    title: "Dashboard Ahli MPPM",
    subtitle: "Paparan utama untuk ahli memahami status perniagaan dan tindakan seterusnya.",
    score: "B+", status: "Readiness",
    cards: ["Skor SME", "Cadangan Program", "Cari Pakar", "Peluang"],
    insight: "Ahli memahami apa tindakan seterusnya selepas menyertai MPPM.",
  },
  {
    key: "pakar", label: "Pakar Industri", icon: "🛡️",
    title: "Pakar Industri Marketplace",
    subtitle: "Direktori pakar yang boleh dicari, ditapis dan ditempah untuk konsultasi.",
    score: "210", status: "Pakar Aktif",
    cards: ["Kewangan", "Digital", "Marketing", "Operasi"],
    insight: "Pakar Industri menjadi fungsi advisory yang boleh diaktifkan dan dimonetisasi.",
  },
  {
    key: "policy", label: "Policy Data", icon: "📈",
    title: "Policy Intelligence Dashboard",
    subtitle: "Dashboard isu SME, survey industri dan laporan untuk kerajaan.",
    score: "1,240", status: "Data Points",
    cards: ["Pulse Survey", "Issue Heatmap", "Reports", "Gov Brief"],
    insight: "MPPM boleh menyediakan laporan data kepada kerajaan dan stakeholder dengan lebih kredibel.",
  },
] as const;

export const journeySteps = [
  ["1", "Daftar Ahli",        "Ahli melengkapkan profil syarikat dan industri."],
  ["2", "Sistem Menilai",     "Platform menjana readiness score dan keperluan utama."],
  ["3", "Cadangan Tindakan",  "Sistem mencadangkan program, pakar dan peluang."],
  ["4", "Aktivasi Ekosistem", "Ahli menyertai program, konsultasi atau matching."],
  ["5", "Data Impak",         "MPPM memantau hasil dan menyediakan laporan."],
] as const;

export const impactCards = [
  ["Untuk MPPM",       "Memperkukuh peranan sebagai platform data, pemudah cara ekosistem dan jambatan kerajaan–industri."],
  ["Untuk Ahli & SME", "Akses lebih tersusun kepada pakar, program, peluang, sijil dan laluan pertumbuhan."],
  ["Untuk Kerajaan",   "Maklumat industri yang lebih teratur, terkini dan boleh digunakan untuk perancangan dasar."],
] as const;
