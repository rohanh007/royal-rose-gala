import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import bride from "@/assets/bride.jpg";
import groom from "@/assets/groom.jpg";

function PortraitFrame({ src, name, role, tone, alt }: {
  src: string; name: string; role: string; tone: "rose" | "blue"; alt: string;
}) {
  const ring = tone === "rose" ? "#B76E79" : "#E8954A";
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="group relative flex flex-col items-center"
    >
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        {/* rotating floral border */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          aria-hidden
        >
          {Array.from({ length: 16 }).map((_, i) => (
            <g key={i} transform={`rotate(${i * 22.5} 50 50)`}>
              <circle cx="50" cy="4" r="2.4" fill={ring} opacity="0.85" />
              <circle cx="50" cy="4" r="1" fill="#FDF6E3" />
            </g>
          ))}
          <circle cx="50" cy="50" r="46" fill="none" stroke="#D4AF37" strokeWidth="0.4" strokeDasharray="2 3" />
        </motion.svg>
        <div
          className="absolute inset-3 rounded-full overflow-hidden transition-transform duration-500 group-hover:scale-105"
          style={{ boxShadow: `0 0 30px ${ring}55, inset 0 0 0 4px #D4AF37` }}
        >
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        </div>
      </div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-center"
      >
        <div className="font-script text-4xl text-[var(--terracotta)]">{name}</div>
        <div className="text-xs uppercase tracking-[0.3em] text-[var(--ink)]/60 mt-1">{role}</div>
      </motion.div>
    </motion.div>
  );
}

export function CoupleSection() {
  return (
    <section className="relative py-24 px-6">
      <SectionHeading kicker="The happy couple">Bride & Groom</SectionHeading>
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_auto_1fr] items-center gap-10">
        <PortraitFrame src={bride} name="Isha Sharma" role="The Bride" tone="rose" alt="Portrait of the bride Isha" />

        {/* Morphing heart */}
        <motion.div
          className="hidden md:flex items-center justify-center"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          aria-hidden
        >
          <svg width="80" height="80" viewBox="0 0 32 32">
            <path
              d="M16 28 C 4 20, 4 8, 12 8 C 14 8, 16 10, 16 12 C 16 10, 18 8, 20 8 C 28 8, 28 20, 16 28Z"
              fill="url(#g)"
            />
            <defs>
              <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#B76E79" />
                <stop offset="100%" stopColor="#C0582A" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        <PortraitFrame src={groom} name="Aarav Verma" role="The Groom" tone="blue" alt="Portrait of the groom Aarav" />
      </div>

      {/* How we met */}
      <div className="mt-20 max-w-3xl mx-auto">
        <h3 className="text-center font-display text-3xl mb-10">How we met</h3>
        <div className="relative pl-10 border-l-2 border-dashed border-[var(--gold)] space-y-10">
          {[
            { y: "Spring 2022", t: "A chance encounter", d: "Met at a friend's birthday — sparks at first 'hello'." },
            { y: "Winter 2023", t: "Falling in love", d: "Long walks, longer conversations, endless laughter." },
            { y: "Summer 2025", t: "The proposal", d: "Under a sky full of fireworks. She said yes." },
          ].map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative"
            >
              <span className="absolute -left-[46px] top-1 w-4 h-4 rounded-full bg-[var(--terracotta)] ring-4 ring-[var(--cream)]" />
              <div className="font-script text-xl text-[var(--terracotta)]">{m.y}</div>
              <div className="font-display text-2xl">{m.t}</div>
              <p className="text-[var(--ink)]/70">{m.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
