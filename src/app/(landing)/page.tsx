"use client";
import ClickToActionContainer from "@/components/(home)/CTA/click-to-action-container";
import FooterContainer from "@/components/(home)/footer/footer-container";
import FrequentlyAskedContainer from "@/components/(home)/frequently-asked/frequently-asked-container";
import BringYourIdeasSection from "@/components/(home)/hero/hero-section-content";
import HowToContainer from "@/components/(home)/how-to-section/how-to-container";
import HeroLoadingWrapper from "@/components/(home)/loading/loading-hero-wrapper";
import HomeNavigationBar from "@/components/(home)/navigation/home-navigation-bar";
import TopNavigationBar from "@/components/(home)/navigation/top-navigation-bar";
import TestimonialsContainer from "@/components/(home)/testimonials/testimonials-container";
import OverlayColor from "./overlay";
export default function HomePage() {
  return (
    <main className="relative max-w-screen overflow-hidden smooth-scroll ">
      <div className="w-full  relative ">
        <HeroLoadingWrapper>
          <>
            <TopNavigationBar />
            <HomeNavigationBar />
          </>
        </HeroLoadingWrapper>
        <BringYourIdeasSection />
      </div>
      <section id="how-it-works" className="w-full h-full">
        <HowToContainer />
      </section>
      <div className="relative w-full h-full ">
        <section id="reviews" className="h-full w-full relative trigger-color">
          <OverlayColor />
          <TestimonialsContainer />
        </section>
        <section id="gallery" className="h-full w-full  relative">
          <ClickToActionContainer />
        </section>
      </div>
      <section id="faq" className="w-full h-full">
        <FrequentlyAskedContainer />
      </section>
      <footer className="w-full h-full relative">
        <FooterContainer />
      </footer>
    </main>
  );
}
