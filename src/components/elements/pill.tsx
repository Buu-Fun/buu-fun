import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export default function Pill({
  className,
  children,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-buu flex items-center justify-center   relative shadow-buu-pill border-buu rounded-full   px-1.5 py-1",
        className
      )}
    >
      {children}
    </div>
  );
}
