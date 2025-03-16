import { Plans } from "@/constants/subscription/subscription-plans";
import { serverRequest } from "@/gql/client";
import { GetSubscriptionPaymentLinkQuery } from "@/gql/documents/creative-engine";
import {
  GenerateSubscriptionPaymentLinkQuery,
  GenerateSubscriptionPaymentLinkQueryVariables,
} from "@/gql/types/graphql";
import { getAuthorization, getPlanEnum } from "../utils";
import { AccessToken } from "./user";

export async function getPaymentLinkUrl({
  accessToken,
  planKey,
}: AccessToken & { planKey: Plans }) {    
  const data = await serverRequest<
    GenerateSubscriptionPaymentLinkQuery,
    GenerateSubscriptionPaymentLinkQueryVariables
  >(
    GetSubscriptionPaymentLinkQuery,
    {
      planKey: getPlanEnum(planKey),
    },
    {
      Authorization: getAuthorization(accessToken),
    }
  );

  if (!data) {
    throw new Error("Internal server error");
  }
  if ("code" in data.generateSubscriptionPaymentLink) {
    throw new Error(data.generateSubscriptionPaymentLink.message, {
      cause: "INVALID_DATA",
    });
  }

  return data.generateSubscriptionPaymentLink;
}
