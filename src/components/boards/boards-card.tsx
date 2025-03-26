import CarOne from "@/assets/Image/boards/car_one.png";
import CarThree from "@/assets/Image/boards/car_three.png";
import CarTwo from "@/assets/Image/boards/car_two.png";
import ThreeDCube from "@/assets/Image/boards/three-d-cube.png";
import Image from "next/image";
import { ReactNode } from "react";

import ComicOne from "@/assets/Image/boards/comic-one.png";
import { pluralize } from "@/lib/utils";

type TBoardCard = {
  title: string;
  idea: number;
  images: ReactNode;
};

export const SingleColumnImage = (
  <SingleImageLayout alt={"sdasd"} url={ThreeDCube.src} />
);

export const TwoColumnImage = (
  <TwoColumnImageLayout
    media={[
      { url: ComicOne.src, alt: "new image" },
      { url: ComicOne.src, alt: "new image" },
    ]}
  />
);

export const ThreeColumnImage = (
  <ThreeColumnImageLayout
    media={[
      { url: CarOne.src, alt: "new image" },
      { url: CarTwo.src, alt: "new image" },
      { url: CarThree.src, alt: "new image" },
    ]}
  />
);

export default function BoardCards({ idea, images, title }: TBoardCard) {
  return (
    <div className="flex group  p-[18px] border-2 flex-col justify-center items-center gap-[25px]  border-buu bg-buu shadow-buu-inner backdrop-blur-3xl rounded-2xl">
      {images}
      <div className="min-w-[155px] flex items-center justify-center flex-col">
        <h3 className="text-white text-center max-w-[150px] truncate text-xl font-medium">
          {title}
        </h3>
        <p className="text-gray-400">
          {idea} {pluralize(idea, "Idea")}
        </p>
      </div>
    </div>
  );
}

type TSingleImageLayout = {
  url: string;
  alt: string;
};
export function SingleImageLayout({ alt, url }: TSingleImageLayout) {
  return (
    <div className="w-[106px] mt-2 relative  flex items-center   justify-center h-[100px] aspect-video">
      <div className="-rotate-[12deg] z-10 group-hover:scale-[1.15]  group-hover:rotate-[0deg]  transition-all duration-700 ease-in-out ">
        <Image
          src={url}
          alt={alt}
          width={250}
          height={250}
          className="w-[77px] h-[100px] object-cover rounded-2xl"
        />
      </div>
    </div>
  );
}
type TTwoColumnLayout = {
  media: [TSingleImageLayout, TSingleImageLayout];
};
export function TwoColumnImageLayout({ media }: TTwoColumnLayout) {
  return (
    <div className="w-[106px] mt-2 relative flex items-center justify-center h-[100px] aspect-video">
      <div className="-rotate-[10deg] left-0 absolute w-[77px] aspect-video group-hover:scale-110 group-hover:rotate-[-16deg]  transition-all duration-700 ease-in-out">
        <Image
          src={media[0].url}
          alt={media[0].alt}
          width={250}
          height={250}
          className="w-[77px] h-[100px] w-full rounded-2xl"
        />
      </div>
      <div className="rotate-12 right-0 absolute group-hover:rotate-[18deg] group-hover:scale-110  transition-all duration-700 ease-in-out ">
        <Image
          src={media[1].url}
          alt={media[1].alt}
          width={250}
          height={250}
          className="w-[77px] h-[100px] rounded-2xl"
        />
      </div>
    </div>
  );
}

type TThreeColumnLayout = {
  media: [TSingleImageLayout, TSingleImageLayout, TSingleImageLayout];
};
export function ThreeColumnImageLayout({ media }: TThreeColumnLayout) {
  return (
    <div className="w-[106px] mt-2 relative flex items-center justify-center h-[100px] aspect-video">
      {/* <div className="w-[77px]  bg-black" /> */}
      <div className="-rotate-[10deg] left-0 absolute w-[77px] group-hover:scale-110 aspect-video group-hover:-left-2 group-hover:rotate-[-16deg]  transition-all duration-700 ease-in-out">
        <Image
          src={media[0].url}
          alt={media[0].alt}
          width={250}
          height={250}
          className="w-[77px] h-[100px] w-full rounded-2xl"
        />
      </div>
      <div className="rotate-0 mx-auto z-10 absolute group-hover:scale-90 transition-all duration-700 ease-in-out">
        <Image
          src={media[2].url}
          alt={media[2].alt}
          width={250}
          height={250}
          className="w-[77px] h-[100px] rounded-2xl"
        />
      </div>
      <div className="rotate-12 right-0 absolute group-hover:scale-110 group-hover:rotate-[20deg]  group-hover:-right-2  transition-all duration-700 ease-in-out">
        <Image
          src={media[1].url}
          alt={media[1].alt}
          width={250}
          height={250}
          className="w-[77px] h-[100px] rounded-2xl"
        />
      </div>
    </div>
  );
}
