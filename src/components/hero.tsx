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
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-gold/35 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute top-16 right-1/3 h-56 w-56 rounded-full bg-merlot/20 blur-3xl sm:h-72 sm:w-72" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-ember/30 blur-3xl sm:h-[28rem] sm:w-[28rem]" />
        <div className="absolute -bottom-16 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-bronze/35 blur-3xl sm:h-64 sm:w-64" />
      </div>
      <div className="mx-auto flex max-w-6xl flex-col items-center rounded-[3rem] border border-gold/45 bg-gradient-to-br from-pearl/95 via-cream/95 to-night/92 px-6 pb-16 pt-20 text-center shadow-[0_45px_150px_-60px_rgba(212,169,61,0.6),0_0_120px_-50px_rgba(90,15,41,0.35)] backdrop-blur-lg sm:px-12 md:flex-row md:items-end md:justify-between md:text-left md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <p className="font-display text-xs font-semibold uppercase tracking-[0.6em] text-gold">
            {weddingDetails.weekday} / {weddingDetails.date}
          </p>
          <h1 className="font-display text-5xl font-semibold tracking-tight text-ink sm:text-6xl md:text-7xl">
            {weddingDetails.couple.firstPartner}{" "}
            <span className="bg-gradient-to-r from-merlot via-gold to-merlot bg-clip-text font-medium text-transparent">
              &
            </span>{" "}
            {weddingDetails.couple.secondPartner}
          </h1>
          <p className="mx-auto max-w-xl text-base leading-7 text-ink/80 sm:text-lg md:mx-0">
            {weddingDetails.intro}
          </p>
          <p className="mx-auto max-w-xl text-sm leading-7 text-ink/70 sm:text-base md:mx-0">
            {weddingDetails.description}
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="#rsvp"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-ember via-gold to-gilded px-8 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-pearl shadow-[0_18px_60px_rgba(212,169,61,0.55),0_0_40px_rgba(90,15,41,0.28)] transition hover:shadow-[0_22px_70px_rgba(212,169,61,0.6),0_0_50px_rgba(90,15,41,0.32)]"
            >
              RSVP & Celebrate
            </Link>
            <Link
              href="#schedule"
              className="text-sm font-semibold uppercase tracking-[0.32em] text-merlot transition hover:text-gold"
            >
              Wedding Day Details
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="mt-16 w-full max-w-sm rounded-3xl border border-merlot/30 bg-pearl/95 p-8 text-left shadow-[0_25px_90px_-50px_rgba(212,169,61,0.55),0_0_80px_-45px_rgba(90,15,41,0.28)] backdrop-blur md:mt-0"
        >
          <div className="space-y-3 text-sm leading-6 text-ink/75">
            <div>
              <p className="font-semibold uppercase tracking-[0.28em] text-merlot">
                Venue
              </p>
              <p className="font-semibold text-ink">{weddingDetails.venue}</p>
              <p>{weddingDetails.location}</p>
            </div>
            <div>
              <p className="font-semibold uppercase tracking-[0.28em] text-merlot">
                Celebration
              </p>
              <p>
                {weddingDetails.time} / {weddingDetails.weekday}
              </p>
            </div>
            <div>
              <p className="font-semibold uppercase tracking-[0.28em] text-merlot">
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
          className="inline-flex items-center gap-3 rounded-full border border-merlot/30 bg-rosewater/80 px-5 py-2 text-xs font-medium uppercase tracking-[0.32em] text-ink/70 shadow-[0_12px_40px_-20px_rgba(90,15,41,0.32)] backdrop-blur"
        >
          Mt 19 : 6
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
        </motion.div>
      </div>
    </section>
  );
}
