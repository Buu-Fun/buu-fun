import {
  GradientBlueyRed,
  GradientPurpleBlue,
  GradientRainbow,
} from "@/assets/Image/gradients";
import {
  Create3DLayout,
  CreateComicLayout,
  CreateVideoLayout,
} from "./image-layouts";
import QuickSelectCard from "./quick-select-card";

export default function HeaderQuickSelectButton() {
  return (
    <section>
      <div className="flex items-center justify-center gap-2 mt-4">
        <QuickSelectCard
          backgroundImage={<Create3DLayout />}
          gradient={<GradientPurpleBlue />}
          title={"3D object"}
        />
        <QuickSelectCard
          released={false}
          backgroundImage={<CreateComicLayout />}
          gradient={<GradientBlueyRed />}
          title={"Comic"}
        />
        <QuickSelectCard
          released={false}
          backgroundImage={<CreateVideoLayout />}
          gradient={<GradientRainbow />}
          title={"Video"}
        />
      </div>
    </section>
  );
}
