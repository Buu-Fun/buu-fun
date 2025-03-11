"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import ContentContainer from "./content-container";
import MobileMockCard from "./mobile-mock-card";

gsap.registerPlugin(ScrollTrigger);

export default function HowToContainer() {
  const howToRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  useGSAP(() => {
    const container = howToRef.current;
    const mobileElement = mobileRef.current;
    if (!container || !mobileElement) return;

    const sections = Array.from(container.children) as HTMLElement[];
    const totalWidth = sections.reduce(
      (acc, section) => acc + section.offsetWidth,
      0
    );

    const ctx = gsap.context(() => {
      // Horizontal Scroll Animation
      gsap.to(container, {
        x: -totalWidth + window.innerWidth, // Move left to reveal full width
        ease: "none",
        scrollTrigger: {
          trigger: ".trig",
          start: "bottom bottom",
          end: `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        //   markers: true,
          snap: {
            snapTo: (progress) => {
              const index = Math.round(progress * (sections.length - 1));
              return index / (sections.length - 1);
            },
            inertia: true,
            duration: 0.2,
            ease: "sine.inOut",
          },
          onUpdate: (self) => {
            // Rotate mobile based on scroll progress
            const progress = self.progress; // Value between 0 and 1
            setProgress(progress);
            const rotateX = gsap.utils.mapRange(0, 1, -20, 20, progress); // Tilt up/down
            const rotateY = gsap.utils.mapRange(1, 0, -25, 25, progress); // Tilt left/right
            const rotateZ = gsap.utils.mapRange(1, 0, -15, 15, progress); // Slight twist

            gsap.to(mobileElement, {
              rotateX,
              rotateY,
              rotateZ,
              duration: 0.2,
              ease: "sine.inOut",
            });
          },
        },
      });
    });

    return () => ctx.revert();
  });

  return (
    <div className="h-screen trig overflow-hidden relative ">
      {/* Horizontal Scroll Section */}
      <div ref={howToRef} className="how-to-container flex w-max">
        <ContentContainer subDescription="" subTitle={<>Input  <br/>Your Idea  </>} index={"01"} title="Describe" />
        <ContentContainer subDescription="" subTitle={<>Customize <br/>Your Model  </>} index={"02"} title="Customize" />
        <ContentContainer subDescription="" subTitle={<>Export  <br/>and Integrate  </>} index={"03"} title="Integrate" />
      </div>

      {/* Mobile Image with Rotation */}
      <div className="absolute w-full h-full -top-12 left-0 flex justify-center items-center">
        <div
          ref={mobileRef}
          className="max-h-[584px] p-2 border-2 border-muted-foreground/60 rounded-3xl flex h-full w-full  max-w-[300px]"
        >
          <MobileMockCard progress={progress} />
        </div>
      </div>
    </div>
  );
}
