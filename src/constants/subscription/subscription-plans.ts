import { enterprisePlanSubscriptionDetails } from "./enterprise-plan-details";
import { FreePlanSubscriptionDetails } from "./free-plan-details";
import { indiePlanSubscriptionDetails } from "./indie-plan-details";
import { studioPlanSubscriptionDetails } from "./studio-plan-details";

export const SUBSCRIPTION_PLANS = [
  "FREE",
  "INDIE",
  "STUDIO",
  "ENTERPRISE",
] as const;

export const PlanKeyMapper: Record<Plans, Plans> = {
  FREE: "FREE",
  INDIE: "INDIE",
  STUDIO: "STUDIO",
  ENTERPRISE: "ENTERPRISE",
};

// type PricingPlanDetails = Record<Plans, any>;
export const PRICING_PLAN: PricingPlanDetails = {
  FREE: {
    pricing: {
      price: 0,
      includedMonthlyCredit: 10,
    },
    subscriptionDetails: FreePlanSubscriptionDetails,
  },
  INDIE: {
    pricing: {
      price: 19,
      includedMonthlyCredit: 200,
      additionalCredits: 0.1,
    },
    subscriptionDetails: indiePlanSubscriptionDetails,
  },
  STUDIO: {
    pricing: {
      price: 49,
      includedMonthlyCredit: 750,
      additionalCredits: 0.065,
    },
    subscriptionDetails: studioPlanSubscriptionDetails,
  },
  ENTERPRISE: {
    pricing: {
      price: 49,
      includedMonthlyCredit: "Unlimited",
    },
    subscriptionDetails: enterprisePlanSubscriptionDetails,
  },
};

export type Plans = (typeof SUBSCRIPTION_PLANS)[number];

export type TPricing = {
  price: number;
  includedMonthlyCredit: number | string;
  additionalCredits?: number;
};

export type TPricingDetails = {
  pricing: TPricing;
  subscriptionDetails?: SubscriptionDetails;
};

type PricingPlanDetails = Record<Plans, TPricingDetails>;

export type SubscriptionFeatures = {
  title: string;
  description: string;
};

export type SubscriptionDetails = {
  coreFeatures: SubscriptionFeatures[];
  additionalBenefits?: SubscriptionFeatures[];
  restrictions?: SubscriptionFeatures[];
};
