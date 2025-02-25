"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setDraggedImage, setPlacedImage } from "@/lib/redux/features/chat";
import {
    DndContext,
    DragEndEvent,
    DragOverlay
} from "@dnd-kit/core";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ReactNode, useState } from "react";

type TDndKitProvider = {
  children: ReactNode;
};

export function DndKitProvider({ children }: TDndKitProvider) {
  const dispatch = useAppDispatch();
  const draggingImage = useAppSelector((state) => state.chat.draggingImage);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    // Check if we dropped on our target
    if (
      over &&
      over.id === "image-drop-target" &&
      active.data.current?.type === "modifier"
    ) {
      // Get the image URL from the dragged item
      const imageUrl = active.data.current?.imageUrl;

      // Set the placed image in Redux
      dispatch(setPlacedImage(imageUrl));
      // Keep the dragged image state to prevent flowing back
      setTimeout(() => {
        dispatch(setDraggedImage(undefined));
        setIsDragging(false);
      }, 50);
    } else {
      // If not dropped on target, clear the dragging state
      dispatch(setDraggedImage(undefined));
      setIsDragging(false);
    }
  };

  return (
    <div className="w-full h-full">
      <DndContext
        onDragStart={(event) => {
          if (event.active.data.current?.type === "modifier") {
            // Only set dragging image on drag start (not on click)
            dispatch(setDraggedImage(event.active.data.current.imageUrl));
            setIsDragging(true);
          }
        }}
        onDragEnd={handleDragEnd}
        onDragCancel={() => {
          // Reset dragging state on cancel
          dispatch(setDraggedImage(undefined));
          setIsDragging(false);
        }}
        // collisionDetection={closestCorners}
      >
        {children}

        <DragOverlay>
          <AnimatePresence>
            {draggingImage && isDragging ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-md"
                style={{ width: "77px", height: "106px" }} // Increase size of dragged image
              >
                <Image
                  src={draggingImage}
                  alt="dragged"
                  width={120}
                  height={120}
                  className="w-full h-full object-cover rounded-md"
                />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </DragOverlay>
      </DndContext>
    </div>
  );
}
