import StarIcon from "@/assets/icons/star-icon";
import React, { ReactNode } from "react";
type THeroHeader = {
  icon?: ReactNode;
  title?: ReactNode;
  heroDescription?: ReactNode;
};
export default function HeroHeader({
  icon = <StarHomeIcon />,
  title = "Welcome to Buu AI",
  heroDescription = <HeroDescription />,
}: THeroHeader) {
  return (
    <header className="flex relative items-center justify-center flex-col">
      {/*  */}
      <div className="w-[176px] h-[334px] bg-overlay-primary bg-[#6A69D580]  rounded-full  absolute -top-[200px] -z-10 blur-[100px]  rotate-[-10deg]" />
      {icon}
      <h1 className="text-lg text-gray-500 font-medium ">{title}</h1>
      {heroDescription}
    </header>
  );
}

export function StarHomeIcon() {
  return (
    <div className="flex relative ">
      <div className="bg-gradient absolute animate-pulse  w-6 h-6  flex items-center justify-center  top-[15px] left-[28px] blur-[18.5px]" />
      <div className="">
        <StarIcon />
      </div>
      <div className="w-10 flex absolute -top-8 opacity-60 animate-pulse right-0 h-10">
        <StarIcon />
      </div>
    </div>
  );
}

export function HeroDescription() {
  return (
    <p className="text-5xl font-bold my-2 hero-gradient-text ">
      How can I help?{" "}
    </p>
  );
}
