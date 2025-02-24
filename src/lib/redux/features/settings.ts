import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export const threeDStyles: SettingsState["ThreeDStyle"][] = [
  "Clay",
  "Cute",
  "Environment",
  "Fantasy",
  "Isometric",
  "LowPoly",
  "Metallic",
  "Realistic",
  "SciFi",
  "Stylized",
  "Toon",
  "Voxel",
  "Weapons",
  "Wireframe",
];

export type TThreeDStyles =
  | "Clay"
  | "Cute"
  | "Environment"
  | "Fantasy"
  | "Isometric"
  | "LowPoly"
  | "Metallic"
  | "Realistic"
  | "SciFi"
  | "Stylized"
  | "Toon"
  | "Voxel"
  | "Weapons"
  | "Wireframe";

export const contentModes: SettingsState["modes"][] = [
  "three_d_object",
  "video",
  "comic",
];
export type SettingsState = {
  isPopoverOpen: boolean;
  ThreeDStyle?: TThreeDStyles;
  modes: "three_d_object" | "video" | "comic";
};

const initialState: SettingsState = {
  isPopoverOpen: false,
  ThreeDStyle: "Metallic",
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
      action: PayloadAction<SettingsState["ThreeDStyle"] | undefined>
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
