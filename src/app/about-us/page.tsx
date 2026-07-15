import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { StatValue } from "@/components/stat-counter";
import { stats, values } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us | Warriors Aluminium & Glass",
  description:
    "Warriors Aluminium & Glass is a division of Warriors Group, bringing over a decade of UAE craftsmanship to every facade, window, railing, and pergola.",
};

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A decade of craftsmanship. One Warriors standard."
        description="We're the aluminium and glass division of Warriors Group — built on the same reliability that's shaped over 500 projects across the UAE."
        image="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=2000&q=80"
        imageAlt="Glass skyscrapers viewed from below through fog"
      />

      {/* Story */}
      <section className="py-24 md:py-32">
        <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="From landscapes to facades — one group, one promise."
              description="Warriors Group began over a decade ago with a simple aim: bring reliability, high standards, and genuine craftsmanship to construction trades across the UAE that too often settled for less. That promise grew from outdoor spaces into Warriors Aluminium & Glass — a dedicated fabrication and installation division for facades, windows, doors, railings, and pergolas."
            />
            <Reveal delay={0.1}>
              <blockquote className="mt-8 border-l-2 border-gold pl-6">
                <p className="font-display text-xl leading-snug text-ink md:text-2xl">
                  &ldquo;We don&apos;t chase one-off jobs — we build relationships that
                  last well beyond handover.&rdquo;
                </p>
                <footer className="mt-4 text-sm text-stone">
                  Warriors Group, Co-Founders
                </footer>
              </blockquote>
            </Reveal>
          </div>

          <Reveal className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <video
              src="/videos/our-story.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
          </Reveal>
        </Container>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-ink py-20 grain">
        <Container>
          <RevealGroup className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {stats.map((stat) => (
              <RevealItem key={stat.label} className="text-center">
                <div className="font-display text-4xl text-gold md:text-5xl">
                  <StatValue value={stat.value} />
                </div>
                <p className="mt-2 text-sm text-paper/60">{stat.label}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="What Drives Us"
            title="The standard behind every install."
            align="center"
            className="mx-auto"
          />
          <RevealGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <RevealItem
                key={value.title}
                className="rounded-2xl border border-border p-8 transition-colors hover:border-gold/50"
              >
                <span className="font-display text-sm text-gold-deep">
                  0{index + 1}
                </span>
                <h3 className="font-display mt-4 text-xl text-ink">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">
                  {value.description}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
