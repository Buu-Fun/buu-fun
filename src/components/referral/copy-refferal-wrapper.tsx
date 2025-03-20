"use client";
import CopyBlackIcon from "@/assets/icons/copy-black-icon";
import { getUserReferral } from "@/lib/react-query/referrals";
import { cn } from "@/lib/utils";
import { useAuthentication } from "@/providers/account.context";
import { useQuery } from "@tanstack/react-query";
import { Check } from "lucide-react";
import { useState } from "react";
import { BorderBeam } from "../ui/border-beam";
import { Button } from "../ui/button";

export default function CopyReferralWrapper() {
  const { identityToken } = useAuthentication();
  const [isCopy, setIsCopied] = useState(false);

  const { data } = useQuery({
    queryKey: ["auth", identityToken],
    queryFn: () => {
      if (!identityToken) return;
      return getUserReferral({ accessToken: identityToken });
    },
  });
  const ReferralCode = `https://buu.fun/app?ref=${data?.referralCode}`;
  function handleCopy() {
    if (!data?.referralCode) return;
    window.navigator.clipboard.writeText(ReferralCode);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  }
  //   console.log("DATA RTQ", data?.referralCode);
  return (
    <div className="bg-buu relative py-[10px] px-2 rounded-xl overflow-hidden">
      {/* Main content */}
      <div className="flex items-center justify-between gap-2">
        <div className="bg-buu shadow-buu-secondary  rounded-lg px-4 py-2">
          <p className="max-w-[200px] truncate">{ReferralCode}</p>
        </div>
        <div>
          <Button onClick={handleCopy} size={"buu"}>
            {!isCopy ? (
              <>
                <CopyBlackIcon />
                <p className="font-medium text-black">Copy</p>
              </>
            ) : (
              <>
                <Check className="w-5 h-5 text-green stroke-2 " />
                <p>Copied</p>
              </>
            )}
          </Button>
        </div>
      </div>
      {/* Border beam effect */}
      <BorderBeam
        containerClassName={cn("border-2 rounded-2xl", {})}
        initialOffset={50}
        size={50}
        colorFrom="rgba(119, 217, 253,1)"
        colorTo="rgba(119, 217, 253,1)"
      />
    </div>
  );
}

// {!isCopy ? (
//         <>
//           <CopyIcon />
//           <p>
//             {isNavigation ? (
//               "Copy address"
//             ) : address ? (
//               <>
//                 {address.slice(0, 4)}...
//                 {address.slice(address.length - 5, address.length - 1)}
//               </>
//             ) : null}
//           </p>
//         </>
//       ) : (
//         <>
//   <Check className="w-5 h-5 text-[#78DBFF] " />
//   <p>Copied</p>
//         </>
//       )}
