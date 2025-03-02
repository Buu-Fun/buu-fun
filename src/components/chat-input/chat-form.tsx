"use client";
import { ArrowUp, ImageIcon } from "@/assets/icons";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { queryClient } from "@/lib/react-query/query-client";
import { generateSubThreads } from "@/lib/react-query/threads";
import {
  clearInput,
  pushNewSubThreads,
  setNewThreadId,
} from "@/lib/redux/features/chat";
import { isSubThreadGenerating } from "@/lib/redux/selectors/chat";
import { cn, isOverAllRequestLimitReached } from "@/lib/utils";
import { useAuthentication } from "@/providers/account.context";
import { useWallet } from "@/providers/wallet.context";
import { useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { TBottomBarContainer } from "./bottom-bar-container";
import ChatTextArea from "./chat-text-area";

export default function ChatForm({ action }: TBottomBarContainer) {
  const { getAccessToken } = useAuthentication();
  const { address, openConnectionModal } = useWallet();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const prompt = useAppSelector((state) => state.chat.inputQuery);
  const style = useAppSelector((state) => state.settings.ThreeDStyle);
  const isChatPending = useAppSelector(isSubThreadGenerating);
  // Mutation for creating a new chat
  const { mutate: createNewChat, isPending: isCreatePending } = useMutation({
    mutationFn: generateSubThreads,
    onSuccess(data) {
      dispatch(setNewThreadId(data.threadId));
      router.push(`/generation/${data.threadId}`);
    },
    onError(error) {
      toast.error("Our servers are busy, Please try again");
    },
  });

  // mutation for existing chat
  const { mutate: createExistingChat, isPending: isExistingChatPending } =
    useMutation({
      mutationFn: generateSubThreads,
      onSuccess(data) {
        toast.loading("Generating new model...", { duration: 8000 });
        dispatch(pushNewSubThreads(data));
        dispatch(clearInput());
        queryClient.invalidateQueries({
          queryKey: [data.threadId, "get-sub-threads"],
        });
      },
      onError(error) {
        toast.error("Our servers are busy, Please try again");
        console.log(error);
      },
    });

  const isChatLoading =
    isCreatePending ||
    isExistingChatPending ||
    (action !== "new_chat" && isChatPending.isJustStarted) ||
    isOverAllRequestLimitReached(isChatPending.totalRequest);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Don't submit if there's no prompt
    if (!prompt || prompt.trim() === "") {
      return;
    }

    if (isChatLoading) {
      if (isOverAllRequestLimitReached(isChatPending.totalRequest)) {
        return toast.error(
          "Whoa, you're on fire 🔥. You've hit the limit of 4 creations."
        );
      }
      return toast.error("Hold on!, Still generating your model...");
    }
    if (!address) {
      openConnectionModal();
      return;
    }

    // Handle based on action type
    if (action === "new_chat") {
      createNewChat({
        accessToken: getAccessToken(address) ?? "",
        prompt: prompt,
        style: style,
      });
    } else if (typeof action !== "string") {
      createExistingChat({
        accessToken: getAccessToken(address) ?? "",
        prompt,
        style,
        threadId: action.threadId,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex-col gap-1 flex items-start w-full"
    >
      <ChatTextArea />
      <div className="w-full  flex justify-between">
        <ImageIcon />
        <button
          disabled={isChatLoading}
          type="submit"
          className={cn("bg-[#737984]  rounded-full border p-0.5", {
            "animate-pulse flex items-center justify-center cursor-not-allowed":
              isChatLoading,
          })}
        >
          {isChatLoading ? (
            <Loader2 className="w-5 h-5 flex items-center  animate-spin justify-center   text-black" />
          ) : (
            <ArrowUp className="w-5 h-5 " />
          )}
          <span className="sr-only"></span>
        </button>
      </div>
    </form>
  );
}
