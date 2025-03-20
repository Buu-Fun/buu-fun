"use client";
import HomeIcon from "@/assets/icons/home-icon";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { HomePageLinks } from "../footer/footer-data";
import { FooterLink } from "../footer/footer-link";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function HomeNavigationBar() {
  const [activeLink, setActiveLink] = useState<string>("#home");
  const indicatorRef = useRef<HTMLDivElement | null>(null);
  const linkRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Initialize GSAP ScrollTrigger for each section
  useGSAP(
    () => {
      if (typeof window === "undefined") return;

      const sections = [
        "#home",
        ...HomePageLinks.links.map((link) => link.href),
      ];
      const triggers: ScrollTrigger[] = [];

      sections.forEach((sectionId) => {
        const section = document.querySelector(sectionId);
        if (!section) return;

        const trigger = ScrollTrigger.create({
          trigger: section,
          start: "top 50%",
          end: "bottom 85%",
          onEnter: () => setActiveLink(sectionId),
          onEnterBack: () => setActiveLink(sectionId),
        });

        triggers.push(trigger);
      });

      // Clean up on unmount
      return () => {
        triggers.forEach((trigger) => trigger.kill());
      };
    },
    { dependencies: [], revertOnUpdate: true },
  );

  // Animate the indicator with GSAP when activeLink changes
  useEffect(() => {
    const activeElement = linkRefs.current[activeLink];
    const indicator = indicatorRef.current;
    const ctx = gsap.context(() => {
      if (activeElement && indicator && containerRef.current) {
        // Get positions relative to the container
        const containerRect = containerRef.current.getBoundingClientRect();
        const linkRect = activeElement.getBoundingClientRect();

        // Calculate relative position - center of the link
        const offsetLeft = linkRect.left - containerRect.left;
        const linkCenter = offsetLeft + linkRect.width / 2 - 10;
        const indicatorWidth = 20; // Set your desired width here
        if (activeLink === "#home") {
          // Hide the indicator for #home
          gsap.to(indicator, {
            //   opacity: 0,
            duration: 0.5,
            width: "0px",
            ease: "power4.inOut",
          });
        } else {
          // Show and animate the indicator for other links
          // Position is centered by offsetting half the indicator width
          gsap.to(indicator, {
            width: `${indicatorWidth}px`,
            x: linkCenter - indicatorWidth / 2,
            opacity: 1,
            duration: 0.5,
            ease: "power4.inOut",
          });
        }
      }
    });
    return () => {
      ctx.revert();
    };
  }, [activeLink]);

  // Set initial active link based on URL hash
  useEffect(() => {
    const initialHash = window.location.hash || "#home";
    setActiveLink(initialHash);
  }, []);

  // Handle link click
  const handleLinkClick =
    (href: string) =>
    (e: React.MouseEvent): void => {
      e.preventDefault();
      setActiveLink(href);
      const target = document.getElementById(`${href.replace("#", "")}`);
      if (target) {
        target.scrollIntoView();
      }
    };

  return (
    <nav className="w-full hidden md:block fixed bottom-12 z-[5000] pointer-events-auto">
      <div className="home-navigation-background mx-auto max-w-max rounded-full p-1 overflow-hidden">
        <div className="flex items-center pr-2">
          <Link
            href={"#home"}
            onClick={handleLinkClick("#home")}
            className="home-navigation-icon-background max-w-max rounded-full py-2 px-3"
          >
            <div className="w-5 h-5 flex items-center justify-center">
              <HomeIcon />
            </div>
          </Link>

          <div
            ref={containerRef}
            className="flex w-full items-center gap-5 px-[10px] relative"
          >
            {/* Animated indicator */}
            <motion.div
              ref={indicatorRef}
              className="absolute bottom-0 w-[20px] h-[2px] bg-[#78DBFF]"
              initial={{ opacity: 0 }}
            />

            {HomePageLinks.links.map((item, index) => {
              const isActive = activeLink === item.href;
              return (
                <div
                  key={`nav-link-${index}-${item.href}`}
                  className="flex relative  items-center justify-center flex-col"
                  ref={(el) => {
                    if (!el) return;
                    linkRefs.current[item.href] = el;
                  }}
                >
                  <FooterLink
                    className={`hover:text-white ${isActive ? "text-white" : "text-white/60"}`}
                    {...item}
                    onClick={handleLinkClick}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
