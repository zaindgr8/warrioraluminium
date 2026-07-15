import type { Metadata } from "next";
import Image from "next/image";
import { Hammer, Users, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";
import { TeamCard } from "@/components/team-card";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { StatValue } from "@/components/stat-counter";
import { team, stats } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Team | Warriors Aluminium & Glass",
  description:
    "Meet the Warriors Group co-founders behind Warriors Aluminium & Glass, and the workshop team fabricating every facade, window, and pergola.",
};

const pillars = [
  {
    icon: Users,
    title: "Hands-On Leadership",
    description:
      "Sarfaraz and Waqas stay close to live projects — not just the boardroom — reviewing site visits and sign-offs personally.",
  },
  {
    icon: Hammer,
    title: "In-House Craft",
    description:
      "Fabricators, glaziers, and installers work under one roof, so every weld and pane meets the same Warriors standard.",
  },
  {
    icon: ShieldCheck,
    title: "Client-First Follow-Up",
    description:
      "The team that quotes your project is the same team you can call after handover for warranty and support.",
  },
];

export default function OurTeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="The people behind every install."
        description="Warriors is led by the same co-founders who built Warriors Group over a decade — supported by an in-house team of fabricators and installers."
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2000&q=80"
        imageAlt="Modern house at dusk with a glass-walled extension"
      />

      {/* Leadership */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-16">
            <SectionHeading
              eyebrow="Leadership"
              title="Founded on reliability, built to last."
              description="Sarfaraz and Waqas co-founded Warriors Group to bring dependable, high-standard craftsmanship to UAE construction trades — a philosophy that carries directly into every Warriors aluminium and glass project."
            />

            <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {team.map((member, index) => (
                <TeamCard key={member.name} index={index} {...member} />
              ))}
            </RevealGroup>
          </div>

          <RevealGroup className="mt-20 grid grid-cols-2 gap-8 border-t border-border pt-12 md:grid-cols-4">
            {stats.map((stat) => (
              <RevealItem key={stat.label} className="text-center md:text-left">
                <div className="font-display text-3xl text-gold-deep md:text-4xl">
                  <StatValue value={stat.value} />
                </div>
                <p className="mt-2 text-sm text-stone">{stat.label}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Culture pillars */}
      <section className="bg-ink py-24 md:py-32 grain">
        <Container>
          <SectionHeading
            eyebrow="Behind the Scenes"
            title="Every profile welded, every pane glazed, in-house."
            description="Beyond leadership, Warriors is run by a dedicated workshop and site team carrying Warriors Group's decade of standards into every measurement, weld, and finish."
            align="center"
            tone="dark"
            className="mx-auto"
          />

          <RevealGroup className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <RevealItem
                key={pillar.title}
                className="rounded-2xl border border-border-dark bg-charcoal/60 p-8 text-center transition-colors duration-300 hover:border-gold/40"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                  <pillar.icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                </span>
                <span className="mt-5 block font-display text-sm text-gold-soft">
                  0{index + 1}
                </span>
                <h3 className="font-display mt-2 text-lg text-paper">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/60">
                  {pillar.description}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1} className="relative mt-8 aspect-[16/7] overflow-hidden rounded-2xl">
            <Image
              src="/gallery/craft-1.jpg"
              alt="Staircase structure under construction with in-house fabricated frame"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
            <p className="absolute bottom-6 left-6 text-xs font-medium uppercase tracking-[0.2em] text-gold-soft">
              On site — fabricated in-house
            </p>
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
