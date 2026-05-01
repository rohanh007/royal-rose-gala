import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

export function Registry() {
  return (
    <section className="relative py-24 px-6">
      <SectionHeading kicker="With gratitude">Shagun & Registry</SectionHeading>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="glass-card p-8 text-center"
        >
          <h3 className="font-display text-2xl mb-2">Digital Shagun</h3>
          <p className="text-[var(--ink)]/70 mb-6 text-sm">Scan to send your blessings via UPI</p>
          <div className="relative inline-block p-3 rounded-xl overflow-hidden" style={{ background: "linear-gradient(135deg, #F5C97A, #E8954A)" }}>
            <div className="bg-white p-4 rounded-lg">
              {/* Faux QR */}
              <div className="grid grid-cols-8 gap-0.5 w-40 h-40">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={i} className={Math.random() > 0.5 ? "bg-black" : "bg-white"} />
                ))}
              </div>
            </div>
            {/* Scan line */}
            <motion.div
              className="absolute left-3 right-3 h-0.5 bg-[var(--terracotta)] shadow-[0_0_12px_var(--terracotta)]"
              animate={{ top: ["12px", "calc(100% - 12px)", "12px"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <p className="mt-4 font-script text-xl text-[var(--terracotta)]">aarav.isha@upi</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="glass-card p-8"
        >
          <h3 className="font-display text-2xl mb-4">Gift Registry</h3>
          <p className="text-[var(--ink)]/70 text-sm mb-6">
            Your presence is the best present. If you wish to gift, here are a few options:
          </p>
          <ul className="space-y-3">
            {["Amazon Wishlist", "MyRegistry", "Honeymoon Fund"].map((r) => (
              <li key={r}>
                <a href="#" className="flex items-center justify-between p-3 rounded-lg border border-[var(--gold)]/40 hover:border-[var(--terracotta)] hover:bg-white/40 transition-all">
                  <span className="font-display text-lg">{r}</span>
                  <span className="text-[var(--terracotta)]">→</span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
