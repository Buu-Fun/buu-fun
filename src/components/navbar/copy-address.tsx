"use client";
import CopyIcon from "@/assets/icons/copy-icon";
import { cn } from "@/lib/utils";
import { useWallet } from "@/providers/wallet.context";
import { Check } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import React, { useState } from "react";
type TCopyAddress = {
  isNavigation?: boolean;
  className?: string;
};
export default function CopyAddress({ isNavigation, className }: TCopyAddress) {
  const router = useRouter();
  const { address, loading } = useWallet();
  const [isCopy, setIsCopied] = useState(false);
  
  
  function handleCopy() {
    if (!address) return;
    window.navigator.clipboard.writeText(address);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  }

  return (
    <button
      disabled={isCopy}
      onClick={handleCopy}
      className={cn(
        "flex items-center flex-row-reverse gap-1.5 w-full",
        {
          "hover:bg-buu-secondary py-2 flex-row rounded-md px-2 font-medium":
            isNavigation,
        },
        className
      )}
    >
      {!isCopy ? (
        <>
          <CopyIcon />
          <p>
            {isNavigation ? (
              "Copy address"
            ) : address ? (
              <>
                {address.slice(0, 11)}...
                {address.slice(address.length - 5, address.length - 1)}
              </>
            ) : null}
          </p>
        </>
      ) : (
        <>
          <Check className="w-5 h-5 text-[#78DBFF] " />
          <p>Copied</p>
        </>
      )}
    </button>
  );
}
