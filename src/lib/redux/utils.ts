import { isError, isInProgress } from "../helpers/status-checker";
import { TSubThreadsMedia } from "./features/chat-types";
export const ImageModelType = "fal-ai/flux-lora";
export const ThreeDModelType = "fal-ai/trellis";

export function isThreeDModel(type: string) {
  return type === ThreeDModelType;
}

export function isImageModel(type: string) {
  return type === ImageModelType;
}

type GenMedias = {
  isGenerating: boolean;
  isErrored: boolean;
  createdAt: any;
};

// False -> if the last message is still Responding...
export function isSubThreadInProgressForFirstTimeOrForTheLastObject(
  subThreadMedias: TSubThreadsMedia[]
) {
  const ImageGenerated =
    subThreadMedias?.filter((item) => isImageModel(item.type)) ?? [];

  const ThreeDGenerated =
    subThreadMedias?.filter((item) => isThreeDModel(item.type)) ?? [];

  let GeneratedRequestMedias: GenMedias[] = [];

  if (ThreeDGenerated.length >= ImageGenerated.length) {
    // This is generated using users uploaded Image.
    GeneratedRequestMedias = ThreeDGenerated.map((item) => {
      return {
        createdAt: item.createdAt,
        isGenerating: isInProgress(item.status),
        isErrored: isError(item.status),
      };
    });
  } else {
    GeneratedRequestMedias = ImageGenerated?.map((item) => {
      const FoundedModel = ThreeDGenerated.find(
        (fv) => fv.metadata.imageRequestId === item?._id
      );

      const imageStatus = item.status;
      const modelStatus = FoundedModel?.status ?? "InProgress";

      // Either the model or the image is Generating
      const isGenerating =
        isInProgress(modelStatus) || isInProgress(imageStatus);

      const isErrored = isError(modelStatus) || isError(imageStatus);

      return {
        isGenerating,
        isErrored,
        createdAt: item.createdAt,
      };
    });
  }

  const SortedRequest = GeneratedRequestMedias.sort(
    (a, b) =>
      new Date(a.createdAt as string).getTime() -
      new Date(b.createdAt as string).getTime()
  );

  const isFirstGenerating = SortedRequest[0]?.isGenerating ?? true;

  return { isFirstGenerating };
}

export const mergeImageAndMedia = (subThreadMedias: TSubThreadsMedia[]) => {
  const ImageGenerated =
    subThreadMedias?.filter((item) => isImageModel(item.type)) ?? [];

  const ThreeDGenerated =
    subThreadMedias?.filter((item) => isThreeDModel(item.type)) ?? [];

  let GeneratedRequestMedias: GenMedias[] = [];
  if (ThreeDGenerated.length >= ImageGenerated.length) {
    // This is generated using users uploaded Image.
    GeneratedRequestMedias = ThreeDGenerated.map((item) => {
      return {
        createdAt: item.createdAt,
        isGenerating: isInProgress(item.status),
        isErrored: isError(item.status),
      };
    });
  } else {
    GeneratedRequestMedias = ImageGenerated?.map((item) => {
      const FoundedModel = ThreeDGenerated.find(
        (fv) => fv.metadata.imageRequestId === item?._id
      );

      const imageStatus = item.status;
      const modelStatus = FoundedModel?.status ?? "InProgress";

      // Either the model or the image is Generating
      const isGenerating =
        isInProgress(modelStatus) || isInProgress(imageStatus);

      const isErrored = isError(modelStatus) || isError(imageStatus);

      return {
        isGenerating,
        isErrored,
        createdAt: item.createdAt,
      };
    });
  }

  return GeneratedRequestMedias;
};
