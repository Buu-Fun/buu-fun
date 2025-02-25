import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { ChatState, TMediaRequest, TSubThread } from "./chat-types";
import { TSubthread as TResponseThread } from "@/lib/react-query/threads-types";

export type ChatMessage = {
  threadId: string;
  message: [][];
};
// type ChatState = {
//   inputQuery: string;
//   chat: ChatMessage;
// };

const initialState: ChatState = {
  inputQuery: "",
  threads: {
    threadId: "",
    subThreads: [],
  },
};

const ChatSlice = createSlice({
  name: "Chat",
  initialState,
  reducers: {
    clearInput(state) {
      state.inputQuery = "";
    },
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
    setNewThreadId(state, action: PayloadAction<string>) {
      state.threads.threadId = action.payload;
      state.threads.subThreads = [];
      state.inputQuery = "";
    },
    setSubThreads: {
      reducer(state, action: PayloadAction<TSubThread[]>) {
        state.threads.subThreads = action.payload;
      },

      prepare(payload: TResponseThread[]) {
        const data: TSubThread[] = payload.map((item) => ({
          _id: item._id,
          createdAt: item.createdAt,
          style: item.style,
          threadId: item.threadId,
          imageRequest:
            item.imageRequests &&
            item.imageRequests.map((imgRes): TMediaRequest => {
              return {
                _id: imgRes._id,
                images: imgRes.images,
                modelMesh: imgRes.model_mesh,
                metadata: imgRes.metadata,
                status: imgRes.status,
                type: imgRes.type,
              };
            }),
          message: item.prompt,
          modelRequest:
            item.modelRequests &&
            item.modelRequests.map(
              (modRes): TMediaRequest => ({
                _id: modRes._id,
                images: modRes.images,
                metadata: modRes.metadata,
                modelMesh: modRes.model_mesh,
                status: modRes.status,
                type: modRes.type,
              })
            ),
        }));
        return {
          payload: data,
        };
      },
    },
  },
});

export const { setInputQuery, addWords, setNewThreadId, setSubThreads } =
  ChatSlice.actions;

export default ChatSlice.reducer;
