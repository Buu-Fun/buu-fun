"use client";
import React from "react";
import AupContent from "@/markdown/AUP.mdx";
import Bounded from "@/components/ui/Bounded";

export default function AcceptedUserPolicy() {
  return (
    <Bounded className=" prose-lg prose-slate py-32">
      <AupContent />
    </Bounded>
  );
}
