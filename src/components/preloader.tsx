"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import transparentLogo from "../../public/logos/Transparent-logo.png.png";

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
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: easeWarrior }}
          >
            <Image
              src={transparentLogo}
              alt="Warriors Aluminium & Glass"
              priority
              className="h-28 w-auto sm:h-32"
            />
          </motion.div>

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
