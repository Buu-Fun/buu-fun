"use client";
import ReferralHeaderIcon from "@/assets/icons/refferal-header-icon";
import ProfileSkeleton from "@/components/profile/profile-skeleton";
import CopyReferralWrapper from "@/components/referral/copy-refferal-wrapper";
import ReferralsBalance from "@/components/referral/refferals-balance";
import ProtectedWrapper from "@/components/wrapper/protected-wrapper";
import useUserCredits from "@/hooks/use-credits";

export default function ReferralPage() {
  const {  } = useUserCredits();
  return (
    <main>
      <ProtectedWrapper Fallback={<ProfileSkeleton />} fallbackUrl="/">
        <div className="w-10 mx-auto h-10 mt-5">
          <ReferralHeaderIcon />
        </div>
        <div className="flex items-center justify-center gap-6 flex-col pt-9">
          <div className="flex flex-col gap-2 items-center justify-center">
            <p>
              Get
              <span className="blue-text-clip"> 20% </span>
              of your referrals spending in $BUU!
            </p>
            <h2 className="grayish-text-gradient font-medium text-5xl tracking-tighter">
              Welcome to Referral Program
            </h2>
          </div>
          <ReferralsBalance/>
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
          {/* <h4 className="text-xl font-medium tracking-tight">Your Referrals</h4> */}
          {/* <ReferralShowcaseTable /> */}
        </div>
      </ProtectedWrapper>
    </main>
  );
}
