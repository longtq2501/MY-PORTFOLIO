import { cn } from "@/lib/utils";

export default function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)] mb-5",
        className
      )}
    >
      <span className="block h-px w-5 bg-[var(--accent)]" />
      {children}
    </div>
  );
}
