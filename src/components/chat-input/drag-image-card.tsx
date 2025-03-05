import React, { useState, useRef, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setInputFile } from "@/lib/redux/features/chat";

interface ImageData {
  file: File;
  url: string;
  name: string;
  size: number;
  type: string;
}

interface InteractiveDropzoneProps {
  onImageSelected?: (image: ImageData) => void;
  className?: string;
}

export default function InteractiveDropzone({
  className = "",
  onImageSelected,
}: InteractiveDropzoneProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const image = useAppSelector((state) => state.chat.inputFile);
  
  const dispatch = useAppDispatch();
  
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        const imageData = {
          file,
          url: imageUrl,
          name: file.name,
          size: file.size,
          type: file.type,
        };

        dispatch(setInputFile(imageData));
        onImageSelected?.(imageData);
      }
      setIsDraggingOver(false);
    },
    onDragEnter: () => {
      // this condition is not working
      if (image) return;
      setIsDraggingOver(true);
    },
    onDragLeave: () => setIsDraggingOver(false),
  });

  useEffect(() => {
    const handleWindowDragOver = (e: DragEvent) => {
      e.preventDefault();
      // this condition is not working
      if (image) {
        //this is not triggering or working.
        return;
      }
      console.log("There is Image But its still showing image again!!");

      // Calculate rotation based on drag position relative to window
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // Normalize coordinates to range [-1, 1]
      const normalizedX = (e.clientX / windowWidth - 0.5) * 20;
      const normalizedY = (e.clientY / windowHeight - 0.5) * 20;

      // Create a magnetic-like rotation effect
      const maxRotation = 10; // Maximum rotation angle
      const rotationFactor = 0.5; // Adjust for sensitivity
      setRotation({
        x: normalizedY * maxRotation * rotationFactor, // Invert Y for more natural movement
        y: normalizedX * maxRotation * rotationFactor,
      });

      // Check if dragged item is an image
      const items = e.dataTransfer?.items;
      if (
        items &&
        Array.from(items).some(
          (item) => item.kind === "file" && item.type.startsWith("image/")
        )
      ) {
        setIsDraggingOver(true);
      }
    };

    const handleWindowDrop = () => {
      setIsDraggingOver(false);
      // Reset rotation
      setRotation({ x: 0, y: 0 });
    };

    window.addEventListener("dragover", handleWindowDragOver);
    window.addEventListener("drop", handleWindowDrop);

    return () => {
      window.removeEventListener("dragover", handleWindowDragOver);
      window.removeEventListener("drop", handleWindowDrop);
    };
  }, [image]);

  const handleRemoveImage = () => {
    if (image) {
      // Revoke the object URL to free up memory
      URL.revokeObjectURL(image.url);
      dispatch(setInputFile(null));
    }
  };

  const dropzoneVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <AnimatePresence>
      {isDraggingOver && (
        <div
          style={{
            transformStyle: "preserve-3d",
            rotate: `${rotation.x}deg`,
          }}
          className="absolute -top-[70%]"
          {...getRootProps()}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropzoneVariants}
            className={cn(" z-50 pointer-events-none", className)}
          >
            <input {...getInputProps()} />
            <div
              className={`
              w-[77px] h-[106px] 
              border-2 border-dashed 
              border-blue-500 
              rounded-lg 
              bg-black/80 
              backdrop-blur-sm
              flex items-center justify-center
            `}
            >
              <p className="text-xs text-gray-500 text-center">Drop Image</p>
            </div>
          </motion.div>
        </div>
      )}

      {image && (
        <div
          className="
          absolute -left-[20px] -top-[70%]
          transform -rotate-12 
border-buu border rounded-xl z-50 pointer-events-none
          w-[77px] h-[106px]
        "
        >
          <div className="relative w-full h-full group">
            <Image
              src={image.url}
              alt="Uploaded image"
              fill
              className="object-cover rounded-lg"
            />
            <button
              onClick={handleRemoveImage}
              className=" pointer-events-auto
                absolute top-1 right-1 
                bg-red-500 text-white 
                rounded-full animate-pulse
                w-5 h-5 
                flex items-center justify-center
                text-xs
                transition-opacity
                z-50
              "
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
