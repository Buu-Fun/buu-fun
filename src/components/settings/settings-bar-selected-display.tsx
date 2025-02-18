import React from "react";
import { Create3DLayout } from "../headers/image-layouts";

export default function SettingsBarSelectedDisplay() {
  return (
    <div className=" items-center justify-center  flex gap-2">
      <div className="relative  flex items-center w-8 h-8 justify-center  ">
        {/* will need to add dynamic Layouts for each options. */}
        <Create3DLayout
          containerClass=""
          ImageOneClassName="max-w-max h-6 w-6 rounded-lg w-8 -bottom-0 top-1  group-hover:rotate-[3deg] rotate-[-6deg] -left-1"
          ImageTwoClassName="max-w-max group-hover:rotate-[-3deg] w-6 h-6 rounded-lg -bottom-0  left-2"
        />
      </div>
      <p className="font-medium">3D Object</p>
    </div>
  );
}
