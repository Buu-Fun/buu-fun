import { SUB_THREAD_QUERY_LIMIT } from "@/constants/infinity.config";
import { getSubThreads } from "@/lib/react-query/threads-v2";
import { useAuthentication } from "@/providers/account.context";
import { useWallet } from "@/providers/wallet.context";
import { useInfiniteQuery } from "@tanstack/react-query";

export function useSubThreads({
  threadId,
  limit = SUB_THREAD_QUERY_LIMIT,
}: {
  threadId: string;
  limit?: number;
}) {
  const { getAccessToken } = useAuthentication();
  const { address } = useWallet();

  return useInfiniteQuery({
    queryKey: ["get-sub-threads", threadId],
    queryFn: ({ pageParam = 0 }) => {
      const accessToken = getAccessToken(address ?? "");
      return getSubThreads({
        accessToken: accessToken ?? "",
        threadId,
        pagination: {
          limit,
          offset: pageParam,
          orderDirection: "desc",
        },
      });
    },
    
    getNextPageParam: (lastPage) => {
      const { metadata } = lastPage;
      const totalItems = metadata.numElements ?? 1;
      const currentOffset = metadata.offset ?? 0;
      const currentLimit = metadata.limit ?? 10;

      // Calculate if there are more items to fetch
      const nextOffset = currentOffset + currentLimit;

      // If we've fetched all items, return undefined to stop pagination
      if (nextOffset >= totalItems) {
        return undefined;
      }

      // Return the next offset
      return nextOffset;
    },
    initialPageParam: 0,
  });
}
