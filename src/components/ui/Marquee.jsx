"use client";

import { motion } from "framer-motion";

const PHRASE = "WE ARE THE SOLUTIONS";
const REPEAT = 12;

export default function Marquee() {
  const items = Array.from({ length: REPEAT }, () => PHRASE);

  return (
    <div className="border-y overflow-hidden"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="relative">
        <motion.div
          className="flex gap-10 py-3 whitespace-nowrap will-change-transform"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, ease: "linear", repeat: Infinity }}
        >
          {[...items, ...items].map((t, i) => (
            <span
              key={i}
              className="text-xs tracking-[0.35em] text-[color:var(--muted)]"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}