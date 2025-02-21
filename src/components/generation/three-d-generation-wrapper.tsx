"use client";
import Generate3DCard from "@/components/generation/generate-3d-card";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { updateChatMessageImage } from "@/lib/redux/features/chat";
import { getRandomInteger } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { randomImages } from "./random-image";
import GenerationCarousalWrapper from "./generation-carousal-wrapper";
import CurvedEmblaCarousel from "./carousal";

type TThreeDGenerationWrapper = {
  id: string;
};

export default function ThreeDGenerationWrapper({
  id,
}: TThreeDGenerationWrapper) {
  const selected = useAppSelector((state) => state.chat.chat);
  console.log(selected);
  const timerRef = useRef<NodeJS.Timeout>(null);
  const dispatch = useAppDispatch();
  const [isGenerating, setIsGenerating] = useState(true);
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      const index = getRandomInteger(randomImages.length);
      const image = randomImages[index]!;

      dispatch(updateChatMessageImage(image));
      setIsGenerating(false);
    }, 6000);
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [id, dispatch]);

  //   if (!selected) {
  //     return <>no chat history found</>;
  //   }
  const ZERO = 0;
  return (
    
    <div className="flex items-center  justify-center   flex-col gap-4">
      <div className="bg-buu  relative shadow-buu-pill border-buu rounded-full   px-1.5 py-1">
        <p className="text-xs font-semibold px-0.5 uppercase text-[#D5D9DF60] line-clamp-2">
          {selected?.message[ZERO][ZERO]?.time ?? "07:00:AM"}
        </p>
      </div>
      <h2 className="text-2xl   relative font-medium tracking-tighter">
        {selected?.message[ZERO][ZERO]?.message ?? "Create a new 3D object"}
      </h2>
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex items-center  justify-center max-w-sm ">
          <CurvedEmblaCarousel />
        </div>
      </div>

      {/* {selected.message.map((AllMessages, indexArray) => (
        <div key={`-parent-message-${indexArray}`}>
          {AllMessages.map((EachTriedMessage, InnerArray) => (
            <Generate3DCard
              key={`Generate3DCard-${InnerArray}-${indexArray}`}
              chatMessage={EachTriedMessage}
              isGenerating={isGenerating}
            />
          ))}
        </div>
      ))} */}
    </div>
  );
}
