import { RootState } from "@/types/reduxStore";
import { createSelector } from "@reduxjs/toolkit";
const SubThreads = (state: RootState) => state.chat.threads.subThreads;
export const getSubThreadsFromStore = createSelector(
  [SubThreads, (_, id: string) => id],
  (SubThread, id) => {
    const FoundedSubthread = SubThread.find((fv) => fv._id === id);
    return FoundedSubthread;
  }
);
