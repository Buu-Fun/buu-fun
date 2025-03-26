import ViewBoardContainer from "@/components/boards/view-board-container";
import { getSharableBoardQuery } from "@/lib/react-query/boards";
import Image from "next/image";
import React from "react";
type TBoardsPage = {
  params: Promise<{
    id: string;
  }>;
};
export default async function BoardsPage({ params }: TBoardsPage) {
  const boardId = (await params).id;
  const board = await getSharableBoardQuery({
    boardId,
  });
  console.log(board);
  return (
    <main className="flex flex-col relative h-full w-full   max-h-[calc(100vh-100px)]  overflow-hidden">
      {board ? <ViewBoardContainer board={board} /> : null}
    </main>
  );
}
