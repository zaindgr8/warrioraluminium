"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export function Accordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.question}>
            <button
              onClick={() => setOpenIndex(open ? null : index)}
              aria-expanded={open}
              className="flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left"
            >
              <span
                className={cn(
                  "font-display text-lg md:text-xl transition-colors",
                  open ? "text-gold-deep" : "text-ink",
                )}
              >
                {item.question}
              </span>
              <span
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border transition-all duration-300",
                  open && "rotate-45 border-gold bg-gold text-ink",
                )}
              >
                <Plus className="h-4 w-4" strokeWidth={1.75} />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 pr-16 text-base leading-relaxed text-stone">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
