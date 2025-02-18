import { gradientBlueyRed } from "@/assets/Image";
import GradientRainbowRaw from "@/assets/Image/gradient-rainbow";
import GradientPurpleRawSvg from "@/assets/Image/Help Card";
import Image from "next/image";
import {
  Create3DLayout,
  CreateComicLayout,
  CreateVideoLayout,
} from "./image-layouts";
import QuickSelectCard from "./quick-select-card";
import GradientBlueyRed from "@/assets/Image/gradient-bluey-red";

export default function HeaderQuickSelectButton() {
  return (
    <section>
      <div className="flex items-center justify-center gap-2 mt-4">
        <QuickSelectCard
          backgroundImage={<Create3DLayout />}
          gradient={<GradientPurpleRawSvg />}
          title={"3D object"}
        />
        <QuickSelectCard
          backgroundImage={<CreateComicLayout />}
          gradient={<GradientBlueyRed />}
          title={"Comic"}
        />
        <QuickSelectCard
          backgroundImage={<CreateVideoLayout />}
          gradient={<GradientRainbowRaw />}
          title={"Video"}
        />
      </div>
    </section>
  );
}
