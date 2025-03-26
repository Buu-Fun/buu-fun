import { ShareableBoard } from "@/gql/types/graphql";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type BoardsState = {
  SharedBoards: ShareableBoard | null;
};

const initialState: BoardsState = {
  SharedBoards: null,
};

const BoardsSlice = createSlice({
  name: "Boards",
  initialState,
  reducers: {
    initializeSharableBoards(state, actions: PayloadAction<ShareableBoard>) {
      state.SharedBoards = actions.payload;
    },
  },
});

export const { initializeSharableBoards } = BoardsSlice.actions;

export default BoardsSlice.reducer;
