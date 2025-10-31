"use client";

export function SiteFooter() {
  return (
    <footer className="relative mx-auto mt-24 max-w-4xl rounded-[3.5rem] border border-gold/45 bg-gradient-to-br from-pearl/96 via-cream/95 to-night/92 px-6 py-10 text-ink shadow-[0_60px_160px_-70px_rgba(212,169,61,0.55)] md:px-10">
      <div className="rounded-3xl border border-gold/35 bg-pearl/90 px-6 py-5 text-center text-xs font-semibold uppercase tracking-[0.3em] text-ink/75">
        What God has yoked together , let no man put apart - Mt 19:6 Ac{" "}
        {new Date().getFullYear()}
      </div>
    </footer>
  );
}
