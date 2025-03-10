import { ArrowUp, robLoxIcon } from "@/assets/icons";
import { BorderBeam } from "@/components/ui/border-beam";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect } from "react";

export default function FeatureTopBar() {
  return (
    <div className="bg-buu shadow-buu-inner rounded-2xl border-buu border-2 max-w-[85%] mx-auto py-3 px-4">
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground/40">What do you want to see...</p>
        <button
          type="submit"
          className={cn("bg-[#737984] rounded-full p-0.5", {})}
        >
          <ArrowUp className="w-5 h-5 text-[#292D32]" />
          <span className="sr-only"></span>
        </button>
      </div>
    </div>
  );
}

export function FeatureRobloxTopBar() {
  return (
    <div className="bg-buu shadow-buu-inner rounded-2xl border-buu border-2 max-w-max mx-auto py-3 px-4">
      <div className="flex items-center justify-center gap-2">
        <div className="flex h-6 w-6">
          <Image src={robLoxIcon} width={250} height={250} alt="Roblox logo" />
        </div>
        <h1>Integrating to Roblox Studio...</h1>
      </div>

      <BorderBeam
        containerClassName={cn("border-2 rounded-2xl", {})}
        // initialOffset={0}
        size={60}
        colorFrom="rgba(119, 217, 253,1)"
        colorTo="rgba(119, 217, 253,1)"
        className="border-2 rounded-2xl z-50 relative"
      />
    </div>
  );
}
import gsap from "gsap";
import { motion } from "framer-motion";
import { GradientBottomBar } from "../hero/slider-handle";
export function ScanningOverlay() {
  useEffect(() => {
    gsap.to(".scan-line", {
      // y: "100%",
      height: "99%",
      repeat: -1,
      yoyo: true,
      duration: 4,
      ease: "power1.inOut",
    });
  }, []);
  return (
    <div className="absolute h-full w-full  inset-0 bg-transparent ">
      <div className="scan-line w-full h-[10%]  absolute top-0 left-0 ">
        <motion.div className=" h-full w-full  rotate-180 scan-roblox"></motion.div>
        <GradientBottomBar />
      </div>
    </div>
  );
}
