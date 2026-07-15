"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const easeWarrior = [0.65, 0, 0.35, 1] as const;

export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.body.style.overflow = "hidden";

    const timer = setTimeout(
      () => setDone(true),
      reduce ? 250 : 2500,
    );
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (done) document.body.style.overflow = "";
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-ink"
          initial={{ clipPath: "inset(0% 0 0% 0)" }}
          animate={{ clipPath: "inset(0% 0 0% 0)" }}
          exit={{
            clipPath: "inset(0% 0 100% 0)",
            transition: { duration: 0.9, ease: easeWarrior, delay: 0.1 },
          }}
        >
          <motion.svg
            viewBox="0 0 40 40"
            className="h-16 w-16 sm:h-20 sm:w-20"
            aria-hidden="true"
          >
            <motion.path
              d="M20 2.5 L36.5 20 L20 37.5 L3.5 20 Z"
              fill="none"
              stroke="#F2EFE9"
              strokeWidth={1.2}
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0.5 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: easeWarrior }}
            />
            <motion.path
              d="M20 2.5 L27 9.5 L13 9.5 Z"
              fill="#B8892B"
              style={{ transformOrigin: "20px 6px" }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.35, ease: easeWarrior }}
            />
            <motion.path
              d="M10.5 15 L15.5 27 L20 18 L24.5 27 L29.5 15"
              fill="none"
              stroke="#F2EFE9"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1, duration: 0.8, ease: easeWarrior }}
            />
          </motion.svg>

          <motion.span
            className="font-display mt-6 text-xl font-semibold tracking-[0.25em] text-paper"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5, ease: easeWarrior }}
          >
            WARRIORS
          </motion.span>

          <motion.div
            className="mt-7 h-px w-36 overflow-hidden bg-paper/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.3 }}
          >
            <motion.div
              className="h-full origin-left bg-gold"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.7, duration: 0.65, ease: easeWarrior }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
