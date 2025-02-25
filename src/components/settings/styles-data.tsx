import {
    cuteIcon,
    EnvironmentIcon,
    FantasyIcon,
    GunsIcon,
    LowPolyIcon,
    MetallicIcon,
    RealisticIcon,
    SciFiIcon,
    StylizedIcon,
    ToonIcon,
    VoxelIcon,
} from "@/assets/icons";
import { SettingsState } from "@/lib/redux/features/settings";
import Image from "next/image";
import { ReactNode } from "react";
export type TKey = Exclude<
  SettingsState["ThreeDStyle"] | "no_style",
  undefined
>;
export type TValue = {
  value: TKey;
  displayName: string;
  Icon: ReactNode;
};

export const iconByTitle: Record<TKey, TValue> = {
  LowPoly: {
    displayName: "Low Poly",
    value: "LowPoly",
    Icon: (
      <Image
        src={LowPolyIcon.src}
        width={100}
        height={100}
        alt="Low Poly Icon"
        className="w-full h-full rounded-full"
      />
    ),
  },
  Metallic: {
    displayName: "Metallic",
    value: "Metallic",
    Icon: (
      <Image
        src={MetallicIcon.src}
        width={100}
        height={100}
        alt="Realistic Icon"
        className="w-full h-full rounded-full"
      />
    ),
  },
  Realistic: {
    Icon: (
      <Image
        src={RealisticIcon.src}
        width={100}
        height={100}
        alt="Realistic Icon"
        className="w-full h-full rounded-full"
      />
    ),
    displayName: "Realistic",
    value: "Realistic",
  },
  Clay: {
    Icon: (
      <Image
        src={RealisticIcon.src}
        width={100}
        height={100}
        alt="Realistic Icon"
        className="w-full h-full rounded-full"
      />
    ),
    displayName: "Clay",
    value: "Clay",
  },

  Cute: {
    Icon: (
      <Image
        src={cuteIcon.src}
        width={100}
        height={100}
        alt="Cute Icon"
        className="w-full h-full rounded-full"
      />
    ),
    displayName: "Cute",
    value: "Cute",
  },
  Environment: {
    Icon: (
      <Image
        src={EnvironmentIcon.src}
        width={100}
        height={100}
        alt="Environment Icon"
        className="w-full h-full rounded-full"
      />
    ),
    displayName: "Environment",
    value: "Environment",
  },
  Fantasy: {
    Icon: (
      <Image
        src={FantasyIcon.src}
        width={100}
        height={100}
        alt="Fantasy Icon"
        className="w-full h-full rounded-full"
      />
    ),
    displayName: "Fantasy",
    value: "Fantasy",
  },
  SciFi: {
    Icon: (
      <Image
        src={SciFiIcon.src}
        width={100}
        height={100}
        alt="SciFi Icon"
        className="w-full h-full rounded-full"
      />
    ),
    displayName: "Sci-Fi",
    value: "SciFi",
  },
  Stylized: {
    Icon: (
      <Image
        src={StylizedIcon.src}
        width={100}
        height={100}
        alt="Stylized Icon"
        className="w-full h-full rounded-full"
      />
    ),
    displayName: "Stylized",
    value: "Stylized",
  },
  Toon: {
    Icon: (
      <Image
        src={ToonIcon.src}
        width={100}
        height={100}
        alt="Toon Icon"
        className="w-full h-full rounded-full"
      />
    ),
    displayName: "Toon",
    value: "Toon",
  },

  Voxel: {
    Icon: (
      <Image
        src={VoxelIcon.src}
        width={100}
        height={100}
        alt="Voxel Icon"
        className="w-full h-full rounded-full"
      />
    ),
    displayName: "Voxel",
    value: "Voxel",
  },
  Weapons: {
    Icon: (
      <Image
        src={GunsIcon.src}
        width={100}
        height={100}
        alt="Weapons Icon"
        className="w-full h-full rounded-full"
      />
    ),
    displayName: "Guns",
    value: "Weapons",
  },
  no_style: {
    Icon: <div className="bg-[#2D323C] w-4 h-4 rounded-full" />,
    displayName: "No Style",
    value: "no_style",
  },
} as Record<TKey, TValue>;
