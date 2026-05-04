import { BRAND } from "@/lib/brand";

export function SectionHeader({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="max-w-4xl">
      <p className="text-sm font-bold uppercase tracking-[0.24em]" style={{ color: BRAND.primary }}>{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">{title}</h2>
      {children && <div className="mt-5 text-lg leading-8 text-slate-600">{children}</div>}
    </div>
  );
}
