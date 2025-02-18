"use client";
import React from "react";
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronUp } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  setSettingsPopoverChange,
  toggleCreateTodoDrawerOpen,
} from "@/lib/redux/features/settings";
import { cn } from "@/lib/utils";
import SettingsBarSelectedDisplay from "./settings-bar-selected-display";
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
          className="bg-buu min-w-[400px] w-full backdrop-blur-2xl rounded-2xl shadow-buu-secondary"
          sideOffset={18}
          alignOffset={-12}
          align="end"
          side="top"
        >
          {/* <div className="border rounded-[16px] max-w-max py-2 px-4 bg-white text-black">
            <SettingsBarSelectedDisplay />
          </div> */}
          <StyleCard />
        </PopoverContent>
      </Popover>
    </div>
  );
}
