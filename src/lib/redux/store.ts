import { configureStore } from "@reduxjs/toolkit";
import SettingsSlice from "@/lib/redux/features/settings";
import ChatSlice from "@/lib/redux/features/chat";

export const makeStore = () => {
  return configureStore({
    reducer: {
      settings: SettingsSlice,
      chat: ChatSlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
