"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/data/content";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative mx-auto mt-24 max-w-4xl rounded-xl border border-gold/30 bg-gradient-to-br from-night/90 via-onyx/86 to-char/88 px-6 py-20 shadow-[0_40px_120px_-55px_rgba(249,210,122,0.5)] backdrop-blur md:px-10"
    >
      <div className="text-center">
        <p className="font-display text-xs uppercase tracking-[0.6em] text-black">
          FAQ
        </p>
        <h2 className="mt-4 font-display text-4xl tracking-tight text-ivory sm:text-5xl">
          Questions, answered
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-ivory/70">
          Still curious? Send a note to Radiant Vows Events and the team will
          guide you through attire, parking, or anything else on your mind.
        </p>
      </div>
      <div className="mt-12 space-y-4">
        {faqs.map((item, index) => {
          const isActive = active === index;

          return (
            <article
              key={item.question}
              className={cn(
                "rounded-3xl border border-gold/25 bg-night/75 p-5 text-ivory shadow-[0_25px_80px_-60px_rgba(249,210,122,0.45)] transition",
                isActive ? "ring-2 ring-gold/30" : ""
              )}
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 text-left"
                onClick={() => setActive(isActive ? null : index)}
              >
                <span className="font-display text-lg text-black">
                  {item.question}
                </span>
                <span className="text-2xl text-gold">
                  {isActive ? "-" : "+"}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.p
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 overflow-hidden text-sm leading-7 text-ivory/75"
                  >
                    {item.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </article>
          );
        })}
      </div>
    </section>
  );
}
