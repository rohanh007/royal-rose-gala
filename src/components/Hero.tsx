import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const NAMES = "Aarav  &  Isha";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg">
      {/* Ken-burns bg */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1.0 }}
        transition={{ duration: 18, ease: "easeOut" }}
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(2px)",
        }}
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />

      {/* Garland */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        initial={{ y: -120 }}
        animate={{ y: 0 }}
        transition={{ delay: 1.6, duration: 1.4, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,20 Q300,90 600,40 T1200,30" stroke="#C0582A" strokeWidth="3" fill="none" />
          {Array.from({ length: 24 }).map((_, i) => {
            const x = (i / 23) * 1200;
            const y = 20 + Math.sin(i * 0.6) * 30 + 20;
            return (
              <g key={i} transform={`translate(${x},${y})`}>
                <circle r="9" fill="#E8954A" />
                <circle r="5" fill="#F5C97A" />
                <line x1="0" y1="9" x2="0" y2="28" stroke="#C0582A" strokeWidth="1.5" />
              </g>
            );
          })}
        </svg>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          className="font-script text-3xl md:text-4xl text-[var(--terracotta)] mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          With love & blessings
        </motion.p>

        <h1 className="font-display text-6xl md:text-8xl text-[var(--ink)] leading-tight">
          {NAMES.split("").map((ch, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{
                opacity: 1, y: 0, filter: "blur(0px)",
                textShadow: ["0 0 0px transparent", "0 0 18px rgba(245,201,122,0.8)", "0 0 0px transparent"],
              }}
              transition={{ delay: 0.6 + i * 0.07, duration: 0.6 }}
              className="inline-block"
            >
              {ch === " " ? "\u00A0" : ch}
            </motion.span>
          ))}
        </h1>

        <motion.div
          className="my-6 mx-auto h-px w-32 origin-left"
          style={{ background: "linear-gradient(90deg, transparent, #C0582A, transparent)" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
        />

        <motion.p
          className="font-display italic text-xl md:text-2xl text-[var(--ink)]/80 shimmer-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
        >
          Two souls, one journey — together forever
        </motion.p>

        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.2, type: "spring", stiffness: 120, damping: 12 }}
          className="mt-10 inline-block glass-card px-10 py-5"
        >
          <div className="font-script text-2xl text-[var(--terracotta)]">Save the Date</div>
          <div className="font-display text-3xl md:text-4xl tracking-wider mt-1">
            14 · February · 2027
          </div>
        </motion.div>
      </div>
    </section>
  );
}
