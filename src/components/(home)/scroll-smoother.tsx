"use client";

import { ReactLenis } from "lenis/react";

export default function SmoothScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis className="" root>
      {children}
    </ReactLenis>
  );
}
