import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Generate3DCard from "./generate-3d-card";
import { ThreeDCubeFour, ThreeDCubeThree, ThreeDCubeTwo } from "@/assets/Image";
import { cn } from "@/lib/utils";

export default function GenerationCarousalWrapper() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "center",
    skipSnaps: false,
    dragFree: true,
  });

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
  ];

  // Handle scroll position to update curve effect
  const updateCurveEffect = useCallback(() => {
    if (!emblaApi) return;

    const slides = emblaApi.slideNodes();
    const scrollProgress = emblaApi.scrollProgress();

    slides.forEach((slide, index) => {
      // Calculate position on curve
      const slideProgress =
        (index / (slides.length - 1) - scrollProgress) * Math.PI;
      const yOffset = Math.sin(slideProgress) * 50; // Adjust the 50 to control curve height
      const scale = 1 - Math.abs(Math.sin(slideProgress) * 0.3); // Scale effect

      // Apply transforms
      slide.style.transform = `translateY(${yOffset}px) scale(${scale})`;
      slide.style.opacity = `${0.5 + (1 - Math.abs(Math.sin(slideProgress))) * 0.5}`;
    });
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("scroll", updateCurveEffect);
    emblaApi.on("reInit", updateCurveEffect);

    updateCurveEffect();

    return () => {
      emblaApi.off("scroll", updateCurveEffect);
      emblaApi.off("reInit", updateCurveEffect);
    };
  }, [emblaApi, updateCurveEffect]);

  return (
    <div className="relative w-full max-w-5xl mx-auto py-16">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-[0_0_33%] min-w-0 pl-4 transition-transform duration-300 ease-out"
            >
              <Generate3DCard
                chatMessage={{
                  id: `card-${index}`,
                  message: `Message ${index + 1}`,
                  time: "2:00 AM",
                  alt: image.alt,
                  url: image.url,
                }}
                isGenerating={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Optional navigation dots */}
      <div className="flex justify-center gap-2 mt-8">
        {images.map((_, index) => (
          <button
            key={index}
            className="w-2 h-2 rounded-full bg-gray-400 hover:bg-gray-600 transition-colors"
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
