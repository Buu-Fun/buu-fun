import React from "react";
import { WalletExportIcon } from "./wallets";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function WalletIconStack() {
  return (
    <div className="flex">
      {WalletExportIcon.map((item, index) => {
        return (
          <Link
            href={item.link}
            target="_blank"
            key={index}
            className={cn(
              "w-6 h-6 rounded-full overflow-hidden relative",
              index > 0 ? `-ml-1.5` : "",
            )}
          >
            <Image
              src={item.imageSrc}
              alt={item.alt || `Wallet icon ${index + 1}`}
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </Link>
        );
      })}
    </div>
  );
}
