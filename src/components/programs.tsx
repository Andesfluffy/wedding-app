"use client";

import { motion } from "framer-motion";
import {
  kingdomHallProgram,
  receptionProgram,
  photographyMoments,
} from "@/data/content";

export function ProgramSection() {
  return (
    <section
      id="program"
      className="relative mx-auto mt-24 max-w-6xl rounded-[3.5rem] border border-gold/35 bg-gradient-to-br from-night/92 via-onyx/88 to-char/90 px-6 py-20 shadow-[0_50px_140px_-60px_rgba(249,210,122,0.55)] backdrop-blur md:px-16"
    >
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <p className="font-display text-xs uppercase tracking-[0.6em] text-gold">
            Ceremony &amp; reception
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-ivory sm:text-5xl">
            A full-day program at a glance
          </h2>
          <p className="mt-4 text-base leading-7 text-ivory/70">
            From the Kingdom Hall discourse to golden-hour portraits and the
            last song of the night, everything you need is beautifully tucked
            into one elegant guide for your wedding-day link.
          </p>
        </div>
        <div className="rounded-3xl border border-gold/30 bg-gradient-to-br from-night/80 via-char/80 to-onyx/80 px-6 py-4 text-xs uppercase tracking-[0.3em] text-ivory/75 shadow-[inset_0_20px_50px_rgba(249,210,122,0.12)]">
          Save this link for November 29. Tap each section for the latest
          timings and highlights throughout the day.
        </div>
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr,1.1fr,0.9fr]">
        <ProgramCard
          title="Kingdom Hall program"
          accent="from-ember/30 via-night/85 to-char/85"
          items={kingdomHallProgram}
        />
        <ProgramCard
          title="Reception flow"
          accent="from-night/85 via-char/80 to-ember/35"
          items={receptionProgram}
        />
        <PhotographyCard />
      </div>
    </section>
  );
}

type ProgramItem = {
  time: string;
  title: string;
  description: string;
};

function ProgramCard({
  title,
  accent,
  items,
}: {
  title: string;
  accent: string;
  items: ProgramItem[];
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className={`flex h-full flex-col rounded-[2.5rem] border border-gold/30 bg-gradient-to-br ${accent} p-8 text-ivory shadow-[0_35px_110px_-60px_rgba(249,210,122,0.5)]`}
    >
      <h3 className="font-display text-2xl text-gilded">
        {title}
      </h3>
      <dl className="mt-6 flex flex-col gap-5 text-sm leading-7 text-ivory/75">
        {items.map((item) => (
          <div
            key={`${item.time}-${item.title}`}
            className="rounded-2xl border border-gold/25 bg-gradient-to-br from-night/80 via-onyx/75 to-char/80 p-4 shadow-[inset_0_18px_45px_rgba(249,210,122,0.1)]"
          >
            <dt className="font-display text-xs uppercase tracking-[0.3em] text-gold">
              {item.time}
            </dt>
            <dd className="mt-2 font-display text-lg text-ivory">{item.title}</dd>
            <p className="mt-1 text-[0.95rem] leading-6 text-ivory/70">
              {item.description}
            </p>
          </div>
        ))}
      </dl>
    </motion.article>
  );
}

function PhotographyCard() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="flex h-full flex-col rounded-[2.5rem] border border-gold/30 bg-gradient-to-br from-night/85 via-char/82 to-ember/30 p-8 text-ivory shadow-[0_35px_110px_-60px_rgba(249,210,122,0.5)]"
    >
      <h3 className="font-display text-2xl text-gilded">Order of photography</h3>
      <p className="mt-3 text-sm leading-7 text-ivory/75">
        Share these moments with your crew so everyone knows when to gather
        for portraits and when to let loose on the dance floor.
      </p>
      <ul className="mt-6 flex flex-col gap-4 text-sm leading-7 text-ivory/70">
        {photographyMoments.map((moment) => (
          <li
            key={moment.title}
            className="rounded-2xl border border-gold/25 bg-gradient-to-br from-night/80 via-onyx/75 to-char/80 p-4 shadow-[inset_0_18px_45px_rgba(249,210,122,0.1)]"
          >
            <p className="font-display text-lg text-ivory">{moment.title}</p>
            <p className="mt-1 text-[0.95rem] leading-6 text-ivory/70">
              {moment.description}
            </p>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
