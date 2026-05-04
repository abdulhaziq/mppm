import Link from "next/link";
import { NAV_PAGES } from "@/lib/nav";
import { BRAND } from "@/lib/brand";

export function PageNav({ currentHref }: { currentHref: string }) {
  const idx = NAV_PAGES.findIndex((p) => p.href === currentHref);
  const prev = idx > 0 ? NAV_PAGES[idx - 1] : null;
  const next = idx < NAV_PAGES.length - 1 ? NAV_PAGES[idx + 1] : null;

  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between border-t border-slate-200 px-6 py-8 lg:px-10">
      {prev ? (
        <Link href={prev.href} className="flex items-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50">
          ← {prev.label}
        </Link>
      ) : <div />}
      {next ? (
        <Link href={next.href} className="flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          style={{ backgroundColor: BRAND.primary }}>
          {next.label} →
        </Link>
      ) : <div />}
    </div>
  );
}
