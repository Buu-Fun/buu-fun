import { SubscriptionDetails } from "./subscription-plans";

const coreFeatures: SubscriptionDetails["coreFeatures"] = [
  {
    title: "Credits: Unlimited",
    description: "Tailored credit limits for your needs.",
  },
  {
    title: "Boards: Unlimited Private & Public Boards with Team Collaboration",
    description: "Create unlimited boards with advanced team-sharing features.",
  },

  {
    title: "Support: Dedicated Account Manager (Email, Chat & Phone)",
    description: "Personalized support via email, chat, and phone.",
  },
  {
    title: "API Support: Yes.",
    description: "Connect to external services using our RESTful API.",
  },
];

const additionalBenefits: SubscriptionDetails["additionalBenefits"] = [
  {
    title: "Custom Trained Styles: Yes",
    description:
      "High fidelity on-demand fine-tuned and pre-trained styles for your games, props, or asset custom style.",
  },
  {
    title: "Queue Priority: Highest Priority Queue",
    description: "Your generations are processed first.",
  },
  {
    title: "Premium Features: Custom Integrations & Team Tools",
    description: " Bespoke solutions for team workflows.",
  },
  {
    title: "Asset Ownership: Private",
    description: "Keep your creations private and own them exclusively.",
  },
];

export const enterprisePlanSubscriptionDetails: SubscriptionDetails = {
  coreFeatures,
  additionalBenefits,
};
