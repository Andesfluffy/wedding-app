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
      className="relative mx-auto mt-24 max-w-6xl rounded-[3.5rem] border border-white/50 bg-gradient-to-br from-cream/90 via-white/80 to-fog/80 px-6 py-20 shadow-2xl shadow-olive/10 backdrop-blur md:px-16"
    >
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <p className="font-display text-xs uppercase tracking-[0.6em] text-olive/70">
            Ceremony &amp; reception
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-ink sm:text-5xl">
            A full-day program at a glance
          </h2>
          <p className="mt-4 text-base leading-7 text-ink/70">
            From the Kingdom Hall discourse to golden-hour portraits and the
            last song of the night, everything you need is beautifully tucked
            into one elegant guide for your wedding-day link.
          </p>
        </div>
        <div className="rounded-3xl border border-olive/20 bg-cream/70 px-6 py-4 text-xs uppercase tracking-[0.3em] text-olive/80 shadow-inner shadow-olive/10">
          Save this link for November 29. Tap each section for the latest
          timings and highlights throughout the day.
        </div>
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr,1.1fr,0.9fr]">
        <ProgramCard
          title="Kingdom Hall program"
          accent="from-olive/15 via-white/70 to-cream/60"
          items={kingdomHallProgram}
        />
        <ProgramCard
          title="Reception flow"
          accent="from-rose/10 via-white/70 to-cream/60"
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
      className={`flex h-full flex-col rounded-[2.5rem] border border-olive/15 bg-gradient-to-br ${accent} p-8 shadow-xl shadow-olive/10`}
    >
      <h3 className="font-display text-2xl text-ink">{title}</h3>
      <dl className="mt-6 flex flex-col gap-5 text-sm leading-7 text-ink/70">
        {items.map((item) => (
          <div
            key={`${item.time}-${item.title}`}
            className="rounded-2xl border border-white/60 bg-white/70 p-4 shadow-inner shadow-olive/5"
          >
            <dt className="font-display text-xs uppercase tracking-[0.3em] text-olive/80">
              {item.time}
            </dt>
            <dd className="mt-2 font-display text-lg text-ink">{item.title}</dd>
            <p className="mt-1 text-[0.95rem] leading-6 text-ink/65">
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
      className="flex h-full flex-col rounded-[2.5rem] border border-olive/15 bg-gradient-to-br from-ink/[0.04] via-white/75 to-cream/60 p-8 shadow-xl shadow-olive/10"
    >
      <h3 className="font-display text-2xl text-ink">Order of photography</h3>
      <p className="mt-3 text-sm leading-7 text-ink/70">
        Share these moments with your crew so everyone knows when to gather
        for portraits and when to let loose on the dance floor.
      </p>
      <ul className="mt-6 flex flex-col gap-4 text-sm leading-7 text-ink/70">
        {photographyMoments.map((moment) => (
          <li
            key={moment.title}
            className="rounded-2xl border border-white/60 bg-white/70 p-4 shadow-inner shadow-olive/5"
          >
            <p className="font-display text-lg text-ink">{moment.title}</p>
            <p className="mt-1 text-[0.95rem] leading-6 text-ink/65">
              {moment.description}
            </p>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
