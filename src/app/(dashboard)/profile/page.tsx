"use client";
// import CopyAddress from "@/components/navbar/copy-address";
import AccountLinking from "@/components/profile/account-linking";
import Base64ImageDiv from "@/components/profile/icon-render";
import ProfileSkeleton from "@/components/profile/profile-skeleton";
import RedeemVouchers from "@/components/profile/redeem-vouchers";
import CopyReferralWrapper from "@/components/referral/copy-refferal-wrapper";
import ProtectedWrapper from "@/components/wrapper/protected-wrapper";
import useUserCredits from "@/hooks/use-credits";
import { profilePicture } from "@/lib/dice-bear";
import { getFixedCredits, isImageUrl } from "@/lib/utils";
import { useAuthentication } from "@/providers/account.context";

import Image from "next/image";

export default function ProfilePage() {
  // made the profile fully client based because it doesn't matter to render fully on server
  const { address, wallet } = useAuthentication();
  const { data } = useUserCredits();
  return (
    <ProtectedWrapper Fallback={<ProfileSkeleton />} fallbackUrl="/">
      <main className="flex items-center flex-col justify-center w-full ">
        <div className="flex w-16 h-16">
          <Image
            loading="lazy"
            src={profilePicture(address ?? "")}
            width={480}
            className="w-full h-full border-2 rounded-2xl border-profile shadow-inner shadow-gray-200"
            alt="Profile image"
            height={480}
          />
        </div>
        <div className="bg-buu flex items-center gap-0.5 justify-center mt-6  relative shadow-buu-pill border-buu rounded-full   px-1.5 py-1">
          {isImageUrl(wallet?.icon)?.imageUrl ? (
            <Image
              className="w-4 h-4 rounded-full"
              src={isImageUrl(wallet?.icon)?.imageUrl ?? "/logo.png"}
              alt="Connected wallet Icon"
              width={250}
              height={250}
            />
          ) : isImageUrl(wallet?.icon)?.imageUri ? (
            <Base64ImageDiv
              className="w-4 h-4 rounded-full"
              base64String={isImageUrl(wallet?.icon)?.imageUri}
            />
          ) : null}
          <p className="text-xs font-semibold px-0.5 uppercase text-[#D5D9DF60] line-clamp-2">
            {wallet?.name && wallet?.name.length > 8
              ? `${wallet?.name.slice(0, 3)}...${wallet?.name.slice(wallet?.name.length - 3, wallet?.name.length)}`
              : wallet?.name
                ? `${wallet?.name}`
                : null}
          </p>
        </div>

        {/* <div className="mt-4">
          <CopyAddress className="text-xl font-medium" />
        </div> */}

        <div className="flex items-center justify-center  max-w-sm w-full  mt-5    gap-5">
          <div className="flex items-center justify-start w-full   flex-col">
            <h3 className="text-lg  font-medium text-buu-muted-text">
              Credits Used
            </h3>
            <div className="text-2xl font-medium">
              <p>${getFixedCredits(data?.available)}</p>
            </div>
          </div>
          <div className="w-[2.5px] min-h-[50px] h-full  bg-gray-700/60" />
          <div className="flex items-center justify-start w-full flex-col">
            <h3 className="text-lg font-medium text-buu-muted-text">Plan</h3>
            <div className="text-2xl font-medium">
              <p>Free Plan</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center justify-center mt-6">
          <h4 className="text-xl font-medium tracking-tight">Your Referrals</h4>
          <p>
            Get
            <span className="blue-text-clip"> 20% </span>
            of your referrals spending in $BUU!
          </p>
          <CopyReferralWrapper />
          <RedeemVouchers />

          {/* <Button
          variant={"outline"}
          className="px-2.5 h-[40px] group py-2 bg-buu shadow-buu-secondary border-buu rounded-[10px]"
        >
          Manage subscription{" "}
        </Button> */}
        </div>
        <div className="mt-6">
          <p className=" font-medium text-buu-muted-text">Link your accounts</p>
        </div>
        <AccountLinking />
      </main>
    </ProtectedWrapper>
  );
}
