import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type ChatState = {
  inputQuery: string;
};

const initialState: ChatState = {
  inputQuery: "",
};

const ChatSlice = createSlice({
  name: "Chat",
  initialState,
  reducers: {
    setInputQuery(state, action: PayloadAction<string>) {
      state.inputQuery = action.payload;
    },
    addWords(state, action: PayloadAction<string>) {
      const words = state.inputQuery.split(" ");

      // Check if there's at least one word
      if (words.length > 0) {
        // Replace the last word with the suggested word from action.payload
        words[words.length - 1] = action.payload;

        // Join the words back into a string
        state.inputQuery = words.join(" ") + " ";
      }
    },
  },
});

export const { setInputQuery,addWords } = ChatSlice.actions;

export default ChatSlice.reducer;
