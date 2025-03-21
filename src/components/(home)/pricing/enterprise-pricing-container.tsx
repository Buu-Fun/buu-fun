import SubscriptionPlanDetails from "@/components/subscriptions/subscription-plan-details";
import SubscriptionPricingHeader from "@/components/subscriptions/subscription-pricing-header";
import { enterprisePlanSubscriptionDetails } from "@/constants/subscription/enterprise-plan-details";
import { ENTERPRISE } from "@/constants/subscription/subscription-plans";
import React from "react";
import EnterpriseSubscriptionCTA from "./enterprise-subscription-cta";

export default function EnterprisePricingContainer() {
  const plan = ENTERPRISE;

  const planDetails = ENTERPRISE;
  const pricing = planDetails.pricing;
  const isAdditionalPlan = typeof pricing.additionalCredits !== "undefined";
  const subscriptionDetails = planDetails.subscriptionDetails;
  return (
    <div className="max-w-3xl   rounded-2xl mx-auto">
      <div className="border-subscription-pricing overflow-hidden relative bg-subscription-pricing">
        <EnterpriseSubscriptionCTA />
        <div className=" pb-3  px-6 w-full h-full">
          <SubscriptionPricingHeader
            plan="ENTERPRISE"
            planDetails={planDetails}
            pricing={pricing}
            isAdditionalPlan={isAdditionalPlan}
          />
          <SubscriptionPlanDetails
            plan="ENTERPRISE"
            subscriptionButton={<></>}
            subscriptionDetails={subscriptionDetails}
          />
        </div>
      </div>
    </div>
  );
}
