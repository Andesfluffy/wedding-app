"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { weddingDetails } from "@/data/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pb-24 pt-40 sm:pb-32 sm:pt-48"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-olive/10 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blush/20 blur-3xl sm:h-[28rem] sm:w-[28rem]" />
      </div>
      <div className="mx-auto flex max-w-6xl flex-col items-center rounded-[3rem] border border-white/40 bg-white/75 px-6 pb-16 pt-20 text-center shadow-xl shadow-olive/5 backdrop-blur-lg sm:px-12 md:flex-row md:items-end md:justify-between md:text-left md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <p className="font-display text-xs uppercase tracking-[0.6em] text-olive/70">
            {weddingDetails.weekday} / {weddingDetails.date}
          </p>
          <h1 className="font-display text-5xl tracking-tight text-ink sm:text-6xl md:text-7xl">
            {weddingDetails.couple.firstPartner}{" "}
            <span className="font-light text-olive">&</span>{" "}
            {weddingDetails.couple.secondPartner}
          </h1>
          <p className="mx-auto max-w-xl text-base leading-7 text-ink/70 sm:text-lg md:mx-0">
            {weddingDetails.intro}
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="#rsvp"
              className="inline-flex items-center justify-center rounded-full bg-ink px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-ink/20 transition hover:bg-ink/90"
            >
              RSVP Today
            </Link>
            <Link
              href="#weekend"
              className="text-sm font-medium uppercase tracking-[0.4em] text-olive transition hover:text-olive/70"
            >
              Weekend Highlights
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="mt-16 w-full max-w-sm rounded-3xl bg-white/80 p-8 text-left shadow-lg shadow-olive/10 backdrop-blur md:mt-0"
        >
          <div className="space-y-3 text-sm leading-6 text-ink/70">
            <div>
              <p className="font-semibold uppercase tracking-[0.3em] text-olive/70">
                Venue
              </p>
              <p className="font-medium text-ink">
                {weddingDetails.venue}
              </p>
              <p>{weddingDetails.location}</p>
            </div>
            <div>
              <p className="font-semibold uppercase tracking-[0.3em] text-olive/70">
                Celebration
              </p>
              <p>
                {weddingDetails.time} / {weddingDetails.weekday}
              </p>
            </div>
            <div>
              <p className="font-semibold uppercase tracking-[0.3em] text-olive/70">
                Kindly respond
              </p>
              <p>{weddingDetails.rsvpDeadline}</p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="mt-16 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="inline-flex items-center gap-3 rounded-full border border-ink/10 bg-white/80 px-5 py-2 text-xs uppercase tracking-[0.4em] text-ink/60 shadow-sm shadow-olive/10 backdrop-blur"
        >
          Scroll to explore
          <span className="h-1.5 w-1.5 rounded-full bg-olive" />
        </motion.div>
      </div>
    </section>
  );
}
