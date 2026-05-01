import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

export function RSVP() {
  const [sent, setSent] = useState(false);
  const [count, setCount] = useState(127);
  const [attending, setAttending] = useState<"yes" | "no">("yes");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    if (attending === "yes") setCount((c) => c + 1);
  };

  return (
    <section className="relative py-24 px-6">
      <SectionHeading kicker="Your presence">Will you join us?</SectionHeading>

      <div className="max-w-xl mx-auto">
        <p className="text-center text-[var(--ink)]/70 mb-6">
          <span className="font-display text-2xl text-[var(--terracotta)]">{count}</span> families have confirmed attendance
        </p>

        <AnimatePresence mode="wait">
          {!sent ? (
            <motion.form
              key="form"
              onSubmit={submit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                rotateX: 90, scale: 0.4, y: -300, opacity: 0,
                transition: { duration: 0.9, ease: [0.4, 0, 0.2, 1] },
              }}
              className="glass-card p-8 relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                className="absolute top-0 right-0 w-12 h-12"
                style={{
                  background: "linear-gradient(225deg, transparent 50%, var(--gold) 50%)",
                  borderTopRightRadius: "1rem",
                }}
                aria-hidden
              />

              <div className="space-y-4">
                <Field label="Your name">
                  <input required className="rsvp-input" placeholder="Full name" />
                </Field>

                <Field label="Will you attend?">
                  <div className="flex gap-3">
                    {(["yes", "no"] as const).map((v) => (
                      <button
                        key={v}
                        type="button"
                        onClick={() => setAttending(v)}
                        className={`flex-1 px-4 py-2 rounded-lg border transition-all ${
                          attending === v
                            ? "bg-[var(--terracotta)] text-[var(--cream)] border-[var(--terracotta)]"
                            : "bg-transparent border-[var(--gold)]/50 hover:border-[var(--terracotta)]"
                        }`}
                      >
                        {v === "yes" ? "Joyfully accept" : "Regretfully decline"}
                      </button>
                    ))}
                  </div>
                </Field>

                <div className="grid grid-cols-2 gap-4">
                  <Field label="Number of guests">
                    <input type="number" min={1} defaultValue={2} className="rsvp-input" />
                  </Field>
                  <Field label="Food preference">
                    <select className="rsvp-input">
                      <option>Vegetarian</option>
                      <option>Non-vegetarian</option>
                      <option>Vegan</option>
                      <option>Jain</option>
                    </select>
                  </Field>
                </div>

                <Field label="A message for the couple">
                  <textarea rows={3} className="rsvp-input" placeholder="Your wishes…" />
                </Field>

                <button
                  type="submit"
                  className="w-full mt-2 py-3 rounded-lg font-display text-lg tracking-wider bg-[var(--terracotta)] text-[var(--cream)] hover:shadow-[0_0_24px_rgba(192,88,42,0.6)] transition-all"
                >
                  Send RSVP ✉️
                </button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              className="glass-card p-10 text-center"
            >
              <motion.svg viewBox="0 0 64 64" className="w-20 h-20 mx-auto text-[var(--terracotta)]">
                <motion.path
                  d="M16 34 L28 46 L50 22"
                  stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8 }}
                />
              </motion.svg>
              <h3 className="font-display text-3xl mt-4">Thank you!</h3>
              <p className="font-script text-2xl text-[var(--terracotta)] mt-2">
                We can't wait to celebrate with you!
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        .rsvp-input {
          width: 100%;
          padding: 0.65rem 0.9rem;
          border-radius: 0.6rem;
          background: rgba(255,255,255,0.55);
          border: 1px solid rgba(212,175,55,0.45);
          color: var(--ink);
          font-family: var(--font-body);
          outline: none;
          transition: all 0.2s;
        }
        .rsvp-input:focus {
          border-color: var(--terracotta);
          box-shadow: 0 0 0 3px rgba(232,149,74,0.25);
        }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.2em] text-[var(--ink)]/60 block mb-1.5">{label}</span>
      {children}
    </label>
  );
}
