"use client";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

import LogoutIcon from "@/assets/icons/log-out-Icon";
import SettingsIcon from "@/assets/icons/settings-icon";
import { profilePicture } from "@/lib/dice-bear";
import { useAuthentication } from "@/providers/account.context";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CopyAddress from "./copy-address";
import ReferralIcon from "@/assets/icons/referral-icon";

export default function DesktopProfileNavigation() {
  const { address, isAuthenticated, logout } = useAuthentication();
  const shouldConnect = !isAuthenticated || !address;

  return (
    <>
      {!shouldConnect ? (
        <Popover>
          <PopoverTrigger asChild className="md:flex hidden">
            <button className="flex items-center gap-1.5 text-sm px-2 h-[40px] group py-1.5 bg-white text-black rounded-md">
              <div className="relative flex w-8 h-8 border-profile shadow-inner rounded-md overflow-hidden">
                <Image
                  src={profilePicture(address)}
                  width={100}
                  alt="sample profile Icon"
                  height={100}
                />
              </div>
              <p className="hidden lg:flex">
                {address && address.length > 9 ? (
                  <>
                    {address.slice(0, 4)}...
                    {address.slice(address.length - 5, address.length - 1)}
                  </>
                ) : (
                  address
                )}
              </p>
              <div className="w-0.5 h-[90%] my-auto bg-muted/80 hidden lg:flex" />
              <ChevronDown />
            </button>
          </PopoverTrigger>
          <PopoverContent
            sideOffset={8}
            align="end"
            className="px-1 pb-1 pt-1 max-w-[210px] bg-buu border-buu"
          >
            <CopyAddress isNavigation />
            <Link
              href={"/app/profile"}
              className="flex w-full items-center gap-1.5 hover:bg-buu-secondary py-2 rounded-md px-2 font-medium"
            >
              <div className="w-5 h-5">
                <SettingsIcon />
              </div>
              {/* <SettingsIcon /> */}
              <p>Settings</p>
            </Link>
            <Link
              href={"/app/referral"}
              className="flex w-full items-center gap-1.5 hover:bg-buu-secondary py-2 rounded-md px-2 font-medium"
            >
              <div className="w-5 h-5">
                <ReferralIcon />
              </div>
              {/* <SettingsIcon /> */}
              <p>Referral Program</p>
            </Link>

            <button
              onClick={async () => {
                await logout();
              }}
              className="flex w-full items-center gap-1.5 hover:bg-buu-secondary py-2 rounded-md px-2 font-medium"
            >
              {" "}
              <div className="w-5 h-5">
                <LogoutIcon />{" "}
              </div>
              <p>Disconnect</p>
            </button>
          </PopoverContent>
        </Popover>
      ) : null}
    </>
  );
}
