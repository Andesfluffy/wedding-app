"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/data/content";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 32);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      menuRef.current?.focus();
    }
  }, [isMenuOpen]);

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
          "shadow-[0_25px_80px_-50px_rgba(249,210,122,0.55)] transition duration-300",
          isScrolled
            ? "border-gold/40 bg-night/85"
            : "border-gold/35 bg-gradient-to-r from-char/80 via-night/75 to-char/80"
        )}
      >
        <Link
          href="#top"
          className="font-display text-lg uppercase tracking-[0.4em] text-gold drop-shadow-[0_0_8px_rgba(246,196,92,0.4)]"
        >
          Theo & Joan
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-ivory/70 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#rsvp"
          className="hidden rounded-full bg-gradient-to-r from-ember via-gold to-gilded px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-night shadow-[0_12px_40px_rgba(246,196,92,0.4)] transition hover:shadow-[0_15px_45px_rgba(249,210,122,0.55)] md:inline-flex"
        >
          RSVP
        </Link>
        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 bg-night/70 text-xs font-medium text-ivory/70 shadow-sm md:hidden"
          onClick={() => setMenuOpen(true)}
          aria-expanded={isMenuOpen}
          aria-controls="wedding-nav-menu"
        >
          Menu
        </button>
      </div>
      {isMenuOpen && (
        <div
          className="pointer-events-auto fixed inset-0 z-50 flex items-start justify-center bg-night/80 px-6 pt-28"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setMenuOpen(false);
            }
          }}
        >
          <div
            id="wedding-nav-menu"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Wedding navigation"
            tabIndex={-1}
            className="w-full max-w-sm rounded-3xl border border-gold/30 bg-gradient-to-br from-night/95 via-char/90 to-onyx/95 p-6 shadow-[0_45px_90px_-45px_rgba(249,210,122,0.55)]"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-lg uppercase tracking-[0.3em] text-gold">
                Theophilus &amp; Joan
              </span>
              <button
                type="button"
                className="rounded-full border border-gold/30 px-3 py-1 text-xs uppercase tracking-widest text-ivory/70"
                onClick={() => setMenuOpen(false)}
              >
                Close
              </button>
            </div>
            <nav className="mt-6 flex flex-col gap-4 text-base">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-transparent px-3 py-2 text-ivory/80 transition hover:border-gold/35 hover:bg-gold/10"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
