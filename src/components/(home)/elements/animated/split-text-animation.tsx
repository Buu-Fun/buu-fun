import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMemo, useRef } from "react";
export default function SplitTextAnimation({
  text,
  isChanged,
}: {
  text: string;
  isChanged?: boolean;
}) {
  const textRef = useRef<HTMLElement>(null);

  const splitText = useMemo(() => {
    if(isChanged){}
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span
          className="word opacity-0 will-change-[filter_opacity_transform]  relative "
          key={`${index}-${word}`}
        >
          {word}
        </span>
      );
    });
  }, [text, isChanged]);

  useGSAP(() => {
    if (!textRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".word",
        { visibility: "hidden", opacity: 0 },
        {
          visibility: "visible",
          opacity: 1,
          ease: "power4.inOut",
          duration: 2.5,
          stagger: 0.2,
        }
      );
      gsap.fromTo(
        ".word",
        { filter: "blur(4px)", y: 100 }, // Ensure it starts from blur
        {
          filter: "blur(0px)",
          y: 0,
          ease: "power4.inOut",
          duration: 2.5,
          stagger: 0.15,
        }
      );
    }, textRef.current);

    return () => {
      ctx.revert();
    };
  }, [splitText, isChanged]);
  return <span ref={textRef} className="relative">{splitText}</span>;
}
