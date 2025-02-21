import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ToolTips, TToolTipEvents } from "./handle-tool-calls";
import { cn, getRandomInteger } from "@/lib/utils";
import { useAppDispatch } from "@/hooks/redux";
import { updateTryAgainMessage } from "@/lib/redux/features/chat";
import { randomImages } from "./random-image";
export default function ToolBarToolTips() {
  const dispatch = useAppDispatch();
  function handleEvent(events: TToolTipEvents) {
    const index = getRandomInteger(randomImages.length);
    const image = randomImages[index]!;

    switch (events) {
      case "TRY_AGAIN": {
        dispatch(updateTryAgainMessage({ message: { ...image } }));
        break;
      }
      default: {
        console.log("NOT FOUND");
      }
    }
  }
  return (
    <TooltipProvider>
      {ToolTips.map((item, index) => (
        <Tooltip key={`tool-tip-contents-${item.content.trim()}-${index}`}>
          <TooltipTrigger
            onClick={() => {
              handleEvent(item.type);
            }}
            className="group bg-buu-button  hover:bg-white hover:shadow-none  group shadow-buu-button min-w-[30px]  rounded-md flex items-center justify-center p-1.5"
          >
            <div className="w-full h-full group-hover:text-black group-hover:fill-black">
              {item.Icon}
            </div>
          </TooltipTrigger>
          <TooltipContent
            className={cn("bg-buu-button text-primary", {
              "ml-2": index === 0,
              "mr-2": index === ToolTips.length - 1,
            })}
          >
            <p>{item.content}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </TooltipProvider>
  );
}
