import { PRICING_PLAN } from "@/constants/subscription/subscription-plans";
import { useAppSelector } from "@/hooks/redux";
import { cn } from "@/lib/utils";
import React from "react";
import Pill from "../elements/pill";
import { isPlanEnterprise } from "@/lib/helpers/subscription-plan-checker";

export default function SubscriptionPricingHeader() {
  const plan = useAppSelector(
    (state) => state.subscription.SubscriptionModelPlan
  );

  const planDetails = PRICING_PLAN[plan];
  const pricing = planDetails.pricing;
  const isAdditionalPlan = typeof pricing.additionalCredits !== "undefined";
  return (
    <div
      className={cn(
        "grid  pt-10 grid-cols-2 place-content-center place-items-center",
        {
          "grid-cols-3": isAdditionalPlan,
        }
      )}
    >
      <div className="flex w-full  items-center justify-center flex-col ">
        <h4 className="text-muted-foreground/60 text-sm font-medium">Price</h4>
        <div className="flex justify-center">
          <p className="text-base">$</p>
          <div className="flex items-center justify-center gap-2">
            <p className="text-5xl font-medium tracking-tight">
              {pricing.price}
            </p>
            <p className="text-xs font-semibold uppercase tracking-tight text-muted-foreground/60">
              / Month
            </p>
            <Pill
              variant={"blue"}
              className={cn("text-[10px] font-semibold uppercase px-1 py-1", {
                hidden: !isPlanEnterprise(plan),
              })}
            >
              Custom
            </Pill>
          </div>
        </div>
      </div>
      <div
        className={cn(
          "flex w-full border-l-2  border-muted-foreground/20  items-center justify-center flex-col",
          {
            "border-x-2": isAdditionalPlan,
          }
        )}
      >
        <h4 className="text-muted-foreground/60 text-sm font-medium">
          Included Monthly Credits
        </h4>
        <div className="flex justify-center">
          <p className="text-5xl font-medium tracking-tight">
            {pricing.includedMonthlyCredit}
          </p>
        </div>
      </div>
      <div
        className={cn("flex items-center justify-center flex-col", {
          hidden: !isAdditionalPlan,
        })}
      >
        <h4 className="text-muted-foreground/60 text-sm font-medium">
          Additional credits
        </h4>
        <div className={cn("flex justify-center")}>
          <p className="text-base">$</p>
          <div className="flex items-center justify-center gap-2">
            <p className="text-5xl font-medium tracking-tight">
              {pricing.additionalCredits}
            </p>
            <p className="text-xs font-semibold uppercase tracking-tight text-muted-foreground/60">
              / Credits
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
