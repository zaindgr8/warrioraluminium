"use client";

import { ClipboardList, Ruler, Hammer, Wrench } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/reveal";

const steps = [
  {
    icon: ClipboardList,
    title: "Site Visit & Brief",
    description: "A free consultation and measurement on-site, anywhere in the UAE.",
  },
  {
    icon: Ruler,
    title: "2D Design & Quote",
    description: "A detailed design and transparent quotation before anything is fabricated.",
  },
  {
    icon: Hammer,
    title: "In-House Fabrication",
    description: "Aluminium cut, welded, and glazed to spec in our own workshop.",
  },
  {
    icon: Wrench,
    title: "Install & Handover",
    description: "Clean, precise installation — with warranty and after-sales support.",
  },
];

export function ProcessSteps() {
  return (
    <RevealGroup className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <RevealItem
          key={step.title}
          className="group relative bg-paper p-8 transition-colors duration-300 hover:bg-charcoal"
        >
          <span className="font-display text-sm text-gold-deep group-hover:text-gold-soft">
            0{index + 1}
          </span>
          <step.icon
            className="mt-5 h-7 w-7 text-ink transition-colors duration-300 group-hover:text-gold"
            strokeWidth={1.5}
          />
          <h3 className="mt-5 font-display text-lg text-ink transition-colors duration-300 group-hover:text-paper">
            {step.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-stone transition-colors duration-300 group-hover:text-paper/60">
            {step.description}
          </p>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
