import HeroHeader from "@/components/headers/boards/hero-header";
import BoardsAddButton from "./boards-add-button";
import BoardCards, {
  SingleColumnImage,
  ThreeColumnImage,
  TwoColumnImage,
} from "./boards-card";
export default function BoardsPage() {
  return (
    <main className="flex flex-col items-center justify-center  relative h-full w-full   ">
      <div className="flex-1 flex items-center justify-center mr-[0.25vw] flex-col">
        <HeroHeader
          title="Collect ideas on boards"
          heroDescription={
            <div className="flex  items-center justify-center gap-3">
              <p className="text-5xl font-bold my-2 hero-gradient-text ">
                3 Boards
              </p>
              <BoardsAddButton />
            </div>
          }
        />
        {/* <HeaderQuickSelectCard /> */}
        <div className="flex gap-3 items-center justify-center mt-6">
          <BoardCards idea={1} images={SingleColumnImage} title="3D Cube" />
          <BoardCards idea={2} images={TwoColumnImage} title="Fantasy Manga" />
          <BoardCards idea={3} images={ThreeColumnImage} title="Car in fog" />
        </div>
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
