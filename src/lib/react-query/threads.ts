import { serverRequest } from "@/gql/client";
import {
  GenerateImageMutation,
  GenerateSubthreadMutation,
  GetSubthreadQuery,
  GetSubthreadsQuery,
  GetThreadsQuery,
} from "@/gql/documents/creative-engine";
import { TThreeDStyles } from "../redux/features/settings";
import {
  GenerateSubthreadResponse,
  TGenerateImageResponse,
  TGetAllThreadsResponse,
  TGetSubThreadResponse,
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

export async function getSubThread(subThreadId: string, accessToken: string) {
  const data = await serverRequest<TGetSubThreadResponse>(
    GetSubthreadQuery,
    {
      subthreadId: subThreadId,
    },
    {
      Authorization: `Bearer ${accessToken}`,
    }
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
  const data = await serverRequest<TGenerateImageResponse>(
    GenerateImageMutation,
    {
      subthreadId: subthreadId,
    },
    {
      Authorization: `Bearer ${accessToken}`,
    }
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
      Authorization: `Bearer ${accessToken}`,
    }
  );

  if ("code" in data.getThreads) {
    throw new Error(data.getThreads.message, { cause: "INVALID_DATA" });
  }
  return data.getThreads;
}
