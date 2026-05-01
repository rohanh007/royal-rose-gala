import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Diya } from "./SectionHeading";

const TEXT =
  "With the blessings of our families, we joyfully invite you to share in the celebration of our wedding. Your presence will fill our hearts and our home with even more love and laughter.";

export function Invitation() {
  const words = TEXT.split(" ");
  return (
    <section className="relative py-24 px-6">
      <SectionHeading kicker="An invitation">From Our Hearts</SectionHeading>

      <div className="relative max-w-3xl mx-auto flex items-center gap-4">
        <Diya className="hidden md:block w-10 h-16 shrink-0" />

        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          style={{ transformOrigin: "top" }}
          className="glass-card flex-1 p-8 md:p-12 relative"
        >
          {/* Wax seal */}
          <motion.div
            initial={{ scale: 0, rotate: -30 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
            className="absolute -top-6 -right-6 w-16 h-16 rounded-full flex items-center justify-center font-script text-[var(--cream)] text-2xl shadow-xl"
            style={{ background: "radial-gradient(circle, #C0582A, #7a2f10)" }}
          >
            A&I
          </motion.div>

          <p className="font-display text-xl md:text-2xl leading-relaxed text-[var(--ink)]/90">
            {words.map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="inline-block mr-1.5"
              >
                {w}
              </motion.span>
            ))}
          </p>

          <div className="mt-8 text-center">
            <motion.svg
              viewBox="0 0 240 50"
              className="mx-auto w-60"
              initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              <motion.path
                d="M10 40 Q 40 5 80 35 T 160 25 T 230 30"
                stroke="#C0582A"
                strokeWidth="2"
                fill="none"
                variants={{
                  hidden: { pathLength: 0 },
                  visible: { pathLength: 1, transition: { duration: 2.5, delay: 1 } },
                }}
              />
            </motion.svg>
            <p className="font-script text-2xl text-[var(--terracotta)] mt-2">— The Sharma & Verma Families</p>
          </div>
        </motion.div>

        <Diya className="hidden md:block w-10 h-16 shrink-0" />
      </div>
    </section>
  );
}
