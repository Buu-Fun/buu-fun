// import { GetMyCreditsQuery } from "@/gql/documents/creative-engine";

import { serverRequest } from "@/gql/client";
import { GetMyCreditsQuery } from "@/gql/documents/creative-engine";
import {
  GetMyCreditsQuery as TGetMyCreditsQuery,
  GetMyCreditsQueryVariables,
} from "@/gql/types/graphql";
import { getAuthorization } from "../utils";

// import {GetMyCreditsQuery} from '@/gql/types'
export type TGetUserCredits = {
  accessToken: string;
};
export async function getUserCredits({ accessToken }: TGetUserCredits) {
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

  if ("code" in data.getMyCredits) {
    throw new Error(data.getMyCredits.message, { cause: "INVALID_DATA" });
  }
  return data.getMyCredits;
}
