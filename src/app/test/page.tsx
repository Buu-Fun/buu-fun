import CurvedEmblaCarousel from "@/components/generation/carousal";
import React from "react";
import { ThreeDCubeFour, ThreeDCubeThree, ThreeDCubeTwo } from "@/assets/Image";

const cards = [
  {
    id: "1",
    message: "Message 1",
    time: "2:00 AM",
    alt: "Model 1",
    url: ThreeDCubeFour.src,
  },
  {
    id: "2",
    message: "Message 1",
    time: "2:00 AM",
    alt: "Model 3",
    url: ThreeDCubeThree.src,
  },
  {
    id: "3",
    message: "Message 3",
    time: "2:00 AM",
    alt: "Model 3",
    url: ThreeDCubeTwo.src,
  },
  {
    id: "5",
    message: "Message 3",
    time: "2:00 AM",
    alt: "Model 3",
    url: ThreeDCubeThree.src,
  },
  // ... more cards
];

export default function Page() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex items-center justify-center max-w-sm">
        <CurvedEmblaCarousel />
      </div>
    </div>
  );
}
