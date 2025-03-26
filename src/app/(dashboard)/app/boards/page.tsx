import HeroHeader from "@/components/headers/boards/hero-header";
import BoardsAddButton from "../../../../components/boards/boards-add-button";
import BoardCards, {
  SingleColumnImage,
  ThreeColumnImage,
  TwoColumnImage,
} from "../../../../components/boards/boards-card";
import BoardsCardWrapper from "@/components/boards/boards-cards-wrapper";
import BoardsButtonWrapper from "@/components/boards/boards-button-wrapper";
export default function BoardsPage() {
  return (
    <main className="flex flex-col items-center justify-center  relative h-full w-full   ">
      <div className="flex-1 flex items-center justify-center mr-[0.25vw] flex-col">
        <HeroHeader
          title="Collect ideas on boards"
          heroDescription={<BoardsButtonWrapper/>}
        />
        {/* <HeaderQuickSelectCard /> */}
        <BoardsCardWrapper />
      </div>

      {/* Bottom input section */}
      <div className="mr-[0.15vw]">
        {/* <div>
          <h1>hello</h1>
        </div> */}
        {/* <BottomBarContainer /> */}
      </div>
    </main>
  );
}
