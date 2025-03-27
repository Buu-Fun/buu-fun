import { useAppSelector } from "@/hooks/redux";
import { getBoards } from "@/lib/redux/selectors/board";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";

import React from "react";
const ModelViewer = dynamic(() => import("../generation/model-viewer"), {
  ssr: false,
  loading: () => null, // Use null instead of undefined
});

export default function BoardBackgroundModel() {
  const boards = useAppSelector((state) => getBoards(state));
  const index = useAppSelector((state) => state.boards.currentIndex);
  return (
    <AnimatePresence initial={false} mode="popLayout">
      <div className="h-full w-full  flex items-center justify-center absolute top-0 left-0">
        {boards.board.length ? (
          <motion.div
            initial={{
              opacity: 0.01,
            }}
            animate={{
              opacity: 0.1,
            }}
            exit={{
              opacity: 0.01,
            }}
            key={index}
            className=" max-w-3xl mx-auto  max-h-[80vh] flex items-center justify-center  top-0 left-0 w-full h-full backdrop-blur-3xl blur-[100px] rotate-90   opacity-10 pointer-events-none"
          >
            <div className="flex  items-center w-full h-full  relative justify-between">
              <ModelViewer
                rotation-per-second="0deg"
                src={boards.board[index - 1]?.modelUrl ?? ""}
              />
            </div>
          </motion.div>
        ) : null}
      </div>
    </AnimatePresence>
  );
}
