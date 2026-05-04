import { BRAND } from "@/lib/brand";

type Variant = "primary" | "outline" | "ghost";

export function Button({
  children, variant = "primary", onClick, className = "",
}: {
  children: React.ReactNode;
  variant?: Variant;
  onClick?: () => void;
  className?: string;
}) {
  const base = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition";
  if (variant === "primary")
    return <button type="button" onClick={onClick} className={`${base} text-white hover:opacity-90 ${className}`} style={{ backgroundColor: BRAND.primary }}>{children}</button>;
  if (variant === "outline")
    return <button type="button" onClick={onClick} className={`${base} border border-white/20 bg-white/10 text-white hover:bg-white/20 ${className}`}>{children}</button>;
  return <button type="button" onClick={onClick} className={`${base} text-slate-600 hover:bg-slate-100 ${className}`}>{children}</button>;
}
