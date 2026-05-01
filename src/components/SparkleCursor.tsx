import { useEffect } from "react";

export function SparkleCursor() {
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e: MouseEvent) => {
      if (Math.random() > 0.35) return;
      const s = document.createElement("span");
      s.className = "cursor-sparkle";
      s.style.left = `${e.clientX}px`;
      s.style.top = `${e.clientY}px`;
      const size = 4 + Math.random() * 8;
      s.style.width = `${size}px`;
      s.style.height = `${size}px`;
      document.body.appendChild(s);
      const dx = (Math.random() - 0.5) * 30;
      const dy = (Math.random() - 0.5) * 30 + 20;
      s.animate(
        [
          { transform: "translate(0,0) scale(1)", opacity: 1 },
          { transform: `translate(${dx}px,${dy}px) scale(0)`, opacity: 0 },
        ],
        { duration: 700, easing: "ease-out" }
      ).onfinish = () => s.remove();
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return null;
}
