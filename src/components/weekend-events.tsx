"use client";

import { motion } from "framer-motion";
import { weekendEvents } from "@/data/content";

export function WeekendEvents() {
  return (
    <section
      id="schedule"
      className="relative mx-auto mt-24 max-w-6xl rounded-[3.5rem] border border-white/40 bg-white/85 px-6 py-20 shadow-2xl shadow-olive/10 backdrop-blur md:px-16"
    >
      <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:gap-16">
        <div className="max-w-xl">
          <p className="font-display text-xs uppercase tracking-[0.6em] text-olive/70">
            Wedding day schedule
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-ink sm:text-5xl">
            One unforgettable Saturday
          </h2>
          <p className="mt-4 text-base leading-7 text-ink/70">
            Every moment unfolds in the Kingdom Hall grounds so you can relax,
            rejoice, and celebrate with us from the first hymn to the final
            dance break.
          </p>
        </div>
        <div className="rounded-3xl border border-olive/20 bg-cream/70 px-6 py-4 text-xs uppercase tracking-[0.3em] text-olive/80 shadow-inner shadow-olive/10">
          Beat Lagos traffic by leaving early. Share dietary notes or parking
          needs in the RSVP form so we can plan ahead.
        </div>
      </div>
      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {weekendEvents.map((event, index) => (
          <motion.article
            key={`${event.day}-${event.title}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex h-full flex-col rounded-3xl border border-olive/15 bg-white/90 p-8 text-left shadow-lg shadow-olive/10"
          >
            <div className="flex items-baseline justify-between text-xs uppercase tracking-[0.3em] text-olive/70">
              <span>{event.day}</span>
              <span>{event.date}</span>
            </div>
            <h3 className="mt-5 font-display text-2xl text-ink">
              {event.title}
            </h3>
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.3em] text-olive/80">
              {event.time}
            </p>
            <p className="mt-2 text-sm text-ink/60">{event.location}</p>
            <p className="mt-4 flex-1 text-sm leading-7 text-ink/70">
              {event.description}
            </p>
            <div className="mt-6 rounded-2xl border border-olive/15 bg-cream/60 px-4 py-3 text-xs uppercase tracking-[0.3em] text-ink/70">
              Attire: {event.attire}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
