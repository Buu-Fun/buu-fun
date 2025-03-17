import { SubscriptionDetails } from "./subscription-plans";

const coreFeatures: SubscriptionDetails["coreFeatures"] = [
  {
    title: "Get Access to Boards",
    description: "Create up to 5 private boards to organize your 3D creations",
  },
  {
    title: "Email & Chat Support",
    description: "Get help via email and chat.",
  },
  {
    title: "API Access",
    description: "Connect to external services using our RESTful API.",
  },
];

const additionalBenefits: SubscriptionDetails["additionalBenefits"] = [
  {
    title: "Asset Ownership",
    description: "Keep your creations private and own them exclusively.",
  },
];

const restrictions: SubscriptionDetails["restrictions"] = [
  {
    title: "Queue Priority - Standard Queue",
    description: "Your generations are processed in the order received.",
  },
];

export const basicPlanSubscriptionDetails: SubscriptionDetails = {
  coreFeatures,
  additionalBenefits,
  restrictions,
};
