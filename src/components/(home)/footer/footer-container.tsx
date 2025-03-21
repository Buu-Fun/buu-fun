import GetInTouchIcon from "@/assets/icons/get-in-touch-icon";
import TelegramIconWhite from "@/assets/icons/Telegram-icon-white";
import TwitterIcon from "@/assets/icons/TwitterIcon";
import { CaveBackgroundImage } from "@/assets/Image";
import Bounded from "@/components/ui/Bounded";
import { useGSAP } from "@gsap/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import React, { useRef } from "react";
import { HomePageLinks, ResourcesLinks } from "./footer-data";
import { FooterLinks } from "./footer-link";
import Link from "next/link";
import { DiscordIcon } from "@/assets/icons";
import { LINKS } from "@/constants/social-links";
gsap.registerPlugin(useGSAP);
interface FooterContainerProps {
  copyright?: string;
}

const FooterContainer: React.FC<FooterContainerProps> = ({
  copyright = "© 2025 BUU.FUN - All rights reserved",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Register ScrollTrigger with GSAP
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        // Initialize ScrollTrigger for the reveal effect
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: 1,
          },
        });

        // Animate the image reveal
        tl.fromTo(
          imageRef.current,
          {
            y: "100%",
          },
          {
            y: "0%",
            duration: 1.5,
            ease: "power2.out",
          }
        );

        // Animate the content
        tl.fromTo(
          contentRef.current,
          {
            y: 50,
          },
          {
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=1"
        );
      });

      return () => {
        ctx.revert();
      };
    },
    { dependencies: [], revertOnUpdate: true }
  );

  // Framer Motion parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.8, 1]);

  return (
    <div
      ref={containerRef}
      className="w-full md:h-[90dvh] relative overflow-hidden "
    >
      {/* Content Section */}
      <Bounded
        ref={contentRef}
        className="relative z-10  max-w-screen-2xl  w-full md:h-[50%] md:mt-32  "
      >
        <div
          style={{
            transform: "translateZ(0)",
          }}
          className=" bg-background/20 flex flex-col justify-between   backdrop-blur-[20px] rounded-2xl py-6  px-8  h-full"
        >
          <div className="pt-12 grid gap-4 md:gap-0 md:grid-cols-[75%_25%]">
            <div className="flex flex-col  ">
              <div className="flex items-center gap-2">
                <GetInTouchIcon />
                <p className="blue-text-clip">Get in touch</p>
              </div>
              <Link
                target="_blank"
                href={LINKS.CONTACT_SUPPORT_MAIL}
                className="text-3xl md:text-5xl lg:text-6xl  font-bold grayish-text-gradient"
              >
                support@buu.fun
              </Link>
            </div>
            <div className="flex w-full  justify-between gap-12">
              <FooterLinks {...HomePageLinks} />
              <FooterLinks {...ResourcesLinks} />
            </div>
          </div>
          {/* Twitter Icons */}
          <div className="flex space-x-4 mt-8">
            <Link target="_blank" href={LINKS.TWITTER}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="footer-icon-bg p-3 rounded-full"
              >
                <div className="w-6 h-6">
                  <TwitterIcon />
                </div>
              </motion.div>
            </Link>

            <Link target="_blank" href={LINKS.TELEGRAM}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="footer-icon-bg p-3 rounded-full"
              >
                <div className="w-6 h-6">
                  <TelegramIconWhite />
                </div>
              </motion.div>
            </Link>
            <Link target="_blank" href={LINKS.DISCORD}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="footer-icon-bg p-3 rounded-full"
              >
                <div className="w-6 h-6">
                  <DiscordIcon />
                </div>
              </motion.div>
            </Link>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between py-4  mb-4 md:py-8 bg-background/10 backdrop-blur-[20px] px-8 rounded-2xl   mt-4 items-start lg:items-center w-full">
          <p className="text-neutral-400 mb-4 lg:mb-0">{copyright}</p>

          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <Link
              href="/terms"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy-policy"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/aup"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              User Acceptance Policy
            </Link>
            <Link
              href="/cookie-policy"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </Bounded>

      {/* Image Container */}
      <div ref={imageRef} className="absolute left-0 top-0 w-full h-full">
        <motion.div style={{ y, opacity }} className="w-full relative h-full">
          {/* footer-gradient */}
          <div className="blur-[100px] footer-gradient  rounded-full w-[120%] h-[100%]  -left-[10%] absolute -top-[50%]" />
          <Image
            alt="Cave background"
            src={CaveBackgroundImage} // Replace with actual path
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
};

export default FooterContainer;
