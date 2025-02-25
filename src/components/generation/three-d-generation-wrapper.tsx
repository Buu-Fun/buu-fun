"use client";
import { TSubThread } from "@/lib/redux/features/chat-types";
import CurvedEmblaCarousel from "./carousal";
import { format } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import { getSubThread } from "@/lib/react-query/threads";
import { useAuthentication } from "@/providers/account.context";
import { useWallet } from "@/providers/wallet.context";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setSubThread } from "@/lib/redux/features/chat";
import { getSubThreadsFromStore } from "@/lib/redux/selectors/chat";
import { cn } from "@/lib/utils";

type TThreeDGenerationWrapper = {
  threadId: string;
  subThread: TSubThread;
};

export default function ThreeDGenerationWrapper({
  threadId,
  subThread,
}: TThreeDGenerationWrapper) {
  const { getAccessToken } = useAuthentication();
  const { address } = useWallet();
  const $SubThread = useAppSelector((state) =>
    getSubThreadsFromStore(state, subThread._id)
  );

  const { data } = useQuery({
    queryKey: [subThread._id, "get-sub-thread"],
    queryFn: async () => {
      const accessToken = getAccessToken(address ?? "");
      return await getSubThread(subThread._id, accessToken ?? "");
    },
    enabled: (query) => {
      // check if there is no model request, if not return enabled.
      if (
        !subThread?.modelRequest?.length ||
        !subThread?.imageRequest ||
        !$SubThread
      ) {
        console.log("Some ModelRequest aren't found");
        return true;
      }

      // there is new image but no subThreads. meaning a new model is generating...
      if (subThread?.modelRequest.length !== subThread?.imageRequest.length) {
        return true;
      }

      // check if there is any request's are in Progress, if so return true
      const isPendingFoundInQuery = query.state.data?.modelRequests?.find(
        (item) => item.status === "InProgress"
      );
      const isPendingFoundInState = $SubThread.modelRequest.find(
        (item) => item.status === "InProgress"
      );

      if (isPendingFoundInQuery?._id || isPendingFoundInState?._id) return true;

      return false;
    },
    refetchInterval: 3500,
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data && data._id) {
      dispatch(setSubThread(data));
    }
  }, [dispatch, data]);

  return (
    <div className="flex  items-center pointer-events-none  justify-center h-full     flex-col gap-4">
      <div className="bg-buu  relative shadow-buu-pill border-buu rounded-full   px-1.5 py-1">
        <p className="text-xs font-semibold px-0.5 uppercase text-[#D5D9DF60] line-clamp-2">
          {/* {selected?.message[ZERO][ZERO]?.time ?? "07:00:AM"} */}
          {format($SubThread?.createdAt ?? Date.now(), "KK:mm:a")}
          {/* {id} */}
        </p>
      </div>
      <h2
        className={cn(
          "text-2xl max-w-md text-center  relative font-medium tracking-tighter",
          {
            "text-xl": $SubThread && $SubThread?.message?.length > 40,
            "text-lg": $SubThread && $SubThread?.message?.length > 80,
            "text-base": $SubThread && $SubThread?.message?.length > 120,
            "text-sm line-clamp-3":
              $SubThread && $SubThread?.message?.length > 160,
          }
        )}
      >
        {$SubThread?.message}
      </h2>
      <div className="flex items-center max-h-[370px]   justify-center w-full h-full">
        <div className="flex items-center  max-h-[370px] h-full   justify-center max-w-sm ">
          <CurvedEmblaCarousel
            $SubThread={$SubThread}
            threadId={threadId}
            subThreadId={$SubThread ? $SubThread?._id : ""}
            modelRequest={
              $SubThread?.modelRequest && $SubThread?.modelRequest.length
                ? $SubThread?.modelRequest
                : []
            }
          />
        </div>
      </div>
    </div>
  );
}
