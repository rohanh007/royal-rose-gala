import { useEffect, useState } from "react";

const PETAL_COUNT = typeof window !== "undefined" && window.innerWidth < 768 ? 8 : 18;
const SPARKLE_COUNT = typeof window !== "undefined" && window.innerWidth < 768 ? 14 : 30;

export function AmbientLayer() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div aria-hidden="true">
      {/* Mandala */}
      <svg className="mandala-bg" viewBox="0 0 200 200">
        <g fill="none" stroke="currentColor" strokeWidth="0.4" style={{ color: "var(--terracotta)" }}>
          {Array.from({ length: 24 }).map((_, i) => (
            <circle key={i} cx="100" cy="100" r={4 + i * 4} />
          ))}
          {Array.from({ length: 36 }).map((_, i) => (
            <line key={i} x1="100" y1="100" x2="100" y2="0"
              transform={`rotate(${i * 10} 100 100)`} />
          ))}
          {Array.from({ length: 12 }).map((_, i) => (
            <path key={i} d="M100,20 Q110,50 100,80 Q90,50 100,20"
              transform={`rotate(${i * 30} 100 100)`} />
          ))}
        </g>
      </svg>

      {/* Petals */}
      {Array.from({ length: PETAL_COUNT }).map((_, i) => {
        const left = Math.random() * 100;
        const dur = 12 + Math.random() * 14;
        const delay = Math.random() * -20;
        const drift = (Math.random() - 0.5) * 240;
        const size = 8 + Math.random() * 12;
        return (
          <span
            key={`p${i}`}
            className="petal"
            style={{
              left: `${left}vw`,
              width: size,
              height: size,
              animationDuration: `${dur}s`,
              animationDelay: `${delay}s`,
              ["--drift" as never]: `${drift}px`,
            }}
          />
        );
      })}

      {/* Sparkles */}
      {Array.from({ length: SPARKLE_COUNT }).map((_, i) => (
        <span
          key={`s${i}`}
          className="sparkle"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            animationDelay: `${Math.random() * -3}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
}
