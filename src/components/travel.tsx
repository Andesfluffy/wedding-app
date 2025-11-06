"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { travelEssentials } from "@/data/content";

export function TravelSection() {
  const palette = [
    {
      name: "Ash",
      wrapper: "border-dove/60 bg-dove/20 text-ink/80",
      dot: "bg-dove",
    },
    {
      name: "Beige",
      wrapper: "border-gold/40 bg-char/35 text-ink/80",
      dot: "bg-char",
    },
    {
      name: "Maroon",
      wrapper: "border-merlot/40 bg-merlot/15 text-merlot",
      dot: "bg-merlot",
    },
  ];

  return (
    <section
      id="travel"
      className="relative mx-auto mt-24 max-w-6xl scroll-mt-32 rounded-[3.5rem] border border-gold/40 bg-gradient-to-br from-pearl/95 via-cream/95 to-night/92 px-6 py-20 shadow-[0_45px_140px_-60px_rgba(212,169,61,0.55),0_0_110px_-50px_rgba(90,15,41,0.3)] backdrop-blur"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex w-full max-w-3xl flex-col gap-6 rounded-[2.5rem] border border-merlot/25 bg-pearl/96 p-8 text-ink shadow-[0_35px_110px_-60px_rgba(212,169,61,0.5),0_0_80px_-45px_rgba(90,15,41,0.28)]"
      >
        <div className="rounded-2xl border border-gold/25 bg-pearl/96 p-6 text-sm leading-7 text-ink/80 shadow-[inset_0_18px_45px_rgba(212,169,61,0.12)]">
          <p className="font-display text-lg font-semibold text-merlot">
            {travelEssentials.dressCode.title}
          </p>
          <p className="mt-3">{travelEssentials.dressCode.body}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {palette.map((swatch) => (
              <span
                key={swatch.name}
                className={clsx(
                  "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.25em]",
                  swatch.wrapper
                )}
              >
                <span
                  className={clsx("h-2.5 w-2.5 rounded-full", swatch.dot)}
                />
                {swatch.name}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-gold/25 bg-pearl/96 p-6 text-sm leading-7 text-ink/80 shadow-[inset_0_18px_45px_rgba(212,169,61,0.12)]">
          <p className="font-display text-lg font-semibold text-merlot">Getting around</p>
          <p className="mt-3">{travelEssentials.transport}</p>
        </div>
        <div className="rounded-2xl border border-gold/25 bg-pearl/96 p-6 text-sm leading-7 text-ink/80 shadow-[inset_0_18px_45px_rgba(212,169,61,0.12)]">
          <p className="font-display text-lg font-semibold text-merlot">Registry</p>
          <p className="mt-3">{travelEssentials.registryNote}</p>
        </div>
      </motion.div>
    </section>
  );
}
