"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getRandomInteger } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import CurvedEmblaCarousel from "./carousal";
import { randomImages } from "./random-image";
import { TSubThread } from "@/lib/redux/features/chat-types";

type TThreeDGenerationWrapper = {
  threadId: string;
  subThread: TSubThread;
};

export default function ThreeDGenerationWrapper({
  threadId,
  subThread,
}: TThreeDGenerationWrapper) {
  return (
    <div className="flex items-center  justify-center h-full     flex-col gap-4">
      <div className="bg-buu  relative shadow-buu-pill border-buu rounded-full   px-1.5 py-1">
        <p className="text-xs font-semibold px-0.5 uppercase text-[#D5D9DF60] line-clamp-2">
          {/* {selected?.message[ZERO][ZERO]?.time ?? "07:00:AM"} */}
          07:00:PM
          {/* {id} */}
        </p>
      </div>
      <h2 className="text-2xl   relative font-medium tracking-tighter">
        {subThread.message}
      </h2>
      <div className="flex items-center max-h-[370px]   justify-center w-full h-full">
        <div className="flex items-center  max-h-[370px] h-full   justify-center max-w-sm ">
          <CurvedEmblaCarousel
            modelRequest={
              subThread?.modelRequest && subThread?.modelRequest.length
                ? subThread?.modelRequest
                : []
            }
          />
        </div>
      </div>
    </div>
  );
}
