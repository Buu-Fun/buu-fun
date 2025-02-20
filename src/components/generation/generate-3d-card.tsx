import threeDCube from "@/assets/Image/boards/three-d-cube.png";
import { BorderBeam } from "@/components/ui/border-beam";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  BoneIcon,
  DownloadIcon,
  FilterIcon,
  MagicPenIcon,
  MaximizeIcon,
  RetryIcon,
} from "@/assets/icons";
import { Message } from "@/lib/redux/features/chat";
import { cn } from "@/lib/utils";
import { ToolTips } from "./handle-tool-calls";
import ToolBarToolTips from "./tool-bar-tool-tips";

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
          src={threeDCube.src}
          width={1920}
          height={1080}
          alt="hello"
          className={cn(" w-full h-full  object-cover", {
            "blur-md": isGenerating,
          })}
        />
      </div>
      <div className="absolute -bottom-4  z-50 flex items-center gap-2 justify-center w-full">
        <ToolBarToolTips />
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
