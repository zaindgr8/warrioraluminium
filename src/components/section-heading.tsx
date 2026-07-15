import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <div
            className={cn(
              "flex items-center gap-3 mb-4",
              align === "center" && "justify-center",
            )}
          >
            <span className="h-px w-8 bg-gold" />
            <span
              className={cn(
                "text-xs font-medium tracking-[0.25em] uppercase",
                tone === "dark" ? "text-gold-soft" : "text-gold-deep",
              )}
            >
              {eyebrow}
            </span>
          </div>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "font-display text-3xl sm:text-4xl md:text-5xl text-balance leading-[1.08]",
            tone === "dark" ? "text-paper" : "text-ink",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-5 text-base md:text-lg leading-relaxed",
              tone === "dark" ? "text-paper/70" : "text-stone",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
