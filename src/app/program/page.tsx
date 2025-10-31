import Image from "next/image";

import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/footer";
import { WeekendEvents } from "@/components/weekend-events";
import { ProgramSection } from "@/components/programs";
import { TravelSection } from "@/components/travel";

function ProgramIntro() {
  return (
    <section className="relative isolate overflow-hidden pb-20 pt-40 sm:pb-24 sm:pt-48">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-gold/25 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-night/45 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-merlot/25 blur-3xl sm:left-1/3" />
      </div>
      <div className="mx-auto max-w-5xl rounded-[3rem] border border-gold/40 bg-gradient-to-br from-night/92 via-onyx/88 to-char/90 px-6 py-16 text-center shadow-[0_45px_140px_-60px_rgba(249,210,122,0.55)] backdrop-blur sm:px-12 md:text-left">
        <p className="font-display text-xs uppercase tracking-[0.6em] text-gold">
          Wedding day flow
        </p>
        <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="space-y-5">
            <h1 className="font-display text-4xl tracking-tight text-ivory sm:text-5xl md:text-6xl">
              Every moment, beautifully timed
            </h1>
            <p className="text-base leading-7 text-ivory/75 md:max-w-xl">
              From the quiet of the Kingdom Hall to the last laugh on the dance floor, here’s your hour-by-hour companion for Theo and Joan’s celebration. Save the timing, share with loved ones, and arrive ready to glow.
            </p>
          </div>
          <div className="rounded-3xl border border-gold/30 bg-night/75 px-6 py-4 text-xs uppercase tracking-[0.3em] text-ivory/70 shadow-[inset_0_18px_45px_rgba(249,210,122,0.12)]">
            Lagos, November 29 · Doors open 11:00 AM
          </div>
        </div>
        <div className="relative mt-12 overflow-hidden rounded-[2.5rem] border border-gold/30 shadow-[0_35px_120px_-60px_rgba(249,210,122,0.6)]">
          <div className="absolute inset-0 bg-gradient-to-tr from-night/35 via-night/10 to-transparent mix-blend-multiply" />
          <Image
            src="https://images.unsplash.com/photo-1520256862855-398228c41684?auto=format&fit=crop&w=1600&q=80"
            alt="Elegant wedding bouquet of white and blush flowers resting on a table"
            width={1600}
            height={1066}
            priority
            className="h-80 w-full object-cover sm:h-[28rem]"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-night/60 to-transparent" />
          <div className="absolute bottom-6 left-6 max-w-xs text-left text-sm text-ivory/90 sm:left-10 sm:max-w-sm sm:text-base">
            Romantic florals and candlelight set the tone for an evening that blooms with celebration.
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProgramPage() {
  return (
    <div className="relative overflow-hidden pb-24">
      <Navigation />
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6 md:px-10">
        <ProgramIntro />
        <WeekendEvents />
        <ProgramSection />
        <TravelSection />
      </main>
      <SiteFooter />
    </div>
  );
}
