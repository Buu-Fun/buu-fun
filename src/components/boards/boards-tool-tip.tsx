import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import ToolTipDownload from "../generation/tool-tip-download";
import { useAppSelector } from "@/hooks/redux";
import { getBoards } from "@/lib/redux/selectors/board";
import { BoardToolTips } from "../generation/handle-tool-calls";
import BoardToolTipShare from "./tool-tip-share";
import BoardToolTipDelete from "./board-tool-tip-delete";
import BoardToolTipUpdateVisibility from "./board-tool-tip-update-visibility";

const buttonVariants = {
  initial: { y: 0, scale: 1 },
  // hover: { y: -2, scale: 1.05 },
  tap: { y: 0, scale: 0.95 },
  drag: { scale: 1.1, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)" },
};

export default function BoardsToolTip({
  currentUser,
}: {
  currentUser?: boolean;
}) {
  const boards = useAppSelector((state) => getBoards(state));

  const current = useAppSelector((state) => state.boards.currentIndex);

  return (
    <div className=" flex items-center justify-center gap-2 relative mt-4">
      <TooltipProvider>
        {BoardToolTips.map((item, index) => {
          if (item.type === "DOWNLOAD") {
            return (
              <ToolTipDownload
                key={`tool-tip-contents-${item.content.trim()}-${index}`}
                modelUrl={boards?.board[current - 1]?.modelUrl}
                index={index}
                length={BoardToolTips.length}
                toolTipData={item}
              />
            );
          }

          if (item.type === "SHARE") {
            return (
              <BoardToolTipShare
                key={`tool-tip-contents-${item.content.trim()}-${index}`}
                modelUrl={boards?.board[current - 1]?.modelUrl}
                boardId={boards?.boardId ?? ""}
                index={index}
                length={BoardToolTips.length}
                toolTipData={item}
              />
            );
          }

          if (item.type === "DELETE" && currentUser) {
            return (
              <BoardToolTipDelete
                boardId={boards?.boardId ?? ""}
                index={index}
                length={BoardToolTips.length}
                toolTipData={item}
              />
            );
          }
          
          if (item.type === "UPDATE" && currentUser) {
            return (
              <BoardToolTipUpdateVisibility
                boardId={boards?.boardId ?? ""}
                index={index}
                length={BoardToolTips.length}
                toolTipData={item}
              />
            );
          }
        })}
      </TooltipProvider>{" "}
    </div>
  );
}
