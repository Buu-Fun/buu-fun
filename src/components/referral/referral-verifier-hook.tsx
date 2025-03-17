"use client";
import ReferralHeaderIcon from "@/assets/icons/refferal-header-icon";
import { useAuthentication } from "@/providers/account.context";
import { useDisclosure } from "@mantine/hooks";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "../ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { linkReferralMutation } from "@/lib/react-query/referrals";

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
  const [referee, setReferee] = useState("");
  const router = useRouter();
  const hasProcessedRef = useRef(false);

  const { identityToken, loading, isAuthenticated, login, isPrivyOpen } =
    useAuthentication();

  const { mutate: linkCookie } = useMutation({
    mutationFn: linkReferralMutation,
    onMutate() {
      toast.loading(`Checking referral code`);
    },
    onSuccess(data) {
      toast.dismiss();
      console.log(data);
      setReferee(data?.referee?._id ?? "");
      setStates.open();
      toast.success("Successfully added Referrals");
    },
    onError(error) {
      toast.dismiss();
      toast.error(error.message);
    },
    onSettled() {
      setTimeout(() => {
        toast.dismiss();
      }, 3000);
    },
  });

  // First effect: Handle authentication if needed
  useEffect(() => {
    if (!referralCode || typeof referralCode !== "string") return;

    if (!loading && !isAuthenticated && !isPrivyOpen) {
      login();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, isAuthenticated, referralCode]);

  // Second effect: Process referral code once authenticated
  useEffect(() => {
    if (!referralCode || typeof referralCode !== "string") return;
    if (
      loading ||
      !isAuthenticated ||
      hasProcessedRef.current ||
      !identityToken
    )
      return;

    // Mark as processed to prevent repeat calls
    hasProcessedRef.current = true;

    // Process the referral code
    linkCookie({
      accessToken: identityToken,
      code: referralCode,
    });
  }, [loading, isAuthenticated, identityToken, referralCode, linkCookie]);

  return (
    <Dialog open={open} onOpenChange={setStates.toggle}>
      <DialogContent className="rounded-[20px]  lg:rounded-[20px] max-w-sm bg-referral-modal">
        <DialogHeader>
          <DialogTitle className="sr-only">
            You&apos;ve been referred <br />
            {referee ? `by ${referee}` : null}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Enjoy 20% off all platform services
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center py-2 justify-center">
          <div className="w-10 h-10 flex items-center justify-center ">
            <ReferralHeaderIcon />
          </div>
          <div className="flex items-center justify-center flex-col gap-2 pb-6 pt-4">
            <h1 className="text-2xl text-center font-medium tracking-tight">
              You&apos;ve been referred <br />
              {referee ? `by ${referee}` : null}
            </h1>
            <p className="text-center text-sm font-medium">
              Enjoy 20% off all platform services
            </p>
          </div>
          <DialogClose asChild>
            <Button
              onClick={() => {
                router.push("/");
              }}
              className="w-[90%]"
              size={"special"}
            >
              Continue to Platform
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
