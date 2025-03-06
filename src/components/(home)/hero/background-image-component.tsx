import { HomeBackground } from "@/assets/Image";
import Image from "next/image";
import React from "react";

export default function BackgroundImage() {
  return (
    <div className="h-full sticky   top-0 left-0  w-full">
      <Image
        src={HomeBackground}
        width={1920}
        height={1080}
        className="w-full h-full max-h-[100dvh] relative"
        alt="Home page background"
      />
      <div className="blur-overlay " />
    </div>
  );
}
