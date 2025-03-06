import BackgroundImage from "./background-image-component";
import { AnimatedBringYourIdeas } from "./bring-ideas";
import ImageComparisonSlider from "./image-comparison-slider";

export default function BringYourIdeasSection() {
  return (
    <section id="bring-your-ideas" className="w-full relative">
      <BackgroundImage />
      <ImageComparisonSlider />
      <div className="h-screen relative w-full">
        <AnimatedBringYourIdeas />
      </div>
      <div className="z-10 relative border w-full "></div>
    </section>
  );
}
