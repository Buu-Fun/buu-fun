"use client";
import { useSharedBoards } from "@/hooks/use-boards";
import React, { useRef } from "react";
import { ShareableBoard } from "@/gql/types/graphql";
import { useAppSelector, useAppStore } from "@/hooks/redux";
import { initializeSharableBoards } from "@/lib/redux/features/boards";
import { getBoards } from "@/lib/redux/selectors/board";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "../ui/card";
import dynamic from "next/dynamic";
import Image from "next/image";
import ViewBoardCarousal from "./view-board-carousal";
const ModelViewer = dynamic(() => import("../generation/model-viewer"), {
  ssr: false,
  loading: () => null, // Use null instead of undefined
});

const MockModelUrl =
  "https://cdn.buu.fun/production/users/F6BHzc3ufdjynKwJ6qGkLGx8DtUUya4zYWLzaJ91k8FM/genRequests/38970630-52f1-4005-8d44-2234e8a3d05d/model_mesh/b8950938-6d69-454c-8a13-3711ab8fd700.glb";
const mockImageUrl =
  "https://cdn.buu.fun/production/users/F6BHzc3ufdjynKwJ6qGkLGx8DtUUya4zYWLzaJ91k8FM/genRequests/6ff9999d-8a3b-4e0b-8169-b41ae8e060a4/images/0c344c87-d696-4cd3-bd57-b9a7f87e7a11.png";
export default function ViewBoardContainer({
  board,
}: {
  board: ShareableBoard;
}) {
  const store = useAppStore();
  const initialized = useRef(false);
  if (!initialized.current) {
    store.dispatch(initializeSharableBoards(board));
    initialized.current = true;
  }

  const boards = useAppSelector((state) => getBoards(state));

  //   const { data } = useSharedBoards({ boardId });
  return (
    <div className="relative  h-full backdrop-blur-2xl w-full">
      {/*  */}
      <div className="absolute top-0 left-0 w-full h-full blur-[100px]  opacity-10 pointer-events-none">
        <div className="flex items-center w-full h-full  relative justify-between">
          <ModelViewer src={MockModelUrl} />
        </div>
        {/* <Image src={mockImageUrl} alt="mockImage" width={1920} height={1080} className="bg-background bg-blend-multiply" /> */}
      </div>
      <div className="absolute w-full h-full top-0 left-0  backdrop-blur-3xl " />
      <ViewBoardCarousal />
    </div>
  );
}
