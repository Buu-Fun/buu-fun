import {
  BgExcludedGrid,
  BgGrid,
  HomeBackground,
  MutantAlien,
  MutantAlienMesh,
  MutantAlienWireFrame,
  mutantAutoRigging,
} from "@/assets/Image";
import ExcludedImage from "./exluded-image.png";
import { robLoxIcon } from "@/assets/icons";

export const features = [
  {
    title: "Instant 3D Generation",
    description:
      "Input a prompt or image, and watch BUU.FUN craft a detailed 3D model in seconds.",
    image: MutantAlien.src,
    bgExcluded: ExcludedImage.src,
    background: HomeBackground.src,
  },
  {
    title: "Auto Rigging",
    description:
      "Automatically add skeletons to your models, making them ready for animation without manual effort.",
    image: mutantAutoRigging.src,
    bgExcluded: BgExcludedGrid.src,
    background: BgGrid.src,
  },
  {
    title: "Texture Remeshing",
    description:
      "Enhance your models with high-quality textures that adapt seamlessly to any design.",
    image: MutantAlienMesh.src,
    bgExcluded: BgExcludedGrid.src,
    background: BgGrid.src,
  },
  {
    title: "One-Click Animation",
    description:
      "Bring your models to life with automated animations tailored to your creation.",
    image: MutantAlien.src,
    bgExcluded: BgExcludedGrid.src,
    background: BgGrid.src,
  },
  {
    title: "Roblox Studio Integration",
    description:
      "Upcoming LUA plugin allows direct import of your models into Roblox Studio for game development",
    image: MutantAlien.src,
    bgExcluded: BgExcludedGrid.src,
    background: BgGrid.src,
    scan: true,
    robloxTitle: "Integrating to Roblox Studio...",
    robloxIcon: robLoxIcon.src,
  },
];

export type TFeatureData = typeof features;
