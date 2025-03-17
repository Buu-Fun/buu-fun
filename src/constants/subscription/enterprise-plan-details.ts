import { SubscriptionDetails } from "./subscription-plans";

const coreFeatures: SubscriptionDetails["coreFeatures"] = [
  {
    title: "Fully Private & Enterprise-Level Security",
    description: "End-to-end encryption for proprietary assets",
  },
  {
    title: "Custom AI Model Training",
    description: "Train Leonardo AI on your proprietary datasets",
  },
  {
    title: "Real-Time Asset Pipeline Integration",
    description: "AI-powered bulk model generation for large-scale productions",
  },
  {
    title: "Multi-Resolution Asset Generation",
    description: "Up to 500,000 polygon models with auto-LOD generation",
  },
  {
    title: "Full AI Auto-Rigging & Animation Suite",
    description: "Generate custom-rigged humanoids, creatures & props",
  },
  {
    title: "High-Fidelity Texturing",
    description:
      "Supports 4K-8K PBR Textures with procedural material blending",
  },
  {
    title: "Multi-Platform Export",
    description:
      "Optimized models for Unreal Engine, Unity, Maya, Blender, Roblox, VRChat, and Fortnite Creative",
  },
  {
    title: "On-Premise AI Deployment",
    description: "Deploy Leonardo AI on your studio's private servers",
  },
];

const additionalBenefits: SubscriptionDetails["additionalBenefits"] = [
  {
    title: "Multi-User Team Collaboration",
    description: "Assign credits and permissions to team members",
  },
  {
    title: "Enterprise API with Batch Processing",
    description: "100+ simultaneous model generations",
  },
  {
    title: "Priority Cloud Processing",
    description: "<5 sec generation time via dedicated cloud infrastructure",
  },
  {
    title: "Dedicated AI Engineer Support",
    description: "White-glove support for custom AI fine-tuning",
  },
  {
    title: "Custom Contracts Available",
    description: "SLAs & Dedicated Compute Clusters",
  },
];

export const enterprisePlanSubscriptionDetails: SubscriptionDetails = {
  coreFeatures,
  additionalBenefits,
};
