"use client";
import { getSubThreads } from "@/lib/react-query/threads";
import { useAuthentication } from "@/providers/account.context";
import { useWallet } from "@/providers/wallet.context";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useRef } from "react";
import ThreeDGenerationWrapper from "./three-d-generation-wrapper";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { makeStore } from "@/lib/redux/store";
import { useAppDispatch, useAppSelector, useAppStore } from "@/hooks/redux";
import { setNewThreadId, setSubThreads } from "@/lib/redux/features/chat";
import { data } from "./mock";

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
  const accessToken = getAccessToken(address ?? "");
  const { data, isLoading } = useQuery({
    queryKey: [threadId, "get-all-sub-threads"],
    queryFn: async () => {
      return await getSubThreads(
        threadId,
        getAccessToken(accessToken ?? "") ?? ""
      );
    },
    enabled: accessToken ? accessToken?.length > 0 : false,
    // staleTime: 60 * 1000 * 30,
    refetchInterval: (query) => {
      let isFound = query.state.data?.items &&  query.state.data?.items?.find((item) => {
        const isInProgress = item.modelRequests && item.modelRequests.find(
          (item) => item.status === "inProgress"
        );
        if (isInProgress) {
          return true;
        }
      });
      return isFound ? 1500 : 8000;
    },
  });
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (data && "items" in data) {
      dispatch(setSubThreads(data.items));
    }
  }, [data]);

  const subThreads = useAppSelector((state) => state.chat.threads.subThreads);
  return (
    <div className="flex-1 h-full scrollbar-w-hidden overflow-y-hidden  flex items-center justify-center mt-4 mr-[0.15vw] flex-col">
      <Carousel orientation="vertical" className="w-full h-full ">
        <CarouselContent
          containerClass="w-full h-full"
          className="w-full h-full "
        >
          {subThreads.map((subThread, index) => (
            <CarouselItem key={index} className="  py-4 w-full h-full ">
              <ThreeDGenerationWrapper
                key={`sub-threads${subThread._id}-${threadId}`}
                threadId={threadId}
                subThread={subThread}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
