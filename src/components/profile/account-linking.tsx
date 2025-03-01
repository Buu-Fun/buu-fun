import TelegramIcon from "@/assets/icons/telegram-icon";
import TwitterIcon from "@/assets/icons/twitter-icon";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import Pill from "../elements/pill";

export default function AccountLinking() {
  return (
    <div className="max-w-md w-full mt-4 flex flex-col gap-3 px-2">
      <div className="flex items-center justify-between pl-3 pr-5 py-2  gap-2 w-full border-2 rounded-xl ">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 justify-center">
            <div className="saturate-50 border-shadow-account-linking px-2 py-2 flex items-center justify-center w-10 h-10">
              <TwitterIcon />
            </div>
            <h4 className="text-lg">Twitter (X)</h4>
            <Pill className=" flex items-center justify-center ">
              <span className="text-[10px]">Coming soon</span>
            </Pill>
          </div>
        </div>
        <div>
          <Button size={"sm"} className="rounded-full w-6 h-6">
            <Plus size={12} strokeWidth={3} className="text-icon" />
          </Button>
        </div>
      </div>
      {/* Telegram Linking */}
      <div className="flex items-center  justify-between pl-3 pr-5 py-2  gap-2 w-full border-2 rounded-xl ">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 justify-center">
            <div className="saturate-50 border-shadow-account-linking px-2 py-2 flex items-center justify-center w-10 h-10">
              <TelegramIcon />
            </div>
            <h4 className="text-lg text-muted-foreground">Telegram</h4>

            <Pill className=" flex items-center justify-center ">
              <span className="text-[10px]">Coming soon</span>
            </Pill>
          </div>
        </div>
        <div>
          <Button size={"sm"} className="rounded-full w-6 h-6">
            <Plus size={12} strokeWidth={3} className="text-icon" />
          </Button>
        </div>
      </div>
    </div>
  );
}
