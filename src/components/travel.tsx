"use client";

import { motion } from "framer-motion";
import { travelEssentials } from "@/data/content";

export function TravelSection() {
  return (
    <section
      id="travel"
      className="relative mx-auto mt-24 max-w-6xl rounded-[3.5rem] border border-ink/5 bg-gradient-to-br from-cream/80 via-white/75 to-fog/70 px-6 py-20 shadow-xl shadow-olive/10 backdrop-blur"
    >
      <div className="grid gap-12 md:grid-cols-[1.2fr,0.8fr] md:gap-16">
        <div>
          <p className="font-display text-xs uppercase tracking-[0.6em] text-olive/70">
            Lagos logistics
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-ink sm:text-5xl">
            Flowing with the city
          </h2>
          <p className="mt-4 text-base leading-7 text-ink/70">
            Whether you call Lagos home or are flying in, these notes keep the
            journey smooth from travel timing to radiant attire inspiration.
          </p>
          <div className="mt-10 space-y-8">
            <div>
              <h3 className="font-display text-2xl text-ink">Arrivals &amp; timing</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-ink/70">
                {travelEssentials.airports.map((airport) => (
                  <li key={airport.name}>
                    <span className="font-medium text-ink">{airport.name}</span>{" "}
                    - {airport.details}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-olive/20 bg-white/80 p-6 text-sm leading-7 text-ink/70 shadow-inner shadow-olive/10">
              <h3 className="font-display text-2xl text-ink">Where to stay</h3>
              <p className="mt-3">{travelEssentials.stayNote}</p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 rounded-[2.5rem] border border-white/60 bg-white/85 p-8 shadow-2xl shadow-olive/15"
        >
          <div className="rounded-2xl border border-olive/15 bg-cream/80 p-6 text-sm leading-7 text-ink/70 shadow-inner shadow-olive/10">
            <p className="font-display text-lg text-ink">
              {travelEssentials.dressCode.title}
            </p>
            <p className="mt-3">{travelEssentials.dressCode.body}</p>
          </div>
          <div className="rounded-2xl border border-olive/15 bg-cream/80 p-6 text-sm leading-7 text-ink/70 shadow-inner shadow-olive/10">
            <p className="font-display text-lg text-ink">Getting around</p>
            <p className="mt-3">{travelEssentials.transport}</p>
          </div>
          <div className="rounded-2xl border border-olive/15 bg-cream/80 p-6 text-sm leading-7 text-ink/70 shadow-inner shadow-olive/10">
            <p className="font-display text-lg text-ink">Registry</p>
            <p className="mt-3">{travelEssentials.registryNote}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
