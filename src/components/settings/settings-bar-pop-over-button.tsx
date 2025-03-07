"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setSettingsPopoverChange } from "@/lib/redux/features/settings";
import { cn } from "@/lib/utils";
import { useClickOutside } from "@mantine/hooks";
import { ChevronUp } from "lucide-react";
import SettingsCardContainer from "./settings-card-container";

export default function SettingsBarPopOver() {
  const isSettingsPopoverOpen = useAppSelector((state) => state.settings);

  const dispatch = useAppDispatch();

  const ref = useClickOutside(() => {
    if (isSettingsPopoverOpen.isStyleBoxOpen) {
      return;
    }
    dispatch(setSettingsPopoverChange(false));
  });

  return (
    <div className="">
      <Popover
        onOpenChange={(value) => dispatch(setSettingsPopoverChange(value))}
        open={isSettingsPopoverOpen.isPopoverOpen}
      >
        <PopoverTrigger asChild className="">
          <button  className="flex items-center justify-center ml-1 ">
            <ChevronUp
              className={cn(
                "-rotate-180 transition-transform duration-300 ease-in-out",
                {
                  "rotate-0 rotate": isSettingsPopoverOpen.isPopoverOpen,
                },
              )}
            />
          </button>
        </PopoverTrigger>
        <PopoverContent
          ref={ref}
          // min-w-[330px] aspect-video
          className="bg-buu   w-full backdrop-blur-2xl rounded-2xl shadow-buu-secondary"
          sideOffset={18}
          alignOffset={-12}
          align="end"
          side="top"
        >
          <SettingsCardContainer />
        </PopoverContent>
      </Popover>
    </div>
  );
}
