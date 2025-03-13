"use client";
import ClickToActionContainer from "@/components/(home)/CTA/click-to-action-container";
import FeatureShowcaseContainer from "@/components/(home)/feature/feature-responsive";
import BringYourIdeasSection from "@/components/(home)/hero/hero-section-content";
import HowToContainer from "@/components/(home)/how-to-section/how-to-container";
import HeroLoadingWrapper from "@/components/(home)/loading/loading-hero-wrapper";
import TestimonialsContainer from "@/components/(home)/testimonials/testimonials-container";
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
      <section className="h-full w-full relative">
        <TestimonialsContainer />
      </section>
      <section className="h-full w-full  relative">
        <ClickToActionContainer/>
      </section>
    </main>
  );
}
