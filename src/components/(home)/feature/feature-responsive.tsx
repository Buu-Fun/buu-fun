import {
  CircularMotion,
  SliderIconSecondary,
} from "@/assets/icons/slider-icon-secondary";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react";
import { ArchGradient } from "./arch-gradient";
import { features } from "./feature-data";
import FeatureTextSlider from "./feature-text-slider";
import FeatureTopBar, {
  FeatureRobloxTopBar,
  ScanningOverlay,
} from "./feature-top-bar";

gsap.registerPlugin(ScrollTrigger);

export default function FeatureShowcaseContainer({}: { children?: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  // Set up responsive positioning that works with any aspect ratio
  useLayoutEffect(() => {
    // These are the coordinates and dimensions from the design
    // Based on the 1920x1080 reference.
    const designWidth = 1920;
    const designHeight = 1080;

    // Position of character in the design (estimated from image)
    const characterCenterX = 960; // Center X position in original design
    const characterTopY = 150; // Top Y position in original design

    // Slider dimensions in design (41% of width)
    const designSliderWidth = designWidth * 0.3281;
    const designSliderHeight = designHeight * 0.74; // Estimated from image

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
      sliderContainerRef.current.style.left = `${characterX - sliderWidth / 2}px`;
      sliderContainerRef.current.style.top = `${characterY}px`;
    };

    // Run on mount and resize
    updateSliderPosition();
    window.addEventListener("resize", updateSliderPosition);

    return () => window.removeEventListener("resize", updateSliderPosition);
  }, []);

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  // Enhanced animation timing control
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % features.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Define enhanced variants for smoother animations
  const backgroundVariants = {
    initial: {
      opacity: 0,
      scale: 1.05,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 2.5,
        ease: [0.25, 0.1, 0.25, 1.0], // cubic-bezier easing
      },
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  const imageVariants: Variants = {
    initial: (custom) => ({
      opacity: 0,
      x: custom * 30,
    }),
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.3,
      },
    },
    exit: (custom) => ({
      opacity: 0,
      x: custom * -30,
      transition: {
        duration: 0.8,
        ease: "easeIn",
      },
    }),
  };

  return (
    <AnimatePresence mode="wait">
      <div
        ref={containerRef}
        className="relative h-screen w-full overflow-hidden"
      >
        <motion.div
          key={`bg-${features[index].background}`}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={backgroundVariants}
          className="h-full absolute top-0 left-0 w-full"
        >
          <Image
            src={features[index].background}
            width={1920}
            height={1080}
            className="w-full h-full blur-[4px] object-cover"
            alt="Home page background"
            priority
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5 } }}
            className="bg-[#05050562] w-full absolute left-0 top-0 h-full"
          />
        </motion.div>

        <div ref={sliderContainerRef} className="relative">
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.6, delay: 0.2 },
            }}
            className="absolute top-[-3%] mx-auto w-full z-10"
          >
            {features[index].scan ? <FeatureRobloxTopBar /> : <FeatureTopBar />}
          </motion.div>
          <div className="w-[120%] rounded-full h-[50%] bg-[#0C0C0D] blur-[150px] absolute left-[-10%] bottom-[-30%] z-30" />
          <div className="relative overflow-hidden border-white/20 border rounded-2xl">
            {features[index].scan ? (
              <div className="z-20 w-full h-full absolute top-0 left-0">
                <ScanningOverlay />
              </div>
            ) : null}
            <motion.div
              key={`bgExcluded-${features[index].bgExcluded}`}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={backgroundVariants}
              className="w-full h-full"
            >
              <Image
                width={1080}
                height={1080}
                src={features[index].bgExcluded}
                alt="Wireframe version"
                className="rounded-2xl object-cover"
              />
            </motion.div>

            <motion.div
              key={`image-${features[index].image}`}
              custom={direction}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={imageVariants}
              className="absolute bottom-0 left-0"
            >
              <Image
                src={features[index].image}
                alt="Alien Image"
                width={1920}
                height={1080}
                className="z-10 relative object-contain"
              />
            </motion.div>
          </div>
          <motion.div
            key={`slider-controls-${index}`}
            initial={{ y: 10, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.6, delay: 0.4 },
            }}
            className="absolute bottom-[-10%] w-full z-50"
          >
            <div className="relative">
              <div className="mx-auto w-full flex items-center justify-center">
                {/* Circular motion container */}
                <CircularMotion index={index}>
                  <SliderIconSecondary index={index} />
                </CircularMotion>
              </div>
              <ArchGradient index={index} />
            </div>
          </motion.div>
          <div className="w-[100%] absolute bottom-[-68%] z-50 aspect-square ">
            <FeatureTextSlider
              title={features[index].title}
              description={features[index].description}
              key={`text-${index}`}
            />
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}
