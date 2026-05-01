import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "./SectionHeading";

const VIDEOS = [
  {
    id: "save-the-date",
    title: "Save the Date",
    sub: "Our little announcement",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    poster: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200",
  },
  {
    id: "engagement",
    title: "The Engagement",
    sub: "A moment to remember",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    poster: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200",
  },
  {
    id: "pre-wedding",
    title: "Pre-Wedding Film",
    sub: "Where it all began",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    poster: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200",
  },
];

export function VideoSection() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="relative py-24 px-6">
      <SectionHeading kicker="Watch our story">Wedding Films</SectionHeading>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {VIDEOS.map((v, i) => (
          <motion.button
            key={v.id}
            type="button"
            onClick={() => setActive(v.id)}
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.12 }}
            whileHover={{ y: -6 }}
            className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--gold)]/40 text-left"
            style={{ boxShadow: "0 20px 60px -25px rgba(192,88,42,0.45)" }}
            aria-label={`Play ${v.title}`}
          >
            {active === v.id ? (
              <iframe
                src={`${v.src}?autoplay=1&rel=0`}
                title={v.title}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            ) : (
              <>
                <img
                  src={v.poster}
                  alt={v.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(40,20,10,0.15) 0%, rgba(40,20,10,0.7) 100%)",
                  }}
                />

                {/* Ripple play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="relative w-20 h-20 flex items-center justify-center">
                    <span className="absolute inset-0 rounded-full border border-[var(--cream)]/70 animate-[ping_2.4s_ease-out_infinite]" />
                    <span
                      className="absolute inset-0 rounded-full border border-[var(--gold)]/70 animate-[ping_2.4s_ease-out_infinite]"
                      style={{ animationDelay: "0.6s" }}
                    />
                    <span
                      className="relative w-16 h-16 rounded-full flex items-center justify-center text-[var(--cream)] text-2xl shadow-xl group-hover:scale-110 transition-transform"
                      style={{
                        background: "radial-gradient(circle, #E8954A, #C0582A)",
                        boxShadow: "0 0 28px rgba(232,149,74,0.7)",
                      }}
                    >
                      ▶
                    </span>
                  </span>
                </div>

                {/* Caption */}
                <div className="absolute left-0 right-0 bottom-0 p-5 text-[var(--cream)]">
                  <div className="font-script text-2xl text-[var(--gold)]">{v.sub}</div>
                  <div className="font-display text-2xl">{v.title}</div>
                </div>

                {/* Gold shimmer hover border */}
                <span
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ boxShadow: "inset 0 0 0 2px #F5C97A, 0 0 36px rgba(245,201,122,0.5)" }}
                />
              </>
            )}
          </motion.button>
        ))}
      </div>
    </section>
  );
}
