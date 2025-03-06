import { MagicPenIcon } from "@/assets/icons";
import { cn } from "@/lib/utils";
import React from "react";

export default function MagicPenTitle({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center justify-center gap-1 text-blue-300",className)}>
      <div className="w-5 h-5 ">
        <MagicPenIcon />
      </div>
      <p>{title}</p>
    </div>
  );
}
