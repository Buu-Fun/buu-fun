"use client";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

import LogoutIcon from "@/assets/icons/log-out-Icon";
import SettingsIcon from "@/assets/icons/settings-icon";
import { profilePicture } from "@/lib/dice-bear";
import { ChevronDown, Fingerprint } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import CopyAddress from "./copy-address";
import CreditUsedIcon from "./credit-used-icon";
import RecentChats from "./recent-chats";
import { useAuthentication } from "@/providers/account.context";

export default function Topbar() {
  const { address, isAuthenticated, loading, login, logout } =
    useAuthentication();
  const shouldConnect = !isAuthenticated || !address;

  return (
    <div className="flex items-center justify-end lg:gap-0 gap-2  lg:justify-between pr-1 lg:pr-10 py-4 lg:py-6">
      {!shouldConnect ? <RecentChats /> : null}
      {loading ? (
        <div className="w-8 h-8 rounded-full border-2 border-buu-secondary border-t-transparent animate-spin" />
      ) : shouldConnect ? (
        <div className="w-full flex justify-end">
          <Button
            onClick={() => {
              login();
            }}
            className="border-buu font-medium shadow-buu"
          >
            <Fingerprint className="text-buu-button animate-pulse" />
            Sign In
          </Button>
        </div>
      ) : (
        <div className="flex items-center self-end justify-center gap-2">
          <CreditUsedIcon />
          <Popover>
            <PopoverTrigger asChild>
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
                href={"/profile"}
                className="flex w-full items-center gap-1.5 hover:bg-buu-secondary py-2 rounded-md px-2 font-medium"
              >
                <SettingsIcon />
                <p>Settings</p>
              </Link>
              <button
                onClick={async () => {
                  await logout();
                }}
                className="flex w-full items-center gap-1.5 hover:bg-buu-secondary py-2 rounded-md px-2 font-medium"
              >
                <LogoutIcon />
                <p>Disconnect</p>
              </button>
            </PopoverContent>
          </Popover>
        </div>
      )}
    </div>
  );
}
