import { useDraggable } from "@dnd-kit/core";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { TToolTipsData } from "./handle-tool-calls";

import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
type TToolTipModify = {
  subThreadId: string;
  imageUrl: string;
  toolTipData: TToolTipsData[number];
  index: number;
  length: number;
};
export default function ToolTipModify({
  imageUrl,
  subThreadId,
  toolTipData,
  index,
  length,
}: TToolTipModify) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const modelContainer = ref.current;
    if (!modelContainer) return;
    const stopPropagation = (e: Event) => {
      e.stopPropagation();
    };
    modelContainer.addEventListener("mousedown", stopPropagation);
    modelContainer.addEventListener("touchcancel", stopPropagation);
    modelContainer.addEventListener("touchend", stopPropagation);
    modelContainer.addEventListener("touchmove", stopPropagation);
    modelContainer.addEventListener("wheel", stopPropagation);
    modelContainer.addEventListener("touchstart", stopPropagation);
    return () => {
      if (!modelContainer) return;
      modelContainer.removeEventListener("mousedown", stopPropagation);
      modelContainer.removeEventListener("touchcancel", stopPropagation);
      modelContainer.removeEventListener("touchend", stopPropagation);
      modelContainer.removeEventListener("touchmove", stopPropagation);
      modelContainer.removeEventListener("wheel", stopPropagation);
      modelContainer.removeEventListener("touchstart", stopPropagation);
    };
  }, [ref]);
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: `modify-button-${subThreadId}`,
    data: {
      type: "modifier",
      imageUrl: imageUrl,
    },
  });

  const buttonVariants = {
    initial: { y: 0, scale: 1 },
    hover: { y: -2, scale: 1.05 },
    tap: { y: 0, scale: 0.95 },
    drag: { scale: 1.1, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)" },
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div ref={ref}>
          <motion.div
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            // animate={isDragging ? "drag" : "initial"}
            variants={buttonVariants}
            className={cn(
              "group bg-buu-button pointer-events-auto hover:bg-white hover:shadow-none group shadow-buu-button min-w-[30px] rounded-md flex items-center justify-center p-1.5",
              { "opacity-50": isDragging },
            )}
            style={{ touchAction: "none" }}
          >
            <motion.div
              className="w-full h-full group-hover:text-black group-hover:fill-black"
              transition={{ duration: 0.2 }}
            >
              {toolTipData.Icon}
            </motion.div>
          </motion.div>
        </div>
      </TooltipTrigger>
      <TooltipContent
        className={cn("bg-buu-button text-primary", {
          "ml-2": index === 0,
          "mr-2": index === length - 1,
        })}
      >
        <p>{toolTipData.content}</p>
      </TooltipContent>
    </Tooltip>
  );
}
