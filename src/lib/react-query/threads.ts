import { gqlEndpoint } from "@/config/getGqlEndpoint";
import { serverRequest } from "@/gql/client";
import {
  GenerateSubthreadMutation,
  GetSubthreadsQuery,
} from "@/gql/documents/creative-engine";
import { SubthreadStyle } from "@/gql/types/graphql";
import request from "graphql-request";
import { TThreeDStyles } from "../redux/features/settings";
import {
  GenerateSubthreadResponse,
  TGetSubThreadsResponse,
} from "./threads-types";

// import { SubthreadStyle } from "./path-to-enum"; // Import the enum

type TGenerateSubThreads = {
  prompt?: string;
  style?: TThreeDStyles;
  threadId?: string;
  accessToken: string;
};

export async function generateSubThreads({
  prompt,
  style,
  threadId,
  accessToken,
}: TGenerateSubThreads) {
  const data = await serverRequest<GenerateSubthreadResponse>(
    GenerateSubthreadMutation,
    {
      prompt,
      style,
      threadId,
    },
    {
      Authorization: `Bearer ${accessToken}`,
    }
  );

  if ("code" in data.generateSubthread) {
    throw new Error(data.generateSubthread.message, { cause: "INVALID_DATA" });
  }
  return data.generateSubthread;
}

export async function getSubThreads(threadId: string, accessToken: string) {
  const data = await serverRequest<TGetSubThreadsResponse>(
    GetSubthreadsQuery,
    {
      filters: {
        threadId_eq: threadId,
      },
      pagination: {},
    },
    {
      Authorization: `Bearer ${accessToken}`,
    }
  );

  if ("code" in data.getSubthreads) {
    throw new Error(data.getSubthreads.message, { cause: "INVALID_DATA" });
  }
  return data.getSubthreads;
}
