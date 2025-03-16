import { getReferral } from "@/lib/react-query/user";
import { useAuthentication } from "@/providers/account.context";
import { useQuery } from "@tanstack/react-query";

export function useUserReferral() {
  const { identityToken } = useAuthentication();
  return useQuery({
    queryKey: ["auth", identityToken],
    queryFn: () => {
      if (!identityToken) return;
      return getReferral({ accessToken: identityToken });
    },
  });
}

// export function used() {
//   const { identityToken, address, isAuthenticated, loading } =
//     useAuthentication();
//   return useQuery({
//     queryKey: ["auth", identityToken],
//     queryFn: () => {
//       if (!identityToken) return;
//       return getReferral({ accessToken: identityToken });
//     },
//   });
// }
