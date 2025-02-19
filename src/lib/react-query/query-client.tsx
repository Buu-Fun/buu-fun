import {
  defaultShouldDehydrateQuery,
  isServer,
  QueryClient,
} from "@tanstack/react-query";

let clientQueryClientSingleton: QueryClient | undefined = undefined;

export const createQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid refetching immediately on the client
        staleTime: 30 * 1000,
      },
      dehydrate: {
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === "pending",
      },
    },
  });

let BrowserQueryClient: QueryClient | undefined = undefined;
export const getQueryClient = () => {
  if (isServer) {
    // Server: always make a new query client
    return createQueryClient();
  }
  // Browser: use singleton pattern to keep the same query client
  if (!BrowserQueryClient) BrowserQueryClient = createQueryClient();
  return (clientQueryClientSingleton ??= createQueryClient());
};

export const queryClient = getQueryClient();
