import { BRAND } from "@/lib/brand";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PageNav } from "@/components/PageNav";
import { milestones, phaseColors } from "@/lib/data/timeline";

export default function TimelinePage() {
  return (
    <main>
      <section className="py-16 text-white" style={{ background: `linear-gradient(135deg, ${BRAND.dark}, #061A16)` }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-300">04 / Timeline</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">Pelan Pelaksanaan</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">Pecahan terperinci bulan demi bulan sepanjang 12 bulan pelaksanaan projek.</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-10">
        <SectionHeader eyebrow="12 Bulan Roadmap" title="Pencapaian dan penghantaran" />
        <div className="mt-10 space-y-4">
          {milestones.map((milestone) => (
            <div key={milestone.month} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: phaseColors[milestone.phase] }}>
                  {milestone.month.replace("Bulan ", "")}
                </div>
                <div className="mt-2 w-0.5 flex-1 bg-slate-200" />
              </div>
              <div className="flex-1 pb-8">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-bold text-slate-950">{milestone.month}</h3>
                  <span className="rounded-full px-3 py-0.5 text-xs font-bold text-white"
                    style={{ backgroundColor: phaseColors[milestone.phase] }}>{milestone.phase}</span>
                </div>
                <ul className="mt-3 space-y-2">
                  {milestone.deliverables.map((d) => (
                    <li key={d} className="flex gap-2 text-sm text-slate-600">
                      <span style={{ color: BRAND.primary }}>✓</span>{d}
                    </li>
                  ))}
                </ul>
                {milestone.checkpoint && (
                  <div className="mt-3 rounded-2xl border p-3 text-sm font-semibold"
                    style={{ borderColor: BRAND.accent, backgroundColor: `${BRAND.accent}18`, color: BRAND.dark }}>
                    ◆ {milestone.checkpoint}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <PageNav currentHref="/timeline" />
    </main>
  );
}
