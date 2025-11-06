"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { weddingDetails } from "@/data/content";

export function Hero({
  guestName,
  maxGuests,
  signature,
}: {
  guestName?: string;
  maxGuests?: number;
  signature?: string;
}) {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pb-12 pt-28 sm:pb-32 sm:pt-48"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-gold/35 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute top-16 right-1/3 h-56 w-56 rounded-full bg-merlot/20 blur-3xl sm:h-72 sm:w-72" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-ember/30 blur-3xl sm:h-[28rem] sm:w-[28rem]" />
        <div className="absolute -bottom-16 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-bronze/35 blur-3xl sm:h-64 sm:w-64" />
      </div>
      <div className="mx-auto flex max-w-6xl flex-col items-center rounded-xl border border-gold/45 bg-gradient-to-br from-pearl/95 via-cream/95 to-night/92 px-4 pb-16 pt-20 text-center shadow-[0_45px_150px_-60px_rgba(212,169,61,0.6),0_0_120px_-50px_rgba(90,15,41,0.35)] backdrop-blur-lg sm:px-12 md:flex-row md:items-end md:justify-between md:text-left md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          {guestName && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="rounded-xl border border-gold/30 bg-gradient-to-r from-gold/10 to-merlot/10 px-6 py-3 text-center"
            >
              <p className="font-display font-semibold text-sm uppercase tracking-[0.3em] text-ink">
                Dear {guestName},
              </p>
              {maxGuests && (
                <p className="mt-2 text-xs text-ink/70">
                  Your invitation accomodates up to {maxGuests} guest
                  {maxGuests > 1 ? "s" : ""}
                </p>
              )}
            </motion.div>
          )}

          <p className="flex flex-col font-display text-sm font-bold uppercase">
            The families of
            <span>{weddingDetails.families.bride}</span> &
            <span>{weddingDetails.families.groom}</span>
          </p>

          <p className="font-semibold font-display text-lg">
            {" "}
            Warmly invite you to the wedding of their children
          </p>

          <h1 className="font-display text-5xl font-semibold tracking-tight text-ink sm:text-6xl md:text-7xl">
            {weddingDetails.couple.secondPartner}{" "}
            <span className="bg-gradient-to-r from-merlot via-gold to-merlot bg-clip-text font-medium text-transparent">
              &
            </span>{" "}
            {weddingDetails.couple.firstPartner}
          </h1>

          <p className="font-display text-lg font-semibold uppercase tracking-widest text-black">
            {weddingDetails.weekday} / {weddingDetails.date}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="mt-8 w-full max-w-sm rounded-xl border border-merlot/30 bg-pearl/95 p-8 text-left shadow-[0_25px_90px_-50px_rgba(212,169,61,0.55),0_0_80px_-45px_rgba(90,15,41,0.28)] backdrop-blur md:mt-0"
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
                Time
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

        <div className="flex flex-col items-center gap-4 sm:flex-row my-6 w-full">
          <Link
            href={`/rsvp${
              guestName
                ? `?guest=${encodeURIComponent(guestName)}${
                    maxGuests ? `&max=${maxGuests}` : ""
                  }${signature ? `&signature=${signature}` : ""}`
                : ""
            }`}
            className="inline-flex w-full  items-center justify-center rounded-lg px-8 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-pearl border"
          >
            RSVP
          </Link>
        </div>
      </div>
    </section>
  );
}
