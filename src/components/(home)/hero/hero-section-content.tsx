
import { AnimatedBringYourIdeas } from "./bring-ideas";
import ImageComparisonSlider from "./image-comparison-slider";

export default function BringYourIdeasSection() {
  return (
    <section id="bring-your-ideas" className="w-full relative">
      <ImageComparisonSlider>
        <AnimatedBringYourIdeas />
      </ImageComparisonSlider>
    </section>
  );
}
