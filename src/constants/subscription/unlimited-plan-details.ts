import { SubscriptionDetails } from "./subscription-plans";

const coreFeatures: SubscriptionDetails["coreFeatures"] = [
  {
    title: "Get Access to unlimited Boards",
    description:
      "Create unlimited private and public boards with shareable links.",
  },
  {
    title: "Support: Dedicated Support",
    description: "A dedicated team member assists you via email and chat.",
  },
  {
    title: "API Access.",
    description: "Connect to external services using our RESTful API.",
  },
];

const additionalBenefits: SubscriptionDetails["restrictions"] = [
  {
    title: "Queue Priority: Highest Priority Queue",
    description: "Your generations are processed first.",
  },
  {
    title: "Premium Features: All Premium Features",
    description: "Access every advanced tool Buu AI offers.",
  },
  {
    title: "Asset Ownership: Private",
    description: "Keep your creations private and own them exclusively.",
  },
];

export const unlimitedPlanSubscriptionDetails: SubscriptionDetails = {
  coreFeatures,
  additionalBenefits,
};
