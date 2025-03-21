import StarIcon from "@/assets/icons/star-icon";
import React from "react";

export default function HeroHeader() {
  return (
    <header className="flex items-center justify-center flex-col">
      <div className="flex relative ">
        <div className="bg-gradient absolute animate-pulse  w-6 h-6  flex items-center justify-center  top-[15px] left-[28px] blur-[18.5px]" />
        <div className="">
          <StarIcon />
        </div>
        <div className="w-10 flex absolute -top-8 opacity-60 animate-pulse right-0 h-10">
          <StarIcon />
        </div>
      </div>
      <h1 className="text-xl text-gray-600 font-bold">Welcome to Buu AI</h1>
      <p className="text-5xl font-bold my-2 hero-gradient-text ">
        How can I help?{" "}
      </p>
    </header>
  );
}
