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
      // className="relative mx-auto mt-2 max-w-6xl scroll-mt-32 rounded-xl border border-gold/35 bg-gradient-to-br from-night/92 via-onyx/88 to-char/90 px-4 py-12 shadow-[0_50px_140px_-60px_rgba(249,210,122,0.55)] backdrop-blur"
    >
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between ">
        <div className="">
          <h2 className="font-display text-xl font-semibold tracking-widest uppercase text-ivory sm:text-5xl">
            Highlights
          </h2>
        </div>
      </div>

      <div className="mt-2 flex flex-col gap-6">
        <ProgramCard
          title="Kingdom Hall program"
          program={kingdomHallProgram}
        />
          <PhotographyCard />
        <ProgramCard
          title="Reception program"
          program={receptionProgram}
        />
      </div>
    </section>
  );
}

interface ProgramItem {
  time: string;
  title: string;
  description: string;
}

interface ProgramCardProps {
  title: string;
  program: ProgramItem[];
}

export default function ProgramCard({ title, program }: ProgramCardProps) {
  return (
    <div className="w-full rounded-xl border border-gold/30 bg-gradient-to-br from-night/60 via-char/60 to-onyx/60 py-4 px-2 backdrop-blur-sm shadow-[0_20px_70px_-30px_rgba(249,210,122,0.3)]">
      <h3 className="font-display text-xl font-semibold text-ivory mb-6 pb-4 border-b border-gold/20">
        {title}
      </h3>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.08 },
          },
        }}
        className="space-y-3"
      >
        {program.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, x: -10 },
              show: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="group rounded-xl border border-gold/20 bg-gradient-to-r from-night/40 via-onyx/30 to-char/40 p-4"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex shrink-0 items-center justify-center rounded-md bg-gold/10 p-2 font-display text-xs font-semibold border border-gold/30">
              </span>
              <p className="font-display text-base font-medium text-ivory ">
                {item.title}
              </p>
            </div>
            {/* {item.description && (
              <p className="mt-2 text-sm leading-relaxed text-ivory/70 pl-[4.5rem]">
                {item.description}
              </p>
            )} */}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

function PhotographyCard() {
  const { window, location, note, order } = photographySchedule;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="w-full rounded-xl border border-gold/30 bg-gradient-to-br from-night/60 via-char/60 to-onyx/60 p-4 backdrop-blur-sm shadow-[0_20px_70px_-30px_rgba(249,210,122,0.3)]"
    >
      <h3 className="font-display text-xl font-semibold text-ivory mb-6 pb-4 border-b border-gold/20">
        Order of photography
      </h3>

      {/* <div className="rounded-xl border border-gold/20 bg-gradient-to-r from-night/40 via-onyx/30 to-char/40 p-5 shadow-[inset_0_12px_30px_rgba(249,210,122,0.08)]">
        <p className="font-display text-lg font-medium text-ivory">{window}</p>
        <p className="mt-2 text-sm text-ivory/75">{location}</p>
        <p className="mt-3 text-sm leading-relaxed text-ivory/70">{note}</p>
      </div> */}

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="group mt-5 flex w-full items-center justify-between rounded-xl border border-gold/20 bg-gradient-to-r from-night/40 via-onyx/30 to-char/40 px-2 py-4 text-left shadow-[inset_0_12px_30px_rgba(249,210,122,0.08)] transition-all duration-300 hover:border-gold/40 hover:shadow-[0_8px_30px_-12px_rgba(249,210,122,0.4)]"
      >
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-wider">
            Photography lineup
          </p>
          <p className="mt-1.5 font-display text-base font-medium text-ivory">
            {isOpen ? "Hide details" : "View details"}
          </p>
        </div>
        <span
          aria-hidden="true"
          className=" px-3 py-1 text-center shrink-0 items-center justify-center rounded-md border border-gold/30 bg-night/50 font-display text-2xl text-gold transition-all duration-300 group-hover:border-gold/50 group-hover:bg-night/70 group-hover:text-gilded"
        >
          
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="inline-block"
          >
            +
          </motion.span>
        </span>
      </button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <ul className="mt-4 flex flex-col gap-3">
          {order.map((group, index) => (
            <motion.li
              key={group}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className="flex items-center gap-3 rounded-xl border border-gold/20 bg-gradient-to-r from-night/40 via-onyx/30 to-char/40 p-4 shadow-[inset_0_12px_30px_rgba(249,210,122,0.08)]"
            >
              <span className=" inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-night/50 font-display text-md font-semibold">
                {index + 1}
              </span>
              <p className="text-sm leading-relaxed text-ivory/85">{group}</p>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.article>
  );
}