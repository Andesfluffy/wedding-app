"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/data/content";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

export function Navigation() {
  const pathname = usePathname();
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

  const isActive = (href: string) => {
    const basePath = href.split("#")[0] || "/";
    return pathname === basePath;
  };

  // Preserve signed guest params and RSVP status when navigating
  const searchParams = useSearchParams();
  const guest = searchParams.get("guest") || "";
  const max = searchParams.get("max") || "";
  const signature = searchParams.get("signature") || "";
  const rsvpCompleted = searchParams.get("rsvp") === "completed";
  const hasSignedParams = Boolean(guest && max && signature);

  // Helper function to append signed params to any URL
  const appendSignedParams = (href: string) => {
    if (!hasSignedParams && !rsvpCompleted) return href;

    const params = new URLSearchParams();
    if (guest) params.set("guest", guest);
    if (max) params.set("max", max);
    if (signature) params.set("signature", signature);
    if (rsvpCompleted) params.set("rsvp", "completed");

    const signedQuery = params.toString();
    if (!signedQuery) return href;

    // Check if href has anchor
    if (href.includes("#")) {
      const [path, anchor] = href.split("#");
      return `${path}?${signedQuery}#${anchor}`;
    }

    return `${href}?${signedQuery}`;
  };

  const homeHref = appendSignedParams("/");
  const rsvpHref = appendSignedParams("/rsvp");

  return (
    <header
      className={cn(
        "pointer-events-none fixed inset-x-0 top-4 z-40 px-4 transition-all duration-500 ease-out sm:top-6 sm:px-6",
        isScrolled ? "translate-y-0" : ""
      )}
    >
      <div
        className={cn(
          "pointer-events-auto mx-auto flex max-w-6xl items-center justify-between rounded-xl border px-6 py-4 backdrop-blur",
          "shadow-[0_25px_80px_-50px_rgba(244,206,133,0.45)] transition duration-300",
          isScrolled
            ? "border-gold/40 bg-pearl/92"
            : "border-gold/30 bg-gradient-to-r from-pearl/98 via-cream/92 to-rosewater/85"
        )}
      >
        <Link
          href={homeHref}
          className="font-display text-lg uppercase tracking-[0.2em] text-gold drop-shadow-[0_0_8px_rgba(246,196,92,0.4)]"
        >
          Joan & Theo
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-ink/70 md:flex">
          {navigation.map((item) => {
            const navHref =
              item.href === "/" ? homeHref : appendSignedParams(item.href);
            return (
              <Link
                key={item.href}
                href={navHref}
                className={cn(
                  "transition-colors hover:text-gold",
                  isActive(item.href) ? "text-gold" : ""
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href={rsvpHref}
          className="hidden rounded-xl px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-ink md:inline-flex"
        >
          RSVP
        </Link>
        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gold/30 bg-pearl/85 text-xs font-medium text-ink/70 shadow-sm md:hidden"
          onClick={() => setMenuOpen(true)}
          aria-expanded={isMenuOpen}
          aria-controls="wedding-nav-menu"
        >
          <Menu />
        </button>
      </div>
      {isMenuOpen && (
        <div
          className="pointer-events-auto fixed inset-0 z-50 flex items-start justify-center bg-ink/15 px-6 pt-28 backdrop-blur-sm h-screen"
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
            className="w-full max-w-sm rounded-3xl border border-gold/30 bg-gradient-to-br from-pearl via-cream/90 to-rosewater/85 p-6 shadow-[0_45px_90px_-45px_rgba(249,210,122,0.45)]"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-lg uppercase tracking-[0.3em] text-gold">
                Joan & Theo
              </span>
              <button
                type="button"
                className="rounded-md border border-gold/30 px-3 py-1 text-xs uppercase tracking-widest text-ink/70"
                onClick={() => setMenuOpen(false)}
              >
                Close
              </button>
            </div>
            <nav className="mt-6 flex flex-col gap-4 text-base">
              {navigation.map((item) => {
                const navHref =
                  item.href === "/" ? homeHref : appendSignedParams(item.href);
                return (
                  <Link
                    key={item.href}
                    href={navHref}
                    className={cn(
                      "rounded-xl border border-transparent px-3 py-2 text-ink/75 transition hover:border-gold/35 hover:bg-gold/10",
                      isActive(item.href)
                        ? "border-gold/35 bg-gold/10 text-gold"
                        : ""
                    )}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            {hasSignedParams && (
              <Link
                href={rsvpHref}
                className="mt-8 inline-flex w-full  items-center justify-center rounded-lg px-8 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-pearl border"
                onClick={() => setMenuOpen(false)}
              >
                RSVP
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
