import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import SubscriptionContent from "./subscription-content";

export default function SubscriptionDialog() {
  return (
    <Dialog defaultOpen>
      <DialogTrigger asChild>
        <Button variant={"special"} size={"special"}>
          Manage subscription{" "}
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-[20px] scrollbar-w-2 scrollbar-track-orange-lighter scrollbar-thumb-orange scrollbar-thumb-rounded overflow-scroll pt-11 pb-4 lg:rounded-[20px] bg-subscription-dialog max-w-screen-md">
        <DialogHeader className="flex items-center justify-center">
          <DialogTitle className="text-2xl">Select a Plan</DialogTitle>
          <DialogDescription className="text-sm">
            Get access to more generation hours and priority queue
          </DialogDescription>
        </DialogHeader>
        <SubscriptionContent />
      </DialogContent>
    </Dialog>
  );
}
