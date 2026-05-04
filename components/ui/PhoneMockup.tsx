import { BRAND } from "@/lib/brand";

type Screen = {
  title: string;
  subtitle?: string;
  score: string;
  status: string;
  cards: readonly string[];
  insight: string;
};

export function PhoneMockup({ screen }: { screen: Screen }) {
  return (
    <div className="relative mx-auto w-[285px] shrink-0 rounded-[2.4rem] border-8 border-slate-900 bg-slate-950 p-3 shadow-2xl">
      <div className="absolute left-1/2 top-2 h-5 w-24 -translate-x-1/2 rounded-full bg-slate-900" />
      <div className="overflow-hidden rounded-[1.9rem] bg-slate-50 pt-8">
        <div className="px-5 pb-6 pt-5 text-white"
          style={{ background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.dark})` }}>
          <p className="text-xs opacity-80">MPPM Digital OS</p>
          <h3 className="mt-1 text-xl font-bold">{screen.title}</h3>
          {screen.subtitle && <p className="mt-1 text-xs leading-5 text-emerald-100">{screen.subtitle}</p>}
          <div className="mt-5 rounded-2xl bg-white/15 p-4 backdrop-blur">
            <p className="text-xs opacity-80">Key Indicator</p>
            <div className="mt-2 flex items-end justify-between">
              <span className="text-4xl font-bold">{screen.score}</span>
              <span className="rounded-full px-3 py-1 text-xs"
                style={{ backgroundColor: `${BRAND.accent}33`, color: "#FFF8D6" }}>{screen.status}</span>
            </div>
          </div>
        </div>
        <div className="space-y-4 p-5">
          <div className="grid grid-cols-2 gap-3">
            {screen.cards.map((item) => (
              <div key={item} className="rounded-2xl bg-white p-3 text-center text-xs font-semibold shadow-sm">{item}</div>
            ))}
          </div>
          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold text-slate-500">Strategic Insight</p>
            <p className="mt-1 text-xs leading-5 text-slate-600">{screen.insight}</p>
          </div>
          <div className="rounded-2xl border p-4" style={{ borderColor: `${BRAND.primary}33`, backgroundColor: BRAND.soft }}>
            <p className="text-xs font-bold" style={{ color: BRAND.dark }}>Next Action</p>
            <p className="mt-1 text-xs" style={{ color: BRAND.primary }}>Lihat cadangan sistem →</p>
          </div>
        </div>
      </div>
    </div>
  );
}
