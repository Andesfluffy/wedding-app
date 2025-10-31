"use client";

import { motion } from "framer-motion";
import { weekendEvents } from "@/data/content";

export function WeekendEvents() {
  return (
    <section
      id="schedule"
      className="relative mx-auto mt-24 max-w-6xl scroll-mt-32 rounded-[3.5rem] border border-gold/35 bg-gradient-to-br from-night/92 via-onyx/88 to-char/90 px-6 py-20 shadow-[0_50px_140px_-60px_rgba(249,210,122,0.55)] backdrop-blur md:px-16"
    >
      <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:gap-16">
        <div className="max-w-xl">
          <p className="font-display text-xs uppercase tracking-[0.6em] text-gold">
            Wedding day schedule
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-ivory sm:text-5xl">
            One unforgettable Saturday
          </h2>
          <p className="mt-4 text-base leading-7 text-ivory/70">
            Keep the essentials handy—tap into each block to view the finer
            details when you need them.
          </p>
        </div>
        <div className="rounded-3xl border border-gold/25 bg-night/70 px-6 py-4 text-xs uppercase tracking-[0.3em] text-ivory/75 shadow-[inset_0_18px_45px_rgba(249,210,122,0.1)]">
          Beat Lagos traffic by leaving early. Share notes in the RSVP form so
          we can plan ahead.
        </div>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {weekendEvents.map((event, index) => (
          <motion.details
            key={`${event.day}-${event.title}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group flex h-full flex-col rounded-3xl border border-gold/30 bg-night/80 p-6 text-left text-ivory shadow-[0_30px_100px_-60px_rgba(249,210,122,0.5)] transition hover:border-gold/45 hover:shadow-[0_36px_110px_-60px_rgba(249,210,122,0.6)] [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex w-full cursor-pointer flex-col gap-5 text-left sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.3em] text-ivory/70">
                  {event.day}
                </p>
                <h3 className="font-display text-2xl text-gilded">
                  {event.title}
                </h3>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
                  {event.time}
                </p>
              </div>
              <div className="flex items-center gap-4 sm:pl-6">
                <div className="text-sm text-ivory/65">
                  <p className="text-xs uppercase tracking-[0.25em] text-ivory/55">
                    {event.date}
                  </p>
                  <p className="mt-1 max-w-[14rem] text-sm leading-6 text-ivory/65 sm:text-right">
                    {event.location}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/35 bg-night/70 font-display text-lg text-gold transition duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </div>
            </summary>
            <p className="mt-4 text-sm leading-7 text-ivory/70">
              {event.description}
            </p>
            <div className="mt-6 flex items-center justify-between gap-3 rounded-2xl border border-gold/25 bg-night/70 px-4 py-3 text-xs uppercase tracking-[0.3em] text-ivory/70">
              <span>Attire</span>
              <span className="text-[0.7rem] tracking-[0.25em] text-ivory/75">
                {event.attire}
              </span>
            </div>
          </motion.details>
        ))}
      </div>
    </section>
  );
}
