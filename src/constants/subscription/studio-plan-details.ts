import { SubscriptionDetails } from "./subscription-plans";

const coreFeatures: SubscriptionDetails["coreFeatures"] = [
  {
    title: "Private & Commercial Asset Generation",
    description:
      "All models are private and include full commercial use rights",
  },
  {
    title: "High-Resolution 3D Models",
    description: "Up to 100,000 polygons per model with LOD Optimization",
  },
  {
    title: "Advanced AI-Powered Textures",
    description: "4K Textures with UV Mapping & Multi-Channel PBR Support",
  },
  {
    title: "Game-Ready Retopology & Optimization",
    description: "Automatic polygon reduction for performance",
  },
  {
    title: "Auto-Rigging (Full Support)",
    description: "Rig humanoids & quadrupeds for game engines",
  },
  {
    title: "AI-Assisted Animations",
    description: "Walk, Jump, Run, Combat Cycles (AI-enhanced IK animations)",
  },
  {
    title: "Custom Material Mapping",
    description: "Supports metalness, roughness, normal maps",
  },
  {
    title: "File Format Support: GLB, OBJ, FBX, USDZ, PLY",
    description: "",
  },
  {
    title: "Export Presets for Game Engines",
    description: "Unity, Unreal, Blender, Maya, Roblox, VRChat",
  },
  {
    title: "Bulk Asset Generation",
    description: "Generate up to 10 models per batch request",
  },
  {
    title: "Custom Style Training",
    description: "Fine-tune the AI on your own game assets or concept art",
  },
  {
    title: "AI-Powered Concept Refinement",
    description: "Generate multiple variations of a model for review",
  },
  {
    title: "Full API Access",
    description:
      "Automate model generation via API integration into your game pipeline",
  },
  {
    title: "Enterprise-Grade Cloud Processing",
    description: "High-priority access with <30 sec generation time",
  },
  {
    title: "Premium Support",
    description: "Dedicated Slack & Discord support",
  },
];

const restrictions: SubscriptionDetails["restrictions"] = [
  {
    title: "No On-Prem Deployment",
    description: "Only available via cloud processing",
  },
  {
    title: "Limited Collaboration",
    description: "No multi-user workspaces",
  },
];

export const studioPlanSubscriptionDetails: SubscriptionDetails = {
  coreFeatures,
  restrictions,
};
