"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navigation } from "@/data/content";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 32);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "pointer-events-none fixed inset-x-0 top-4 z-40 px-4 transition-all duration-500 ease-out sm:top-6 sm:px-6",
        isScrolled ? "translate-y-0" : ""
      )}
    >
      <div
        className={cn(
          "pointer-events-auto mx-auto flex max-w-6xl items-center justify-between rounded-full border px-6 py-4 backdrop-blur",
          "shadow-sm transition duration-300",
          isScrolled
            ? "border-olive/20 bg-white/95 shadow-olive/20"
            : "border-white/60 bg-white/80 shadow-olive/10"
        )}
      >
        <Link
          href="#top"
          className="font-display text-lg uppercase tracking-[0.4em] text-olive"
        >
          A & M
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-ink/80 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-olive"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#rsvp"
          className="hidden rounded-full bg-olive px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-olive/40 transition hover:bg-olive/90 md:inline-flex"
        >
          RSVP
        </Link>
        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 bg-white text-xs font-medium text-ink/70 shadow-sm md:hidden"
          onClick={() => {
            const menu = document.querySelector<HTMLDialogElement>(
              "#wedding-nav-dialog"
            );
            menu?.showModal();
          }}
        >
          Menu
        </button>
      </div>
      <dialog
        id="wedding-nav-dialog"
        className="mx-auto mt-3 w-[90vw] max-w-sm rounded-3xl border border-ink/10 bg-white/95 p-6 backdrop:bg-black/30"
      >
        <div className="flex items-center justify-between">
          <span className="font-display text-lg uppercase tracking-[0.3em] text-olive">
            Aurora &amp; Milan
          </span>
          <button
            type="button"
            className="rounded-full border border-ink/10 px-3 py-1 text-xs uppercase tracking-widest text-ink/60"
            onClick={() => {
              const dialog = document.getElementById(
                "wedding-nav-dialog"
              ) as HTMLDialogElement | null;
              dialog?.close();
            }}
          >
            Close
          </button>
        </div>
        <nav className="mt-6 flex flex-col gap-4 text-base">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl border border-transparent px-3 py-2 text-ink/80 transition hover:border-olive/30 hover:bg-olive/5"
              onClick={() => {
                const dialog = document.getElementById(
                  "wedding-nav-dialog"
                ) as HTMLDialogElement | null;
                dialog?.close();
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </dialog>
    </header>
  );
}
