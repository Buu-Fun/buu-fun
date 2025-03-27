import { RootState } from "@/types/reduxStore";
import { createSelector } from "@reduxjs/toolkit";
import { isThreeDModel } from "../utils";

const Boards = (state: RootState) => state.boards.SharedBoards;

export const getBoards = createSelector([Boards], (state) => {
  const Medias = state?.ideas
    .map((item) => item.genRequests.map((item) => item))
    .flat();

  const ThreeDGenerated =
    Medias?.filter((item) => isThreeDModel(item.type)) ?? [];

  const parsedData = ThreeDGenerated.map((item) => {
    return {
      GenId: item.genRequestId,
      isPublic: state?.isPublic,
      modelUrl: item?.model_mesh?.url,
      modelAlt: item?.model_mesh?.alt,
      ImageUrl: item?.metadata?.imageUrl,
      imageAlt: item?.model_mesh?.alt,
    };
  });
  return {
    title: state?.title,
    board: parsedData,
    isPublic: state?.isPublic,
    boardId: state?._id,
  };
});
