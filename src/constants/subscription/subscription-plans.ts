import { basicPlanSubscriptionDetails } from "./basic-plan-details";
import { enterprisePlanSubscriptionDetails } from "./enterprise-plan-details";
// import { enterprisePlanSubscriptionDetails } from "./enterprise-plan-details";
import { FreePlanSubscriptionDetails } from "./free-plan-details";
import { proPlanSubscriptionDetails } from "./pro-plan-details";
import { unlimitedPlanSubscriptionDetails } from "./unlimited-plan-details";

export const SUBSCRIPTION_PLANS = [
  "FREE",
  "BASIC",
  "PRO",
  "UNLIMITED",
  // "ENTERPRISE",
] as const;

export const PlanKeyMapper: Record<Plans, Plans> = {
  FREE: "FREE",
  BASIC: "BASIC",
  PRO: "PRO",
  UNLIMITED: "UNLIMITED",
  // ENTERPRISE: "ENTERPRISE",
};

export const ENTERPRISE: TPricingDetails = {
  pricing: {
    price: 0,
    includedMonthlyCredit: "Unlimited",
    contactSales: true,
  },
  subscriptionDetails: enterprisePlanSubscriptionDetails,
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
  BASIC: {
    pricing: {
      price: 10,
      includedMonthlyCredit: 50,
    },
    subscriptionDetails: basicPlanSubscriptionDetails,
  },
  PRO: {
    pricing: {
      price: 30,
      includedMonthlyCredit: 200,
    },
    subscriptionDetails: proPlanSubscriptionDetails,
  },
  UNLIMITED: {
    pricing: {
      price: 100,
      includedMonthlyCredit: "Unlimited",
    },
    subscriptionDetails: unlimitedPlanSubscriptionDetails,
  },
};

export type Plans = (typeof SUBSCRIPTION_PLANS)[number];

export type TPricing = {
  price: number;
  includedMonthlyCredit: number | string;
  additionalCredits?: number;
  contactSales?: boolean;
};

export type TPricingDetails = {
  pricing: TPricing;
  subscriptionDetails?: SubscriptionDetails;
  configs?: {
    boards: 5;
    public: false;
  };
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
