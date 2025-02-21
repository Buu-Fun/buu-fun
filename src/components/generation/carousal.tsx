"use client";
import { ThreeDCubeFour, ThreeDCubeThree, ThreeDCubeTwo } from "@/assets/Image";
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

const CurvedEmblaCarousel = () => {
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

  const images = [
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
    {
      url: ThreeDCubeFour.src,
      alt: "ThreeD-cubes ThreeDCubeFour",
    },
  ];
  return (
    <div className="">
      <Carousel
        opts={{
          align: "start",
          startIndex: images.length - 1,
        }}
        className="overflow-visible  relative max-w-[264px] w-full"
        setApi={setApi}
      >
        <CarouselContent containerClass="overflow-visible" className=" ml-0    relative">
          {images.map((item, index) => {
            console.log(current);
            const isCurrent = current === index + 1;
            const distanceFromCenter = Math.abs(index + 1 - current);
            // SCARY 0-0

            // const direction = current > index + 1 ? -0.5 : 0.5;
            const direction = current > index + 1 ? -1.2 : 1.2;

            const TransformDirection = current > index + 1 ? -10 : 10.2;
            // Dynamic rotation with directional tilt
            let rotate = isCurrent
              ? "0deg"
              : `${direction * (10 + distanceFromCenter * 5)}deg`;

            // Scale to create depth, using exponential decay for smoothness
            let scale = isCurrent ? "100%" : `${65 - Math.pow(index + 1, 1)}%`;

            // Y-axis translation for curved effect

            // Base offset for a smooth cascading effect
            const baseOffset = 20;

            // Y-axis translation: Elements farther from center drop more
            let transformY = isCurrent
              ? "0%"
              : `${distanceFromCenter * baseOffset}%`;

            // X translation to make it curve
            let transformX = isCurrent
              ? "0%"
              : `${TransformDirection * (index + 1) * 1}%`;
            return (
              <CarouselItem
                key={`carousal-item-${index}-${item.url}-${item.alt}`}
                style={{
                  transform: `translate(${transformX}, ${transformY}) rotate(${rotate}) scale(${scale})`,
                }}
                className={cn(
                  "relative pl-0 select-none  max-w-[264px] rounded-lg shadow-lg ",
                  "transition-all duration-500 ease-out "
                )}
              >
                <Generate3DCard
                  showToolTip={isCurrent}
                  isGenerating={false}
                  chatMessage={{
                    ...item,
                    id: "hello",
                    message: "hello",
                    time: "02.2.2",
                  }}
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
    </div>
  );
};

export default CurvedEmblaCarousel;
