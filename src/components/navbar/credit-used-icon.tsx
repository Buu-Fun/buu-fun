import FlashIcon from "@/assets/icons/flash-icon";
import React from "react";
import { Button } from "../ui/button";

export default function CreditUsedIcon() {
  return (
    <div>
      <Button
        variant={"outline"}
        className="px-2.5 h-[40px] group py-2 bg-buu shadow-buu-secondary border-buu rounded-[10px]"
      >
        <FlashIcon />
        <p className="text-white">$4.21</p>
        Credits Used{" "}
      </Button>
    </div>
  );
}
