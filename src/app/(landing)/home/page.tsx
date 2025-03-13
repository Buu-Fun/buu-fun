"use client";
import { logo } from "@/assets/icons";
import ClickToActionContainer from "@/components/(home)/CTA/click-to-action-container";
import TryNow from "@/components/(home)/elements/try-now";
import FeatureShowcaseContainer from "@/components/(home)/feature/feature-responsive";
import FrequentlyAskedContainer from "@/components/(home)/frequently-asked/frequently-asked-container";
import BringYourIdeasSection from "@/components/(home)/hero/hero-section-content";
import HowToContainer from "@/components/(home)/how-to-section/how-to-container";
import HeroLoadingWrapper from "@/components/(home)/loading/loading-hero-wrapper";
import TestimonialsContainer from "@/components/(home)/testimonials/testimonials-container";
import Bounded from "@/components/ui/Bounded";
import Image from "next/image";
export default function HomePage() {
  return (
    <main className="relative max-w-screen ">
      <div className="w-full overflow-hidden relative">
        <HeroLoadingWrapper>
          <nav className="w-full fixed top-0 z-[5000]  ">
            <Bounded className="max-w-screen-2xl flex items-center justify-between px-2 py-4  w-full ">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 overflow-hidden rounded-md">
                  <Image
                    className="w-full h-full "
                    src={logo}
                    width={250}
                    height={250}
                    alt="Bunn.fun logo"
                  />
                </div>
                <h4 className="tracking-tighter font-semibold">BUU.FUN</h4>
              </div>
              <div>
                <TryNow />
              </div>
            </Bounded>
          </nav>
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
