"use client";
import { getSubThreads } from "@/lib/react-query/threads";
import { useAuthentication } from "@/providers/account.context";
import { useWallet } from "@/providers/wallet.context";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import ThreeDGenerationWrapper from "./three-d-generation-wrapper";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useAppDispatch, useAppSelector, useAppStore } from "@/hooks/redux";
import { setNewThreadId, setSubThreads } from "@/lib/redux/features/chat";

export type TThreadsWrapper = {
  threadId: string;
};
export default function ThreadsWrapper({ threadId }: TThreadsWrapper) {
  const store = useAppStore();

  const initialized = useRef(false);
  if (!initialized.current) {
    store.dispatch(setNewThreadId(threadId));
    initialized.current = true;
  }

  const { getAccessToken } = useAuthentication();
  const { address } = useWallet();

  const { data } = useQuery({
    queryKey: ["get-all-sub-threads"],
    staleTime: 10000,

    queryFn: async () => {
      const accessToken = getAccessToken(address ?? "");

      return await getSubThreads(
        threadId,
        getAccessToken(accessToken ?? "") ?? ""
      );
    },

    enabled: (query) => {
      // const accessToken = getAccessToken(address ?? "");

      // if not authorized just dont send in the request.
      // if (!accessToken || !accessToken.length) return false;

      // if the query state didn't have any items then return true, probably first request
      if (!query.state.data?.items || !query.state.data?.items.length)
        return true;

      // check if there are any models are in progress
      // whether the modelRequest is empty or the model request is in `InProgress`

      const isInProgressFound =
        query.state.data?.items &&
        query.state.data?.items?.find((item) => {
          if (!item.modelRequests) return item;

          const isInProgress =
            item.modelRequests &&
            item.modelRequests.find((item) => item.status === "InProgress");

          if (isInProgress) {
            return item;
          }
        });

      // if there are subThreadId then return true
      if (isInProgressFound?._id) return true;

      return false;
    },
  });
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (data && "items" in data) {
      console.log(data);
      dispatch(setSubThreads(data.items));
    }
  }, [data, dispatch]);

  const subThreads = useAppSelector((state) => state.chat.threads.subThreads);

  return (
    <div className="flex-1 h-full scrollbar-w-hidden overflow-y-hidden  flex items-center justify-center mt-4 mr-[0.15vw] flex-col">
      <Carousel
        opts={{
          watchDrag: true,
          watchResize: true,
          watchSlides: true,
          startIndex: subThreads.length - 1,
          dragFree: false,
        }}
        plugins={[WheelGesturesPlugin()]}
        orientation="vertical"
        className="w-full h-full relative z-0"
      >
        <CarouselContent
          containerClass="w-full h-full "
          className="w-full h-full pointer-events-none"
        >
          {subThreads.map((subThread, index) => (
            <CarouselItem
              draggable={false}
              key={index}
              className="relative  py-4 w-full h-full basis-full  "
            >
              <ThreeDGenerationWrapper
                key={`sub-threads${subThread._id}-${threadId}`}
                threadId={threadId}
                subThread={subThread}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="border absolute top-[12%] right-[20%] pointer-events-auto">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}
