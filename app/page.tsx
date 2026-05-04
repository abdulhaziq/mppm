"use client";

import { useState, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BRAND, LOGO_URL } from "@/lib/brand";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { IconBadge } from "@/components/ui/IconBadge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { PageNav } from "@/components/PageNav";
import {
  proposalMeta, kpis, policySignals, pipeline, pakarUtilisation,
  alerts, chairmanReadout, executiveBrief, urgencyPoints, riskIfNot, evidencePoints, problemRows,
  modules, explorerScreens, journeySteps, impactCards,
} from "@/lib/data/proposal";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.5, delay }}>
      {children}
    </motion.div>
  );
}

export default function ProposalPage() {
  const [activeModule, setActiveModule] = useState(0);
  const [activeScreenKey, setActiveScreenKey] = useState("chairman");
  const activeScreen = useMemo(() => explorerScreens.find((s) => s.key === activeScreenKey) ?? explorerScreens[0], [activeScreenKey]);
  const executiveSummaryRef = useRef<HTMLElement | null>(null);

  const scrollToExecutiveSummary = () => {
    executiveSummaryRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main>
      {/* Hero */}
      <section className="text-white" style={{ background: `radial-gradient(circle at top right, ${BRAND.secondary}55, transparent 35%), linear-gradient(135deg, ${BRAND.dark}, #061A16)` }}>
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-emerald-50">
              Cadangan strategik untuk Pengerusi MPPM
            </div>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">MPPM Digital Operating System</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Satu sistem ekosistem digital untuk menjadikan MPPM bukan sekadar penganjur program, tetapi platform nasional yang menghubungkan SME, Pakar Industri, data, peluang dan kerajaan.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button onClick={scrollToExecutiveSummary}>Baca Ringkasan Eksekutif →</Button>
              <Button variant="outline" onClick={scrollToExecutiveSummary}>Lihat Skop Sistem</Button>
            </div>
          </div>
          <Card className="border-white/10 bg-white/95">
            <div className="p-7">
              <div className="flex items-center gap-4 border-b border-slate-200 pb-5">
                <Image src={LOGO_URL} alt="MPPM Logo" width={80} height={40} className="h-12 w-auto object-contain" unoptimized />
                <div>
                  <p className="font-bold text-slate-950">Proposal Snapshot</p>
                  <p className="text-sm text-slate-500">Prepared for leadership discussion</p>
                </div>
              </div>
              <div className="mt-5 space-y-4">
                {proposalMeta.map(([label, value]) => (
                  <div key={label}>
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-400">{label}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-800">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Board Brief */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <FadeIn>
          <Card>
            <div className="grid gap-8 p-8 md:grid-cols-[1.2fr_0.8fr] md:p-10">
              <div>
                <SectionHeader eyebrow="01 / Board Brief (45 Saat)" title="Chairman Readout">
                  <p>{chairmanReadout.summary}</p>
                </SectionHeader>
                <div className="mt-6 rounded-3xl border border-amber-100 bg-amber-50 p-5">
                  <p className="text-xs font-bold uppercase tracking-wide text-amber-700">Why now</p>
                  <p className="mt-2 text-sm leading-6 text-amber-900">{chairmanReadout.whyNow}</p>
                </div>
              </div>
              <div className="space-y-4">
                {chairmanReadout.outcomes.map((item) => (
                  <div key={item} className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                    <span className="mr-2 font-bold" style={{ color: BRAND.primary }}>✓</span>
                    {item}
                  </div>
                ))}
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Decision required</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{chairmanReadout.decisionRequired}</p>
                </div>
              </div>
            </div>
          </Card>
        </FadeIn>
      </section>

      {/* Executive Summary */}
      <section id="executive-summary" ref={executiveSummaryRef} className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <FadeIn>
          <Card>
            <div className="p-8 md:p-10">
              <SectionHeader eyebrow="02 / Ringkasan Eksekutif" title="Ringkasan untuk keputusan kepimpinan">
                <p>{executiveBrief.context}</p>
              </SectionHeader>
              <div className="mt-8 grid gap-5 lg:grid-cols-2">
                <div className="rounded-3xl p-6" style={{ backgroundColor: BRAND.soft }}>
                  <p className="text-xs font-bold uppercase tracking-wide" style={{ color: BRAND.primary }}>Recommendation</p>
                  <p className="mt-3 leading-7 text-slate-700">{executiveBrief.recommendation}</p>
                </div>
                <div className="rounded-3xl border border-slate-200 p-6">
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Commercial snapshot</p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                    {executiveBrief.commercialSnapshot.map((item) => (
                      <li key={item} className="flex gap-2"><span style={{ color: BRAND.primary }}>•</span>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl border border-slate-200 p-6 lg:col-span-2">
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Deliverables</p>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {executiveBrief.deliverables.map((item) => (
                      <div key={item} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">{item}</div>
                    ))}
                  </div>
                </div>
                <div className="rounded-3xl border border-slate-200 p-6">
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Expected outcomes</p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                    {executiveBrief.expectedOutcomes.map((item) => (
                      <li key={item} className="flex gap-2"><span style={{ color: BRAND.primary }}>✓</span>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl border border-amber-100 bg-amber-50 p-6">
                  <p className="text-xs font-bold uppercase tracking-wide text-amber-700">Decision ask</p>
                  <p className="mt-3 text-sm leading-6 text-amber-900">{executiveBrief.decisionRequired}</p>
                </div>
              </div>
            </div>
          </Card>
        </FadeIn>
      </section>

      {/* Executive Highlights */}
      <section className="mx-auto max-w-7xl px-6 pb-10 lg:px-10">
        <FadeIn>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["🏛️", "Naik taraf peranan", "Daripada organisation-driven kepada platform-driven."],
              ["📊", "Data sebagai kuasa", "MPPM boleh membawa isu SME kepada kerajaan secara lebih berfakta."],
              ["🚀", "Pilot rendah risiko", "Mulakan dengan 100 SME dan 20 Pakar Industri untuk validasi."],
            ].map(([icon, title, text]) => (
              <div key={title as string} className="rounded-3xl p-5" style={{ backgroundColor: BRAND.soft }}>
                <div className="text-3xl">{icon}</div>
                <h3 className="mt-4 font-bold text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Urgency & Risk */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-8 md:grid-cols-2">
            <FadeIn>
              <Card><div className="p-8">
                <SectionHeader eyebrow="03 / Kenapa Sekarang" title="Urgensi untuk bertindak" />
                <ul className="mt-6 space-y-4">
                  {urgencyPoints.map((item) => (
                    <li key={item} className="flex gap-3 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                      <span className="font-bold" style={{ color: BRAND.primary }}>✓</span>{item}
                    </li>
                  ))}
                </ul>
              </div></Card>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Card><div className="p-8">
                <SectionHeader eyebrow="04 / Risiko Jika Tidak" title="Risiko strategik" />
                <ul className="mt-6 space-y-4">
                  {riskIfNot.map((item) => (
                    <li key={item} className="flex gap-3 rounded-2xl border border-red-100 bg-red-50 p-4 text-sm leading-6 text-red-700">
                      <span className="font-bold">!</span>{item}
                    </li>
                  ))}
                </ul>
              </div></Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Rationale */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <FadeIn><SectionHeader eyebrow="05 / Asas Rasional" title="Mengapa sistem ini diperlukan">
          <p>Keperluan sistem ini bukan berpunca daripada kekurangan aktiviti MPPM, tetapi daripada peluang untuk menstrukturkan aktiviti tersebut supaya lebih terukur, berulang dan mampu menghasilkan nilai strategik.</p>
        </SectionHeader></FadeIn>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {evidencePoints.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <div className="rounded-3xl border border-slate-200 bg-white p-6">
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs text-white" style={{ backgroundColor: BRAND.primary }}>✓</span>
                  <div>
                    <h3 className="font-bold text-slate-950">{item.title}</h3>
                    <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Problem Statement */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <FadeIn><SectionHeader eyebrow="06 / Pernyataan Masalah" title="Jurang yang perlu diselesaikan">
            <p>MPPM telah mempunyai jaringan, kredibiliti dan inisiatif. Namun, tanpa sistem digital berpusat, nilai jaringan tersebut sukar diaktifkan secara konsisten.</p>
          </SectionHeader></FadeIn>
          <FadeIn>
            <div className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
              <div className="hidden grid-cols-3 px-5 py-4 text-sm font-bold text-white md:grid" style={{ backgroundColor: BRAND.dark }}>
                <div>Dimensi</div><div>Keadaan Semasa</div><div>Implikasi</div>
              </div>
              {problemRows.map((row) => (
                <div key={row[0]} className="grid grid-cols-1 gap-3 border-t border-slate-200 px-5 py-5 text-sm md:grid-cols-3">
                  <div className="font-bold text-slate-950">{row[0]}</div>
                  <div className="text-slate-600">{row[1]}</div>
                  <div className="text-slate-600">{row[2]}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Chairman Dashboard */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <FadeIn>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em]" style={{ color: BRAND.primary }}>07 / Chairman Dashboard</p>
                <h3 className="mt-2 text-3xl font-bold text-slate-950">Ecosystem Command Dashboard</h3>
                <p className="mt-2 max-w-2xl text-slate-600">Paparan untuk Pengerusi melihat kesihatan ekosistem, isu SME, aktivasi Pakar Industri dan peluang kewangan secara ringkas.</p>
              </div>
              <div className="rounded-full px-4 py-2 text-sm font-bold text-white" style={{ backgroundColor: BRAND.dark }}>Live Data Concept</div>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {kpis.map((kpi) => (
                <div key={kpi.label} className="rounded-3xl p-5 text-white" style={{ backgroundColor: BRAND.primary }}>
                  <p className="text-xs opacity-80">{kpi.label}</p>
                  <p className="mt-2 text-3xl font-bold">{kpi.value}</p>
                  <p className="mt-1 text-xs" style={{ color: "#DDF7EF" }}>{kpi.trend}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl bg-slate-50 p-5">
                <h4 className="font-bold text-slate-950">Policy Signals</h4>
                <div className="mt-4 space-y-4">
                  {policySignals.map((signal) => (
                    <div key={signal.issue}>
                      <div className="mb-2 flex justify-between text-sm">
                        <span>{signal.issue}</span>
                        <span className="font-semibold" style={{ color: signal.intensity === "High" ? "#DC2626" : BRAND.primary }}>{signal.intensity}</span>
                      </div>
                      <ProgressBar value={signal.score} color={signal.intensity === "High" ? "#DC2626" : BRAND.secondary} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl bg-slate-50 p-5">
                <h4 className="font-bold text-slate-950">SME Activation Pipeline</h4>
                <div className="mt-4 space-y-4">
                  {pipeline.map((item) => (
                    <div key={item.stage}>
                      <div className="mb-2 flex justify-between text-sm">
                        <span>{item.stage}</span>
                        <span className="font-semibold">{item.count.toLocaleString()}</span>
                      </div>
                      <ProgressBar value={(item.count / 3200) * 100} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl bg-slate-50 p-5">
                <h4 className="font-bold text-slate-950">Pakar Industri Utilisation</h4>
                <div className="mt-4 space-y-4">
                  {pakarUtilisation.map((item) => (
                    <div key={item.name}>
                      <div className="mb-2 flex justify-between text-sm">
                        <span>{item.name}</span>
                        <span className="font-semibold">{item.usage}%</span>
                      </div>
                      <ProgressBar value={item.usage} color={BRAND.accent} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl bg-slate-50 p-5">
                <h4 className="font-bold text-slate-950">Strategic Alerts</h4>
                <div className="mt-4 space-y-3">
                  {alerts.map((alert) => (
                    <div key={alert} className="rounded-2xl border border-red-100 bg-white p-4 text-sm text-red-700">{alert}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* System Journey */}
      <section className="py-16 text-white" style={{ background: `linear-gradient(135deg, ${BRAND.dark}, #061A16)` }}>
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-300">08 / Cadangan Sistem</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">MDOS sebagai sistem operasi pemerkasaan MPPM</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">Platform ini menyatukan fungsi ahli, Pakar Industri, program, business matching dan data dasar dalam satu aliran kerja yang boleh diukur.</p>
          </div>
          <div className="grid gap-3 rounded-[2rem] bg-white/10 p-5 ring-1 ring-white/10">
            {journeySteps.map(([num, title, desc]) => (
              <div key={title} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 text-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-bold text-white" style={{ backgroundColor: BRAND.primary }}>{num}</span>
                <span><strong>{title}</strong><br /><span className="text-slate-300">{desc}</span></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Module Scope */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <FadeIn><SectionHeader eyebrow="09 / Skop Modul" title="Klik modul untuk lihat fungsi dan output" /></FadeIn>
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-3">
            {modules.map((m, idx) => (
              <button key={m.title} type="button" onClick={() => setActiveModule(idx)}
                className="rounded-3xl border p-5 text-left transition hover:-translate-y-0.5"
                style={{ borderColor: activeModule === idx ? BRAND.primary : "#E5E7EB", backgroundColor: activeModule === idx ? BRAND.soft : "white" }}>
                <div className="flex items-center gap-4">
                  <IconBadge>{m.icon}</IconBadge>
                  <div>
                    <h3 className="font-bold text-slate-950">{m.shortTitle}</h3>
                    <p className="mt-1 text-sm text-slate-600">{m.desc}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
          <Card>
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-4">
                <IconBadge>{modules[activeModule].icon}</IconBadge>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide" style={{ color: BRAND.primary }}>Selected Module</p>
                  <h3 className="text-2xl font-bold text-slate-950">{modules[activeModule].title}</h3>
                </div>
              </div>
              <p className="mt-5 leading-7 text-slate-600">{modules[activeModule].desc}</p>
              <div className="mt-5 rounded-3xl p-5" style={{ backgroundColor: BRAND.soft }}>
                <p className="text-sm font-bold text-slate-950">Fungsi utama</p>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {modules[activeModule].features.map((feature) => (
                    <div key={feature} className="flex gap-2 rounded-2xl bg-white p-3 text-sm text-slate-600 shadow-sm">
                      <span style={{ color: BRAND.primary }}>✓</span><span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-2xl border p-4" style={{ borderColor: `${BRAND.primary}33`, backgroundColor: "white" }}>
                  <p className="text-xs font-bold uppercase tracking-wide" style={{ color: BRAND.primary }}>Output kepada MPPM</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{modules[activeModule].output}</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* System Explorer */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <FadeIn><SectionHeader eyebrow="10 / Explore The System" title="Simulasi pengalaman aplikasi MPPM">
            <p>Pilih paparan di bawah untuk menunjukkan bagaimana sistem akan berfungsi dari perspektif yang berbeza.</p>
          </SectionHeader></FadeIn>
          <div className="mt-8 flex flex-wrap gap-3">
            {explorerScreens.map((screen) => (
              <button key={screen.key} type="button" onClick={() => setActiveScreenKey(screen.key)}
                className="rounded-full px-4 py-3 text-sm font-bold transition"
                style={{ backgroundColor: activeScreenKey === screen.key ? BRAND.primary : "#EEF2F7", color: activeScreenKey === screen.key ? "white" : BRAND.ink }}>
                <span className="mr-2">{screen.icon}</span>{screen.label}
              </button>
            ))}
          </div>
          <div className="mt-10 grid items-center gap-12 md:grid-cols-[1fr_0.8fr]">
            <Card>
              <div className="p-8">
                <p className="text-sm font-bold uppercase tracking-[0.22em]" style={{ color: BRAND.primary }}>Prototype View</p>
                <h3 className="mt-3 text-3xl font-bold text-slate-950">{activeScreen.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{activeScreen.insight}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {activeScreen.cards.map((item) => (
                    <div key={item} className="rounded-2xl border border-slate-200 p-4 text-sm font-semibold text-slate-700">{item}</div>
                  ))}
                </div>
              </div>
            </Card>
            <PhoneMockup screen={activeScreen} />
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <FadeIn>
            <div className="rounded-[2rem] p-8 text-white md:p-12" style={{ background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.dark})` }}>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-200">11 / Impak Dijangka</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-bold md:text-5xl">Daripada jaringan kepada sistem impak nasional.</h2>
              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {impactCards.map(([title, text]) => (
                  <div key={title} className="rounded-3xl bg-white/10 p-5 ring-1 ring-white/10">
                    <h3 className="font-bold text-white">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-200">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Closing */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <FadeIn>
          <Card>
            <div className="p-8 md:p-10">
              <SectionHeader eyebrow="12 / Penutup" title="Cadangan untuk pertimbangan MPPM">
                <p>MPPM telah mempunyai asas yang penting: jaringan, kredibiliti, pengiktirafan Pakar Industri dan aspirasi pemerkasaan. Langkah seterusnya ialah membina sistem yang mampu mengurus, mengaktifkan dan membuktikan impak ekosistem tersebut secara berterusan.</p>
                <p className="mt-5 font-semibold text-slate-950">MDOS dicadangkan sebagai platform digital strategik untuk menjadikan MPPM lebih tersusun, berdata dan bersedia memainkan peranan yang lebih besar dalam pemerkasaan perniagaan Malaysia.</p>
              </SectionHeader>
            </div>
          </Card>
        </FadeIn>
      </section>

      <footer className="px-6 py-12 text-center text-white" style={{ backgroundColor: BRAND.dark }}>
        <p className="text-sm uppercase tracking-[0.25em] text-emerald-100">MPPM Digital Operating System</p>
        <h2 className="mx-auto mt-3 max-w-4xl text-2xl font-bold md:text-4xl">MPPM telah membina jaringan. Kini tiba masanya membina sistem yang menghidupkan jaringan tersebut.</h2>
      </footer>

      <PageNav currentHref="/" />
    </main>
  );
}
