import { PRICING_PLAN } from "@/constants/subscription/subscription-plans";
import { useAppSelector } from "@/hooks/redux";
import SubscriptionPlanDetails from "./subscription-plan-details";
import { ReactNode } from "react";

export default function SubscriptionPlanDetailWrapper({
  subscriptionButton,
}: {
  subscriptionButton: ReactNode;
}) {
  const plan = useAppSelector(
    (state) => state.subscription.SubscriptionModelPlan,
  );
  const planDetails = PRICING_PLAN[plan];
  const subscriptionDetails = planDetails.subscriptionDetails;

  return (
    <SubscriptionPlanDetails
      plan={plan}
      subscriptionDetails={subscriptionDetails}
      subscriptionButton={subscriptionButton}
    />
  );
}
