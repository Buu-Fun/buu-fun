import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import AddImage from "@/assets/icons/add.png";
export default function Topbar() {
  return (
    <div className="flex items-center justify-end pr-10 py-6">
      <Button className="px-2 group py-2 h-auto rounded-[10px]">
        <Image
          className="w-8 h-8 group-hover:brightness-90 transition-all duration-300 ease-in"
          src={AddImage.src}
          alt="connect wallet icon"
          width={100}
          height={100}
        />
        Connect Wallet
      </Button>
    </div>
  );
}
