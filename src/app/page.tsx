import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { RsvpSection } from "@/components/rsvp-form";
import { SiteFooter } from "@/components/footer";
import { CountdownSection } from "@/components/countdown";

export default function Home() {
  return (
    <div className="relative overflow-hidden pb-24">
      <Navigation />
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6 md:px-10">
        <Hero />
        <CountdownSection />
        <RsvpSection />
      </main>
      <SiteFooter />
    </div>
  );
}
