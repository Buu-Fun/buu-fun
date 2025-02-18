import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export const threeDStyles: SettingsState["ThreeDStyle"][] = [
  "low_poly",
  "no_style",
  "metallic",
  "realistic",
];

export const contentModes: SettingsState["modes"][] = [
  "three_d_object",
  "video",
  "comic",
];
export type SettingsState = {
  isPopoverOpen: boolean;
  ThreeDStyle: "low_poly" | "no_style" | "metallic" | "realistic";
  modes: "three_d_object" | "video" | "comic";
};

const initialState: SettingsState = {
  isPopoverOpen: false,
  ThreeDStyle: "metallic",
  modes: "three_d_object",
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
    changeThreeDStyles(
      state,
      action: PayloadAction<SettingsState["ThreeDStyle"]>
    ) {
      state.ThreeDStyle = action.payload;
    },

    changeModes(state, action: PayloadAction<SettingsState["modes"]>) {
      state.modes = action.payload;
    },
  },
});

export const {
  toggleCreateTodoDrawerOpen,
  setSettingsPopoverChange,
  changeThreeDStyles,
  changeModes,
} = SettingsSlice.actions;

export default SettingsSlice.reducer;
