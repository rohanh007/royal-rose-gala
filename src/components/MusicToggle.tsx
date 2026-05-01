import { useEffect, useRef, useState } from "react";

const SRC = "https://cdn.pixabay.com/audio/2022/10/14/audio_4dde66dabf.mp3"; // soft instrumental

export function MusicToggle() {
  const [playing, setPlaying] = useState(false);
  const ref = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const a = new Audio(SRC);
    a.loop = true;
    a.volume = 0;
    ref.current = a;
    return () => { a.pause(); };
  }, []);

  const fadeTo = (target: number, ms = 800) => {
    const a = ref.current; if (!a) return;
    const start = a.volume;
    const t0 = performance.now();
    const step = (t: number) => {
      const k = Math.min(1, (t - t0) / ms);
      a.volume = start + (target - start) * k;
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const toggle = async () => {
    const a = ref.current; if (!a) return;
    if (!playing) {
      try { await a.play(); fadeTo(0.5); setPlaying(true); } catch { /* blocked */ }
    } else {
      fadeTo(0, 600);
      setTimeout(() => a.pause(), 650);
      setPlaying(false);
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={playing ? "Pause music" : "Play music"}
      className="fixed bottom-5 right-5 z-[150] w-14 h-14 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform"
    >
      {playing ? (
        <div className="flex items-end gap-0.5 h-5">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="eq-bar w-1 bg-[var(--terracotta)] rounded-sm"
              style={{ height: "100%", animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      ) : (
        <span className="text-xl">🎵</span>
      )}
    </button>
  );
}
