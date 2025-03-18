import TopNavigationBar from "@/components/(home)/navigation/top-navigation-bar";
import React, { ReactNode } from "react";

export default function NavigationLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="relative w-full h-full">
      <TopNavigationBar />
      {children}
    </div>
  );
}
