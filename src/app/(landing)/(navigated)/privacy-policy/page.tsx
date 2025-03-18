"use client";
import React from "react";
import PrivacyPolicyContent from "@/markdown/privacy-policy.mdx";
import Bounded from "@/components/ui/Bounded";

export default function PrivacyPolicy() {
  return (
    <Bounded className=" prose-lg prose-slate py-32">
      <PrivacyPolicyContent />
    </Bounded>
  );
}
