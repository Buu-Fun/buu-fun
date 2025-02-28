import { isError, isInProgress } from "@/lib/helpers/status-checker";
import { RootState } from "@/types/reduxStore";
import { createSelector } from "@reduxjs/toolkit";
import { TGenerationalData } from "../features/chat-types";
const Threads = (state: RootState) => state.chat.threads.subThreads;
export const getSubThreadsFromStore = createSelector(
  [Threads, (_, id: string) => id],
  (SubThread, id) => {
    const FoundedSubthread = SubThread.find((fv) => fv._id === id);
    return FoundedSubthread;
  }
);

const SubThreads = (state: RootState) => state.chat.subThreads;
const Medias = (state: RootState) => state.chat.genRequest;
const ImageModelType = "fal-ai/flux-lora";
const ThreeDModelType = "fal-ai/trellis";

export const getSubThreadsMedia = createSelector(
  [SubThreads, Medias, (_, __, subThreadId: string) => subThreadId],
  (SubThreads, Medias, subThreadId) => {
    const SubThread = SubThreads.find((item) => item._id === subThreadId);

    const Media = Medias[subThreadId] ?? []

    const ImageGenerated =
      Media?.filter((item) => item.type === ImageModelType) ?? [];

    const ThreeDGenerated =
      Media?.filter((item) => item.type === ThreeDModelType) ?? [];

    const style = SubThread?.style;

    const GeneratedRequestMedias: TGenerationalData[] = ImageGenerated?.map(
      (item) => {
        const FoundedModel = ThreeDGenerated.find(
          (fv) => fv.metadata.imageRequestId === item?._id
        );

        const imageStatus = item.status;
        const modelStatus = FoundedModel?.status ?? "InProgress";

        const model = FoundedModel
          ? {
              modelId: FoundedModel?._id,
              modelUrl: FoundedModel?.model_mesh?.url,
              modelStatus,
            }
          : undefined;
        // Either the model or the image is Generating
        const isGenerating =
          isInProgress(modelStatus) || isInProgress(imageStatus);

        const isErrored = isError(modelStatus) || isError(imageStatus);

        return {
          style,
          isGenerating,
          isErrored,
          model,
          image: {
            imageId: item._id,
            imageStatus,
            imageUrl: item.images?.length ? item?.images[0]?.url : null,
          },
        };
      }
    );

    return GeneratedRequestMedias;
  }
);
