"use client";
import React from "react";
import CookiePolicyContent from "@/markdown/cookie-policy.mdx";
import Bounded from "@/components/ui/Bounded";

export default function CookiePolicy() {
  return (
    <Bounded className=" prose-lg prose-slate py-32">
      <CookiePolicyContent />
    </Bounded>
  );
}
