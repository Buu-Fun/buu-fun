"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState, useEffect } from "react";
import ContentContainer from "./content-container";
import MobileMockCard from "./mobile-mock-card";

gsap.registerPlugin(ScrollTrigger);

export default function HowToContainer() {
  const howToRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [scrollTriggerInstance, setScrollTriggerInstance] = useState<
    ScrollTrigger | undefined
  >(undefined);

  // Create and refresh ScrollTrigger when window size changes
  useGSAP(() => {
    const container = howToRef.current;
    const mobileElement = mobileRef.current;
    if (!container || !mobileElement) return;

    // Calculate viewport width (accounting for padding)
    const viewportWidth = window.innerWidth;

    // Get total width of all sections
    const sections = Array.from(container.children) as HTMLElement[];
    const totalSectionsWidth = sections.reduce(
      (acc, section) => acc + section.offsetWidth,
      0,
    );

    // Calculate the endpoint - don't allow overscrolling
    const endpoint = Math.max(0, totalSectionsWidth - viewportWidth);

    const ctx = gsap.context(() => {
      // Kill any existing ScrollTrigger instances first
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }

      // Horizontal Scroll Animation with responsive adjustment
      const tl = gsap.to(container, {
        x: -endpoint, // Only scroll as much as needed
        ease: "none",
        scrollTrigger: {
          trigger: ".trig",
          start: "bottom bottom",
          // Adjusted end point
          end: `+=${endpoint + viewportWidth * 2}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          // markers: true,
          snap: {
            snapTo: (progress) => {
              // Only snap if there are multiple sections
              if (sections.length <= 1) return progress;
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

      // Store the ScrollTrigger instance for cleanup
      setScrollTriggerInstance(tl.scrollTrigger);
    });

    return () => ctx.revert();
  }, []);

  // Add resize handler to refresh ScrollTrigger when window size changes
  useEffect(() => {
    const handleResize = () => {
      // Force ScrollTrigger to recalculate on resize
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen trig overflow-hidden relative">
      {/* Horizontal Scroll Section */}
      <div ref={howToRef} className="how-to-container flex w-max">
        <ContentContainer
          subDescription=""
          subTitle={
            <>
              Input <br />
              Your Idea{" "}
            </>
          }
          index={"01"}
          title="Describe"
        />
        <ContentContainer
          subDescription=""
          subTitle={
            <>
              Customize <br />
              Your Model{" "}
            </>
          }
          index={"02"}
          title="Customize"
        />
        <ContentContainer
          subDescription=""
          subTitle={
            <>
              Export <br />
              and Integrate{" "}
            </>
          }
          index={"03"}
          title="Integrate"
        />
      </div>

      {/* Mobile Image with Rotation */}
      <div className="absolute w-full h-full -top-12 left-0 flex justify-center items-center">
        <div
          ref={mobileRef}
          className="max-h-[584px] p-2 border-2 border-muted-foreground/20 rounded-[40px] flex h-full w-full max-w-[300px]"
        >
          <MobileMockCard progress={progress} />
        </div>
      </div>
    </div>
  );
}
