import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const MILESTONES = [
  { date: "Mar 2022", title: "First Meeting", desc: "Coffee shop in Bandra — a spilled latte started it all." },
  { date: "Jun 2022", title: "First Date", desc: "Sunset by the Marine Drive promenade." },
  { date: "Dec 2023", title: "Families Met", desc: "A warm Diwali evening filled with laughter." },
  { date: "Aug 2025", title: "The Proposal", desc: "On a hilltop in Udaipur, fireworks above." },
  { date: "Oct 2025", title: "Engagement", desc: "Surrounded by all our loved ones." },
];

export function Story() {
  return (
    <section className="relative py-24 px-6">
      <SectionHeading kicker="Our journey">A Love Story</SectionHeading>
      <div className="relative max-w-3xl mx-auto">
        <motion.div
          className="absolute left-1/2 top-0 bottom-0 w-px origin-top"
          style={{ background: "linear-gradient(180deg, var(--terracotta), var(--gold))" }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.6 }}
        />
        {MILESTONES.map((m, i) => (
          <motion.div
            key={i}
            className={`relative mb-10 grid grid-cols-2 gap-8 items-center ${i % 2 ? "" : ""}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className={i % 2 === 0 ? "text-right pr-8" : "col-start-2 pl-8"}>
              <div className="font-script text-xl text-[var(--terracotta)]">{m.date}</div>
              <div className="font-display text-2xl">{m.title}</div>
              <p className="text-[var(--ink)]/70 mt-1">{m.desc}</p>
            </div>
            <span className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[var(--gold)] ring-4 ring-[var(--cream)] shadow-[0_0_18px_var(--gold)]" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
