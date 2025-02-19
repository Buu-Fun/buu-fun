import ArrowUp from "@/assets/icons/arrow-up";
import ImageIcon from "@/assets/icons/ImageIcon";
import ChatTextArea from "./chat-text-area";
import SettingsBar from "../settings/settings-bar";
// import { ArrowUp } from "lucide-react";
export default function BottomBarContainer() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <SettingsBar />
      <div className=" p-4 border mb-12 rounded-[20px] shadow-buu-inner bg-buu">
        <div className="relative flex-col gap-1 flex items-start w-full">
          <ChatTextArea />
          <div className="w-full  flex justify-between">
            <ImageIcon />
            <button className="bg-[#737984] rounded-full border p-0.5">
              <ArrowUp className="   w-5 h-5 " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
