import { BRAND } from "@/lib/brand";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PageNav } from "@/components/PageNav";
import { pilotPlan, scopeSummary, assumptions, exclusions, paymentTerms, contactInfo } from "@/lib/data/terms";

export default function TermsPage() {
  return (
    <main>
      <section className="py-16 text-white" style={{ background: `linear-gradient(135deg, ${BRAND.dark}, #061A16)` }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-300">05 / Terms & Next Steps</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">Syarat & Langkah Seterusnya</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">Semua yang perlu MPPM tahu sebelum bersetuju untuk meneruskan projek ini.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="rounded-[2rem] p-8 text-white md:p-12" style={{ background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.dark})` }}>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-100">Cadangan Pilot</p>
          <h2 className="mt-3 max-w-4xl text-3xl font-bold md:text-5xl">Mulakan kecil. Buktikan nilai. Kemudian scale.</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {pilotPlan.map(([label, value]) => (
              <div key={label} className="rounded-3xl bg-white/10 p-5 ring-1 ring-white/10">
                <p className="text-xs uppercase tracking-wide text-emerald-100">{label}</p>
                <p className="mt-2 font-bold text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-8 md:grid-cols-2">
            <Card><div className="p-8">
              <h3 className="text-xl font-bold text-slate-950">Skop Kerja</h3>
              <ul className="mt-6 space-y-3">
                {scopeSummary.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-6 text-slate-700">
                    <span style={{ color: BRAND.primary }}>✓</span>{item}
                  </li>
                ))}
              </ul>
            </div></Card>
            <Card><div className="p-8">
              <h3 className="text-xl font-bold text-slate-950">Anggapan & Pengecualian</h3>
              <div className="mt-4">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Anggapan</p>
                <ul className="mt-3 space-y-2">
                  {assumptions.map((item) => (
                    <li key={item} className="flex gap-2 rounded-xl p-2 text-sm text-slate-600" style={{ backgroundColor: BRAND.soft }}>
                      <span style={{ color: BRAND.primary }}>→</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Pengecualian</p>
                <ul className="mt-3 space-y-2">
                  {exclusions.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-slate-500"><span>—</span>{item}</li>
                  ))}
                </ul>
              </div>
            </div></Card>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <SectionHeader eyebrow="Terma Pembayaran" title="Bagaimana pembayaran dibuat" />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {paymentTerms.map((item, i) => (
            <div key={item} className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-white p-5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white" style={{ backgroundColor: BRAND.primary }}>{i + 1}</div>
              <p className="text-sm leading-6 text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="rounded-[2rem] p-8 text-center md:p-12" style={{ backgroundColor: BRAND.soft }}>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">Bersedia untuk meneruskan?</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">Hubungi kami untuk perbincangan lanjut, penjelasan skop atau untuk memulakan proses tandatangan perjanjian.</p>
            <div className="mt-8 inline-flex flex-col items-center gap-1 rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <p className="font-bold text-slate-950">{contactInfo.name}</p>
              <p className="text-sm" style={{ color: BRAND.primary }}>{contactInfo.role}</p>
              <a href={`mailto:${contactInfo.email}`} className="mt-2 text-sm text-slate-600 hover:underline">{contactInfo.email}</a>
              <p className="text-sm text-slate-600">{contactInfo.phone}</p>
              <p className="mt-1 text-xs text-slate-400">{contactInfo.company}</p>
            </div>
          </div>
        </div>
      </section>

      <PageNav currentHref="/terms" />
    </main>
  );
}
