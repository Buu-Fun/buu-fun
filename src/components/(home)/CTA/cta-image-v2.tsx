import React from "react";
import { Marquee } from "./marquee";
import { CTAImages } from "@/assets/Image";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export default function CtaImage() {
  useGSAP(() => {
    const image = gsap.utils.toArray(
      ".image-cta",
    ) as unknown[] as HTMLDivElement[];

    const ctx = gsap.context(() => {
      // Create a single master timeline
      const masterTl = gsap.timeline();

      // Create a single animation that updates all images
      masterTl.to(
        {},
        {
          duration: 3,
          repeat: -1,
          ease: "sine.inOut",
          onUpdate: function () {
            const progress = this.progress();
            image.forEach((img, index) => {
              const cycle = progress * Math.PI * 2 + index * 0.9;
              const y = Math.sin(cycle) * 50;
              img.style.transform = `translateY(${y}px)`;
            });
          },
        },
      );
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="py-32">
      <Marquee className="py-32" pauseOnHover>
        {[...CTAImages, ...CTAImages].map((item, index) => (
          <div
            key={`image-${index}`}
            className="image-cta w-24 rounded-2xl h-24 flex-shrink-0 overflow-hidden cursor-pointer mx-2"
          >
            <Image
              src={item.src}
              alt="Character"
              width={450}
              height={450}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
