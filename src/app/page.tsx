import BottomBarContainer from "@/components/chat-input/bottom-bar-container";
import HeroHeader from "@/components/headers/boards/hero-header";
import HeaderQuickSelectCard from "@/components/headers/home/quickselect-card-button";

export default function HomePage() {
  return (
    <main className="flex flex-col relative h-full w-full   ">
      {/* Background blur effect that stays at bottom nearby chat */}
      <div className="w-[200px] h-[100px] bg-overlay-secondary bg-[#69CCD5]  rounded-full right-[20%] absolute bottom-[-140px] -z-10 blur-[100px]  rotate-[-10deg]" />


      {/* Centered main content with Help cards */}
      <div className="flex-1 flex items-center justify-center mr-[0.15vw] flex-col">
        <HeroHeader />
        <HeaderQuickSelectCard />
      </div>

      {/* Bottom input section */}
      <div className="mr-[0.15vw]">
        <BottomBarContainer />
      </div>
    </main>
  );
}
