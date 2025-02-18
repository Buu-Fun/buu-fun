"use client";
import { LowPoly, Realistic } from "@/assets/Image";
import MetallicIcon from "@/assets/Image/metallic";
import { useAppSelector } from "@/hooks/redux";
import { SettingsState } from "@/lib/redux/features/settings";
import Image from "next/image";
import React, { ReactNode } from "react";

const iconByTitle: Record<SettingsState["ThreeDStyle"], ReactNode> = {
  low_poly: (
    <Image
      src={LowPoly.src}
      width={100}
      height={100}
      alt="Low Poly Icon"
      className="w-full h-full rounded-full"
    />
  ),
  metallic: <MetallicIcon />,
  no_style: <div className="bg-[#2D323C] w-4 h-4 rounded-full" />,
  realistic: (
    <Image
      src={Realistic.src}
      width={100}
      height={100}
      alt="Realistic Icon"
      className="w-full h-full rounded-full"
    />
  ),
};

export default function SelectedStyles() {
  const selected = useAppSelector((state) => state.settings.ThreeDStyle);
  const icon = iconByTitle[selected];
  return (
    <div className="w-5 h-5 flex items-center justify-center p-0.5 shadow-buu-inner rounded-none bg-buu  ">
      {icon}
    </div>
  );
}
