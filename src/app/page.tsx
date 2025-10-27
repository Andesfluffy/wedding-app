import { AudioPlayer } from "@/components/audio-player";
import { CountdownSection } from "@/components/countdown";
import { FaqSection } from "@/components/faqs";
import { GallerySection } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { RegistrySection } from "@/components/registry";
import { RsvpSection } from "@/components/rsvp-form";
import { SiteFooter } from "@/components/footer";
import { StoryTimeline } from "@/components/story-timeline";
import { TravelSection } from "@/components/travel";
import { WeekendEvents } from "@/components/weekend-events";
import { WeddingPartySection } from "@/components/wedding-party";

export default function Home() {
  return (
    <div className="relative overflow-hidden pb-24">
      <Navigation />
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6 md:px-10">
        <Hero />
        <CountdownSection />
        <StoryTimeline />
        <WeekendEvents />
        <TravelSection />
        <WeddingPartySection />
        <GallerySection />
        <RegistrySection />
        <FaqSection />
        <RsvpSection />
      </main>
      <SiteFooter />
      <AudioPlayer />
    </div>
  );
}
