import { useAppDispatch, useAppSelector, useAppStore } from "@/hooks/redux";
import { useUserSubscription } from "@/hooks/use-credits";
import { HistoryIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import ShareIcon from "@/assets/icons/share-icon";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { setSubscriptionModel } from "@/lib/redux/features/subscription";
import { TypedAppError } from "@/class/error";
import { useAuthentication } from "@/providers/account.context";
import ShareAndSaveIcon from "@/assets/icons/share-and-save";
import CopyIcon from "@/assets/icons/copy-icon";
import { cn } from "@/lib/utils";
import { createNewBoardsMutation, updateBoardsVisibility } from "@/lib/react-query/boards";
import CopyBoardLink from "./copy-board-link";

export default function ShareableBoardsButton() {
  const path = usePathname();
  const threadId = useAppSelector((state) => state.chat.threads.threadId);
  const subThreads = useAppSelector((state) => state.chat.subThreads);
  const dispatch = useAppDispatch();
  const { identityToken: accessToken, login } = useAuthentication();
  const { data: userSubscription } = useUserSubscription();

  const {
    mutate: createNewBoard,
    isPending: isCreateNewBoardPending,
    data,
  } = useMutation({
    mutationFn: createNewBoardsMutation,
    onMutate(data) {
      toast.loading("Adding to boards...", {
        duration: 3000,
      });
    },
    onError(error) {
      console.log(error);
      toast.dismiss();
      if (error instanceof TypedAppError) {
        console.log("TYPE ERROR", error.code);
        switch (error.code) {
          case "FAILED_TO_CREATE_SHAREABLE_BOARD": {
            toast.error("Failed to create board");
            return;
          }
          case "UNKNOWN_ERROR": {
            toast.error(error.message);
            return;
          }
          default: {
            toast.error("Something went wrong");
            return;
          }
        }
      }
      toast.error("Something went wrong, Please try again.");
    },
  });

  const {
    mutate: mutateBoardVisibility,
    isPending: isUpdatingBoardVisibility,
    data: updatedBoardData,
  } = useMutation({
    mutationFn: updateBoardsVisibility,
    onMutate(data) {
      toast.loading("Adding to boards...");
    },
    onSuccess(data, variables, context) {
      const link = `https://buu.fun/boards/${data?._id}`;
      window.navigator.clipboard.writeText(link);
      toast.success("Successfully copied to your clipboard");
    },
    onError(error) {
      toast.dismiss();
      console.log(error);
      if (error instanceof TypedAppError) {
        switch (error.code) {
          case "CREDIT_NOT_FOUND": {
            dispatch(setSubscriptionModel(true));
            toast.error("Insufficient credits");
            return;
          }
          default: {
            toast.error("Something went wrong");
            return;
          }
        }
      }
      toast.error("Something went wrong, Please try again.");
    },
    onSettled() {
      toast.dismiss();
    },
  });

  const isGenerationPage = path.startsWith("/app/generation");

  if (!isGenerationPage) {
    return null;
  }

  function handleConfirm() {
    if (!accessToken) {
      login();
      return;
    }
    createNewBoard({
      accessToken,
      threadId,
    });
  }

  function handleBoardsVisibility() {
    if (!accessToken) {
      login();
      return;
    }

    mutateBoardVisibility({
      accessToken,
      boardId: data?._id ?? "",
      isPublic: !data?.isPublic,
    });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"ghost"}
          className="px-3 flex items-center hover:bg-buu-button justify-center gap-1 text-base h-[40px] group  py-2  rounded-[10px]"
        >
          <div className="w-4 h-4  ">
            <ShareIcon />
          </div>
          <span className="hidden lg:block">Share the thread</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-referral-modal px-6 py-8">
        <DialogHeader className="flex items-center justify-center">
          <DialogTitle>Share Board</DialogTitle>
          <DialogDescription className="text-center">
            People with link will be able to view conversations and ideas in
            this board. Changes you make after creating the link will remain
            private.
          </DialogDescription>
        </DialogHeader>

        <div
          className={cn("hidden", {
            block: data?._id,
          })}
        >
          <CopyBoardLink boardId={data?._id ?? ""} />
        </div>
        <div className="flex items-center justify-center gap-3">
          <Button
            variant={"muted"}
            size={"buu"}
            className={cn("bg-buu-button-muted", {
              hidden: !data?._id,
            })}
            onClick={() => {
              handleBoardsVisibility();
            }}
          >
            {data?.isPublic ? "Stop Share" : "Make public"}
          </Button>
          <Button
            disabled={!!data?._id}
            // variant={""}
            size={"buu"}
            // className="bg-buu-button-muted"
            onClick={() => {
              handleConfirm();
            }}
          >
            <ShareAndSaveIcon />
            {!isCreateNewBoardPending ? "add to boards" : "adding..."}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
