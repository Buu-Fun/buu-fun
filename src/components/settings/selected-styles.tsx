"use client";
import { LowPoly, Metallic, Realistic } from "@/assets/Image";
import { useAppSelector } from "@/hooks/redux";
import { SettingsState } from "@/lib/redux/features/settings";
import Image from "next/image";
import React, { ReactNode } from "react";
type TKey = Exclude<SettingsState["ThreeDStyle"] | "no_style", undefined>;
const iconByTitle: Record<TKey, ReactNode> = {
  LowPoly: (
    <Image
      src={LowPoly.src}
      width={100}
      height={100}
      alt="Low Poly Icon"
      className="w-full h-full rounded-full"
    />
  ),
  Metallic: (
    <Image
      src={Metallic.src}
      width={100}
      height={100}
      alt="Realistic Icon"
      className="w-full h-full rounded-full"
    />
  ),
  Realistic: (
    <Image
      src={Realistic.src}
      width={100}
      height={100}
      alt="Realistic Icon"
      className="w-full h-full rounded-full"
    />
  ),
  no_style: <div className="bg-[#2D323C] w-4 h-4 rounded-full" />,
} as Record<TKey, ReactNode>

export default function SelectedStyles() {
  const selected = useAppSelector((state) => state.settings.ThreeDStyle);
  const icon = selected ? iconByTitle[selected] : iconByTitle["no_style"];
  return (
    <div className="w-5 h-5 flex items-center justify-center p-0.5 shadow-buu-inner rounded-none bg-buu  ">
      {icon}
    </div>
  );
}
