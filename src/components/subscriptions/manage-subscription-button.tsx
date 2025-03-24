import React from "react";
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setSubscriptionModel } from "@/lib/redux/features/subscription";

export default function ManageUserSubscriptionButton() {
  const dispatch = useAppDispatch();
  return (
    <Button
      onClick={() => {
        dispatch(setSubscriptionModel(true));
      }}
      variant={"special"}
      size={"special"}
    >
      Manage subscription{" "}
    </Button>
  );
}
