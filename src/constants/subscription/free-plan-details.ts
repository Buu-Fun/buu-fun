import { SubscriptionDetails } from "./subscription-plans";

const coreFeatures: SubscriptionDetails["coreFeatures"] = [
  {
    title: "Basic 3D Model Generation",
    description: "Generate up to 10 3D models each month.",
  },
  {
    title: "Queue Priority - Standard Queue",
    description:
      "Your generations are processed in the order received.",
  },
];

const restrictions: SubscriptionDetails["restrictions"] = [
  {
    title: "No Boards",
    description: "Upgrade to organize your creations into projects.",
  },
  {
    title: "No Priority Support",
    description: "Access help through our community forums.",
  },
  {
    title: "No Premium Features",
    description: "Upgrade to unlock advanced tools.",
  },
  {
    title: "Asset Ownership",
    description:
      "Public (CC 4.0) Creations are shared publicly under a Creative Commons license.",
  },
  {
    title: "No API Access",
    description: "Connect to external services using our RESTful API.",
  },
];

export const FreePlanSubscriptionDetails: SubscriptionDetails = {
  coreFeatures,
  restrictions,
};
