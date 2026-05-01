import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "countdown", label: "Countdown" },
  { id: "couple", label: "Couple" },
  { id: "story", label: "Story" },
  { id: "events", label: "Events" },
  { id: "invitation", label: "Invitation" },
  { id: "gallery", label: "Gallery" },
  { id: "video", label: "Video" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.7 }}
      className={`fixed top-0 left-0 right-0 z-[120] transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
      style={{
        background: scrolled
          ? "linear-gradient(180deg, rgba(253,246,227,0.92), rgba(253,246,227,0.75))"
          : "linear-gradient(180deg, rgba(253,246,227,0.55), rgba(253,246,227,0))",
        backdropFilter: scrolled ? "blur(12px) saturate(140%)" : "blur(4px)",
        WebkitBackdropFilter: scrolled ? "blur(12px) saturate(140%)" : "blur(4px)",
        borderBottom: scrolled ? "1px solid rgba(212,175,55,0.35)" : "1px solid transparent",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => go("home")}
          className="flex items-center gap-2 group"
          aria-label="Home"
        >
          <span
            className="w-9 h-9 rounded-full flex items-center justify-center font-script text-[var(--cream)] text-lg shadow-md group-hover:scale-110 transition-transform"
            style={{ background: "radial-gradient(circle, #E8954A, #C0582A)" }}
          >
            A&A
          </span>
          <span className="font-script text-2xl text-[var(--terracotta)] hidden sm:inline">
            Aditya &amp; Asmita
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {LINKS.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className="relative px-3 py-2 text-sm font-display tracking-wider uppercase text-[var(--ink)]/80 hover:text-[var(--terracotta)] transition-colors group"
              >
                {l.label}
                <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-[var(--terracotta)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => go("invitation")}
          className="hidden md:inline-flex items-center px-4 py-2 rounded-full bg-[var(--terracotta)] text-[var(--cream)] text-xs uppercase tracking-[0.2em] font-display hover:shadow-[0_0_20px_rgba(192,88,42,0.6)] transition-all"
        >
          Invite
        </button>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="Menu"
          aria-expanded={open}
        >
          <span className={`block w-6 h-0.5 bg-[var(--ink)] transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[var(--ink)] transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[var(--ink)] transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mx-4 mt-2 glass-card overflow-hidden"
          >
            <ul className="py-2">
              {LINKS.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => go(l.id)}
                    className="w-full text-left px-6 py-3 font-display tracking-wider uppercase text-sm text-[var(--ink)]/80 hover:bg-[var(--gold)]/20 hover:text-[var(--terracotta)] transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
