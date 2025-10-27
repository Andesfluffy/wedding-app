"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { galleryImages } from "@/data/content";

export function GallerySection() {
  return (
    <section
      id="gallery"
      className="relative mx-auto mt-24 max-w-6xl overflow-hidden rounded-[3.5rem] border border-ink/5 bg-white/90 px-6 py-20 shadow-2xl shadow-olive/10 backdrop-blur md:px-12"
    >
      <div className="mb-10 text-center">
        <p className="font-display text-xs uppercase tracking-[0.6em] text-olive/70">
          Mood board
        </p>
        <h2 className="mt-4 font-display text-4xl tracking-tight text-ink sm:text-5xl">
          Colours of Lagos love
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-ink/70">
          Jewel tones, tropical blooms, and metallic flashes—the palette guiding
          every aso-ebi, floral arch, and midnight dance break.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((image, index) => (
          <motion.div
            key={image.src}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group relative overflow-hidden rounded-3xl border border-olive/10 bg-cream/60 shadow-lg shadow-olive/10"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={600}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
            <div className="pointer-events-none absolute inset-x-0 bottom-4 px-4 opacity-0 transition duration-500 group-hover:opacity-100">
              <p className="rounded-2xl bg-white/60 px-3 py-2 text-xs text-ink">
                {image.alt}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
