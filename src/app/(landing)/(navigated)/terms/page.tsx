"use client";
import React from "react";
import TermsContent from "@/markdown/terms.mdx";
import Bounded from "@/components/ui/Bounded";

export default function Terms() {
  return (
    <Bounded className=" prose-lg prose-slate py-32">
      <TermsContent />
    </Bounded>
  );
}
