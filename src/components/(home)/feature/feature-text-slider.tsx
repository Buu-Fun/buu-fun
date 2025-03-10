import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { MutantAlienWireFrame } from "@/assets/Image";
const features = [
  {
    title: "Auto Rigging",
    description:
      "Automatically add skeletons to your models, making them ready for animation without manual effort.",
    image: MutantAlienWireFrame.src,
  },
  {
    title: "Texture Remeshing",
    description:
      "Enhance your models with high-quality textures that adapt seamlessly to any design.",
    image: MutantAlienWireFrame.src,
  },
  {
    title: "One-Click Animation",
    description:
      "Bring your models to life with automated animations tailored to your creation.",
    image: MutantAlienWireFrame.src,
  },
  {
    title: "Instant 3D Generation",
    description:
      "Input a prompt or image, and watch BUU.FUN craft a detailed 3D model in seconds.",
    image: MutantAlienWireFrame.src,
  },
];
type TFeatureTextSlider = {
  title: string;
  description: string;
};
export default function FeatureTextSlider({
  description,
  title,
}: TFeatureTextSlider) {
  //   useGSAP(() => {
  //     gsap.to(".rotating-circle", {
  //       rotation: 360,
  //       repeat: -1,
  //       duration: 8,
  //       ease: "linear",
  //     });
  //   }, []);

  return (
    <div className="relative -top-32">
      <div className="flex items-center    justify-center flex-col">
        <motion.h2
          key={title}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.8 }}
          className="text-xl font-bold"
        >
          {title}
        </motion.h2>
        <motion.p
          key={description}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 1 }}
          className="text- mt-2 max-w-sm text-center"
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
}
