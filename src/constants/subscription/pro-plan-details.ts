import { SubscriptionDetails } from "./subscription-plans";

const coreFeatures: SubscriptionDetails["coreFeatures"] = [
  {
    title: "Get Access to Boards- 20 Private Boards + Public Boards",
    description:
      "Create up to 20 private boards and unlimited public boards with shareable links.",
  },
  {
    title: "Priority Support via Email & Chat",
    description: "Enjoy faster responses via email and chat.",
  },
  {
    title: "API Access",
    description: "Connect to external services using our RESTful API.",
  },
];

const additionalBenefits: SubscriptionDetails["restrictions"] = [
  {
    title: "Queue Priority - High Priority Queue",
    description: "Your generations are processed faster than lower tiers.",
  },
  {
    title: "Premium Features - Advanced Customization",
    description: "Unlock tools for finer control over your 3D models.",
  },
  {
    title: "Asset Ownership",
    description: "Keep your creations private and own them exclusively.",
  },
];

export const proPlanSubscriptionDetails: SubscriptionDetails = {
  coreFeatures,
  // restrictions,
  additionalBenefits,
};
