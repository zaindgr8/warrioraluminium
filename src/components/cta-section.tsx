import { ArrowUpRight, Phone } from "lucide-react";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/button";
import { site } from "@/lib/data";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-32 grain">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
      />
      <Container className="relative flex flex-col items-center text-center">
        <Reveal>
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-gold" />
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-gold-soft">
              Let&apos;s Build
            </span>
            <span className="h-px w-8 bg-gold" />
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display max-w-2xl text-balance text-3xl leading-tight text-paper sm:text-4xl md:text-5xl">
            Ready to give your space a Warriors finish?
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-5 max-w-lg text-base text-paper/60 md:text-lg">
            Free site visit, 2D design, and no-obligation quotation — anywhere in {site.areas}.
          </p>
        </Reveal>
        <Reveal delay={0.24} className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href="/what-we-do" icon={<ArrowUpRight className="h-4 w-4" />}>
            Explore What We Do
          </Button>
          <Button
            href={site.phoneHref}
            variant="outline"
            icon={<Phone className="h-4 w-4" />}
            className="text-paper"
          >
            {site.phoneLocal}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
