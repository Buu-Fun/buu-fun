import threeDCube from "@/assets/Image/boards/three-d-cube.png";
import { BorderBeam } from "@/components/ui/border-beam";
import { cn } from "@/lib/utils";
import Image from "next/image";
import ToolBarToolTips from "./tool-bar-tool-tips";
import "@google/model-viewer";

type TImages = {
  imageUrl: string | null;
};
type TGenerate3DCard = {
  isGenerating: boolean;
  images: TImages;
  showToolTip: boolean;
  modelUrl?: string;
  status: "Success" | "inProgress";
};

export default function Generate3DCard({
  isGenerating,
  images,
  showToolTip,
  modelUrl,
  status,
}: TGenerate3DCard) {
  return (
    <div className="w-[264px] h-[370px] relative p-0">
      <div className="relative -z-[10] rounded-2xl w-full h-full overflow-hidden">
        {status === "Success" && modelUrl ? (
          <div className="w-full h-full">
            <model-viewer
              style={{
                width: "100%",
                height: "100%",
                display: "block",
                "--poster-color": "transparent",
                "--progress-mask": "none",
                "--progress-bar-height": "0px",
              }}
              src={modelUrl}
              ios-src=""
              poster={images.imageUrl}
              alt="A 3D model of an astronaut"
              shadow-intensity="1"
              seamless-poster
              camera-controls
              auto-rotate
              touch-action="pan-y"
              interaction-prompt="none"
              ar
            />
          </div>
        ) : (
          <Image
            src={images?.imageUrl ?? threeDCube.src}
            width={1920}
            height={1080}
            alt="3D model preview"
            className={cn("w-full h-full object-cover", {
              "blur-md": isGenerating,
            })}
          />
        )}
      </div>

      <div
        className={cn(
          "absolute -bottom-4 z-50 flex items-center gap-2 justify-center w-full",
          {
            hidden: !showToolTip,
          }
        )}
      >
        <ToolBarToolTips />
      </div>

      <BorderBeam
        containerClassName={cn("border-2 rounded-2xl", {
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
