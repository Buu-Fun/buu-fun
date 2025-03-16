import { SubscriptionDetails } from "./subscription-plans";

const coreFeatures: SubscriptionDetails["coreFeatures"] = [
  {
    title: "Basic 3D Model Generation",
    description: "Generate up to 10 3D models each month.",
  },
  {
    title: "Community Support",
    description: "Access help through our community forums.",
  },
  {
    title: "Basic Color & Material Mapping",
    description: "No advanced PBR support",
  },
  {
    title: "Public Asset Generation",
    description:
      "Public (CC 4.0) Creations are shared publicly under a Creative Commons license",
  },
  {
    title: "File Format Support: GLB, OBJ",
    description: "Limited to Standard Mesh Exports",
  },
];

const restrictions: SubscriptionDetails["restrictions"] = [
  {
    title: "No Boards",
    description: "Upgrade to organize your creations into projects.",
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
