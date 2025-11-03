"use client";

import { motion } from "framer-motion";
import { registryItems } from "@/data/content";

type RegistryItem = {
  name: string;
  description: string;
  bank: string;
  accountName: string;
  accountNumber: string;
};

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
          Monetary gifts made easy
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-ivory/70">
          Your presence lights up our celebration. If you would like to gift us
          financially, please find the account details below. Every transfer
          reaches us directly and helps build our first home.
        </p>
      </div>
      <div className="mt-12 flex justify-center">
        {registryItems.map((item: RegistryItem, index) => (
          <motion.article
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="relative flex w-full max-w-2xl flex-col gap-5 rounded-[2.75rem] border border-gold/30 bg-gradient-to-br from-night/90 via-onyx/86 to-char/88 p-8 text-left text-ivory shadow-[0_40px_120px_-60px_rgba(249,210,122,0.55)] backdrop-blur-sm sm:p-10"
          >
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/40 bg-night/75 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold/80 shadow-[inset_0_12px_30px_rgba(249,210,122,0.08)]">
              Direct gift
              <span className="h-1.5 w-1.5 rounded-full bg-gold/70" />
              ₦
            </span>
            <h3 className="font-display text-xl text-black">{item.name}</h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-ivory/70">
              {item.description}
            </p>
            <dl className="mt-4 grid gap-4 rounded-3xl border border-gold/30 bg-gradient-to-br from-night/88 via-onyx/82 to-char/84 p-6 text-sm leading-6 text-ivory shadow-[inset_0_18px_40px_rgba(249,210,122,0.08)] sm:grid-cols-2">
              <div className="flex flex-col gap-1 sm:col-span-2">
                <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-ivory/60">
                  Bank / provider
                </dt>
                <dd className="font-semibold text-ivory/95">{item.bank}</dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-ivory/60">
                  Account name
                </dt>
                <dd className="font-semibold text-ivory">{item.accountName}</dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-ivory/60">
                  Account number
                </dt>
                <dd className="rounded-2xl border border-gold/35 bg-night/78 px-4 py-3 text-center font-mono text-lg tracking-[0.35em] text-gold/85">
                  {item.accountNumber}
                </dd>
              </div>
            </dl>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
