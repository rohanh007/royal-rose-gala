import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

const VENUE = "Baliraja Sanskrutik Bhavan, Kalamb - Walchandnagar Road, Kalamb, Tal Indapur, Dist Pune";

const EVENTS = [
  { key: "engagement", icon: "💍", name: "Sakharpuda", date: "02 May 2026", time: "11:00 AM", dress: "Traditional", venue: "Family residence, Kalamb" },
  { key: "haldi", icon: "🌼", name: "Haldi", date: "05 May 2026", time: "10:00 AM", dress: "Yellow attire", venue: "Family residence, Kalamb" },
  { key: "mehendi", icon: "🌿", name: "Mehendi", date: "05 May 2026", time: "4:00 PM", dress: "Green / pastel", venue: "Family residence, Kalamb" },
  { key: "sangeet", icon: "🎶", name: "Sangeet", date: "05 May 2026", time: "8:00 PM", dress: "Festive", venue: VENUE },
  { key: "wedding", icon: "🕉️", name: "Wedding Ceremony", date: "06 May 2026 (Wed)", time: "12:35 PM", dress: "Traditional", venue: VENUE },
  { key: "reception", icon: "🥂", name: "Reception", date: "06 May 2026", time: "7:30 PM", dress: "Formal", venue: VENUE },
];

export function Events() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % EVENTS.length), 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative py-24 px-6">
      <SectionHeading kicker="Wedding festivities">Events & Venues</SectionHeading>

      {/* Progress ribbon */}
      <div className="max-w-5xl mx-auto mb-14 overflow-x-auto">
        <div className="flex items-center justify-between min-w-[640px] px-4">
          {EVENTS.map((e, i) => (
            <div key={e.key} className="flex-1 flex flex-col items-center relative">
              {i > 0 && (
                <div className="absolute right-1/2 top-3 h-px w-full bg-[var(--gold)]/40" />
              )}
              <span
                className={`relative z-10 w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${
                  i <= active ? "bg-[var(--terracotta)] text-[var(--cream)] ribbon-active" : "bg-[var(--gold)]/40 text-[var(--ink)]/50"
                }`}
              >
                {i + 1}
              </span>
              <div className="mt-2 text-[10px] uppercase tracking-wider text-[var(--ink)]/70 text-center">{e.name}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        {EVENTS.map((e, i) => (
          <motion.article
            key={e.key}
            initial={{ opacity: 0, x: i % 2 ? 60 : -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            onViewportEnter={() => {
              if (e.key === "wedding") {
                confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 }, colors: ["#F5C97A","#E8954A","#C0582A"] });
              }
            }}
            whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
            className="glass-card p-6 transition-shadow hover:shadow-[0_0_36px_rgba(245,201,122,0.6)]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-4xl mb-2" aria-hidden>{e.icon}</div>
                <h3 className="font-display text-2xl">{e.name}</h3>
              </div>
              <div className="text-right text-sm">
                <div className="font-display text-lg text-[var(--terracotta)]">{e.date}</div>
                <div className="text-[var(--ink)]/60">{e.time}</div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div>
                <div className="text-[10px] uppercase tracking-wider text-[var(--ink)]/50">Dress code</div>
                <div>{e.dress}</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-[var(--ink)]/50">Venue</div>
                <div>{e.venue}</div>
              </div>
            </div>
            <a
              href={`https://www.google.com/maps?q=${encodeURIComponent(e.venue)}`}
              target="_blank" rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--terracotta)] hover:gap-3 transition-all"
            >
              📍 View on map →
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
