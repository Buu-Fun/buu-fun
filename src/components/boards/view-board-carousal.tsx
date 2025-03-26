"use client";
import { useSharedBoards } from "@/hooks/use-boards";
import React, { useEffect, useRef, useState } from "react";
import { ShareableBoard } from "@/gql/types/graphql";
import { useAppSelector, useAppStore } from "@/hooks/redux";
import { initializeSharableBoards } from "@/lib/redux/features/boards";
import { getBoards } from "@/lib/redux/selectors/board";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "../ui/card";
import dynamic from "next/dynamic";
import Image from "next/image";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { cn } from "@/lib/utils";
const ModelViewer = dynamic(() => import("../generation/model-viewer"), {
  ssr: false,
  loading: () => null, // Use null instead of undefined
});

const MockModelUrl =
  "https://cdn.buu.fun/production/users/F6BHzc3ufdjynKwJ6qGkLGx8DtUUya4zYWLzaJ91k8FM/genRequests/38970630-52f1-4005-8d44-2234e8a3d05d/model_mesh/b8950938-6d69-454c-8a13-3711ab8fd700.glb";
const mockImageUrl =
  "https://cdn.buu.fun/production/users/F6BHzc3ufdjynKwJ6qGkLGx8DtUUya4zYWLzaJ91k8FM/genRequests/6ff9999d-8a3b-4e0b-8169-b41ae8e060a4/images/0c344c87-d696-4cd3-bd57-b9a7f87e7a11.png";

export default function ViewBoardCarousal() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div className="flex w-full justify-center items-center h-full    gap-2">
      <div className="flex relative z-10 items-center justify-center flex-col gap-4 mr-6">
        {Array.from({ length: 5 }).map((_, index) => (
          <button
            onClick={() => {
              if (api) {
                api?.scrollTo(index);
              }
            }}
            className={cn("w-[36px] border-2 rounded-lg overflow-hidden", {
              "w-[44px]": index === current - 1,
            })}
          >
            <div>
              <Image
                src={mockImageUrl}
                alt="mockImage"
                width={1920}
                height={1080}
                className=""
              />
            </div>
          </button>
        ))}
      </div>
      <Carousel
        plugins={[WheelGesturesPlugin()]}
        setApi={setApi}
        opts={{
          align: "start",
          dragFree: false,
          watchDrag: false,
          watchResize: true,
          watchSlides: true,
        }}
        orientation="vertical"
        className="w-full max-w-md"
      >
        <CarouselContent className="-mt-1 h-[65vh] ">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="pt-1  md:basis-full">
              <div className="border-2 rounded-2xl w-full bg-[#15192420] backdrop-blur-3xl h-full">
                <ModelViewer src={MockModelUrl} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious /> */}
        {/* <CarouselNext /> */}
      </Carousel>{" "}
    </div>
  );
}
