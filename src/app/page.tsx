import BottomBarContainer from "@/components/chat-input/bottom-bar-container";
import HeaderQuickSelectCard from "@/components/headers/quickselect-card-button";
import HeroHeader from "@/components/headers/hero-header";

export default async function HomePage() {
  return (
    <main className="flex flex-col relative h-full w-full">
      {/* Background blur effect that stays at bottom nearby chat */}
      <div className="absolute bg-[#51576180] w-[200px] h-[100px] -bottom-5 right-[20%] z-10 aspect-video flex  blur-3xl flex-1" />

      {/* Centered main content with Help cards */}
      <div className="flex-1 flex items-center justify-center flex-col">
        <HeroHeader />
        <HeaderQuickSelectCard />
      </div>

      {/* Bottom input section */}
      <BottomBarContainer />
    </main>
  );
}
