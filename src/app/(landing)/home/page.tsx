"use client";

import FeatureShowcaseContainer from "@/components/(home)/feature/feature-responsive";
import BringYourIdeasSection from "@/components/(home)/hero/hero-section-content";
import HeroLoadingWrapper from "@/components/(home)/loading/loading-hero-wrapper";
export default function HomePage() {
  return (
    <main className="h-full  max-w-screen overflow-hidden">
      <HeroLoadingWrapper />
      <BringYourIdeasSection />
      <FeatureShowcaseContainer />

      {/* <div className="" /> */}
      {/* <div>
        <FeatureSlider />
      </div> */}
    </main>
  );
}
