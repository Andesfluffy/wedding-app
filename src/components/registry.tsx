"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { registryItems } from "@/data/content";

export function RegistrySection() {
  return (
    <section
      id="registry"
      className="relative mx-auto mt-24 max-w-5xl rounded-[3rem] border border-gold/35 bg-gradient-to-br from-night/92 via-onyx/88 to-char/90 px-6 py-20 shadow-[0_45px_130px_-60px_rgba(249,210,122,0.5)] backdrop-blur md:px-12"
    >
      <div className="text-center">
        <p className="font-display text-xs uppercase tracking-[0.6em] text-black">
          Registry
        </p>
        <h2 className="mt-4 font-display text-4xl tracking-tight text-ivory sm:text-5xl">
          Gifts that echo our joy
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-ivory/70">
          Your presence lights up our celebration. For those asking how else to
          share the love, these playful experiences and home upgrades are dear
          to us.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {registryItems.map((item, index) => (
          <motion.article
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="flex h-full flex-col rounded-3xl border border-gold/25 bg-night/78 p-6 text-left text-ivory shadow-[0_30px_100px_-60px_rgba(249,210,122,0.5)]"
          >
            <h3 className="font-display text-xl text-black">{item.name}</h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-ivory/70">
              {item.description}
            </p>
            <Link
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex w-fit items-center justify-center rounded-full border border-gold/30 px-4 py-2 text-xs uppercase tracking-[0.3em] text-ivory/80 transition hover:border-gold hover:text-gold"
            >
              Explore
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
