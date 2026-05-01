import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import bride from "@/assets/bride.jpg";
import groom from "@/assets/groom.jpg";

const ENTRIES = [
  {
    img: bride,
    name: "Isha",
    quote:
      "Marriages are made in heaven, and celebrated on earth — when two families unite, two hearts find their forever.",
    tone: "#B76E79",
  },
  {
    img: groom,
    name: "Aarav",
    quote:
      "An arranged match is not the absence of love — it is love woven by the wisdom of those who raised us.",
    tone: "#E8954A",
  },
  {
    img: bride,
    name: "Isha",
    quote:
      "Two families, one blessing. A bond chosen with care, sealed with devotion, and lived with grace.",
    tone: "#B76E79",
  },
  {
    img: groom,
    name: "Aarav",
    quote:
      "Where elders guide and hearts agree, every promise becomes a prayer — and every prayer, a beginning.",
    tone: "#E8954A",
  },
];

function QuoteRow({
  img,
  name,
  quote,
  tone,
  index,
}: {
  img: string;
  name: string;
  quote: string;
  tone: string;
  index: number;
}) {
  const reversed = index % 2 === 1;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className={`grid md:grid-cols-2 items-center gap-8 md:gap-14 ${
        reversed ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Image */}
      <div className="flex justify-center">
        <div
          className="w-56 h-72 md:w-72 md:h-96 overflow-hidden rounded-t-full rounded-b-md"
          style={{ boxShadow: `0 0 40px ${tone}55, inset 0 0 0 4px #D4AF37` }}
        >
          <img src={img} alt={name} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Quote */}
      <div className="glass-card relative px-8 py-10 text-center" style={{ boxShadow: "0 0 30px #D4AF3744" }}>
        <div className="font-display text-7xl leading-none text-[var(--gold)] absolute top-2 left-4 opacity-60">
          “
        </div>
        <div className="font-display text-7xl leading-none text-[var(--gold)] absolute bottom-2 right-4 opacity-60">
          ”
        </div>
        <p className="font-display text-xl md:text-2xl italic text-[var(--ink)] leading-relaxed">
          {quote}
        </p>
        <div
          className="mt-6 mx-auto h-px w-24"
          style={{ background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }}
        />
        <p className="mt-3 font-script text-2xl text-[var(--terracotta)]">— {name}</p>
      </div>
    </motion.div>
  );
}

export function Story() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <SectionHeading kicker="Bound by tradition, blessed by love">
        Two Families, One Bond
      </SectionHeading>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical chain line */}
        <div
          className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
          style={{ background: "linear-gradient(180deg, transparent, var(--gold), var(--terracotta), var(--gold), transparent)" }}
          aria-hidden
        />

        <div className="space-y-20 md:space-y-28 relative">
          {ENTRIES.map((e, i) => (
            <div key={i} className="relative">
              {/* Chain medallion */}
              <span
                className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[var(--gold)] ring-4 ring-[var(--cream)] shadow-[0_0_18px_var(--gold)] z-10"
                aria-hidden
              />
              <QuoteRow {...e} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
