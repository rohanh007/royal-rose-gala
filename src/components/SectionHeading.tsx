import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeading({ children, kicker }: { children: ReactNode; kicker?: string }) {
  return (
    <div className="text-center mb-14">
      {kicker && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-script text-2xl text-[var(--terracotta)] mb-2"
        >
          {kicker}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="font-display text-4xl md:text-5xl shimmer-text inline-block"
      >
        {children}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mx-auto mt-4 h-px w-40 origin-left"
        style={{ background: "linear-gradient(90deg, transparent, var(--terracotta), transparent)" }}
      />
    </div>
  );
}

export function Diya({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 60" className={className} aria-hidden>
      <ellipse cx="20" cy="48" rx="16" ry="6" fill="#C0582A" />
      <path d="M6 46 Q20 56 34 46 Q30 42 20 42 Q10 42 6 46Z" fill="#E8954A" />
      <g className="flame">
        <path d="M20 42 Q14 30 20 14 Q26 30 20 42Z" fill="#F5C97A" />
        <path d="M20 38 Q17 28 20 18 Q23 28 20 38Z" fill="#FDF6E3" />
      </g>
    </svg>
  );
}
