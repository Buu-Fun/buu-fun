import { CTAImages } from "@/assets/Image";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import React, { useRef } from "react";

export default function CTAImageScroller() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const wrapper = wrapperRef.current;
      const scroller = scrollerRef.current;

      if (!wrapper || !scroller) return;

      // Clone content for seamless looping
      const scrollerContent = scroller.innerHTML;
      scroller.innerHTML = `${scrollerContent}${scrollerContent}`;

      let imageWidth = 0;
      const images = scroller.querySelectorAll(
        ".image-cta"
      ) as NodeListOf<HTMLDivElement>;

      images.forEach((img) => {
        imageWidth += img.offsetWidth + 8;
      });

      // Only animate if enough images exist
      const itemsNeeded = Math.ceil(window.innerWidth / imageWidth);
      const singleSetWidth = imageWidth / 2;
      function setupInfiniteScroll() {
        // Create infinite scrolling with proper looping
        const tl = gsap.timeline({
          repeat: -1,
          defaults: { ease: "power4.inOut" },
        });

        // Move to the negative width of one full set of items

        tl.to(scroller, {
          x: -singleSetWidth,
          duration: 5,
          ease: "linear",
          onComplete: () => {
            // Immediately snap back to the beginning, creating the infinite loop effect
            gsap.set(scroller, { x: 0 + 8 });
          },
        });
      }

      gsap.fromTo(
        scroller,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 2,
          scrollTrigger: {
            trigger: wrapper,
            start: "top 95%",
            scrub: true,
            toggleActions: "play none none reverse",
            //   markers: true,
          },
        }
      );

      if (images.length >= itemsNeeded) {
        // Calculate the width of a single set of items

        // Set up the infinite scrolling

        setupInfiniteScroll();

        // Keep the original wave effect animation exactly as it was
        images.forEach((img, index) => {
          // Create a timeline for each image's motion
          const tl = gsap.timeline({
            repeat: -1, // Infinite repetition
            defaults: { ease: "sine.inOut" },
          });

          // Create a full 360° cycle animation
          tl.to(img, {
            duration: 3,
            onUpdate: function () {
              const progress = this.progress();
              // Calculate the full cycle position, offset by index
              const cycle = progress * Math.PI * 2 + index * 0.9;
              // Apply sine wave to y-axis
              const y = Math.sin(cycle) * 50;
              // Apply the calculated values
              gsap.set(img, {
                y: y,
              });
            },
          });
        });
      }

      // Handle resize
      const handleResize = () => {
        gsap.killTweensOf(scroller);
        gsap.set(scroller, { x: 0 });

        // Recalculate image width
        imageWidth = 0;
        images.forEach((img) => {
          imageWidth += img.offsetWidth + 8;
        });

        // Restart the animations after a small delay to ensure everything is ready
        setTimeout(() => {
          setupInfiniteScroll();
        }, 100);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    },
    { dependencies: [], revertOnUpdate: true }
  );

  return (
    <div className="relative py-[8%] " ref={wrapperRef}>
      <div className="flex items-center " ref={scrollerRef}>
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
      </div>
    </div>
  );
}
