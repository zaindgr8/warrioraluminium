import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { cn } from "@/lib/utils";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "What We Do | Warriors Aluminium & Glass",
  description:
    "Facades, windows & doors, glass railings, and pergolas — fabricated and installed by Warriors Aluminium & Glass across Dubai and the UAE.",
};

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Four disciplines, fabricated to one standard."
        description="Every system below is designed, cut, and glazed in our own workshop — then installed and warrantied by the same team, start to finish."
        image="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=2000&q=80"
        imageAlt="Angular glass building facade against the sky"
      />

      {services.map((service, index) => (
        <section
          key={service.slug}
          id={service.slug}
          className={cn(
            "scroll-mt-24 py-24 md:py-28",
            index % 2 === 1 && "bg-paper-2",
          )}
        >
          <Container
            className={cn(
              "grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20",
            )}
          >
            <Reveal
              className={cn(
                "relative aspect-[4/3] overflow-hidden rounded-2xl",
                index % 2 === 1 && "lg:order-2",
              )}
            >
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </Reveal>

            <div className={cn(index % 2 === 1 && "lg:order-1")}>
              <Reveal>
                <span className="text-xs font-medium tracking-[0.25em] uppercase text-gold-deep">
                  0{index + 1} — {service.shortTitle}
                </span>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="font-display mt-4 text-3xl leading-tight text-ink md:text-4xl">
                  {service.title}
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-5 text-base leading-relaxed text-stone md:text-lg">
                  {service.description}
                </p>
              </Reveal>

              <RevealGroup className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <RevealItem key={feature} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-deep">
                      <Check className="h-3 w-3" strokeWidth={2.5} />
                    </span>
                    <span className="text-sm text-ink">{feature}</span>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </Container>
        </section>
      ))}

      <CTASection />
    </>
  );
}
