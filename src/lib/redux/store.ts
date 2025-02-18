import { configureStore } from "@reduxjs/toolkit";
import SettingsSlice from "@/lib/redux/features/settings";
export const makeStore = () => {
  return configureStore({
    reducer: {
      settings: SettingsSlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
