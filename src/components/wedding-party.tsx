"use client";

import { motion } from "framer-motion";
import { weddingParty } from "@/data/content";

export function WeddingPartySection() {
  return (
    <section
      id="party"
      className="relative mx-auto mt-24 max-w-6xl rounded-[3.5rem] border border-gold/45 bg-gradient-to-br from-pearl/95 via-cream/95 to-night/92 px-6 py-20 shadow-[0_50px_150px_-60px_rgba(212,169,61,0.55),0_0_120px_-50px_rgba(90,15,41,0.3)] backdrop-blur md:px-16"
    >
      <div className="text-center">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.6em] text-black">
          Inner circle
        </p>
        <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          The crew
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-ink/80">
          Family, friends, hype team—they have planned, hyped, and danced with
          us every step. Its all better because of them.
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
            className="rounded-3xl border border-gold/30 bg-pearl/96 p-6 text-left text-ink shadow-[0_30px_100px_-60px_rgba(212,169,61,0.5),0_0_80px_-45px_rgba(90,15,41,0.28)]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-merlot">
              {member.role}
            </p>
            <h3 className="mt-3 font-display text-2xl font-semibold text-merlot">
              {member.name}
            </h3>
            <p className="mt-3 text-sm leading-7 text-ink/80">
              {member.description}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
