import type { Metadata } from "next";
import { Phone, Mail } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Accordion } from "@/components/accordion";
import { CTASection } from "@/components/cta-section";
import { Reveal } from "@/components/reveal";
import { site, faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "FAQs | Warriors Aluminium & Glass",
  description:
    "Answers to common questions about Warriors Aluminium & Glass's warranty, quotations, timelines, and service areas across the UAE.",
};

export default function FAQsPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Questions, answered."
        description="Can't find what you're looking for? Call or email us directly — we typically respond within the day."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=2000&q=80"
        imageAlt="Minimal glass office partitions along a corridor"
      />

      <section className="py-24 md:py-32">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <SectionHeading
              eyebrow="Common Questions"
              title="Everything before you book a site visit."
            />
            <Reveal delay={0.1} className="mt-10 space-y-4">
              <a
                href={site.phoneHref}
                className="flex items-center gap-3 text-sm font-medium text-ink hover:text-gold"
              >
                <Phone className="h-4 w-4" strokeWidth={1.75} />
                {site.phoneLocal}
              </a>
              <a
                href={site.emailHref}
                className="flex items-center gap-3 text-sm font-medium text-ink hover:text-gold"
              >
                <Mail className="h-4 w-4" strokeWidth={1.75} />
                {site.email}
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-2">
            <Accordion items={faqs} />
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
