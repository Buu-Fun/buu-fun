"use client";
import gsap from "gsap";
import { LenisRef, ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";

export default function SmoothScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    if (!lenisRef.current) return;

    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);
  return (
    <ReactLenis
      options={{
        autoRaf: false,
        anchors: { immediate: false },
      }}
      ref={lenisRef}
      className=""
      root
    >
      <>{children}</>
    </ReactLenis>
  );
}
