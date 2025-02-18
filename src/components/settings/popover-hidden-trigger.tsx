"use client";
import React from "react";

import { useAppDispatch } from "@/hooks/redux";
import { toggleCreateTodoDrawerOpen } from "@/lib/redux/features/settings";
export default function PopoverHiddenTrigger() {
  const dispatch = useAppDispatch();

  return (
    <button
      onClick={() => {
        dispatch(toggleCreateTodoDrawerOpen());
      }}
      className="absolute z-20 w-full h-full "
    ></button>
  );
}
