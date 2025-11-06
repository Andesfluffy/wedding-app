import Link from "next/link";

import { Hero } from "@/components/hero";
import { CountdownSection } from "@/components/countdown";
import { parseSignedParams } from "@/lib/url-signer";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ guest?: string; max?: string; signature?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const { guest, max, isValid } = parseSignedParams(
    new URLSearchParams(resolvedSearchParams)
  );

  // Only use the guest name and max guests if the signature is valid
  const guestName = isValid ? guest : undefined;
  const maxGuests = isValid
    ? typeof max === "string"
      ? parseInt(max, 10)
      : max
      ? Number(max)
      : undefined
    : undefined;

  return (
    <>
      <div className="relative overflow-hidden pb-24">
        <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6 md:px-10">
          <Hero guestName={guestName} maxGuests={maxGuests} />
          <CountdownSection />
          <section className="relative isolate overflow-hidden rounded-xl border border-gold/35 bg-gradient-to-br from-pearl/95 via-cream/95 to-rosewater/90 px-6 py-12 text-center shadow-[0_35px_120px_-60px_rgba(212,169,61,0.55),0_0_90px_-55px_rgba(90,15,41,0.28)] sm:px-10">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-gold/25 blur-3xl sm:h-48 sm:w-48" />
              <div className="absolute -right-10 bottom-6 h-32 w-32 rounded-full bg-merlot/15 blur-3xl sm:h-40 sm:w-40" />
            </div>
            <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
              <h2 className="font-display text-3xl font-semibold tracking-widest uppercase text-ink sm:text-4xl">
                View Event Details
              </h2>
              <p className="text-sm leading-7 text-ink/75 sm:text-base">
                Discover the flow of our wedding day, with all the exciting
                details.
              </p>
              <Link
                href="/program"
                className="inline-flex w-full  items-center justify-center rounded-lg px-8 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-pearl border"
              >
                View the Program
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
