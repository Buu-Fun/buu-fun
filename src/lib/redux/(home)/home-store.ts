import ChatSlice from "@/lib/redux/features/chat";
import SettingsSlice from "@/lib/redux/features/settings";
import SubscriptionSlice from "@/lib/redux/features/subscription";
import { configureStore } from "@reduxjs/toolkit";

export const makeHomeStore = () => {
  return configureStore({
    reducer: {
      subscription: SubscriptionSlice,
    },
  });
};

// Infer the type of makeStore
export type AppHomeStore = ReturnType<typeof makeHomeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootHomeState = ReturnType<AppHomeStore["getState"]>;
export type AppHomeDispatch = AppHomeStore["dispatch"];
