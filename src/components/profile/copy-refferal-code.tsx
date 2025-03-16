import CopyIcon from "@/assets/icons/copy-icon";
import { cn } from "@/lib/utils";
import { useAuthentication } from "@/providers/account.context";
import { Check } from "lucide-react";
import React, { useState } from "react";

export default function CopyReferralCode() {
  const { address } = useAuthentication();

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
      className={cn("flex items-center justify-center transition-all duration-300 ease-in-out flex-row-reverse gap-1.5 w-full")}
    >
      {!isCopy ? (
        <>
          <CopyIcon />
          <p className="text-xs blue-text-clip">BUU-FUN-0ADS</p>
        </>
      ) : (
        <>
          <Check className="w-5 h-5 text-[#78DBFF] " />
          <p className="text-xs font-medium">Copied</p>
        </>
      )}
    </button>
  );
}
