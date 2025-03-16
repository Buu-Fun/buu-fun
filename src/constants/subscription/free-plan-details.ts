import { SubscriptionDetails } from "./subscription-plans";

const coreFeatures: SubscriptionDetails["coreFeatures"] = [
  {
    title: "Basic 3D Model Generation (Low-Poly)",
    description: "Up to 5,000 polygons per model",
  },
  {
    title: "Basic Texture Generation",
    description: "1K resolution textures",
  },
  {
    title: "Basic Color & Material Mapping",
    description: "No advanced PBR support",
  },
  {
    title: "Public Asset Generation",
    description:
      "All models are public and accessible to the Leonardo AI community",
  },
  {
    title: "Watermarked Previews",
    description: "Download with watermark (removable via premium plans)",
  },
  {
    title: "File Format Support: GLB, OBJ",
    description: "Limited to Standard Mesh Exports",
  },
];

const restrictions: SubscriptionDetails["restrictions"] = [
  {
    title: "No Private Model Generation",
    description: "All generated assets are visible to the community",
  },
  {
    title: "No Advanced Model Customization",
    description:
      "No access to topology optimization, retopology, or fine-tuning",
  },
  {
    title: "No Auto-Rigging or Animation",
    description: "Auto-rigging and animation features are unavailable",
  },
  {
    title: "Limited Cloud Processing",
    description: "Standard queue time (up to 5 minutes per request)",
  },
  {
    title: "No API Access",
    description: "No integration for developers",
  },
  {
    title: "No Priority Support",
    description: "Access only to community forums",
  },
];

export const FreePlanSubscriptionDetails: SubscriptionDetails = {
  coreFeatures,
  restrictions,
};
