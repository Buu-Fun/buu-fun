import { getUserCredits } from "@/lib/react-query/user";
import { useAuthentication } from "@/providers/account.context";
import { useWallet } from "@/providers/wallet.context";
import { useQuery } from "@tanstack/react-query";

export default function useUserCredits() {
  const { getAccessToken } = useAuthentication();
  const { address } = useWallet();
  return useQuery({
    queryKey: ["get-user-credits", address],
    queryFn: async () => {
      const accessToken = getAccessToken(address ?? "");
      return await getUserCredits({
        accessToken: accessToken ?? "",
      });
    },
    refetchInterval: 150_000,
  });
}
