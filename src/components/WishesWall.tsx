import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { SectionHeading } from "./SectionHeading";

type Wish = { name: string; message: string };

const SEED: Wish[] = [
  { name: "Priya Aunty", message: "May your love bloom forever like marigolds in spring 🌼" },
  { name: "Rohit & Family", message: "So happy for you both. Wishing endless joy!" },
  { name: "Neha", message: "Two of my favourite people. Couldn't be happier 💛" },
  { name: "Mr. Kapoor", message: "A blessed union. May Ganesha guide every step." },
  { name: "Anaya", message: "Best couple ever! Cannot wait for the sangeet 🎶" },
];

const ROTATIONS = [-2.5, 1.4, -1, 2, -1.8, 1.2, -2.3, 1.7];

export function WishesWall() {
  const [wishes, setWishes] = useState<Wish[]>(SEED);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setWishes((w) => [{ name, message }, ...w]);
    setName(""); setMessage("");
    confetti({ particleCount: 60, spread: 90, origin: { y: 0.6 }, colors: ["#F5C97A","#E8954A","#C0582A"] });
  };

  return (
    <section className="relative py-24 px-6">
      <SectionHeading kicker="Blessings">Wishes Wall</SectionHeading>

      <form onSubmit={submit} className="max-w-2xl mx-auto glass-card p-6 mb-12 grid md:grid-cols-[1fr_2fr_auto] gap-3">
        <input
          value={name} onChange={(e) => setName(e.target.value)}
          placeholder="Your name" className="rsvp-input"
        />
        <input
          value={message} onChange={(e) => setMessage(e.target.value)}
          placeholder="Leave a blessing…" className="rsvp-input"
        />
        <button className="px-5 py-2 rounded-lg bg-[var(--terracotta)] text-[var(--cream)] font-display tracking-wider hover:shadow-[0_0_20px_rgba(192,88,42,0.5)] transition-all">
          Send 💌
        </button>
      </form>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <AnimatePresence>
          {wishes.map((w, i) => (
            <motion.div
              key={`${w.name}-${i}-${w.message}`}
              layout
              initial={{ opacity: 0, y: 60, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: ROTATIONS[i % ROTATIONS.length] }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ type: "spring", stiffness: 140, damping: 16 }}
              whileHover={{ rotate: 0, scale: 1.04, zIndex: 10 }}
              className="p-5 rounded-lg shadow-lg relative"
              style={{
                background: "linear-gradient(135deg, #FDF6E3, #F5C97A)",
                boxShadow: "0 10px 30px -10px rgba(192,88,42,0.4), inset 0 0 0 1px rgba(212,175,55,0.5)",
              }}
            >
              <div className="font-script text-2xl text-[var(--terracotta)] mb-1">{w.name}</div>
              <p className="font-display italic text-[var(--ink)]/80">"{w.message}"</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <style>{`
        .rsvp-input {
          padding: 0.6rem 0.85rem;
          border-radius: 0.6rem;
          background: rgba(255,255,255,0.6);
          border: 1px solid rgba(212,175,55,0.45);
          color: var(--ink);
          outline: none;
        }
        .rsvp-input:focus { border-color: var(--terracotta); }
      `}</style>
    </section>
  );
}
