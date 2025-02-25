/* eslint-disable @typescript-eslint/no-explicit-any */
import { SubthreadStyle } from "@/gql/types/graphql";
export type TError = {
  code: string;
  message: string;
};
export type GenerateSubthreadResponse = {
  generateSubthread:
    | TSubthread
    | {
        code: string;
        message: string;
      };
};

export type TGetSubThreadsResponse = {
  getSubthreads: { items: TSubthread[] } | TError;
};

export type TGetSubThreadResponse = {
  getSubthread: TSubthread | TError;
};
export type TGenerateImageResponse = {
  generateImage: TSubthread | TError;
};

export type TGetAllThreadsResponse = {
  getThreads: { items: TAllRecentThreads[] } | TError;
};

export type TSubthread = {
  _id: string;
  address: string;
  createdAt: string;
  updatedAt: string;
  threadId: string;
  prompt: string;
  style: SubthreadStyle;
  imageRequests: Array<{
    _id: string;
    status: string;
    metadata: any; // Could be more specific based on actual data
    type: string;
    images: Array<{
      content_type: string;
      file_name: string;
      file_size: number;
      url: string;
    }>;
    model_mesh: {
      content_type: string;
      file_name: string;
      file_size: number;
      url: string;
    } | null;
    timings: {
      inference: number;
    };
  }>;
  modelRequests: Array<{
    // Same structure as imageRequests
    _id: string;
    status: string;
    metadata: any;
    type: string;
    images: Array<{
      content_type: string;
      file_name: string;
      file_size: number;
      url: string;
    }>;
    model_mesh: {
      content_type: string;
      file_name: string;
      file_size: number;
      url: string;
    } | null;
    timings: {
      inference: number;
    };
  }>;
};

export type TAllRecentThreads = {
  _id: string;
  createdAt: string;
  updatedAt: string;
  address: string;
  title: string;
};
