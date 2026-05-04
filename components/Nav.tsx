"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BRAND, LOGO_URL } from "@/lib/brand";
import { NAV_PAGES } from "@/lib/nav";

export function Nav() {
  const pathname = usePathname();
  const current = NAV_PAGES.find((p) => p.href === pathname) ?? NAV_PAGES[0];

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <div className="flex items-center gap-3">
          <Image src={LOGO_URL} alt="MPPM Logo" width={80} height={40} className="h-10 w-auto object-contain" unoptimized />
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: BRAND.primary }}>Kertas Cadangan</p>
            <p className="text-sm text-slate-500">MPPM Digital Operating System</p>
          </div>
        </div>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_PAGES.map((page) => {
            const isActive = pathname === page.href;
            return (
              <Link key={page.href} href={page.href}
                className="rounded-full px-4 py-2 text-sm font-semibold transition"
                style={isActive ? { backgroundColor: BRAND.primary, color: "white" } : { color: "#475569" }}>
                <span className="mr-1 text-xs opacity-60">{page.step}.</span>{page.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <span className="text-sm font-semibold text-slate-700">{current.step} / {NAV_PAGES.length} · {current.label}</span>
        </div>
      </div>
      <div className="h-0.5 bg-slate-100">
        <div className="h-full transition-all duration-500"
          style={{ width: `${(current.step / NAV_PAGES.length) * 100}%`, backgroundColor: BRAND.primary }} />
      </div>
    </header>
  );
}
