import React from "react";
import { Button } from "../ui/button";
import { useMutation } from "@tanstack/react-query";
import { getPaymentLinkUrl } from "@/lib/react-query/subscriptions-stripe";
import { useAuthentication } from "@/providers/account.context";
import { useAppSelector } from "@/hooks/redux";
import { useUserSubscription } from "@/hooks/use-credits";
import { PlanKeyMapper } from "@/constants/subscription/subscription-plans";

export default function SubscriptionButton() {
  const { identityToken: accessToken } = useAuthentication();
  const planKey = useAppSelector(
    (state) => state.subscription.SubscriptionModelPlan
  );
  const { data, error } = useUserSubscription();
  console.log("DATA:", data, error);
  const { mutate: getPaymentLink } = useMutation({
    mutationFn: async () => {
      if (!accessToken) return;
      return await getPaymentLinkUrl({
        accessToken: accessToken,
        planKey,
      });
    },
    onSuccess(data) {
      if (data?.url && typeof data.url !== "undefined") {
        window.location.href = data.url;
      }
    },
  });

  return (
    <Button
      variant={data?.planKey === planKey ? "secondary" : undefined}
      onClick={() => {
        getPaymentLink();
      }}
      className="w-full"
    >
      {data?.planKey === planKey ? (
        "Current plan"
      ) : (
        <>
          Select
          <span className="capitalize">{planKey}</span>
          Plan
        </>
      )}
    </Button>
  );
}
