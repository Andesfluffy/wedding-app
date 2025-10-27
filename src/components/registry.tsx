"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { registryItems } from "@/data/content";

export function RegistrySection() {
  return (
    <section className="relative mx-auto mt-24 max-w-5xl rounded-[3rem] border border-white/50 bg-white/85 px-6 py-20 shadow-xl shadow-olive/10 backdrop-blur md:px-12">
      <div className="text-center">
        <p className="font-display text-xs uppercase tracking-[0.6em] text-olive/70">
          Registry
        </p>
        <h2 className="mt-4 font-display text-4xl tracking-tight text-ink sm:text-5xl">
          Gifts that echo our joy
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-ink/70">
          Your presence lights up our Kingdom Hall celebration. For those
          asking how else to share the love, these experiences, art pieces, and
          causes are dear to us.
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {registryItems.map((item, index) => (
          <motion.article
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="flex h-full flex-col rounded-3xl border border-olive/15 bg-cream/70 p-6 text-left shadow-lg shadow-olive/10"
          >
            <h3 className="font-display text-xl text-ink">{item.name}</h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-ink/70">
              {item.description}
            </p>
            <Link
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex w-fit items-center justify-center rounded-full border border-olive/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-olive/80 transition hover:border-olive hover:text-olive"
            >
              Explore
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
