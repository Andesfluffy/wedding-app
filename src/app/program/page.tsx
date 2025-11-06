import { ProgramSection } from "@/components/programs";

const highlightCards = [
  {
    label: "Ceremony",
    value:
      "4 Kingdom hall avenue, off Joseph Abume street, Isuti road, Igando, Lagos · 12:00 PM",
  },
  {
    label: "Reception",
    value: "New Love Hotel - 193, 195 Isuti road, Igando · 2:00 PM",
  },
  {
    label: "Colors of the day",
    value: "Ash · Beige · Maroon",
  },
];

const quickLinks = [
  { href: "#schedule", label: "Schedule" },
  { href: "#program", label: "Ceremony & Reception" },
  { href: "#travel", label: "Travel & Dress" },
];

function ProgramIntro() {
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-gold/25 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-night/45 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-merlot/25 blur-3xl sm:left-1/3" />
      </div>
      <div className="mx-auto max-w-6xl rounded-xl border border-gold/40 bg-gradient-to-br from-night/92 via-onyx/90 to-char/90 px-6 py-16 text-center shadow-[0_45px_140px_-60px_rgba(249,210,122,0.55)] backdrop-blur sm:px-12 md:text-left">
        <p className="font-display text-md font-bold uppercase tracking-[0.3em] text-black">
          Program Overview
        </p>
        <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="rounded-3xl border border-gold/30 bg-night/75 px-6 py-4 text-xs uppercase tracking-[0.3em] text-ivory/70 shadow-[inset_0_18px_45px_rgba(249,210,122,0.12)] font-bold">
            Saturday · November 29 · 2025
          </div>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {highlightCards.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-gold/35 bg-night/80 px-5 py-4 text-left text-ivory/80 shadow-[inset_0_18px_45px_rgba(249,210,122,0.1)]"
            >
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-black">
                {item.label}
              </p>
              <p className="mt-2 font-display text-lg text-ivory">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProgramPage() {
  return (
    <div className="relative overflow-hidden">
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6 md:px-10">
        <ProgramIntro />
        <ProgramSection />
      </main>
    </div>
  );
}
