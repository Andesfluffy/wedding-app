import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/footer";
import { StoryTimeline } from "@/components/story-timeline";
import { WeddingPartySection } from "@/components/wedding-party";
import { GallerySection } from "@/components/gallery";
import { RegistrySection } from "@/components/registry";
import { FaqSection } from "@/components/faqs";

function StoryIntro() {
  return (
    <section className="relative isolate overflow-hidden pb-20 pt-40 sm:pb-24 sm:pt-48">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-rosewater/40 blur-3xl" />
        <div className="absolute -right-20 top-1/4 h-72 w-72 rounded-full bg-gold/30 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-night/40 blur-3xl" />
      </div>
      <div className="mx-auto max-w-5xl rounded-[3rem] border border-gold/35 bg-gradient-to-br from-pearl/95 via-cream/95 to-night/92 px-6 py-16 text-center shadow-[0_45px_140px_-60px_rgba(212,169,61,0.55)] backdrop-blur sm:px-12 md:text-left">
        <p className="font-display text-xs uppercase tracking-[0.6em] text-black">
          Theo &amp; Joan
        </p>
        <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="space-y-5">
            <h1 className="font-display text-4xl tracking-tight text-ink sm:text-5xl md:text-6xl">
              A Lagos love story in full colour
            </h1>
            <p className="text-base leading-7 text-ink/80 md:max-w-xl">
              Journey through the moments, the faces, and the joyful details
              that brought us here. Scroll to explore our timeline, wedding
              party, photo mood board, registry wishes, and answers for curious
              guests.
            </p>
          </div>
          <div className="rounded-3xl border border-gold/30 bg-rosewater/80 px-6 py-4 text-xs uppercase tracking-[0.3em] text-ink/70 shadow-[inset_0_18px_45px_rgba(212,169,61,0.12)]">
            Memories, portraits &amp; plans
          </div>
        </div>
      </div>
    </section>
  );
}

export default function StoryPage() {
  return (
    <div className="relative overflow-hidden pb-24">
      <Navigation />
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6 md:px-10">
        <StoryIntro />
        <StoryTimeline />
        <WeddingPartySection />
        <GallerySection />
        <RegistrySection />
        <FaqSection />
      </main>
      <SiteFooter />
    </div>
  );
}
