import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Curtain } from "@/components/Curtain";
import { Hero } from "@/components/Hero";
import { Countdown } from "@/components/Countdown";
import { CoupleSection } from "@/components/CoupleSection";
import { Story } from "@/components/Story";
import { Events } from "@/components/Events";
import { Invitation } from "@/components/Invitation";
import { Gallery } from "@/components/Gallery";
import { VideoSection } from "@/components/VideoSection";
import { RSVP } from "@/components/RSVP";
import { WishesWall } from "@/components/WishesWall";
import { Registry } from "@/components/Registry";
import { Footer } from "@/components/Footer";
import { AmbientLayer } from "@/components/AmbientLayer";
import { SparkleCursor } from "@/components/SparkleCursor";
import { MusicToggle } from "@/components/MusicToggle";
import { Navbar } from "@/components/Navbar";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Aditya & Asmita — Wedding Invitation" },
      { name: "description", content: "Join us as we celebrate the wedding of Aditya & Asmita on 6 May 2026 at Kalamb, Tal Indapur, Dist Pune." },
      { property: "og:title", content: "Aditya & Asmita — Wedding Invitation" },
      { property: "og:description", content: "A joyous celebration of love. 6 May 2026, Baliraja Sanskrutik Bhavan, Kalamb." },
    ],
  }),
});

function Index() {
  const [open, setOpen] = useState(false);
  return (
    <main className="relative noise-bg min-h-screen overflow-x-hidden">
      <AmbientLayer />
      <SparkleCursor />
      {!open && <Curtain onOpen={() => setOpen(true)} />}
      {open && <Navbar />}
      <div className="relative z-[1]">
        <section id="home"><Hero /></section>
        <section id="countdown"><Countdown /></section>
        <section id="couple"><CoupleSection /></section>
        <section id="story"><Story /></section>
        <section id="events"><Events /></section>
        <section id="invitation"><Invitation /></section>
        <section id="gallery"><Gallery /></section>
        <section id="video"><VideoSection /></section>
        {/* Hidden per request: RSVP, Wishes Wall, Registry
        <section id="rsvp"><RSVP /></section>
        <section id="wishes"><WishesWall /></section>
        <section id="registry"><Registry /></section>
        */}
        <Footer />
      </div>
      <MusicToggle />
    </main>
  );
}
