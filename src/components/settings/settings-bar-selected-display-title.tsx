"use client";
import { useAppSelector } from "@/hooks/redux";
import { SettingsState } from "@/lib/redux/features/settings";
import SettingsBarSelectedDisplay from "./settings-bar-selected-display";

export const modes_mapper: Record<SettingsState["modes"], string> = {
  comic: "Comics",
  three_d_object: "3D Object",
  video: "Video",
};

export default function SettingsBarDisplayTitle() {
  const selectedMode = useAppSelector((state) => state.settings.modes);
  const title = modes_mapper[selectedMode]
  return <SettingsBarSelectedDisplay title={title} />;
}
