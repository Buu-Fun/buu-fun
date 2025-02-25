import BottomBarContainer from "@/components/chat-input/bottom-bar-container";
import ThreadsWrapper from "@/components/generation/threads";
import { DndKitProvider } from "@/providers/dnd-kit-provider";

export type TNewChatPage = {
  params: Promise<{ id: string }>;
};

export default async function NewChatPage({ params }: TNewChatPage) {
  const param = await params;
  const threadId = param.id;
  return (
    <DndKitProvider>
      <main className="flex flex-col relative h-full w-full   max-h-[calc(100vh-100px)]  overflow-hidden">
        {/* Background blur effect that stays at bottom nearby chat */}

        {/* Centered main content with Help cards */}
        <ThreadsWrapper threadId={threadId} />

        {/* Bottom input section */}
        <div className="mr-[0.15vw]">
          <BottomBarContainer
            action={{
              threadId: threadId,
            }}
          />
        </div>
      </main>
    </DndKitProvider>
  );
}
