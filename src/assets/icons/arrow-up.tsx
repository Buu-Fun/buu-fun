import { cn } from "@/lib/utils";
import React from "react";

export default function ArrowUp({ className }: { className?: string }) {
  return (
    <svg
      className={cn(className)}
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 15 16"
      fill="none"
    >
      <path
        d="M11.1422 6.54141L7.50015 2.89941L3.85815 6.54141"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 13.1V3.00195"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
