// import { GetMyCreditsQuery } from "@/gql/documents/creative-engine";

import { serverRequest } from "@/gql/client";
import {
  GetMyCreditsQuery,
  LinkReferralAccountMutation,
  RedeemVoucherMutation,
  RedeemVoucherQuery,
} from "@/gql/documents/creative-engine";

import {
  GetMyCreditsQueryVariables,
  HandledError,
  ReferralAccount as Ref,
  GetMyCreditsQuery as TGetMyCreditsQuery,
  MutationLinkReferralAccountArgs as TMutationLinkReferralAccountArgs,
  RedeemVoucherMutation as TRedeemVoucherMutation,
  RedeemVoucherMutationVariables as TRedeemVoucherMutationVariables,
  ReferralAccountResult as TReferralAccount,
  ReferralAccountResult as TReferralAccountResult,
} from "@/gql/types/graphql";

import { getAuthorization } from "../utils";

// import {GetMyCreditsQuery} from '@/gql/types'
export type AccessToken = {
  accessToken: string;
};
export async function getUserCredits({ accessToken }: AccessToken) {
  const data = await serverRequest<
    TGetMyCreditsQuery,
    GetMyCreditsQueryVariables
  >(
    GetMyCreditsQuery,
    {},
    {
      Authorization: getAuthorization(accessToken),
    }
  );
  if (!data) {
    throw new Error("Internal server error");
  }

  if ("code" in data.getMyCredits) {
    throw new Error(data.getMyCredits.message, { cause: "INVALID_DATA" });
  }
  return data.getMyCredits;
}

export async function addCreditsMutation({
  accessToken,
  code,
}: AccessToken & { code: string }) {
  const data = await serverRequest<
    TRedeemVoucherMutation,
    TRedeemVoucherMutationVariables
  >(
    RedeemVoucherMutation,
    {
      code,
    },
    {
      Authorization: getAuthorization(accessToken),
    }
  );
  if (!data) {
    throw new Error("Internal server error");
  }

  if ("code" in data?.redeemVoucher) {
    throw new Error(data.redeemVoucher.message, { cause: "INVALID_DATA" });
  }
  return data.redeemVoucher;
}

export async function getReferral({ accessToken }: AccessToken) {
  const data = await serverRequest<TReferralAccount>(
    RedeemVoucherQuery,
    {},
    {
      Authorization: getAuthorization(accessToken),
    }
  );

  if (!data) {
    throw new Error("Internal server error");
  }
  if ("code" in data) {
    throw new Error(data.message, { cause: "INVALID_DATA" });
  }
  if ("getReferralAccount" in data) {
    return data.getReferralAccount as Ref;
  }
  throw new Error("DATA NOT FOUND");
}

export async function linkReferralMutation({
  accessToken,
  code,
}: AccessToken & { code: string }) {
  const data = await serverRequest<
    TReferralAccountResult,
    TMutationLinkReferralAccountArgs
  >(
    LinkReferralAccountMutation,
    {
      code,
    },
    {
      Authorization: getAuthorization(accessToken),
    }
  );

  if (!data || !("linkReferralAccount" in data)) {
    throw new Error("Internal server error");
  }

  if ("code" in data.linkReferralAccount) {
    throw new Error(data.linkReferralAccount.message, {
      cause: "INVALID_DATA",
    });
  }
  // eslint-disable
  if ("linkReferralAccount" in data) {
    return data.linkReferralAccount as Ref;
  }

  throw new Error("DATA NOT FOUND");
}
