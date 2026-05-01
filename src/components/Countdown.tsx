import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { SectionHeading } from "./SectionHeading";

const TARGET = new Date("2027-02-14T17:00:00").getTime();

function diff() {
  const d = Math.max(0, TARGET - Date.now());
  return {
    days: Math.floor(d / 86400000),
    hours: Math.floor((d / 3600000) % 24),
    minutes: Math.floor((d / 60000) % 60),
    seconds: Math.floor((d / 1000) % 60),
  };
}

function FlipDigit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-20 h-24 md:w-28 md:h-32 glass-card flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ rotateX: -90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: 90, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="font-display text-4xl md:text-6xl text-[var(--terracotta)]"
            style={{ transformStyle: "preserve-3d" }}
          >
            {String(value).padStart(2, "0")}
          </motion.span>
        </AnimatePresence>
        <div className="absolute left-0 right-0 top-1/2 h-px bg-[var(--gold)]/40" />
      </div>
      <div className="mt-2 text-xs tracking-[0.3em] uppercase text-[var(--ink)]/60">{label}</div>
    </div>
  );
}

export function Countdown() {
  const [t, setT] = useState(diff());
  useEffect(() => {
    const id = setInterval(() => {
      const n = diff();
      setT((prev) => {
        if (prev.days + prev.hours + prev.minutes + prev.seconds > 0 &&
            n.days + n.hours + n.minutes + n.seconds === 0) {
          confetti({ particleCount: 300, spread: 160, colors: ["#F5C97A","#E8954A","#C0582A","#FDF6E3"] });
        }
        return n;
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative py-24 px-6">
      <SectionHeading>Counting Down</SectionHeading>
      <div className="relative max-w-3xl mx-auto">
        {/* Marigold border */}
        <svg className="absolute -inset-4 -z-10 opacity-70" viewBox="0 0 100 30" preserveAspectRatio="none">
          {Array.from({ length: 30 }).map((_, i) => (
            <circle key={i} cx={(i / 29) * 100} cy={i % 2 === 0 ? 2 : 28} r="1.2" fill="#E8954A">
              <animate attributeName="opacity" values="0.4;1;0.4" dur={`${1.5 + (i % 5) * 0.3}s`} repeatCount="indefinite" />
            </circle>
          ))}
        </svg>
        <div className="flex justify-center gap-3 md:gap-6">
          <FlipDigit value={t.days} label="Days" />
          <FlipDigit value={t.hours} label="Hours" />
          <FlipDigit value={t.minutes} label="Minutes" />
          <FlipDigit value={t.seconds} label="Seconds" />
        </div>
      </div>
    </section>
  );
}
