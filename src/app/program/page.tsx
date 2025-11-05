import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/footer";
import { WeekendEvents } from "@/components/weekend-events";
import { ProgramSection } from "@/components/programs";
import { TravelSection } from "@/components/travel";

const highlightCards = [
  {
    label: "Ceremony",
    value: "4 Kingdom Hall Avenue, off Joseph Abume Street, Igando · 12:00 PM",
  },
  {
    label: "Reception",
    value: "New Love Hotel -193,195 Isuti rd, Egan, Igando · 2:00 PM",
  },
  {
    label: "Palette",
    value: "Grey · Beige · Maroon",
  },
];

const quickLinks = [
  { href: "#schedule", label: "Schedule" },
  { href: "#program", label: "Ceremony & Reception" },
  { href: "#travel", label: "Travel & Dress" },
];

function ProgramIntro() {
  return (
    <section className="relative isolate overflow-hidden pb-20 pt-40 sm:pb-24 sm:pt-48">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-gold/25 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-night/45 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-merlot/25 blur-3xl sm:left-1/3" />
      </div>
      <div className="mx-auto max-w-5xl rounded-xl border border-gold/40 bg-gradient-to-br from-night/92 via-onyx/90 to-char/90 px-6 py-16 text-center shadow-[0_45px_140px_-60px_rgba(249,210,122,0.55)] backdrop-blur sm:px-12 md:text-left">
        <p className="font-display text-xs uppercase tracking-[0.6em] text-black">
          Wedding day flow
        </p>
        <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="space-y-5">
            <h1 className="font-display text-4xl tracking-tight text-ivory sm:text-5xl md:text-6xl">
              Celebration at a glance
            </h1>
            <p className="text-base leading-7 text-ivory/75 md:max-w-xl">
              A streamlined guide to Theo &amp; Joan’s wedding day—perfect for
              saving, sharing, and pulling up on the go.
            </p>
          </div>
          <div className="rounded-3xl border border-gold/30 bg-night/75 px-6 py-4 text-xs uppercase tracking-[0.3em] text-ivory/70 shadow-[inset_0_18px_45px_rgba(249,210,122,0.12)]">
            Lagos · November 29 · Doors open 11:00 AM
          </div>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {highlightCards.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-gold/35 bg-night/80 px-5 py-4 text-left text-ivory/80 shadow-[inset_0_18px_45px_rgba(249,210,122,0.1)]"
            >
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-black">
                {item.label}
              </p>
              <p className="mt-2 font-display text-base text-ivory">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickNavigation() {
  return (
    <nav
      aria-label="Program sections"
      className="relative z-20 -mt-10 w-full px-4 sm:px-0"
    >
      <div className="mx-auto flex max-w-3xl gap-3 overflow-x-auto rounded-full border border-gold/40 bg-night/75 px-3 py-3 text-xs uppercase tracking-[0.35em] text-ivory/70 shadow-[0_25px_80px_-45px_rgba(249,210,122,0.45)] backdrop-blur">
        {quickLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-gold/40 bg-night/80 px-4 py-2 text-[0.7rem] font-semibold tracking-[0.25em] text-ivory/80 transition hover:border-gold/70 hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default function ProgramPage() {
  return (
    <div className="relative overflow-hidden pb-24">
      <Navigation />
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6 md:px-10">
        <ProgramIntro />
        <QuickNavigation />
        <WeekendEvents />
        <ProgramSection />
        <TravelSection />
      </main>
      <SiteFooter />
    </div>
  );
}
