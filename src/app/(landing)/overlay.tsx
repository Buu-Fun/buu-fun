import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";
export default function OverlayColor({
  trigger,
  purpleClassName,
}: {
  trigger: string;
  purpleClassName?: string;
}) {
  const colorPurpleRef = useRef<HTMLDivElement>(null);
  const colorCyanRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [colorPurpleRef.current, colorCyanRef.current],
        {
          opacity: 0,
          scale: 0,
        },
        {
          opacity: 1,
          scale: 1,
          ease: "power4.inOut",
          duration: 1,
          scrollTrigger: {
            trigger,
            start: "top 60%",
            end: "bottom 95%",
            toggleActions: "play reverse play reverse", // Ensures it reverses properly
            // markers: true,
          },
        }
      );
    });
    return () => {
      ctx.revert();
    };
  });

  return (
    <>
      <div
        ref={colorCyanRef}
        className=" w-[200px] h-[100px] border-2 bg-overlay-secondary  bg-[#69CCD5]   rounded-full right-[20%] absolute bottom-[-140px] -z-10 blur-[100px]  rotate-[-10deg]"
      />
      <div
        ref={colorPurpleRef}
        className={cn(
          "w-[476px] h-[334px] bg-overlay-primary blur-[100px]  bg-[#6b69d549] left-[38%]  rounded-full  absolute top-[5%] -z-10  md:block hidden  rotate-[-10deg]",
          purpleClassName
        )}
      />
    </>
  );
}
