import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { HistoryIcon } from "lucide-react";
import HistoryNavigation from "./history-navigation";

export default function RecentChats() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex  items-center gap-1 justify-center">
          <div>
            <Button
              variant={"outline"}
              className="px-3 flex items-center hover:bg-buu-button justify-center gap-1 text-base h-[40px] group  py-2 bg-buu shadow-buu-secondary border-buu rounded-[10px]"
            >
              <HistoryIcon className="w-4 h-4  " />
              History{" "}
            </Button>
          </div>
        </div>
      </SheetTrigger>
      <SheetContent
        className="bg-buu shadow-buu-pill rounded-r-3xl"
        side={"left"}
      >
        <SheetHeader>
          <SheetTitle>History</SheetTitle>
          <SheetDescription>Your recent chat histories</SheetDescription>
        </SheetHeader>
        <HistoryNavigation />
      </SheetContent>
    </Sheet>
  );
}
