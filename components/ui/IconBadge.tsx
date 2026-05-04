import { BRAND } from "@/lib/brand";

export function IconBadge({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-xl"
      style={{ backgroundColor: dark ? "rgba(255,255,255,0.1)" : BRAND.soft }}>
      <span aria-hidden="true">{children}</span>
    </div>
  );
}
