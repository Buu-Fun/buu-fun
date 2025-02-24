"use client";
import { ThreeDCubeFour, ThreeDCubeOne, ThreeDCubeThree, ThreeDCubeTwo } from "@/assets/Image";
import { cn } from "@/lib/utils";
import React, { useEffect } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Generate3DCard from "./generate-3d-card";
import { TMediaRequest } from "@/lib/redux/features/chat-types";

const CurvedEmblaCarousel = ({
  modelRequest,
}: {
  modelRequest: TMediaRequest[];
}) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="max-w-[264px] max-h-[370px] h-full w-full ">
      {modelRequest.length ? (
        <Carousel
          opts={{
            align: "start",
            startIndex: modelRequest.length - 1,
          }}
          className="overflow-visible  relative max-w-[264px] max-h-[370px] h-full w-full"
          setApi={setApi}
        >
          <CarouselContent
            containerClass="overflow-visible  h-full w-full"
            className=" ml-0    relative h-full w-full"
          >
            {modelRequest.map((item, index) => {
              console.log(item.metadata);
              console.log(current);
              const isCurrent = current === index + 1;
              const distanceFromCenter = Math.abs(index + 1 - current);
              // SCARY 0-0

              // const direction = current > index + 1 ? -0.5 : 0.5;
              const direction = current > index + 1 ? -1.2 : 1.2;

              const TransformDirection = current > index + 1 ? -10 : 10.2;
              // Dynamic rotation with directional tilt
              const rotate = isCurrent
                ? "0deg"
                : `${direction * (10 + distanceFromCenter * 5)}deg`;

              // Scale to create depth, using exponential decay for smoothness
              const scale = isCurrent
                ? "100%"
                : `${65 - Math.pow(index + 1, 1)}%`;

              // Y-axis translation for curved effect

              // Base offset for a smooth cascading effect
              const baseOffset = 20;

              // Y-axis translation: Elements farther from center drop more
              const transformY = isCurrent
                ? "0%"
                : `${distanceFromCenter * baseOffset}%`;

              // X translation to make it curve
              const transformX = isCurrent
                ? "0%"
                : `${TransformDirection * (index + 1) * 1}%`;
              return (
                <CarouselItem
                  key={`carousal-item-${index}-${item.metadata.imageUrl}-${item._id}`}
                  style={{
                    transform: `translate(${transformX}, ${transformY}) rotate(${rotate}) scale(${scale})`,
                  }}
                  className={cn(
                    "relative pl-0 select-none   max-w-[264px] max-h-[370px] h-full rounded-lg shadow-lg ",
                    "transition-all duration-500 ease-out "
                  )}
                >
                  <Generate3DCard
                    status={item.status as "Success" | "inProgress"}
                    showToolTip={isCurrent}
                    isGenerating={item.status === "inProgress"}
                    images={{
                      imageUrl: item.metadata.imageUrl ?? ThreeDCubeOne.src,
                    }}
                    modelUrl={item?.modelMesh && item?.modelMesh?.url}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <div className=" absolute top-[50%] w-full">
            <div className="absolute top-[50%] right-0">
              <CarouselNext className="disabled:hidden -right-4 top-auto " />
            </div>
            <div className="absolute top-[50%] left-0">
              <CarouselPrevious className="disabled:hidden -left-4 top-auto" />
            </div>
          </div>
        </Carousel>
      ) : (
        <Generate3DCard
          status="inProgress"
          showToolTip={false}
          isGenerating={false}
          images={{
            imageUrl: null,
          }}
        />
      )}
    </div>
  );
};

export default CurvedEmblaCarousel;
