"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setPlacedImage } from "@/lib/redux/features/chat";
import { cn } from "@/lib/utils";
import { useDroppable } from "@dnd-kit/core";
import { AnimatePresence, motion } from "framer-motion";
import { PlusIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function ImageDragAndDrop() {
  // Get the placed image from Redux store
  const placedImage = useAppSelector((state) => state.chat.placedImage);
  const isImageDragging = useAppSelector((state) => state.chat.draggingImage);
  const dispatch = useAppDispatch();
  const hasAnimatedRef = useRef(false);

  // Make this component a drop target
  const { setNodeRef, isOver } = useDroppable({
    id: "image-drop-target",
  });

  // Ensure the image stays in place when successfully dropped
  useEffect(() => {
    if (placedImage && !hasAnimatedRef.current) {
      hasAnimatedRef.current = true;
    }
  }, [placedImage]);

  return (
    <div className="absolute max-w-[77px] w-full h-[110px] -left-[100px] top-3">
      <AnimatePresence>
        {(isImageDragging || placedImage) && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full h-full"
          >
            <AnimatePresence>
              {!placedImage && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ delay: 0.1, duration: 0.2 }}
                  className="bg-white absolute -top-1 z-10 rounded-full w-5 h-5 flex items-center justify-center"
                >
                  <PlusIcon className="text-black w-4 h-4" />
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              ref={setNodeRef}
              animate={{
                borderColor: isOver ? "rgb(59, 130, 246)" : "white",
                rotate: isOver ? -5 : -12,
                scale: isOver ? 1.05 : 1,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className={cn(
                "max-w-[77px] max-h-[106px]  overflow-hidden dashed-border  rounded-md w-full h-full absolute top-0 left-0"
                // { "border-2": isOver }
              )}
            >
              <AnimatePresence>
                {placedImage && (
                  <motion.div
                    onClick={() => {
                      dispatch(setPlacedImage(undefined));
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-full cursor-pointer group relative h-full"
                  >
                    <Image
                      src={placedImage}
                      width={100}
                      height={100}
                      alt="Dragged image"
                      className="w-full transition-opacity duration-300 ease-in-out group-hover:opacity-80  h-full object-cover"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
