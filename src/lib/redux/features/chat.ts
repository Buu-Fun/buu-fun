import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
export type Message = {
  id: string;
  time: string;
  message: string;
  url?: string;
  alt?: string | null;
};
export type ChatMessage = {
  chat_id: string;
  message: Message[][];
};
type ChatState = {
  inputQuery: string;
  chat: ChatMessage;
};

const initialState: ChatState = {
  inputQuery: "",
  chat: {
    chat_id: "",
    message: [[]],
  },
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

    setNewChatMessage(
      state,
      action: PayloadAction<Exclude<ChatState["chat"], undefined>>
    ) {
      state.chat = action.payload;
      state.inputQuery = "";
    },
    updateTryAgainMessage(
      state,
      action: PayloadAction<{ message: Partial<Message> }>
    ) {
      const ZERO = 0;
      if (state.chat.message[ZERO] && state.chat.message[ZERO][ZERO]) {
        state.chat.message[ZERO].push({
          ...state.chat.message[ZERO][ZERO],
          ...action.payload.message,
        });
      }
    },
    updateChatMessageImage(
      state,
      action: PayloadAction<{ alt: string; url: string }>
    ) {
      const zero = 0;
      if (state.chat?.message[zero][zero]) {
        const message = { ...state.chat?.message[zero][zero] };
        message.url = action.payload.url;
        message.alt = action.payload.alt;
        state.chat.message[zero][zero] = message;
      }
    },
  },
});

export const {
  setInputQuery,
  addWords,
  setNewChatMessage,
  updateChatMessageImage,
  updateTryAgainMessage
} = ChatSlice.actions;

export default ChatSlice.reducer;
