import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export function Curtain({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    // gold dust burst
    confetti({
      particleCount: 140,
      spread: 100,
      origin: { y: 0.5 },
      colors: ["#F5C97A", "#E8954A", "#FDF6E3", "#C0582A"],
      scalar: 1.1,
      ticks: 220,
    });
    setTimeout(onOpen, 1700);
  };

  return (
    <AnimatePresence>
      {!opening || true ? (
        <motion.div
          className="fixed inset-0 z-[200] pointer-events-auto"
          initial={false}
          animate={opening ? "open" : "closed"}
        >
          {/* Left panel */}
          <motion.div
            className="curtain-panel absolute top-0 bottom-0 left-0 w-1/2"
            variants={{
              closed: { x: 0 },
              open: { x: "-100%" },
            }}
            transition={{ duration: 1.7, ease: [0.7, 0, 0.3, 1] }}
            style={{ borderRight: "2px solid #D4AF37" }}
          >
            {/* Tassel */}
            <div className="absolute right-2 top-1/3 w-3 h-32 flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-[#D4AF37] shadow-[0_0_12px_#D4AF37]" />
              <div className="w-[2px] flex-1 bg-gradient-to-b from-[#D4AF37] to-transparent" />
            </div>
          </motion.div>

          {/* Right panel */}
          <motion.div
            className="curtain-panel absolute top-0 bottom-0 right-0 w-1/2"
            variants={{
              closed: { x: 0 },
              open: { x: "100%" },
            }}
            transition={{ duration: 1.7, ease: [0.7, 0, 0.3, 1] }}
            style={{ borderLeft: "2px solid #D4AF37" }}
          >
            <div className="absolute left-2 top-1/3 w-3 h-32 flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-[#D4AF37] shadow-[0_0_12px_#D4AF37]" />
              <div className="w-[2px] flex-1 bg-gradient-to-b from-[#D4AF37] to-transparent" />
            </div>
          </motion.div>

          {/* Subtle sway when closed */}
          {!opening && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{ opacity: [0.0, 0.08, 0.0] }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{ background: "radial-gradient(ellipse at center, rgba(0,0,0,0.4), transparent 60%)" }}
            />
          )}

          {/* Seal */}
          <AnimatePresence>
            {!opening && (
              <motion.button
                key="seal"
                onClick={handleOpen}
                aria-label="Open invitation"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.4 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.06, 1], boxShadow: [
                    "0 0 30px rgba(245,201,122,0.6)",
                    "0 0 60px rgba(245,201,122,0.95)",
                    "0 0 30px rgba(245,201,122,0.6)",
                  ] }}
                  transition={{ duration: 2.2, repeat: Infinity }}
                  className="w-44 h-44 rounded-full flex items-center justify-center text-center"
                  style={{
                    background: "radial-gradient(circle, #F5C97A 0%, #E8954A 60%, #C0582A 100%)",
                    border: "3px double #FDF6E3",
                  }}
                >
                  <div className="text-[#FDF6E3]">
                    <div className="font-script text-3xl leading-none">Aditya</div>
                    <div className="font-display tracking-[0.4em] text-[10px] my-1">— & —</div>
                    <div className="font-script text-3xl leading-none">Asmita</div>
                    <div className="mt-3 text-[10px] tracking-[0.3em] uppercase">Click to Open</div>
                  </div>
                </motion.div>
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
