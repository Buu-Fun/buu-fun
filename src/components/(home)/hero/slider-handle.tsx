import SliderIcon from "@/assets/icons/slider-icon";
import React from "react";

export default function SliderHandle() {
  return (
    <div className="w-[3px] h-full image-slider-gradient-bg relative">
      <div className="w-5 h-5  rounded-full absolute -left-[8px] bottom-[25%]">
        <SliderIcon />
      </div>
    </div>
  );
}

export function GradientBottomBar() {
  return (
    <div className="w-full h-[3px] image-slider-gradient-bg-two relative"></div>
  );
}
