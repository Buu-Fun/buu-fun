"use client";
import React from "react";
import { motion } from "framer-motion";

import {
  PricingImage1,
  PricingImage2,
  PricingImage3,
  PricingImage4,
} from "@/assets/Image";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function EnterpriseImageCard() {
  const imageData = [
    {
      url: PricingImage1.src,
      alt: "Fantasy character one",
    },
    {
      url: PricingImage2.src,
      alt: "Fantasy character two",
    },
    {
      url: PricingImage4.src,
      alt: "Fantasy character four",
    },
    {
      url: PricingImage3.src,
      alt: "Fantasy character three",
    },
  ];

  return (
    <div className="relative md:z-50 z-1 max-w-sm w-full h-64 flex items-center justify-center">
      <div className="relative flex items-center justify-center -bottom-14 right-16">
        {imageData.map((image, index) => (
          <motion.div
            key={index}
            className={cn("absolute md:block")}
            style={
              {
                //   transform: `rotate(${(index - 1.2) * 14}deg)`,
                //   zIndex: imageData.length - index,
                //   left: `${index * 55}px`,
              }
            }
            initial={{ opacity: 0, y: 50 }}
            // animate={}
            whileInView={{
              opacity: 1,
              y: 0,
              transform: `rotate(${(index - 1.2) * 14}deg)`,
              zIndex: imageData.length - index,
              left: `${index * 55}px`,
              transition: {
                duration: 0.5,
              },
            }}
            whileHover={{
              transform: `rotate(${index * 0.7 * 14}deg)`,
            }}
          >
            <motion.div
              whileHover={{
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <Image
                src={image.url}
                alt={image.alt}
                className="object-cover rounded-2xl shadow-lg"
                width={111}
                height={150}
                style={{
                  maxHeight: "150px",
                  maxWidth: "111px",
                }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
