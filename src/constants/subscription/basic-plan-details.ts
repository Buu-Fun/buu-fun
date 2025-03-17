import { SubscriptionDetails } from "./subscription-plans";

const coreFeatures: SubscriptionDetails["coreFeatures"] = [
  {
    title: "Private Asset Generation",
    description: "All generated assets remain private",
  },
  {
    title: "Standard 3D Model Generation",
    description: "Up to 20,000 polygons per model",
  },
  {
    title: "AI-Powered Texture Generation",
    description: "Up to 2K resolution textures (PBR support enabled)",
  },
  {
    title: "Game-Optimized Models",
    description: "Automatic retopology for better game engine performance",
  },
  {
    title: "Access to AI Auto-Rigging",
    description:
      "Convert a static mesh into a rigged character (Humanoid Only)",
  },
  {
    title: "File Format Support",
    description: "GLB, OBJ, FBX",
  },
  {
    title: "Export Presets for Game Engines",
    description: "Unity & Unreal-compatible models with optimized texture maps",
  },
];

const additionalBenefits: SubscriptionDetails["additionalBenefits"] = [
  {
    title: "Basic AI Animations",
    description: "Idle, Walk Cycle included (requires 5 credits per animation)",
  },
  {
    title: "Fast Processing Queue",
    description: "Models generated within 60 seconds",
  },
  {
    title: "Early Access to New Features",
    description: "Up to 2K resolution textures (PBR support enabled)",
  },
  {
    title: "Game-Optimized Models",
    description: "Beta-test upcoming AI features",
  },
  {
    title: "Discord Priority Support",
    description: "Direct access to support channels",
  },
];

const restrictions: SubscriptionDetails["restrictions"] = [
  {
    title: "No Fine-Tuned AI Training",
    description: "Cannot train AI models on personal datasets",
  },
];

export const basicPlanSubscriptionDetails: SubscriptionDetails = {
  coreFeatures,
  additionalBenefits,
  restrictions,
};
