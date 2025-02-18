import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type SettingsState = {
  isPopoverOpen: boolean;
};

const initialState: SettingsState = {
  isPopoverOpen: false,
};

const SettingsSlice = createSlice({
  name: "Settings",
  initialState,
  reducers: {
    setSettingsPopoverChange(state, action: PayloadAction<boolean>) {
      state.isPopoverOpen = action.payload;
    },
    toggleCreateTodoDrawerOpen(state) {
      state.isPopoverOpen = !state.isPopoverOpen;
    },
  },
});

export const { setSettingsPopoverChange, toggleCreateTodoDrawerOpen } =
  SettingsSlice.actions;

export default SettingsSlice.reducer;
