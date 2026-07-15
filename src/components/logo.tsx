import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn("h-9 w-auto", className)}
      aria-hidden="true"
    >
      {/* Faceted diamond — the glass pane */}
      <path
        d="M20 2.5 L36.5 20 L20 37.5 L3.5 20 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        pathLength={1}
        strokeDasharray={1}
        className="animate-draw"
      />
      {/* Gold facet — light catching the top edge */}
      <path d="M20 2.5 L27 9.5 L13 9.5 Z" className="fill-gold" />
      {/* W monogram — the aluminium frame */}
      <path
        d="M10.5 15 L15.5 27 L20 18 L24.5 27 L29.5 15"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({
  className,
  markClassName,
  tone = "light",
}: {
  className?: string;
  markClassName?: string;
  tone?: "light" | "dark";
}) {
  return (
    <span className={cn("group inline-flex items-center gap-3", className)}>
      <LogoMark className={markClassName} />
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-semibold tracking-[0.08em] transition-colors duration-300 group-hover:text-gold">
          WARRIORS
        </span>
        <span
          className={cn(
            "text-[0.6rem] tracking-[0.32em] uppercase mt-1",
            tone === "dark" ? "text-gold-soft" : "text-gold-deep",
          )}
        >
          Aluminium &amp; Glass
        </span>
      </span>
    </span>
  );
}
