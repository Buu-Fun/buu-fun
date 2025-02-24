import BottomBarContainer from "@/components/chat-input/bottom-bar-container";
import ThreadsWrapper from "@/components/generation/threads";
import ThreeDGenerationWrapper from "@/components/generation/three-d-generation-wrapper";

export type TNewChatPage = {
  params: Promise<{ id: string }>;
};

export default async function NewChatPage({ params }: TNewChatPage) {
  console.log(await params);
  const id = (await params).id;

  return (
    <main className="flex flex-col relative h-full w-full   max-h-[calc(100vh-100px)]  overflow-hidden">
      {/* Background blur effect that stays at bottom nearby chat */}

      {/* Centered main content with Help cards */}
      <ThreadsWrapper threadId={id} />

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
