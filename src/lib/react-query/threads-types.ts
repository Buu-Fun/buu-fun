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
    getSubthreads: 
    | {items: TSubthread[]}
    | TError
}

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
    };
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
    };
    timings: {
      inference: number;
    };
  }>;
};
