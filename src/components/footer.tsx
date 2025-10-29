"use client";

import Link from "next/link";
import { contact, navigation } from "@/data/content";

export function SiteFooter() {
  return (
    <footer className="relative mx-auto mt-24 max-w-6xl rounded-[3.5rem] border border-gold/45 bg-gradient-to-br from-pearl/96 via-cream/95 to-night/92 px-6 py-16 text-ink shadow-[0_60px_160px_-70px_rgba(212,169,61,0.55)] md:px-14">
      <div className="grid gap-10 md:grid-cols-[1.3fr,0.7fr] md:gap-16">
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.6em] text-gold">
            Theophilus &amp; Joan
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-gilded">
            See you in Magodo
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-7 text-ink/80">
            We are counting down to laughing, cheering, and dancing with you.
            Reach out if you need parking passes, attire guidance, or anything
            that keeps the day superb.
          </p>
          <div className="mt-8 flex flex-col gap-2 text-sm text-ink/80">
            <span className="uppercase tracking-[0.3em] text-merlot/75">
              Planner
            </span>
            <span>{contact.planner}</span>
            <Link
              href={`mailto:${contact.email}`}
              className="font-medium text-merlot transition hover:text-gold"
            >
              {contact.email}
            </Link>
            <Link
              href={`tel:${contact.phone}`}
              className="font-medium text-merlot transition hover:text-gold"
            >
              {contact.phone}
            </Link>
            <p className="mt-2 text-ink/75">{contact.note}</p>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-merlot/75">
              Navigation
            </p>
            <nav className="mt-3 grid gap-3 text-sm text-ink/80">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-gold"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="rounded-3xl border border-gold/35 bg-pearl/90 px-5 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-ink/75">
            Made with love, talking drums &amp; endless gratitude • © {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
}
