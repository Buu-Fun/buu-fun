import HeroHeader from "@/components/headers/boards/hero-header";
import React from "react";
import BoardsAddButton from "./boards-add-button";

export default function BoardsPage() {
  return (
    <main className="flex flex-col relative h-full w-full   ">
      {/* Background blur effect that stays at bottom nearby chat */}
      <div className="absolute bg-[#51576180] w-[200px] h-[100px] -bottom-5 right-[20%] z-10 aspect-video flex  blur-3xl flex-1" />

      {/* Centered main content with Help cards */}
      <div className="flex-1 flex items-center justify-center mr-[0.15vw] flex-col">
        <HeroHeader
          title="Collect ideas on boards"
          heroDescription={
            <div className="flex items-center justify-center gap-3">
              <p className="text-5xl font-bold my-2 hero-gradient-text ">
                3 Boards
              </p>
              <BoardsAddButton />
            </div>
          }
        />
        {/* <HeaderQuickSelectCard /> */}
      </div>

      {/* Bottom input section */}
      <div className="mr-[0.15vw]">
        <div>
          <h1>hello</h1>
        </div>
        {/* <BottomBarContainer /> */}
      </div>
    </main>
  );
}
