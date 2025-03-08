"use client";

import BringYourIdeasSection from "@/components/(home)/hero/hero-section-content";
import HeroLoadingWrapper from "@/components/(home)/loading/loading-hero-wrapper";
export default function HomePage() {
  return (
    <main className="h-full w-screen overflow-hidden">
      <HeroLoadingWrapper />
      <BringYourIdeasSection />
    </main>
  );
}
