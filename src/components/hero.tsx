"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, ChevronDown, Phone } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { site, services } from "@/lib/data";

const headline = ["Precision", "in", "Aluminium.", "Clarity", "in", "Glass."];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
};

const word: Variants = {
  hidden: { opacity: 0, y: 32, rotateX: 40 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-ink">
      <Image
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2000&q=80"
        alt="Glass and aluminium skyscrapers viewed from below"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/10 to-transparent" />

      <Container className="relative pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="h-px w-8 bg-gold" />
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-gold-soft">
            Warriors Group · Dubai, UAE
          </span>
        </motion.div>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          style={{ perspective: 800 }}
          className="font-display flex flex-wrap max-w-4xl text-balance text-5xl leading-[1.05] text-paper sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          {headline.map((w, i) => (
            <motion.span
              key={i}
              variants={word}
              className={`mr-4 inline-block ${w === "Aluminium." || w === "Glass." ? "text-gold" : ""}`}
            >
              {w}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-lg text-base leading-relaxed text-paper/70 md:text-lg"
        >
          {site.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
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
        </motion.div>
      </Container>

      <div className="absolute inset-x-0 bottom-0 overflow-hidden border-t border-paper/10 bg-ink/40 backdrop-blur-sm">
        <div className="flex w-max animate-marquee items-center gap-16 py-4 whitespace-nowrap">
          {[...services, ...services].map((service, i) => (
            <span
              key={i}
              className="flex items-center gap-16 text-sm tracking-wide text-paper/50"
            >
              <span>{service.shortTitle}</span>
              <span className="h-1 w-1 rounded-full bg-gold" />
            </span>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-16 right-8 hidden md:flex flex-col items-center gap-2 text-paper/50"
      >
        <span className="text-[0.65rem] tracking-[0.2em] uppercase [writing-mode:vertical-rl]">
          Scroll
        </span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
