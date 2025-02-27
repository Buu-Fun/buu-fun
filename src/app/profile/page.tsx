"use client";
import React from "react";
import ProfileImage from "@/assets/Image/profile-icon.png";
import Image from "next/image";
import CopyAddress from "@/components/navbar/copy-address";
import { Button } from "@/components/ui/button";
import { AddImage } from "@/assets/icons";
import AccountLinking from "@/components/profile/account-linking";
import { profilePicture } from "@/lib/dice-bear";
import { useWallet } from "@/providers/wallet.context";
import { redirect } from "next/navigation";
import ProfileSkeleton from "@/components/profile/profile-skeleton";
export default function ProfilePage() {
  // made the profile fully client based because it doesn't matter to render fully on server
  const { address, loading } = useWallet();
  if (loading) return <ProfileSkeleton />;

  if(!address) redirect('/')

  return (
    <main className="flex items-center flex-col justify-center ">
      <div className="flex w-16 h-16">
        <Image
          src={profilePicture(address)}
          width={480}
          className="w-full h-full border-2 rounded-2xl border-profile shadow-inner shadow-gray-200"
          alt="Profile image"
          height={480}
        />
      </div>
      <div className="mt-6 border-buu bg-overlay-primary bg-buu-button px-2 py-1 rounded-full text-sm uppercase">
        <div className="">Meta Mask</div>
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
            <p>$4.21</p>
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
        <Button
          //   onClick={openConnectionModal}
          className="px-2 group py-2 h-[40px] rounded-[10px]"
        >
          <Image
            className="w-6 h-6 group-hover:brightness-90 transition-all duration-300 ease-in"
            src={AddImage.src}
            alt="connect wallet icon"
            width={100}
            height={100}
          />
          Add more credits
        </Button>

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
