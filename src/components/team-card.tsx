import { Reveal } from "@/components/reveal";

export function TeamCard({
  name,
  role,
  initials,
  bio,
  index,
}: {
  name: string;
  role: string;
  initials: string;
  bio: string;
  index: number;
}) {
  return (
    <Reveal delay={index * 0.12} className="h-full">
      <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-paper p-9 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_24px_60px_-24px_rgba(12,10,9,0.25)] sm:p-10">
        <span
          aria-hidden
          className="font-display pointer-events-none absolute -top-6 right-4 text-[7rem] leading-none text-ink/[0.04] transition-colors duration-500 group-hover:text-gold/10"
        >
          {initials}
        </span>

        <div className="relative flex items-center gap-5">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-bright to-gold-deep font-display text-xl text-ink shadow-[0_8px_20px_-6px_rgba(184,137,43,0.55)] transition-transform duration-500 group-hover:scale-105 group-hover:rotate-6">
            {initials}
          </div>
          <div>
            <h3 className="font-display text-xl text-ink sm:text-2xl">{name}</h3>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-gold-deep">
              {role}
            </p>
          </div>
        </div>

        <p className="relative mt-6 text-sm leading-relaxed text-stone sm:text-base">
          {bio}
        </p>

        <span className="relative mt-7 block h-px w-10 bg-gold transition-all duration-500 group-hover:w-20" />
      </div>
    </Reveal>
  );
}
