import { getUserCredits } from "@/lib/react-query/user";
import { useAuthentication } from "@/providers/account.context";
import { useQuery } from "@tanstack/react-query";

export default function useUserCredits() {
  const { identityToken, address, isAuthenticated, loading } =
    useAuthentication();
  return useQuery({
    queryKey: ["get-user-credits", address],
    enabled: !loading && isAuthenticated,
    queryFn: async () => {
      return await getUserCredits({
        accessToken: identityToken ?? "",
      });
    },
    refetchInterval: 150_000,
  });
}
