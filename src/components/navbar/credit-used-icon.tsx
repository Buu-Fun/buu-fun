import FlashIcon from "@/assets/icons/flash-icon";
import React from "react";
import { Button } from "../ui/button";
import useUserCredits from "@/hooks/use-credits";
import { getFixedCredits } from "@/lib/utils";

export default function CreditUsedIcon() {
  const { data } = useUserCredits();
  return (
    <div>
      <Button
        variant={"outline"}
        className="px-2.5 h-[40px] group py-2 bg-buu shadow-buu-secondary border-buu rounded-[10px]"
      >
        <FlashIcon />
        <p className="text-white">${getFixedCredits(data?.available)}</p>
        Credits Used{" "}
      </Button>
    </div>
  );
}
