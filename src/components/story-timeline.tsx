"use client";

import { motion } from "framer-motion";
import { storyMoments } from "@/data/content";

export function StoryTimeline() {
  return (
    <section
      id="story"
      className="relative mx-auto mt-24 max-w-5xl rounded-[3rem] border border-gold/30 bg-gradient-to-br from-night/92 via-onyx/88 to-char/90 px-6 py-20 shadow-[0_45px_130px_-60px_rgba(249,210,122,0.5)] backdrop-blur sm:px-14"
    >
      <div className="mx-auto max-w-2xl text-center sm:text-left">
        <p className="font-display text-xs uppercase tracking-[0.6em] text-gold/80">
          Our Story
        </p>
        <h2 className="mt-4 font-display text-4xl tracking-tight text-ivory sm:text-5xl">
          A Lagos love story
        </h2>
        <p className="mt-4 text-base leading-7 text-ivory/70">
          From volunteer teammates to creative collaborators, these milestones
          carried Theophilus and Joan to a Saturday overflowing with colour and
          laughter.
        </p>
      </div>
      <div className="mt-16 space-y-10 border-l border-gold/25 pl-6 sm:pl-10">
        {storyMoments.map((moment, index) => (
          <motion.article
            key={moment.year}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative rounded-3xl border border-gold/25 bg-night/78 p-6 text-ivory shadow-[0_30px_90px_-60px_rgba(249,210,122,0.45)] sm:p-8"
          >
            <div className="absolute -left-[34px] top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gold/30 bg-night text-xs font-semibold uppercase tracking-[0.3em] text-gilded sm:-left-12">
              {moment.year}
            </div>
            <h3 className="font-display text-2xl text-gilded">
              {moment.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-ivory/75 sm:text-base">
              {moment.description}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
