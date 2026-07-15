import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  return (
    <Reveal delay={index * 0.08} className="h-full">
      <Link
        href={`/what-we-do#${service.slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-charcoal"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
          <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-paper/10 backdrop-blur-sm text-paper transition-all duration-300 group-hover:bg-gold group-hover:text-ink group-hover:rotate-45">
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
          </span>
        </div>
        <div className="flex flex-1 flex-col justify-end p-6">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold-soft">
            0{index + 1}
          </span>
          <h3 className="mt-2 font-display text-xl text-paper">
            {service.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-paper/60">
            {service.summary}
          </p>
        </div>
      </Link>
    </Reveal>
  );
}
