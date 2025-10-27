"use client";

import { motion } from "framer-motion";
import { travelEssentials } from "@/data/content";

export function TravelSection() {
  return (
    <section
      id="travel"
      className="relative mx-auto mt-24 max-w-6xl rounded-[3.5rem] border border-gold/30 bg-gradient-to-br from-night/90 via-onyx/86 to-char/88 px-6 py-20 shadow-[0_45px_130px_-60px_rgba(249,210,122,0.5)] backdrop-blur"
    >
      <div className="grid gap-12 md:grid-cols-[1.2fr,0.8fr] md:gap-16">
        <div>
          <p className="font-display text-xs uppercase tracking-[0.6em] text-gold/75">
            Lagos logistics
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-ivory sm:text-5xl">
            Flowing with the city
          </h2>
          <p className="mt-4 text-base leading-7 text-ivory/70">
            Whether you call Lagos home or are flying in, these notes keep the
            journey smooth from travel timing to radiant attire inspiration.
          </p>
          <div className="mt-10 space-y-8">
            <div>
              <h3 className="font-display text-2xl text-gilded">Arrivals &amp; timing</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-ivory/70">
                {travelEssentials.airports.map((airport) => (
                  <li key={airport.name}>
                    <span className="font-medium text-ivory">{airport.name}</span>{" "}
                    - {airport.details}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-gold/25 bg-night/75 p-6 text-sm leading-7 text-ivory/75 shadow-[inset_0_18px_45px_rgba(249,210,122,0.1)]">
              <h3 className="font-display text-2xl text-gilded">Where to stay</h3>
              <p className="mt-3">{travelEssentials.stayNote}</p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 rounded-[2.5rem] border border-gold/30 bg-night/85 p-8 text-ivory shadow-[0_35px_110px_-60px_rgba(249,210,122,0.45)]"
        >
          <div className="rounded-2xl border border-gold/25 bg-night/75 p-6 text-sm leading-7 text-ivory/75 shadow-[inset_0_18px_45px_rgba(249,210,122,0.1)]">
            <p className="font-display text-lg text-gilded">
              {travelEssentials.dressCode.title}
            </p>
            <p className="mt-3">{travelEssentials.dressCode.body}</p>
          </div>
          <div className="rounded-2xl border border-gold/25 bg-night/75 p-6 text-sm leading-7 text-ivory/75 shadow-[inset_0_18px_45px_rgba(249,210,122,0.1)]">
            <p className="font-display text-lg text-gilded">Getting around</p>
            <p className="mt-3">{travelEssentials.transport}</p>
          </div>
          <div className="rounded-2xl border border-gold/25 bg-night/75 p-6 text-sm leading-7 text-ivory/75 shadow-[inset_0_18px_45px_rgba(249,210,122,0.1)]">
            <p className="font-display text-lg text-gilded">Registry</p>
            <p className="mt-3">{travelEssentials.registryNote}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
