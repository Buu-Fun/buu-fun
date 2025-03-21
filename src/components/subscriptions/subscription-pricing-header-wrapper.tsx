import { PRICING_PLAN } from "@/constants/subscription/subscription-plans";
import { useAppSelector } from "@/hooks/redux";
import SubscriptionPricingHeader from "./subscription-pricing-header";

export default function SubscriptionPricingHeaderWrapper() {
  const plan = useAppSelector(
    (state) => state.subscription.SubscriptionModelPlan
  );

  const planDetails = PRICING_PLAN[plan];
  const pricing = planDetails.pricing;
  const isAdditionalPlan = typeof pricing.additionalCredits !== "undefined";

  return (
    <SubscriptionPricingHeader
      isAdditionalPlan={isAdditionalPlan}
      plan={plan}
      planDetails={planDetails}
      pricing={pricing}
    />
  );
}
