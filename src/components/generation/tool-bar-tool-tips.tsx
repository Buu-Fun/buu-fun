import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ToolTips } from "./handle-tool-calls";
import { cn } from "@/lib/utils";
export default function ToolBarToolTips() {
  return (
    <TooltipProvider>
      {ToolTips.map((item, index) => (
        <Tooltip key={`tool-tip-contents-${item.content.trim()}-${index}`}>
          <TooltipTrigger className="group bg-buu-button  hover:bg-white hover:shadow-none  group shadow-buu-button min-w-[30px]  rounded-md flex items-center justify-center p-1.5">
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
