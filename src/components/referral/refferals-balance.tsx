import { getFixedCredits } from "@/lib/utils";

export default function ReferralsBalance() {
  //   const { identityToken } = useAuthentication();

  //   const { data } = useQuery({
  //     queryKey: ["auth", identityToken],
  //     queryFn: () => {
  //       if (!identityToken) return;
  //       return getUserReferral({ accessToken: identityToken });
  //     },
  //   });
  return (
    <div className="flex items-center justify-center  max-w-sm w-full  mt-5    gap-5">
      <div className="flex items-center justify-start w-full   flex-col">
        <h3 className=" font-medium text-buu-muted-text">Total Earnings</h3>
        <div className="text-2xl font-medium">
          <p>${getFixedCredits(0.1)}</p>
        </div>
      </div>
      <div className="w-[2.5px] min-h-[50px] h-full  bg-gray-700/60" />
      <div className="flex items-center justify-start w-full flex-col">
        <h3 className=" font-medium text-buu-muted-text">Referrals</h3>
        <div className="text-2xl font-medium">
          <p>3</p>
        </div>
      </div>
    </div>
  );
}
