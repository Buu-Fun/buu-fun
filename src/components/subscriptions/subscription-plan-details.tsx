import CheckBlue from "@/assets/icons/check-blue";
import {
  PRICING_PLAN,
  SUBSCRIPTION_PLANS,
} from "@/constants/subscription/subscription-plans";
import { useAppSelector } from "@/hooks/redux";
import React from "react";
import Pill from "../elements/pill";
import CrossGray from "@/assets/icons/cross-gray";

export default function SubscriptionPlanDetails() {
  const plan = useAppSelector(
    (state) => state.subscription.SubscriptionModelPlan
  );
  const planDetails = PRICING_PLAN[plan];
  const subscriptionDetails = planDetails.subscriptionDetails;
  return (
    <div className="grid grid-cols-2 mt-7 mb-4 scrollbar-w-2 scrollbar-track-orange-lighter scrollbar-thumb-orange scrollbar-thumb-rounded gap-2 max-h-[45dvh] overflow-y-auto">
      <div className="flex items- flex-col gap-2">
        <Pill className="text-[10px] max-w-max uppercase text-muted-foreground/60 font-semibold">
          Core Features
        </Pill>
        {subscriptionDetails &&
          subscriptionDetails.coreFeatures.map((item, index) => {
            return (
              <div
                key={`${plan}-subscriptionDetails.coreFeatures-${index}-${item.title.trim()}-${item.description.trim()}`}
                className="w-full"
              >
                <div className="flex w-full items-center  gap-2">
                  <div className="w-5 flex-shrink-0 h-5">
                    <CheckBlue />
                  </div>
                  <div>
                    <p>{item.title}</p>
                    <p className="text-sm text-muted-foreground/40">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="flex flex-col gap-2">
        {subscriptionDetails && subscriptionDetails.additionalBenefits && (
          <div className="flex items- flex-col gap-2">
            <Pill className="text-[10px] max-w-max uppercase text-muted-foreground/60 font-semibold">
              Additional Benefits
            </Pill>
            {subscriptionDetails.additionalBenefits.map((item, index) => {
              return (
                <div
                  key={`${plan}-subscriptionDetails-additionalBenefits-${index}-${item.title.trim()}-${item.description.trim()}`}
                  className="w-full"
                >
                  <div className="flex w-full items-center  gap-2">
                    <div className="rounded-full flex-shrink-0 h-5 w-5">
                      <CheckBlue />
                    </div>
                    <div>
                      <p>{item.title}</p>
                      <p className="text-sm text-muted-foreground/40">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {subscriptionDetails && subscriptionDetails.restrictions && (
          <div className="flex items- flex-col gap-2">
            <Pill className="text-[10px] max-w-max uppercase text-muted-foreground/60 font-semibold">
              Restrictions
            </Pill>
            {subscriptionDetails.restrictions.map((item, index) => {
              return (
                <div
                  key={`${plan}-subscriptionDetails-additionalBenefits-${index}-${item.title.trim()}-${item.description.trim()}`}
                  className="w-full"
                >
                  <div className="flex w-full items-center  gap-2">
                    <div className=" bg-[#737984] rounded-full flex-shrink-0 h-5 w-5">
                      <CrossGray />
                    </div>
                    <div>
                      <p>{item.title}</p>
                      <p className="text-sm text-muted-foreground/40">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
