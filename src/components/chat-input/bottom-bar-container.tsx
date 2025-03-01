import SettingsBar from "../settings/settings-bar";
import ChatForm from "./chat-form";
import ImageDragAndDrop from "./image-drag-n-dropper";
export type TBottomBarContainer = {
  action: "new_chat" | { threadId: string };
};
export default function BottomBarContainer({ action }: TBottomBarContainer) {
  return (
    <div className="w-full px-1 py-1  max-w-2xl mx-auto ">
      <SettingsBar />
      <div className="p-4  mb-2 lg:mb-12 rounded-[20px]  shadow-buu-inner bg-buu">
        <ChatForm action={action} />
        <ImageDragAndDrop />
      </div>
    </div>
  );
}
