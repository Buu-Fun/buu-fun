import React from "react";
import { Create3DLayout } from "../headers/image-layouts";
import Image from "next/image";
import { ThreeDMeshIcon } from "@/assets/Image";
import { ChevronUp } from "lucide-react";
import SettingsBarPopOver from "./settings-bar-pop-over-button";
import SettingsBarSelectedDisplay from "./settings-bar-selected-display";
export default function SettingsBar() {
  return (
    <div className="flex group items-center justify-end">
      <div className="px-4 rounded-2xl py-2 mb-1 border items-center justify-center mr-4 flex gap-2 bg-buu shadow-buu-inner">
        <SettingsBarSelectedDisplay />
        <div className="px-1 py-1 shadow-buu-inner bg-buu rounded-lg flex items-center justify-center">
          {/* WIll need to change this icon by the state  */}
          {/* 3d mesh icons */}
          <div className="w-4 h-4 rounded-full overflow-hidden ">
            <Image
              src={ThreeDMeshIcon.src}
              width={250}
              height={250}
              alt="3d MeshIcon"
            />
          </div>
        </div>
        <div className="flex items-center  justify-center">
          <div className="h-6  my-auto  bg-white w-[2px] bg-buu shadow-buu-inner " />
          <SettingsBarPopOver />
        </div>
      </div>
    </div>
  );
}
