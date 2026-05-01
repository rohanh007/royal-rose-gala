import { Diya } from "./SectionHeading";

export function Footer() {
  return (
    <footer className="relative py-16 px-6 text-center">
      <div className="flex justify-center gap-8 mb-6">
        <Diya className="w-8 h-12" />
        <Diya className="w-8 h-12" />
        <Diya className="w-8 h-12" />
      </div>
      <p className="font-script text-3xl text-[var(--terracotta)]">Aarav & Isha</p>
      <p className="text-sm text-[var(--ink)]/60 mt-2 tracking-[0.3em] uppercase">14 · 02 · 2027 · Udaipur</p>
      <p className="text-xs text-[var(--ink)]/40 mt-8">Made with love</p>
    </footer>
  );
}
