import Link from "next/link";

import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { RsvpSection } from "@/components/rsvp-form";
import { SiteFooter } from "@/components/footer";
import { CountdownSection } from "@/components/countdown";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="relative overflow-hidden pb-24">
        <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6 md:px-10">
          <Hero />
          <CountdownSection />
          <RsvpSection />
          <section className="relative isolate overflow-hidden rounded-3xl border border-gold/35 bg-gradient-to-br from-pearl/95 via-cream/95 to-rosewater/90 px-6 py-12 text-center shadow-[0_35px_120px_-60px_rgba(212,169,61,0.55),0_0_90px_-55px_rgba(90,15,41,0.28)] sm:px-10">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-gold/25 blur-3xl sm:h-48 sm:w-48" />
              <div className="absolute -right-10 bottom-6 h-32 w-32 rounded-full bg-merlot/15 blur-3xl sm:h-40 sm:w-40" />
            </div>
            <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Continue the Celebration
              </h2>
              <p className="text-sm leading-7 text-ink/75 sm:text-base">
                Discover the flow of our wedding day, linger with our love story, and wander through the photo gallery that captures
                our favorite moments.
              </p>
              <Link
                href="/program"
                className="inline-flex items-center justify-center rounded-full border border-merlot/30 bg-rosewater/90 px-8 py-3 text-sm font-semibold uppercase tracking-[0.32em] text-merlot transition hover:bg-merlot hover:text-pearl"
              >
                View the Program
              </Link>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
