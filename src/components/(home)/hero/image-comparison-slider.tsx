"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import SliderHandle from "./slider-handle";
import { MutantAlien, MutantAlienMesh } from "@/assets/Image";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function ImageComparisonSlider() {
  const [position, setPosition] = useState(0);
  const sliderRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(
        {},
        {
          ease: "power2.inOut",
          onUpdate: function () {
            setPosition(this.progress() * 100);
          },
          scrollTrigger: {
            trigger: sliderRef.current,
            start: "top 100%", // Starts when 80% of the slider is in view
            toggleActions: "play reverse play reverse",
            scrub: true,
        },
        }
      );
    }, sliderRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);
  return (
    <div className="sticky top-0  z-[50]  h-screen w-full    flex justify-center ">
      <div className="relative z-50  top-[14.5%]">
        <ReactCompareSlider
          position={position}
          //   ref={sliderRef}
          changePositionOnHover
          boundsPadding={60}
          className=" relative w-[606px] h-[706px] left-[0%]   "
          // transition="5s cubic-bezier(.17,.67,.83,.67)"

          handle={<SliderHandle />}
          itemOne={
            <ReactCompareSliderImage
              src={MutantAlien.src}
              width={1920}
              ref={sliderRef}
              height={1080}
              alt="Home page background"
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src={MutantAlienMesh.src}
              width={1920}
              height={1080}
              alt="Home page background"
              //   className="w-[606px] h-[706px]"
            />
          }
        />
        <div className="absolute hidden -z-30 top-[0%] left-[3%] ">
          <Image
            id="image-behind"
            src={MutantAlien.src}
            width={1920}
            height={1080}
            alt="Home page background"
            className="w-[606px] h-[706px]"
          />
        </div>
      </div>
    </div>
  );
}
