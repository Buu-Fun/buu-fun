import {
  getSharableBoardQuery,
  getUserSharableBoardQuery,
} from "@/lib/react-query/boards";
import { useAuthentication } from "@/providers/account.context";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export function useSharableBoards({
  threadId,
  count,
}: {
  threadId?: string;
  count?: number;
}) {
  const { identityToken: accessToken } = useAuthentication();

  return useQuery({
    queryKey: ["user-shareable-boards", threadId],
    enabled: !!(accessToken && accessToken?.length > 1),
    queryFn: () => {
      if (!accessToken) return;
      return getUserSharableBoardQuery({
        accessToken: accessToken,
        threadId,
        count,
      });
    },
  });
}

export function useSharedBoards({ boardId }: { boardId: string }) {
  return useQuery({
    queryKey: ["user-shareable-boards"],
    queryFn: () => {
      return getSharableBoardQuery({
        boardId,
      });
    },
  });
}
