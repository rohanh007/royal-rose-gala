import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "./SectionHeading";

// Placeholder photos via Unsplash (warm-toned)
const PHOTOS = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
  "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800",
  "https://images.unsplash.com/photo-1525772764200-be829a350797?w=800",
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800",
  "https://images.unsplash.com/photo-1529636798458-92182e662485?w=800",
  "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800",
];

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative py-24 px-6">
      <SectionHeading kicker="Memories">Our Gallery</SectionHeading>
      <div className="max-w-6xl mx-auto columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
        {PHOTOS.map((src, i) => (
          <motion.button
            key={i}
            onClick={() => setOpen(i)}
            initial={{ opacity: 0, scale: 0.92, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: (i % 4) * 0.08 }}
            whileHover={{ rotateX: -3, rotateY: 4, scale: 1.02 }}
            className="group relative mb-4 block w-full overflow-hidden rounded-xl border border-[var(--gold)]/40 break-inside-avoid"
            style={{ transformStyle: "preserve-3d" }}
          >
            <img src={src} alt={`Gallery photo ${i + 1}`} loading="lazy"
              className="w-full h-auto block transition-transform duration-700 group-hover:scale-110" />
            <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ boxShadow: "inset 0 0 0 2px #F5C97A, 0 0 30px rgba(245,201,122,0.6)" }} />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="fixed inset-0 z-[300] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <motion.img
              src={PHOTOS[open]}
              alt="Enlarged photo"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ type: "spring", damping: 22 }}
              className="max-h-[85vh] max-w-[90vw] rounded-xl border-4 border-[var(--gold)] shadow-2xl"
            />
            <button
              onClick={(e) => { e.stopPropagation(); setOpen(null); }}
              className="absolute top-6 right-6 text-[var(--cream)] text-3xl"
              aria-label="Close"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
