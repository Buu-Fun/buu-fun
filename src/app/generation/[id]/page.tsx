import BottomBarContainer from "@/components/chat-input/bottom-bar-container";
import ThreeDGenerationWrapper from "@/components/generation/three-d-generation-wrapper";

export type TNewChatPage = {
  params: Promise<{ id: string }>;
};

export default async function NewChatPage({ params }: TNewChatPage) {
  console.log(await params);
  const id = (await params).id;
  return (
    <main className="flex flex-col relative h-full w-full   ">
      {/* Background blur effect that stays at bottom nearby chat */}

      {/* Centered main content with Help cards */}
      <div className="flex-1 flex items-center justify-center mr-[0.15vw] flex-col">
        <ThreeDGenerationWrapper id={id} />
      </div>

      {/* Bottom input section */}
      <div className="mr-[0.15vw]">
        <BottomBarContainer
          action={{
            chat_id: "hello-world",
          }}
        />
      </div>
    </main>
  );
}
