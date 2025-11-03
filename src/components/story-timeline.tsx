"use client";

import { motion } from "framer-motion";
import { storyMoments } from "@/data/content";

export function StoryTimeline() {
  return (
    <section
      id="story"
      className="relative mx-auto mt-24 max-w-5xl rounded-[3rem] border border-gold/40 bg-gradient-to-br from-pearl/95 via-cream/95 to-night/92 px-6 py-20 shadow-[0_45px_140px_-60px_rgba(212,169,61,0.55),0_0_110px_-50px_rgba(90,15,41,0.3)] backdrop-blur sm:px-14"
    >
      <div className="mx-auto max-w-2xl text-center sm:text-left">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.6em] text-black">
          Our Story
        </p>
        <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          From rivals to soulmates
        </h2>
        <p className="mt-4 text-base leading-7 text-ink/80">
          Childhood rivalry melted into friendship and finally into a love that
          feels like home. Relive the conversations and milestones that brought
          Theo and Joan here.
        </p>
        <div className="mt-6 space-y-3 rounded-3xl border border-merlot/25 bg-rosewater/80 p-6 text-left shadow-[inset_0_12px_35px_rgba(90,15,41,0.12)] sm:p-8">
          <p className="text-sm leading-6 text-ink/80">
            <span className="font-semibold text-merlot">Joan:</span> What do you
            do when someone you once disliked sends you a friend request?
          </p>
          <p className="text-sm leading-6 text-ink/80">
            <span className="font-semibold text-merlot">Theo:</span> I didn’t
            like her when we were kids… but I sent a friend request. Why did I
            send that request?
          </p>
          <p className="text-sm leading-6 text-ink/80">
            What started as childhood rivalry turned into late-night chats,
            inside jokes, and a friendship that quietly bloomed into love. The
            person we once couldn’t stand became the one we can’t live without.
          </p>
      </div>
      </div>
      <div className="mt-16 space-y-10 border-l border-merlot/25 pl-6 sm:pl-10">
        {storyMoments.map((moment, index) => (
          <motion.article
            key={moment.year}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative rounded-3xl border border-gold/30 bg-pearl/95 p-6 text-ink shadow-[0_30px_90px_-60px_rgba(212,169,61,0.5),0_0_70px_-45px_rgba(90,15,41,0.3)] sm:p-8"
          >
            <div className="absolute -left-[34px] top-6 flex h-8 w-8 items-center justify-center rounded-full border border-merlot/35 bg-rosewater/85 text-xs font-semibold uppercase tracking-[0.28em] text-merlot sm:-left-12">
              {moment.year}
            </div>
            <h3 className="font-display text-2xl font-semibold text-merlot">
              {moment.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-ink/80 sm:text-base">
              {moment.description}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
