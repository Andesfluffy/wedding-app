"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/data/content";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="relative mx-auto mt-24 max-w-4xl rounded-[3rem] border border-ink/5 bg-cream/85 px-6 py-20 shadow-xl shadow-olive/10 backdrop-blur md:px-10">
      <div className="text-center">
        <p className="font-display text-xs uppercase tracking-[0.6em] text-olive/70">
          FAQ
        </p>
        <h2 className="mt-4 font-display text-4xl tracking-tight text-ink sm:text-5xl">
          Questions, answered
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-ink/70">
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
                "rounded-3xl border border-olive/15 bg-white/80 p-5 shadow-lg shadow-olive/10 transition",
                isActive ? "ring-2 ring-olive/30" : ""
              )}
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 text-left"
                onClick={() => setActive(isActive ? null : index)}
              >
                <span className="font-display text-lg text-ink">
                  {item.question}
                </span>
                <span className="text-2xl text-olive/60">
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
                    className="mt-4 overflow-hidden text-sm leading-7 text-ink/70"
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
