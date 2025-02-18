"use client";
import { ReactNode } from "react";
export default function QuickSelectCard({
  title,
  gradient,
  backgroundImage,
}: {
  title: ReactNode;
  gradient: ReactNode;
  backgroundImage: ReactNode;
}) {
  return (
    <button className="p-[16px] group w-72  aspect-video   overflow-hidden  h-full rounded-3xl flex relative">
      <div className="z-10 text-2xl font-medium relative text-white text-left">
        <p>
          Help me to create <br /> {title}
        </p>
      </div>
      <div className="absolute w-full h-full top-0 left-0">{gradient}</div>
      {backgroundImage}
    </button>
  );
}
