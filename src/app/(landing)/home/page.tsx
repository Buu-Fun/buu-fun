"use client";
import ClickToActionContainer from "@/components/(home)/CTA/click-to-action-container";
import FeatureShowcaseContainer from "@/components/(home)/feature/feature-responsive";
import FrequentlyAskedContainer from "@/components/(home)/frequently-asked/frequently-asked-container";
import BringYourIdeasSection from "@/components/(home)/hero/hero-section-content";
import HowToContainer from "@/components/(home)/how-to-section/how-to-container";
import HeroLoadingWrapper from "@/components/(home)/loading/loading-hero-wrapper";
import TopNavigationBar from "@/components/(home)/navigation/top-navigation-bar";
import TestimonialsContainer from "@/components/(home)/testimonials/testimonials-container";
export default function HomePage() {
  return (
    <main className="relative max-w-screen scroll-smooth">
      <div className="w-full overflow-hidden relative scroll-smooth">
        <HeroLoadingWrapper>
          <TopNavigationBar />
        </HeroLoadingWrapper>
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
        <ClickToActionContainer />
      </section>
      <section className="w-full h-full">
        <FrequentlyAskedContainer />
      </section>
    </main>
  );
}
