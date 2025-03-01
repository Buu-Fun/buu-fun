"use client";
import CopyAddress from "@/components/navbar/copy-address";
import AccountLinking from "@/components/profile/account-linking";
import ProfileSkeleton from "@/components/profile/profile-skeleton";
import RedeemVouchers from "@/components/profile/redeem-vouchers";
import { Button } from "@/components/ui/button";
import useUserCredits from "@/hooks/use-credits";
import { profilePicture } from "@/lib/dice-bear";
import { getFixedCredits } from "@/lib/utils";
import { useAuthentication } from "@/providers/account.context";
import { useWallet } from "@/providers/wallet.context";
import { useWallet as useWeb3Wallet } from "@solana/wallet-adapter-react";

import Image from "next/image";
import { useEffect } from "react";

export default function ProfilePage() {
  // made the profile fully client based because it doesn't matter to render fully on server
  const { address, loading, openConnectionModal } = useWallet();
  const { loading: IsAuthLoading } = useAuthentication();
  const { wallet } = useWeb3Wallet();
  const { data } = useUserCredits();
  // const router = useRouter();

  useEffect(() => {
    if (!IsAuthLoading && !loading && !address) {
      openConnectionModal();
    }
  });

  if (loading || IsAuthLoading || !address) return <ProfileSkeleton />;
  return (
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
      <div className="bg-buu flex items-center justify-center mt-6  relative shadow-buu-pill border-buu rounded-full   px-1.5 py-1">
        <Image
          className="w-4 h-4"
          src={wallet?.adapter.icon ?? "/logo.png"}
          alt="Connected wallet Icon"
          width={250}
          height={250}
        />
        <p className="text-xs font-semibold px-0.5 uppercase text-[#D5D9DF60] line-clamp-2">
          {wallet?.adapter.name}
        </p>
      </div>

      <div className="mt-4">
        <CopyAddress className="text-xl font-medium" />
      </div>

      <div className="flex items-center justify-center  max-w-sm w-full  mt-5    gap-5">
        <div className="flex items-center justify-start w-full   flex-col">
          <h3 className="text-lg  font-medium text-buu-muted-text">
            Credits Used
          </h3>
          <div className="text-2xl font-medium">
            <p>${getFixedCredits(data?.available)}</p>
          </div>
        </div>
        <div className="w-[1.5px] min-h-[50px]  bg-muted-foreground/40" />
        <div className="flex items-center justify-start w-full flex-col">
          <h3 className="text-lg font-medium text-buu-muted-text">Plan</h3>
          <div className="text-2xl font-medium">
            <p>Free Plan</p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-center justify-center mt-6">
        <RedeemVouchers />

        <Button
          variant={"outline"}
          className="px-2.5 h-[40px] group py-2 bg-buu shadow-buu-secondary border-buu rounded-[10px]"
        >
          Manage subscription{" "}
        </Button>
      </div>
      <div className="mt-6">
        <p className=" font-medium text-buu-muted-text">Link your accounts</p>
      </div>
      <AccountLinking />
    </main>
  );
}
