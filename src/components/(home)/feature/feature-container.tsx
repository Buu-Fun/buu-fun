import { HomeBackground } from "@/assets/Image";
import Image from "next/image";
import { ReactNode } from "react";
import exludedImage from "./exluded-image.png";
export default function FeatureContainer(
  {
    // children,
  }: {
    children: ReactNode;
  }
) {
  return (
    <div className="relative h-screen w-full overflow-visible ">
      <div className="h-full absolute top-0 left-0 w-full ">
        <Image
          src={HomeBackground}
          width={1920}
          height={1080}
          className="w-full h-full object-cover blur-[2px]"
          alt="Home page background"
          priority
        />
      </div>

      <div className="absolute top-[14%] left-[33.5%] w-full h-full  overflow-visible">
        <Image
          width={1080}
          height={1080}
          src={exludedImage.src}
          alt="Wireframe version"
          className="w-[32.81%] h-[74.24%]   object-cover "
        />
      </div>
    </div>
  );
}
