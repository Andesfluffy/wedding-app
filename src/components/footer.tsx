"use client";

import Link from "next/link";
import { contact, navigation } from "@/data/content";

export function SiteFooter() {
  return (
    <footer className="relative mx-auto mt-24 max-w-6xl rounded-[3.5rem] border border-olive/15 bg-olive/90 px-6 py-16 text-white shadow-2xl shadow-olive/20 md:px-14">
      <div className="grid gap-10 md:grid-cols-[1.3fr,0.7fr] md:gap-16">
        <div>
          <p className="font-display text-sm uppercase tracking-[0.6em] text-white/60">
            Theo &amp; Joan
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-tight">
            See you in Victoria Island
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-7 text-white/80">
            We are counting down to dancing under Lagos skies with you. Reach
            out if you need valet passes, fabric pick-up, or anything that makes
            the weekend easier.
          </p>
          <div className="mt-8 flex flex-col gap-2 text-sm text-white/75">
            <span className="uppercase tracking-[0.3em] text-white/60">
              Planner
            </span>
            <span>{contact.planner}</span>
            <Link
              href={`mailto:${contact.email}`}
              className="hover:text-white"
            >
              {contact.email}
            </Link>
            <Link href={`tel:${contact.phone}`} className="hover:text-white">
              {contact.phone}
            </Link>
            <p className="mt-2 text-white/70">{contact.note}</p>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">
              Navigation
            </p>
            <nav className="mt-3 grid gap-3 text-sm text-white/80">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="rounded-3xl border border-white/20 bg-white/10 px-5 py-4 text-xs uppercase tracking-[0.3em] text-white/80">
            Made with love, talking drums &amp; long playlists • © {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
}
