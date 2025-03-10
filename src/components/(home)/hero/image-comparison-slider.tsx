import {
  HomeBackground,
  MutantAlien,
  MutantAlienWireFrame,
} from "@/assets/Image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import SliderHandle from "./slider-handle";

gsap.registerPlugin(ScrollTrigger);

export default function ImageComparisonSlider({
  children,
}: {
  children: ReactNode;
}) {
  const [position, setPosition] = useState(100);
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(
        {},
        {
          duration: 2,
          ease: "power2.inOut",
          onUpdate: function () {
            setPosition(this.progress() * 100);
          },
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            toggleActions: "play play play reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Set up responsive positioning that works with any aspect ratio
  useLayoutEffect(() => {
    // These are the coordinates and dimensions from the design
    // Based on the 1920x1080 reference.
    const designWidth = 1920;
    const designHeight = 1080;

    // Position of character in the design (estimated from image)
    const characterCenterX = 940; // Center X position in original design
    const characterTopY = 115; // Top Y position in original design

    // Slider dimensions in design (41% of width)
    const designSliderWidth = designWidth * 0.415;
    const designSliderHeight = designHeight * 0.78; // Estimated from image

    // Function to update slider position based on current viewport
    const updateSliderPosition = () => {
      if (!sliderContainerRef.current || !containerRef.current) return;

      // Get current container dimensions
      const containerWidth = containerRef.current.offsetWidth;
      const containerHeight = containerRef.current.offsetHeight;

      // Calculate how the background image is actually rendered
      // const bgImage = backgroundRef.current;

      // Get background image dimensions as it's rendered
      const bgRatio = designWidth / designHeight;
      const containerRatio = containerWidth / containerHeight;

      let renderedBgWidth, renderedBgHeight;

      // Determine how the object-cover scales the background
      if (containerRatio > bgRatio) {
        // Background is wider than container's aspect ratio
        renderedBgWidth = containerWidth;
        renderedBgHeight = containerWidth / bgRatio;
      } else {
        // Background is taller than container's aspect ratio
        renderedBgHeight = containerHeight;
        renderedBgWidth = containerHeight * bgRatio;
      }

      // Calculate scaling factors based on how the background is actually rendered
      const scaleX = renderedBgWidth / designWidth;
      const scaleY = renderedBgHeight / designHeight;

      // Calculate offset if background is centered
      const offsetX = (containerWidth - renderedBgWidth) / 2;
      const offsetY = (containerHeight - renderedBgHeight) / 2;

      // Calculate the position where the character should be
      const characterX = characterCenterX * scaleX + offsetX;
      const characterY = characterTopY * scaleY + offsetY;

      // Calculate the slider dimensions based on the rendered background
      const sliderWidth = designSliderWidth * scaleX;

      // Position the slider centered on the character position
      sliderContainerRef.current.style.width = `${sliderWidth}px`;
      sliderContainerRef.current.style.height = `${designSliderHeight * scaleY}px`;
      sliderContainerRef.current.style.left = `${characterX - sliderWidth / 2.05}px`;
      sliderContainerRef.current.style.top = `${characterY}px`;
    };

    // Run on mount and resize
    updateSliderPosition();
    window.addEventListener("resize", updateSliderPosition);

    return () => window.removeEventListener("resize", updateSliderPosition);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-visible "
    >
      <div className="h-full absolute top-0 left-0 w-full ">
        <Image
          src={HomeBackground}
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          alt="Home page background"
          priority
        />
      </div>

      <div ref={sliderContainerRef} className="absolute   overflow-visible">
        <ReactCompareSlider
          className="w-full h-full z-[20] overflow-visible"
          style={{
            overflow: "visible",
          }}
          // changePositionOnHover={true}
          handle={<SliderHandle />}
          position={position}
          itemTwo={
            <ReactCompareSliderImage
              width={"auto"}
              height={"auto"}
              src={MutantAlienWireFrame.src}
              alt="Wireframe version"
              className="w-full h-full"
            />
          }
          itemOne={
            <ReactCompareSliderImage
              src={MutantAlien.src}
              width={"auto"}
              height={"auto"}
              alt="Full color version"
              className="w-full h-full relative "
            />
          }
        />
      </div>
      {children}
    </div>
  );
}
