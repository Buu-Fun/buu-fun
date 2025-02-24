"use client";
import CurvedEmblaCarousel from "@/components/generation/carousal";
import { Button } from "@/components/ui/button";
import { SubthreadStyle } from "@/gql/types/graphql";
import { generateSubThreads } from "@/lib/react-query/threads";
import { useAuthentication } from "@/providers/account.context";
import { useWallet } from "@/providers/wallet.context";
import { getAccessToken } from "@privy-io/react-auth";
import React, { useCallback, useState } from "react";
// import { ThreeDCubeFour, ThreeDCubeThree, ThreeDCubeTwo } from "@/assets/Image";
import "@google/model-viewer";

export default function Page() {
  return (
    <model-viewer
      style={{
        width: "100%",
        height: "100%",
        display: "block",
      }}
      src={"https://v3.fal.media/files/zebra/yg05TRDL_iqn1BBB1pnLw_model.glb"}
      ios-src=""
      alt="A 3D model of an astronaut"
      shadow-intensity="1"
      seamless-poster
      camera-controls
      auto-rotate
      touch-action="pan-y"
      ar
    />
  );
}
