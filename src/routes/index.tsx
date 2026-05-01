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
import { RSVP } from "@/components/RSVP";
import { WishesWall } from "@/components/WishesWall";
import { Registry } from "@/components/Registry";
import { Footer } from "@/components/Footer";
import { AmbientLayer } from "@/components/AmbientLayer";
import { SparkleCursor } from "@/components/SparkleCursor";
import { MusicToggle } from "@/components/MusicToggle";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Aarav & Isha — A Royal Wedding Invitation" },
      { name: "description", content: "Join us as we celebrate the wedding of Aarav & Isha on 14 February 2027 in Udaipur." },
      { property: "og:title", content: "Aarav & Isha — Wedding Invitation" },
      { property: "og:description", content: "A royal celebration of love. 14 February 2027, Udaipur." },
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
      <div className="relative z-[1]">
        <Hero />
        <Countdown />
        <CoupleSection />
        <Story />
        <Events />
        <Invitation />
        <Gallery />
        <RSVP />
        <WishesWall />
        <Registry />
        <Footer />
      </div>
      <MusicToggle />
    </main>
  );
}
