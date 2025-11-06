"use client";

import { motion } from "framer-motion";
import { weddingParty } from "@/data/content";

export function WeddingPartySection() {
  return (
    <section
      id="party"
      className="relative mx-auto mt-24 max-w-6xl rounded-xl border border-gold/45 bg-gradient-to-br from-pearl/95 via-cream/95 to-night/92 px-4 py-12 shadow-[0_50px_150px_-60px_rgba(212,169,61,0.55),0_0_120px_-50px_rgba(90,15,41,0.3)] backdrop-blur"
    >
      <div className="text-center">
        <h2 className="mt-4 uppercase font-display text-4xl font-semibold tracking-widest text-ink sm:text-5xl">
          The crew
        </h2>
        <p className="mx-auto mt-4 max-w-6xl text-base leading-7 text-ink/80">
          Family, friends, hype team—they have planned, hyped, and danced with
          us every step. It’s all better because of them.
        </p>
      </div>

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mt-14 rounded-xl border border-gold/30 bg-pearl/96 p-4 text-left text-ink shadow-[0_30px_100px_-60px_rgba(212,169,61,0.5),0_0_80px_-45px_rgba(90,15,41,0.28)]"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {weddingParty.map((member) => (
            <div key={member.name}>
              <p className="text-xs font-semibold tracking-[0.28em] text-merlot">
                {member.role}
              </p>
              <h3 className="mt-1 font-display tracking-[0.1em] uppercase text-xl font-semibold text-merlot">
                {member.name}
              </h3>
              {/* <p className="mt-3 text-sm leading-7 text-ink/80">
                {member.description}
              </p> */}
            </div>
          ))}
        </div>
      </motion.article>
    </section>
  );
}
