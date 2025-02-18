"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setSettingsPopoverChange } from "@/lib/redux/features/settings";
import { cn } from "@/lib/utils";
import { ChevronUp } from "lucide-react";
import StyleCard from "./settings-card-container";

export default function SettingsBarPopOver() {
  const isSettingsPopoverOpen = useAppSelector(
    (state) => state.settings.isPopoverOpen
  );
  const dispatch = useAppDispatch();
  return (
    <div>
      <Popover
        onOpenChange={(value) => dispatch(setSettingsPopoverChange(value))}
        open={isSettingsPopoverOpen}
      >
        <PopoverTrigger asChild>
          <button className="flex items-center justify-center ml-1">
            <ChevronUp
              className={cn(
                "-rotate-180 transition-transform duration-300 ease-in-out",
                {
                  "rotate-0 rotate": isSettingsPopoverOpen,
                }
              )}
            />
          </button>
        </PopoverTrigger>
        <PopoverContent
          className="bg-buu min-w-[330px] aspect-video  w-full backdrop-blur-2xl rounded-2xl shadow-buu-secondary"
          sideOffset={18}
          alignOffset={-12}
          align="end"
          side="top"
        >
          <StyleCard />
        </PopoverContent>
      </Popover>
    </div>
  );
}
