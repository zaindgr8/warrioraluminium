"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

function Counter({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 24, stiffness: 60 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionValue.set(target);
  }, [inView, motionValue, target]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => setDisplay(Math.round(v)));
    return unsub;
  }, [spring]);

  return <span ref={ref}>{display}</span>;
}

export function StatValue({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return <span>{value}</span>;
  const [, num, suffix] = match;
  return (
    <span>
      <Counter target={parseInt(num, 10)} />
      {suffix}
    </span>
  );
}
