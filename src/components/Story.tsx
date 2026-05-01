import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import bride from "@/assets/bride.jpg";
import groom from "@/assets/groom.jpg";

export function Story() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <SectionHeading kicker="Bound by tradition, blessed by love">
        Two Families, One Bond
      </SectionHeading>

      <div className="relative max-w-5xl mx-auto grid md:grid-cols-[1fr_auto_1fr] items-center gap-10">
        {/* Bride image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative justify-self-center"
        >
          <div
            className="w-56 h-72 md:w-64 md:h-80 overflow-hidden rounded-t-full rounded-b-md"
            style={{ boxShadow: "0 0 40px #B76E7955, inset 0 0 0 4px #D4AF37" }}
          >
            <img src={bride} alt="The bride" className="w-full h-full object-cover" />
          </div>
          <div className="text-center mt-4 font-script text-3xl text-[var(--terracotta)]">Isha</div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card relative px-8 py-10 max-w-md mx-auto text-center"
          style={{ boxShadow: "0 0 30px #D4AF3744" }}
        >
          <div className="font-display text-7xl leading-none text-[var(--gold)] absolute top-2 left-4 opacity-60">“</div>
          <div className="font-display text-7xl leading-none text-[var(--gold)] absolute bottom-2 right-4 opacity-60">”</div>
          <p className="font-display text-2xl md:text-3xl italic text-[var(--ink)] leading-relaxed">
            Marriages are made in heaven, and celebrated on earth — when two families
            unite, two hearts find their forever.
          </p>
          <div className="mt-6 mx-auto h-px w-24" style={{ background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }} />
          <p className="mt-4 font-script text-2xl text-[var(--terracotta)]">An Arranged Union, A Divine Blessing</p>
        </motion.div>

        {/* Groom image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative justify-self-center"
        >
          <div
            className="w-56 h-72 md:w-64 md:h-80 overflow-hidden rounded-t-full rounded-b-md"
            style={{ boxShadow: "0 0 40px #E8954A55, inset 0 0 0 4px #D4AF37" }}
          >
            <img src={groom} alt="The groom" className="w-full h-full object-cover" />
          </div>
          <div className="text-center mt-4 font-script text-3xl text-[var(--terracotta)]">Aarav</div>
        </motion.div>
      </div>
    </section>
  );
}
