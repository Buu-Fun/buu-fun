import { serverRequest } from "@/gql/client";
import {
  GenerateImageMutation,
  GenerateSubthreadMutation,
  GetSubthreadQuery,
  GetSubthreadsQuery,
  GetThreadsQuery,
} from "@/gql/documents/creative-engine";
import {
  GenerateSubthreadMutationVariables,
  SubthreadStyle,
  GenerateImageMutation as TGenerateImageMutation,
  GenerateSubthreadMutation as TGenerateSubthreadMutation,
} from "@/gql/types/graphql";
import { TThreeDStyles } from "../redux/features/settings";
import { getAuthorization } from "../utils";
import {
  TGetAllThreadsResponse,
  TGetSubThreadResponse,
  TGetSubThreadsResponse,
} from "./threads-types";

type TGenerateSubThreads = {
  prompt: string;
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
  const data = await serverRequest<
    TGenerateSubthreadMutation,
    GenerateSubthreadMutationVariables
  >(
    GenerateSubthreadMutation,
    {
      prompt,
      style: (style as SubthreadStyle) ?? null,
      threadId,
    },
    {
      Authorization: getAuthorization(accessToken),
    },
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
      Authorization: getAuthorization(accessToken),
    },
  );

  if ("code" in data.getSubthreads) {
    throw new Error(data.getSubthreads.message, { cause: "INVALID_DATA" });
  }
  return data.getSubthreads;
}

export async function getSubThread(subThreadId: string, accessToken: string) {
  const data = await serverRequest<TGetSubThreadResponse>(
    GetSubthreadQuery,
    {
      subthreadId: subThreadId,
    },
    {
      Authorization: getAuthorization(accessToken),
    },
  );

  if ("code" in data.getSubthread) {
    throw new Error(data.getSubthread.message, { cause: "INVALID_DATA" });
  }
  return data.getSubthread;
}

export async function mutateGenerateNewImage({
  accessToken,
  subthreadId,
}: {
  subthreadId: string;
  accessToken: string;
}) {
  const data = await serverRequest<TGenerateImageMutation>(
    GenerateImageMutation,
    {
      subthreadId: subthreadId,
    },
    {
      Authorization: getAuthorization(accessToken),
    },
  );

  if ("code" in data.generateImage) {
    throw new Error(data.generateImage.message, { cause: "INVALID_DATA" });
  }
  return data.generateImage;
}

// GetThreadsQuery

export async function getAllThreads(accessToken: string) {
  const data = await serverRequest<TGetAllThreadsResponse>(
    GetThreadsQuery,
    {
      filters: {},
      pagination: {
        limit: 25,
        orderDirection: "desc",
      },
    },
    {
      Authorization: getAuthorization(accessToken),
    },
  );

  if ("code" in data.getThreads) {
    throw new Error(data.getThreads.message, { cause: "INVALID_DATA" });
  }
  return data.getThreads;
}
