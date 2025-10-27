"use client";

import { motion } from "framer-motion";
import { weddingParty } from "@/data/content";

export function WeddingPartySection() {
  return (
    <section
      className="relative mx-auto mt-24 max-w-6xl rounded-[3.5rem] border border-white/40 bg-white/85 px-6 py-20 shadow-2xl shadow-olive/10 backdrop-blur md:px-16"
    >
      <div className="text-center">
        <p className="font-display text-xs uppercase tracking-[0.6em] text-olive/70">
          Inner circle
        </p>
        <h2 className="mt-4 font-display text-4xl tracking-tight text-ink sm:text-5xl">
          Our wedding party
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-ink/70">
          These incredible humans have been with us through every chapter. We
          cannot imagine this day without them by our side.
        </p>
      </div>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {weddingParty.map((member, index) => (
          <motion.article
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="rounded-3xl border border-olive/15 bg-cream/70 p-6 text-left shadow-lg shadow-olive/10"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-olive/70">
              {member.role}
            </p>
            <h3 className="mt-3 font-display text-2xl text-ink">
              {member.name}
            </h3>
            <p className="mt-3 text-sm leading-7 text-ink/70">
              {member.description}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
