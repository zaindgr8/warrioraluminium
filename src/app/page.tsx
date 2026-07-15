import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/hero";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { ProcessSteps } from "@/components/process-steps";
import { CTASection } from "@/components/cta-section";
import { Gallery } from "@/components/gallery";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { StatValue } from "@/components/stat-counter";
import { services, stats, values } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Stats strip */}
      <section className="border-b border-border bg-paper py-14">
        <Container>
          <RevealGroup className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <RevealItem key={stat.label} className="text-center md:text-left">
                <div className="font-display text-4xl text-ink md:text-5xl">
                  <StatValue value={stat.value} />
                </div>
                <p className="mt-2 text-sm text-stone">{stat.label}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* What We Do preview */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="What We Do"
              title="Four disciplines. One standard of finish."
              description="From full building facades down to a single sliding door, every system we install is fabricated to the same precise, minimal standard."
            />
            <Reveal>
              <Link
                href="/what-we-do"
                className="group hidden shrink-0 items-center gap-2 text-sm font-medium text-ink hover:text-gold md:inline-flex"
              >
                View all services
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>

          <Reveal className="mt-10 md:hidden">
            <Link
              href="/what-we-do"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-gold"
            >
              View all services
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* About teaser */}
      <section className="bg-paper-2 py-24 md:py-32">
        <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <video
                src="/videos/about-warriors.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-6 hidden w-48 rounded-2xl bg-ink p-6 shadow-xl md:block">
              <p className="font-display text-3xl text-gold">10+</p>
              <p className="mt-1 text-xs text-paper/60">
                Years as part of Warriors Group
              </p>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="About Warriors"
              title="Part of Warriors Group — built on a decade of UAE craftsmanship."
              description="Warriors Aluminium & Glass is the fabrication arm of Warriors Group, applying the same discipline the Group has used across 500+ projects in the UAE to every facade, window, railing, and pergola we build."
            />
            <RevealGroup className="mt-10 space-y-6">
              {values.map((value) => (
                <RevealItem key={value.title} className="flex gap-4">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <div>
                    <h3 className="font-display text-lg text-ink">{value.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-stone">
                      {value.description}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
            <Reveal delay={0.1} className="mt-10">
              <Link
                href="/about-us"
                className="group inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-gold"
              >
                More about us
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section className="bg-ink py-24 md:py-32 grain">
        <Container>
          <SectionHeading
            eyebrow="Our Work"
            title="Real projects, fabricated and installed by Warriors."
            description="A look inside completed pergolas, facades, and glasswork across UAE villas and residences."
            tone="dark"
          />
          <div className="mt-14">
            <Gallery />
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="How We Work"
            title="From first call to final handover."
            align="center"
            className="mx-auto"
          />
          <div className="mt-14">
            <ProcessSteps />
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
