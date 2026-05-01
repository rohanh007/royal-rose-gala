import { Diya } from "./SectionHeading";

export function Footer() {
  return (
    <footer className="relative py-16 px-6 text-center">
      <div className="flex justify-center gap-8 mb-6">
        <Diya className="w-8 h-12" />
        <Diya className="w-8 h-12" />
        <Diya className="w-8 h-12" />
      </div>
      <p className="font-script text-3xl text-[var(--terracotta)]">Aditya & Asmita</p>
      <p className="text-sm text-[var(--ink)]/60 mt-2 tracking-[0.3em] uppercase">06 · 05 · 2026 · Kalamb, Pune</p>
      <p className="text-xs text-[var(--ink)]/40 mt-8">Made with love</p>
    </footer>
  );
}
