"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { galleryImages } from "@/data/content";

export function GallerySection() {
  return (
    <section
      id="gallery"
      className="relative mx-auto mt-12 max-w-6xl overflow-hidden rounded-xl border border-gold/30 bg-gradient-to-br from-night/90 via-onyx/85 to-char/88 px-4 py-12 shadow-[0_45px_130px_-60px_rgba(249,210,122,0.5)] backdrop-blur md:px-12"
    >
      <div className="mb-10 text-center">
        <p className="font-display text-2xl font-bold uppercase tracking-[0.3em] text-black">
          Gallery
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group relative overflow-hidden rounded-xl border border-gold/20 bg-night/70 shadow-[0_25px_70px_-55px_rgba(249,210,122,0.5)]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={400}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            {/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/80 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" /> */}
            {/* <div className="pointer-events-none absolute inset-x-0 bottom-4 px-4 opacity-0 transition duration-500 group-hover:opacity-100">
              <p className="rounded-2xl bg-white/60 px-3 py-2 text-xs text-ink">
                {image.alt}
              </p>
            </div> */}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
