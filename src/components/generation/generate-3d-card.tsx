import threeDCube from "@/assets/Image/boards/three-d-cube.png";
import { BorderBeam } from "@/components/ui/border-beam";
import Image from "next/image";

import {
    BoneIcon,
    DownloadIcon,
    FilterIcon,
    MagicPenIcon,
    MaximizeIcon,
    RetryIcon
} from "@/assets/icons";
import { Message } from "@/lib/redux/features/chat";
import { cn } from "@/lib/utils";

type TGenerate3DCard = {
  isGenerating: boolean;
  chatMessage: Message;
};

export default function Generate3DCard({
  isGenerating,
  chatMessage,
}: TGenerate3DCard) {
  return (
    <div className="max-w-[264px] relative  p-0 aspect-auto">
      <div className="relative -z-[10] rounded-2xl  overflow-hidden">
        <Image
          src={chatMessage.url ?? threeDCube.src}
          width={1920}
          height={1080}
          alt="hello"
          className={cn(" w-full h-full  object-cover", {
            "blur-md": isGenerating,
          })}
        />
      </div>
      <div className="absolute -bottom-4  z-50 flex items-center gap-2 justify-center w-full">
        <div className=" bg-buu-button shadow-buu-button min-w-[30px]   rounded-md flex items-center justify-center p-1.5">
          <div className="w-full h-full ">
            <RetryIcon />
          </div>
        </div>
        <div className=" bg-buu-button shadow-buu-button min-w-[30px]  rounded-md flex items-center justify-center p-1.5">
          <div className="w-full h-full ">
            <FilterIcon />
          </div>
        </div>
        <div className=" bg-buu-button shadow-buu-button min-w-[30px]  rounded-md flex items-center justify-center p-1.5">
          <div className="w-full h-full ">
            <MagicPenIcon />
          </div>
        </div>
        <div className=" bg-buu-button shadow-buu-button min-w-[30px]  rounded-md flex items-center justify-center p-1.5">
          <div className="w-full h-full ">
            <BoneIcon />
          </div>
        </div>
        <div className=" bg-buu-button shadow-buu-button min-w-[30px]  rounded-md flex items-center justify-center p-1.5">
          <div className="w-full h-full ">
            <MaximizeIcon />
          </div>
        </div>
        <div className=" bg-buu-button shadow-buu-button min-w-[30px]  rounded-md flex items-center justify-center p-1.5">
          <div className="w-full h-full ">
            <DownloadIcon />
          </div>
        </div>
      </div>
      <BorderBeam
        containerClassName={cn("border-2  rounded-2xl", {
          hidden: !isGenerating,
        })}
        initialOffset={0}
        size={250}
        colorFrom="rgba(119, 217, 253,1)"
        colorTo="rgba(119, 217, 253,1)"
        className="border-2 rounded-2xl z-50 relative"
      />
    </div>
  );
}
