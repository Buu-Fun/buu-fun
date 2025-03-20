"use client";
import { MutantAlienWireFrame } from "@/assets/Image";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useEffect, useState } from "react";
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

export default function FeatureSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.to(".rotating-circle", {
        rotation: 360,
        repeat: -1,
        duration: 8,
        ease: "linear",
      });
    });
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="relative w-[300px] h-[500px] overflow-hidden rounded-2xl shadow-xl bg-black text-white">
      <div className="absolute bottom-20 px-6 text-center">
        <motion.h2
          key={features[index].title}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.8 }}
          className="text-lg font-bold"
        >
          {features[index].title}
        </motion.h2>
        <motion.p
          key={features[index].description}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 1 }}
          className="text-sm mt-2"
        >
          {features[index].description}
        </motion.p>
      </div>

      {/* Partial Arch Border with Rotating Circle */}
      <div className="absolute bottom-0 w-full flex justify-center">
        <svg
          className="w-full h-[50px]"
          viewBox="0 0 300 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 50 Q150 -20 300 50"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <div className="absolute -top-4 w-6 h-6 bg-white rounded-full rotating-circle" />
      </div>
    </div>
  );
}
