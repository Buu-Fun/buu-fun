"use client";
import { CTAImages } from "@/assets/Image";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagicPenTitle from "../elements/magic-pen-title";
import TryNow from "../elements/try-now";
import CtaImage from "./cta-image-v2";
gsap.registerPlugin(ScrollTrigger);
export default function ClickToActionContainer() {
  const colorPurpleRef = useRef<HTMLDivElement>(null);
  return (
    <div className="w-full  h-screen relative cta-trigger ">
      <CtaImage />
      <div
        ref={colorPurpleRef}
        className="w-[476px] -z-10 h-[334px] bg-overlay-primary  bg-[#6b69d540] left-[38%]  rounded-full  absolute top-[5%]  blur-[100px] "
      />
      <div className="flex items-center flex-col gap-8 justify-center">
        <MagicPenTitle title="Get started Today" className="text-lg" />
        <p className="grayish-text-gradient text-center text-4xl md:text-6xl font-medium tracking-tighter">
          Join the BUU.FUN <br /> Community
        </p>
        <p className="grayish-text-gradient text-center">
          Sign up today and transform your ideas into animated 3D models
        </p>
        <TryNow />
      </div>
    </div>
  );
}
