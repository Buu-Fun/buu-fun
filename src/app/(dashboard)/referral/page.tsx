"use client";
import ReferralHeaderIcon from "@/assets/icons/refferal-header-icon";
import ProfileSkeleton from "@/components/profile/profile-skeleton";
import CopyReferralWrapper from "@/components/referral/copy-refferal-wrapper";
import ReferralShowcaseTable from "@/components/referral/refferal-show-case-table";
import ProtectedWrapper from "@/components/wrapper/protected-wrapper";
import useUserCredits from "@/hooks/use-credits";
import { getFixedCredits } from "@/lib/utils";

export default function ReferralPage() {
  const { data } = useUserCredits();
  return (
    <main className="overflow-y-scroll h-[100dvh]">
      <ProtectedWrapper Fallback={<ProfileSkeleton />} fallbackUrl="/">
        <div className="w-10 mx-auto h-10 mt-5">
          <ReferralHeaderIcon />
        </div>
        <div className="flex items-center justify-center gap-6 flex-col pt-9">
          <div className="flex flex-col gap-2 items-center justify-center">
            <p className="text-xs lg:text-base">
              Get
              <span className="blue-text-clip"> 20% </span>
              of your referrals spending in $BUU!
            </p>
            <h2 className="grayish-text-gradient font-medium text-2xl lg:text-5xl tracking-tighter">
              Welcome to Referral Program
            </h2>
          </div>
          <div className="flex items-center justify-center  max-w-sm w-full  mt-5    gap-5">
            <div className="flex items-center justify-start w-full   flex-col">
              <h3 className=" font-medium text-buu-muted-text">
                Total Earnings
              </h3>
              <div className="text-2xl font-medium">
                <p>${getFixedCredits(data?.available)}</p>
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
          <CopyReferralWrapper />
          {/* <div className="flex gap-2 items-center justify-center">
            <Button size={"buu"}>
              <div className="text-black w-6 h-6 flex items-center justify-center">
                <ReferralCurrentIcon />
              </div>
              <p className="font-medium ">Withdraw balance</p>
            </Button>
            <Button size={"special"} variant={"special"}>
              <div className="w-4  h-4 flex items-center justify-center">
                <QuestionIcons />
              </div>
              <p className="font-medium ">How it works</p>
            </Button>
          </div> */}
        </div>
        <div className="flex items-center flex-col justify-center pt-10">
          <h4 className="text-xl font-medium tracking-tight">Your Referrals</h4>
          <ReferralShowcaseTable />
        </div>
      </ProtectedWrapper>
    </main>
  );
}
