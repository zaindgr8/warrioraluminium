import Image from "next/image";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-ink pt-32 pb-20">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />

      <Container className="relative">
        <Reveal>
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-gold" />
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-gold-soft">
              {eyebrow}
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="font-display max-w-3xl text-balance text-4xl leading-[1.05] text-paper sm:text-5xl md:text-6xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/70 md:text-lg">
              {description}
            </p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
