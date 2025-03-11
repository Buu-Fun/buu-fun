"use client";

import FeatureShowcaseContainer from "@/components/(home)/feature/feature-responsive";
import BringYourIdeasSection from "@/components/(home)/hero/hero-section-content";
import HowToContainer from "@/components/(home)/how-to-section/how-to-container";
import HeroLoadingWrapper from "@/components/(home)/loading/loading-hero-wrapper";
export default function HomePage() {
  return (
    <main className="relative max-w-screen ">
      <div className="w-full overflow-hidden relative">
        <HeroLoadingWrapper />
        <BringYourIdeasSection />
        <FeatureShowcaseContainer />
      </div>
      <div className="w-full h-full">
        <HowToContainer />
      </div>
      {/* <div className="h-screen w-full flex items-center justify-center">
        <div className="max-h-[584px] flex h-full w-full  max-w-[300px]">
          <MobileMockCard />
        </div>
      </div> */}
    </main>
  );
}
