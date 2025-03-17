"use client";
import { SUBSCRIPTION_PLANS } from "@/constants/subscription/subscription-plans";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  setSubscriptionModelPlanType
} from "@/lib/redux/features/subscription";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import SubscriptionButton from "./subscription-button";
import SubscriptionPlanDetails from "./subscription-plan-details";
import SubscriptionPricingHeader from "./subscription-pricing-header";

export default function SubscriptionContent() {
  const Plan = useAppSelector(
    (state) => state.subscription.SubscriptionModelPlan,
  );
  const dispatch = useAppDispatch();
  return (
    <div className="">
      <div className="bg-subscription-button-bg max-w-max mx-auto px-2 py-2 rounded-lg">
        <div className="flex items-center justify-center gap-2">
          {SUBSCRIPTION_PLANS.map((item, index) => {
            return (
              <Button
                key={`subscription-plan-button-${item}-${index}`}
                onClick={() => {
                  dispatch(setSubscriptionModelPlanType(item));
                }}
                variant={Plan !== item ? "ghost" : undefined}
                className={cn({
                  "hover:text-white text-muted-foreground/60 transition-all duration-300 ease-in-out hover:bg-muted/0":
                    Plan !== item,
                })}
              >
                <p className="capitalize">{item}</p>
              </Button>
            );
          })}
        </div>
      </div>
      <SubscriptionPricingHeader />
      <SubscriptionPlanDetails />
      <SubscriptionButton />
    </div>
  );
}
