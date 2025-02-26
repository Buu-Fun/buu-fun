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
  isStyleBoxOpen: boolean;
  isRecentChatOpen: boolean;
  ThreeDStyle?: TThreeDStyles;
  modes: "three_d_object" | "video" | "comic";
};

const initialState: SettingsState = {
  isRecentChatOpen: false,
  isStyleBoxOpen: false,
  isPopoverOpen: false,
  ThreeDStyle: "Cute",
  modes: "three_d_object",
};

const SettingsSlice = createSlice({
  name: "Settings",
  initialState,

  reducers: {
    setHistoryModel(state, action: PayloadAction<boolean>) {
      state.isRecentChatOpen = action.payload;
    },
    setSettingsPopoverChange(state, action: PayloadAction<boolean>) {
      state.isPopoverOpen = action.payload;
    },
    setStyleSelectChange(state, action: PayloadAction<boolean>) {
      state.isStyleBoxOpen = action.payload;
    },
    toggleStyleSelectChange(state) {
      state.isStyleBoxOpen = !state.isStyleBoxOpen;
    },
    toggleCreateTodoDrawerOpen(state) {
      state.isPopoverOpen = !state.isPopoverOpen;
    },
    changeThreeDStyles(
      state,
      action: PayloadAction<SettingsState["ThreeDStyle"] | undefined>,
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
  setStyleSelectChange,
  toggleStyleSelectChange,
  setHistoryModel,
} = SettingsSlice.actions;

export default SettingsSlice.reducer;
