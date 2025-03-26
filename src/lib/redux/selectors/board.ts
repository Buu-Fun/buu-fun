import { RootState } from "@/types/reduxStore";
import { createSelector } from "@reduxjs/toolkit";

const Boards = (state: RootState) => state.boards.SharedBoards;

export const getBoards = createSelector([Boards], (state) => {
  return state?.ideas
});
