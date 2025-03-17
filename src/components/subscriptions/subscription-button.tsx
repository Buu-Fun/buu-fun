import { useAppSelector } from "@/hooks/redux";
import { useUserSubscription } from "@/hooks/use-credits";
import { getPaymentLinkUrl } from "@/lib/react-query/subscriptions-stripe";
import { useAuthentication } from "@/providers/account.context";
import { useMutation } from "@tanstack/react-query";
import { Button } from "../ui/button";

export default function SubscriptionButton() {
  const { identityToken: accessToken } = useAuthentication();
  const planKey = useAppSelector(
    (state) => state.subscription.SubscriptionModelPlan
  );
  const { data, error, refetch } = useUserSubscription();

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
  const isCurrentPlan = data?.planKey === planKey;
  return (
    <Button
      variant={isCurrentPlan ? "secondary" : undefined}
      onClick={async () => {
        if (isCurrentPlan) {
          const { data } = await refetch();
          if (data?.customerPortalLink) {
            window.location.href = data?.customerPortalLink;
          }
        } else {
          getPaymentLink();
        }
      }}
      className="w-full"
    >
      {isCurrentPlan ? (
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
