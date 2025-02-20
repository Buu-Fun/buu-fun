"use client";
import Generate3DCard from "@/components/generation/generate-3d-card";
import { ThreeDCubeFour, ThreeDCubeThree, ThreeDCubeTwo } from "@/assets/Image";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { updateChatMessageImage } from "@/lib/redux/features/chat";
import { getRandomInteger } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

type TThreeDGenerationWrapper = {
  id: string;
};
const randomImages = [
  {
    url: ThreeDCubeFour.src,
    alt: "ThreeD-cubes ThreeDCubeFour",
  },

  {
    url: ThreeDCubeTwo.src,
    alt: "ThreeD-cubes ThreeDCubeTwo",
  },
  {
    url: ThreeDCubeThree.src,
    alt: "ThreeD-cubes ThreeDCubeThree",
  },
];

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
      console.log(image);
    //   dispatch(updateChatMessageImage(image));
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

  return (
    <div className="flex items-center justify-center flex-col gap-4">
      <div className="bg-buu shadow-buu-pill border-buu rounded-full   px-1.5 py-1">
        <p className="text-xs font-semibold px-0.5 uppercase text-[#D5D9DF60] line-clamp-2">
          {selected?.message[0].time ?? "07:00:AM"}
        </p>
      </div>
      <h2 className="text-2xl font-medium tracking-tighter">
        {selected?.message[0].message ?? "Create a new 3D object"}
      </h2>
      <Generate3DCard
        chatMessage={selected?.message[0]!}
        isGenerating={isGenerating}
      />
    </div>
  );
}
