import SuggestionBar from "../chat-input/suggestion-bar";
import { Button } from "../ui/button";
import PopoverHiddenTrigger from "./popover-hidden-trigger";
import SelectedStyles from "./selected-styles";
import SettingsBarPopOver from "./settings-bar-pop-over-button";
import SettingsBarDisplayTitle from "./settings-bar-selected-display-title";
export default function SettingsBar() {
  return (
    <div className="flex group relative  items-center justify-between mb-3">
      <div className="ml-3 pb-0 px-2 flex  self-end">
        <SuggestionBar />
      </div>
      <div className="px-4 rounded-2xl py-2  border items-center relative justify-center mr-4 flex gap-2 bg-buu shadow-buu-inner">
        <PopoverHiddenTrigger />
        <SettingsBarDisplayTitle />
        <div className="px-1 py-1 shadow-buu-inner bg-buu rounded-lg flex items-center  justify-center">
          <SelectedStyles />
        </div>
        <div className="flex items-center  justify-center">
          <div className="h-6  my-auto  bg-white w-[2px] bg-buu shadow-buu-inner " />
          <SettingsBarPopOver />
        </div>
      </div>
    </div>
  );
}
