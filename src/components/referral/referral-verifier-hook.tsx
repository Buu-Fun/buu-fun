"use client";
import { THomePage } from "@/app/(dashboard)/page";
import { linkReferralMutation } from "@/lib/react-query/user";
import { useAuthentication } from "@/providers/account.context";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import useUserCredits from "@/hooks/use-credits";
import { useDisclosure } from "@mantine/hooks";
import ReferralHeaderIcon from "@/assets/icons/refferal-header-icon";
import { Button } from "../ui/button";

type TReferralVerifierHook = {
  search: {
    [key: string]: string | string[] | undefined;
  };
};

export default function ReferralVerifierHook({
  search,
}: TReferralVerifierHook) {
  const referralCode = search["ref"];
  const [open, setStates] = useDisclosure(false);
  const router = useRouter();

  const { identityToken, loading, isAuthenticated, login } =
    useAuthentication();

  const {
    mutate: linkCookie,
    isPending,
    data,
  } = useMutation({
    mutationFn: linkReferralMutation,
    onMutate() {
      toast.loading(`Checking referral code`);
    },
    onSuccess(data, variables, context) {
      toast.dismiss();
      toast.success("hello");
    },
    onError(error, variables, context) {
      toast.dismiss();
      toast.error("Referral");
    },
  });

  useEffect(() => {
    if (!referralCode || typeof referralCode !== "string") return;
    if (!loading && !isAuthenticated) {
      login();
    }
    if (!loading && isAuthenticated && !isPending && identityToken) {
      linkCookie({
        accessToken: identityToken,
        code: referralCode,
      });
    }
  }, [loading, isAuthenticated, identityToken]);

  return (
    <Dialog  open={open} onOpenChange={setStates.toggle}>
      <DialogContent className="rounded-[20px]  lg:rounded-[20px] max-w-sm bg-referral-modal">
        <div className="flex flex-col items-center py-2 justify-center">
          <div className="w-10 h-10 flex items-center justify-center ">
            <ReferralHeaderIcon />
          </div>
          <div className="flex items-center justify-center flex-col gap-2 pb-6 pt-4">
            <h1 className="text-2xl text-center font-medium tracking-tight">
              You&apos;ve been referred <br />
              by
            </h1>
            <p className="text-center text-sm font-medium">
              Enjoy 20% off all platform services
            </p>
          </div>
          <Button className="w-[90%]" size={"special"}>
            Continue to Platform
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
