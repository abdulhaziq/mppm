import { BRAND } from "@/lib/brand";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PageNav } from "@/components/PageNav";
import { phases, totalInvestment, paymentStructure, included, excluded, addOns, financialProjection, revenueStreams } from "@/lib/data/pricing";

export default function PricingPage() {
  return (
    <main>
      <section className="py-16 text-white" style={{ background: `linear-gradient(135deg, ${BRAND.dark}, #061A16)` }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-300">02 / Investment</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">Pelaburan Projek</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">Pelaburan berfasa, berasaskan pencapaian dan telus — untuk memastikan MPPM mendapat nilai pada setiap langkah.</p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-[2rem] bg-white/10 px-8 py-5 ring-1 ring-white/10">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-emerald-300">Jumlah Pelaburan</p>
              <p className="mt-1 text-4xl font-bold">{totalInvestment}</p>
              <p className="mt-1 text-sm text-slate-400">Diselesaikan dalam 3 fasa · 12 bulan</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <SectionHeader eyebrow="Pecahan Kos" title="Pelaburan mengikut fasa" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {phases.map((phase, i) => (
            <Card key={phase.phase}>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold" style={{ color: BRAND.primary }}>{phase.phase} · {phase.timeline}</p>
                  <span className="rounded-full px-3 py-1 text-xs font-bold" style={{ backgroundColor: i === 2 ? BRAND.accent : BRAND.primary, color: i === 2 ? BRAND.dark : "white" }}>{phase.cost}</span>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">{phase.scope}</p>
                <ul className="mt-5 space-y-2">
                  {phase.deliverables.map((d) => (
                    <li key={d} className="flex gap-2 text-sm text-slate-600">
                      <span style={{ color: BRAND.primary }}>✓</span>{d}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeader eyebrow="Struktur Pembayaran" title="Pembayaran berasaskan pencapaian" />
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 shadow-sm">
            <div className="hidden grid-cols-3 px-5 py-4 text-sm font-bold text-white md:grid" style={{ backgroundColor: BRAND.dark }}>
              <div>Pencapaian</div><div>Peratusan</div><div>Jumlah</div>
            </div>
            {paymentStructure.map((row) => (
              <div key={row.milestone} className="grid grid-cols-1 gap-2 border-t border-slate-200 bg-white px-5 py-5 text-sm md:grid-cols-3">
                <div className="font-medium text-slate-950">{row.milestone}</div>
                <div className="font-bold" style={{ color: BRAND.primary }}>{row.percentage}</div>
                <div className="font-bold text-slate-950">{row.amount}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-8 md:grid-cols-2">
          <Card><div className="p-8">
            <h3 className="text-xl font-bold text-slate-950">Termasuk dalam skop</h3>
            <ul className="mt-6 space-y-3">
              {included.map((item) => (
                <li key={item} className="flex gap-2 rounded-2xl p-3 text-sm text-slate-700" style={{ backgroundColor: BRAND.soft }}>
                  <span style={{ color: BRAND.primary }}>✓</span>{item}
                </li>
              ))}
            </ul>
          </div></Card>
          <Card><div className="p-8">
            <h3 className="text-xl font-bold text-slate-950">Tidak termasuk</h3>
            <ul className="mt-6 space-y-3">
              {excluded.map((item) => (
                <li key={item} className="flex gap-2 rounded-2xl border border-slate-200 p-3 text-sm text-slate-600">
                  <span className="text-slate-400">—</span>{item}
                </li>
              ))}
            </ul>
          </div></Card>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeader eyebrow="Unjuran Kewangan" title="Potensi pertumbuhan ekosistem MPPM" />
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <Card><div className="p-8">
              <h3 className="text-xl font-bold text-slate-950">Revenue Growth Projection</h3>
              <div className="mt-8 flex h-64 items-end gap-5">
                {financialProjection.map((item) => (
                  <div key={item.year} className="flex-1 text-center">
                    <div className="mx-auto w-full rounded-t-2xl" style={{ height: item.height, backgroundColor: BRAND.secondary }} />
                    <p className="mt-3 text-sm text-slate-500">{item.year}</p>
                    <p className="font-bold text-slate-950">{item.revenue}</p>
                  </div>
                ))}
              </div>
            </div></Card>
            <Card><div className="p-8">
              <h3 className="text-xl font-bold text-slate-950">Revenue Streams</h3>
              <div className="mt-6 space-y-4">
                {revenueStreams.map((item) => (
                  <div key={item} className="rounded-2xl p-4 text-sm font-semibold" style={{ backgroundColor: BRAND.soft }}>✓ {item}</div>
                ))}
              </div>
            </div></Card>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <SectionHeader eyebrow="Tambahan Pilihan" title="Add-ons yang boleh ditambah" />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {addOns.map((item) => (
            <Card key={item.name}><div className="p-6">
              <h3 className="font-bold text-slate-950">{item.name}</h3>
              <p className="mt-3 text-2xl font-bold" style={{ color: BRAND.primary }}>{item.price}</p>
            </div></Card>
          ))}
        </div>
      </section>

      <PageNav currentHref="/pricing" />
    </main>
  );
}
