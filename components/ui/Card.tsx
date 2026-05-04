export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-[2rem] border border-slate-200 bg-white shadow-sm ${className}`}>
      {children}
    </div>
  );
}
