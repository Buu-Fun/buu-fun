"use client";
import { HomeBackground } from "@/assets/Image";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
export default function FeatureComponent() {
  const ImageRef = useRef<HTMLDivElement>(null);
  //   useGSAP(() => {
  //     if (!ImageRef.current) return;
  //     const width = window.innerWidth;
  //     gsap.from(ImageRef.current, {
  //       scrollTrigger: {
  //         trigger: ".image-bg-trig",
  //         end: "+=" + width * 2,
  //         pin: true,
  //         onUpdate(self) {
  //           if (!ImageRef.current) return;
  //           console.log(self.progress * 10);
  //           ImageRef.current.style.filter = `blur(${self.progress * 5}px)`;
  //         },
  //       },
  //     });
  //   });

  return (
    <div className="w-full  relative border-2 h-screen image-bg-trig">
      <div ref={ImageRef} className="h-full w-full ">
        <div className="w-full h-full">
          <Image
            src={HomeBackground}
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            alt="Home page background"
            priority
          />
        </div>
        <div className="flex items-center justify-center">
          <h1 className="text-4xl">hello</h1>
        </div>
      </div>
    </div>
  );
}
