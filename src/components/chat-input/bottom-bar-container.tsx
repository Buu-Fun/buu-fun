import ImageIcon from "@/assets/icons/ImageIcon";
import SettingsBar from "../settings/settings-bar";
import ButtonActionCreate from "./button-action-create";
import ButtonActionExisting from "./button-action-existing";
import ChatTextArea from "./chat-text-area";
type TBottomBarContainer = {
  action: "new_chat" | { threadId: string };
};
export default function BottomBarContainer({ action }: TBottomBarContainer) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <SettingsBar />
      <div className=" p-4 border mb-12 rounded-[20px] shadow-buu-inner bg-buu">
        <div className="relative flex-col gap-1 flex items-start w-full">
          <ChatTextArea />
          <div className="w-full  flex justify-between">
            <ImageIcon />
            {action === "new_chat" ? (
              <ButtonActionCreate />
            ) : (
              <ButtonActionExisting threadId={action.threadId} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
