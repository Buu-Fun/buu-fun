"use client";
import { AppHomeStore, makeHomeStore } from "@/lib/redux/(home)/home-store";
import { useRef } from "react";
import { Provider } from "react-redux";

export default function HomeStoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppHomeStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeHomeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
