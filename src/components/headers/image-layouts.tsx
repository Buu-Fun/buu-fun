"use client";
import {
  boatAndFlowers,
  comicBoyCropped,
  comicGirl,
  Elephant,
  hotAirBallon,
  RoundedLamp3d,
  StepShape3d,
} from "@/assets/Image";
import { cn } from "@/lib/utils";
import Image from "next/image";


export function Create3DLayout({
  ImageOneClassName,
  ImageTwoClassName,
  containerClass,
}: {
  ImageOneClassName?: string;
  ImageTwoClassName?: string;
  containerClass?: string;
}) {
  return (
    <div className={cn(containerClass)}>
      <Image
        src={RoundedLamp3d.src}
        className={cn(
          "max-w-28 rounded-2xl transition-all duration-500 ease-in-out group-hover:rotate-[-10deg] rotate-[-6deg] right-8 z-0  absolute -bottom-2",
          ImageOneClassName
        )}
        alt="Comic boy"
        width={720}
        height={480}
      />
      <Image
        src={StepShape3d.src}
        className={cn(
          "z-10 max-w-24  shadow-inner shadow-white drop-shadow-md rounded-2xl transition-all duration-500 ease-in-out group-hover:rotate-[15deg] rotate-[12deg] right-0  absolute -bottom-9",
          ImageTwoClassName
        )}
        alt="Comic boy"
        width={720}
        height={480}
      />
    </div>
  );
}
export function CreateComicLayout({
  ImageOneClassName,
  ImageTwoClassName,
  containerClass,
}: {
  ImageOneClassName?: string;
  ImageTwoClassName?: string;
  containerClass?: string;
}) {
  return (
    <div className={cn(containerClass)}>
      <Image
        src={comicBoyCropped.src}
        className={cn(
          "max-w-28 rounded-2xl transition-all duration-500 ease-in-out group-hover:rotate-[-10deg] rotate-[-6deg] right-8 absolute translate-y-[65px] z-10",
          ImageOneClassName
        )}
        alt="Comic boy"
        width={720}
        height={480}
      />
      <Image
        src={comicGirl.src}
        className={cn(
          "z-0 max-w-24  shadow-inner shadow-white drop-shadow-md rounded-2xl transition-all duration-500 ease-in-out group-hover:rotate-[15deg] rotate-[12deg] right-0  absolute -bottom-16",
          ImageTwoClassName
        )}
        alt="Comic boy"
        width={720}
        height={480}
      />
    </div>
  );
}

export function CreateVideoLayout() {
  return (
    <div>
      <div>
        <Image
          src={hotAirBallon.src}
          className="max-w-32 aspect-[6/4] w-full rounded-2xl transition-all duration-500 ease-in-out group-hover:rotate-[-0deg] rotate-[6deg] right-4 z-[3]  absolute -bottom-6"
          alt="Comic boy"
          width={720}
          height={480}
        />
        <Image
          src={boatAndFlowers.src}
          className="z-[2] max-w-32 aspect-[6/4] object-cover object-top shadow-inner shadow-white drop-shadow-md rounded-2xl transition-all duration-500 ease-in-out group-hover:rotate-[-6deg] rotate-[-12deg] right-0  absolute -bottom-2"
          alt="Comic boy"
          width={720}
          height={480}
        />
        <Image
          src={Elephant.src}
          className=" max-w-40 w-full rounded-2xl transition-all duration-500 ease-in-out group-hover:rotate-[-10deg] rotate-[-6deg] right-8 z-[1]  absolute -bottom-2"
          alt="Comic boy"
          width={720}
          height={480}
        />
      </div>
    </div>
  );
}
