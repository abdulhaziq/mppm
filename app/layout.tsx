import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { PageTransition } from "@/components/PageTransition";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MPPM Digital Operating System — Kertas Cadangan",
  description: "Cadangan pembangunan sistem ekosistem digital untuk memperkasa ahli, Pakar Industri dan advokasi dasar MPPM.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ms" className={geist.className}>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        <Nav />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
