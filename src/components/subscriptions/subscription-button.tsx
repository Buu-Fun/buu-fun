import React from "react";
import { Button } from "../ui/button";
import { useMutation } from "@tanstack/react-query";
import { getPaymentLinkUrl } from "@/lib/react-query/subscriptions-stripe";
import { useAuthentication } from "@/providers/account.context";
import { useAppSelector } from "@/hooks/redux";

export default function SubscriptionButton() {
  const { identityToken: accessToken } = useAuthentication();
  const planKey = useAppSelector(
    (state) => state.subscription.SubscriptionModelPlan
  );

  const { mutate: getPaymentLink } = useMutation({
    mutationFn: async () => {
      if (!accessToken) return;
      return await getPaymentLinkUrl({
        accessToken: accessToken,
        planKey,
      });
    },
    onSuccess(data) {
      console.log(data);
    },
  });

  return (
    <Button
      onClick={() => {
        getPaymentLink();
      }}
      className="w-full"
    >
      Current plan
    </Button>
  );
}
