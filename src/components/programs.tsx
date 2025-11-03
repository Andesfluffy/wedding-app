"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  kingdomHallProgram,
  receptionProgram,
  photographySchedule,
} from "@/data/content";

export function ProgramSection() {
  return (
    <section
      id="program"
      className="relative mx-auto mt-24 max-w-6xl scroll-mt-32 rounded-[3.5rem] border border-gold/35 bg-gradient-to-br from-night/92 via-onyx/88 to-char/90 px-6 py-20 shadow-[0_50px_140px_-60px_rgba(249,210,122,0.55)] backdrop-blur md:px-16"
    >
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <p className="font-display text-xs uppercase tracking-[0.6em] text-black">
            Ceremony &amp; reception
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-ivory sm:text-5xl">
            Ceremony &amp; reception highlights
          </h2>
          <p className="mt-4 text-base leading-7 text-ivory/85">
            Tap through the timeline to open the notes you need—perfect for a
            quick check between moments.
          </p>
        </div>
        <div className="rounded-3xl border border-gold/30 bg-gradient-to-br from-night/80 via-char/80 to-onyx/80 px-6 py-4 text-xs uppercase tracking-[0.3em] text-ivory/90 shadow-[inset_0_20px_50px_rgba(249,210,122,0.12)]">
          Tap each section for the latest highlights throughout the day.
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
      <h3 className="font-display text-2xl text-black">{title}</h3>
      <ul className="mt-6 flex flex-col gap-4 text-sm leading-7 text-ivory/90">
        {items.map((item) => (
          <li key={`${item.time}-${item.title}`}>
            <details className="group rounded-2xl border border-gold/25 bg-gradient-to-br from-night/80 via-onyx/75 to-char/80 p-4 shadow-[inset_0_18px_45px_rgba(249,210,122,0.1)] transition hover:border-gold/40 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex w-full cursor-pointer flex-col gap-2 text-left sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-black">
                    {item.time}
                  </p>
                  <p className="mt-2 font-display text-lg font-semibold text-ivory">
                    {item.title}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-night/70 font-display text-base text-gold transition duration-300 group-open:rotate-45 sm:mt-0"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-[0.95rem] leading-6 text-ivory/85">
                {item.description}
              </p>
            </details>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

function PhotographyCard() {
  const { window, location, note, order } = photographySchedule;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="flex h-full flex-col rounded-[2.5rem] border border-gold/30 bg-gradient-to-br from-night/85 via-char/82 to-ember/30 p-8 text-ivory shadow-[0_35px_110px_-60px_rgba(249,210,122,0.5)]"
    >
      <h3 className="font-display text-2xl text-black">
        Order of photography
      </h3>
      <div className="mt-3 rounded-2xl border border-gold/25 bg-gradient-to-br from-night/80 via-onyx/75 to-char/80 p-5 text-sm leading-7 text-ivory/90 shadow-[inset_0_18px_45px_rgba(249,210,122,0.1)]">
        <p className="font-display text-lg text-ivory">{window}</p>
        <p className="mt-1 text-[0.95rem] text-ivory/85">{location}</p>
        <p className="mt-3 text-[0.95rem] text-ivory/85">{note}</p>
      </div>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="group mt-6 flex w-full items-center justify-between rounded-2xl border border-gold/25 bg-gradient-to-br from-night/80 via-onyx/75 to-char/80 px-5 py-4 text-left shadow-[inset_0_18px_45px_rgba(249,210,122,0.1)] transition hover:border-gold/40"
      >
        <div>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-black">
            Photography order
          </p>
          <p className="mt-2 font-display text-lg font-semibold text-ivory">
            {isOpen ? "Hide lineup" : "View lineup"}
          </p>
        </div>
        <span
          aria-hidden="true"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-night/70 font-display text-base text-gold transition duration-300 group-hover:border-gold/45 group-hover:text-gilded"
        >
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.25 }}
            className="inline-block"
          >
            +
          </motion.span>
        </span>
      </button>
      {isOpen && (
        <ul className="mt-4 flex flex-col gap-3 text-sm leading-7 text-ivory/90">
          {order.map((group, index) => (
            <li
              key={group}
              className="flex items-start gap-3 rounded-2xl border border-gold/25 bg-gradient-to-br from-night/80 via-onyx/75 to-char/80 p-4 shadow-[inset_0_18px_45px_rgba(249,210,122,0.1)]"
            >
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-night/70 font-display text-xs font-semibold text-black">
                {index + 1}
              </span>
              <p className="text-[0.95rem] leading-6 text-ivory/90">{group}</p>
            </li>
          ))}
        </ul>
      )}
    </motion.article>
  );
}
